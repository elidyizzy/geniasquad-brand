/**
 * Gera public/assets/brand-kit.zip com todos os assets da marca.
 * Roda automaticamente no prebuild (Vercel) e pode ser chamado manualmente.
 *
 * Uso: node scripts/build-kit.js
 */

const fs   = require('fs');
const path = require('path');
const zlib = require('zlib');

const PUBLIC   = path.join(__dirname, '..', 'public');
const ASSETS   = path.join(PUBLIC, 'assets');
const OUT_ZIP  = path.join(ASSETS, 'brand-kit.zip');

// Implementação de zip puro Node.js (sem dependências externas)
// Usa o módulo nativo 'zlib' para deflate e constrói o arquivo ZIP manualmente.

function uint32LE(n) {
  const b = Buffer.alloc(4);
  b.writeUInt32LE(n, 0);
  return b;
}

function uint16LE(n) {
  const b = Buffer.alloc(2);
  b.writeUInt16LE(n, 0);
  return b;
}

function crc32(buf) {
  const table = (() => {
    const t = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[i] = c;
    }
    return t;
  })();
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function collectFiles(dir, baseDir = dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('.') || name === 'brand-kit.zip') continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      collectFiles(full, baseDir, files);
    } else {
      files.push({ full, rel: path.relative(baseDir, full).replace(/\\/g, '/') });
    }
  }
  return files;
}

async function buildZip() {
  // Coletar assets
  const logoFiles = collectFiles(path.join(ASSETS, 'logos'), ASSETS);
  const fontFiles = collectFiles(path.join(ASSETS, 'fonts'), ASSETS);
  const brandMd   = path.join(__dirname, '..', '..', '..', 'geniasquad-creators', 'designsystem', 'brand', 'BRAND.md');

  const entries = [...logoFiles, ...fontFiles];

  // Incluir BRAND.md se existir
  if (fs.existsSync(brandMd)) {
    entries.push({ full: brandMd, rel: 'BRAND.md' });
  }

  // Incluir CSS de tokens inline
  const cssContent = Buffer.from(`:root {
  /* GEN.IA SQUAD — Design Tokens v1.0 */
  --gs-lime:         #d1ff00;
  --gs-black:        #050505;
  --gs-surface:      #0f0f11;
  --gs-surface-alt:  #23241d;
  --gs-cream:        #f5f4e7;
  --gs-warm-white:   #fdfbf2;
  --gs-blue:         #0099ff;
  --gs-flare:        #d96a3f;
  --gs-warning:      #f5b340;
  --gs-error:        #ef4444;
  --gs-meta:         #b0b0b0;
  --gs-border:       rgba(156, 156, 156, 0.12);
  --gs-border-lime:  rgba(209, 255, 0, 0.2);
  --gs-lime-glow:    rgba(209, 255, 0, 0.04);
  --font-display:    'Gilroy', 'Arial Black', sans-serif;
  --font-sans:       'Geist', system-ui, sans-serif;
  --font-mono:       'Geist Mono', ui-monospace, monospace;
  --ease-out:        cubic-bezier(0.25, 0.1, 0.25, 1);
}
`, 'utf8');

  entries.push({ full: null, rel: 'tokens.css', content: cssContent });

  // Construir ZIP
  const localHeaders  = [];
  const centralDirs   = [];
  let offset = 0;
  const chunks = [];

  for (const entry of entries) {
    const nameBytes = Buffer.from('geniasquad-brand/' + entry.rel, 'utf8');
    const data      = entry.content ?? fs.readFileSync(entry.full);
    const compressed = zlib.deflateRawSync(data, { level: 6 });
    const crc       = crc32(data);
    const now       = new Date();
    const dosDate   = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    const dosTime   = (now.getHours() << 11) | (now.getMinutes() << 5) | Math.floor(now.getSeconds() / 2);

    const local = Buffer.concat([
      Buffer.from([0x50,0x4B,0x03,0x04]),
      uint16LE(20),               // version needed
      uint16LE(0),                // flags
      uint16LE(8),                // deflate
      uint16LE(dosTime),
      uint16LE(dosDate),
      uint32LE(crc),
      uint32LE(compressed.length),
      uint32LE(data.length),
      uint16LE(nameBytes.length),
      uint16LE(0),                // extra len
      nameBytes,
      compressed
    ]);

    centralDirs.push(Buffer.concat([
      Buffer.from([0x50,0x4B,0x01,0x02]),
      uint16LE(20),               // version made
      uint16LE(20),               // version needed
      uint16LE(0),
      uint16LE(8),
      uint16LE(dosTime),
      uint16LE(dosDate),
      uint32LE(crc),
      uint32LE(compressed.length),
      uint32LE(data.length),
      uint16LE(nameBytes.length),
      uint16LE(0),uint16LE(0),uint16LE(0),uint16LE(0),
      uint32LE(0),
      uint32LE(offset),
      nameBytes
    ]));

    chunks.push(local);
    offset += local.length;
  }

  const central      = Buffer.concat(centralDirs);
  const centralSize  = central.length;
  const centralStart = offset;

  const eocd = Buffer.concat([
    Buffer.from([0x50,0x4B,0x05,0x06]),
    uint16LE(0),uint16LE(0),
    uint16LE(entries.length),
    uint16LE(entries.length),
    uint32LE(centralSize),
    uint32LE(centralStart),
    uint16LE(0)
  ]);

  const zip = Buffer.concat([...chunks, central, eocd]);
  fs.writeFileSync(OUT_ZIP, zip);

  const kb = (zip.length / 1024).toFixed(1);
  console.log(`✓ brand-kit.zip gerado — ${entries.length} arquivos, ${kb} KB`);
  console.log(`  → ${OUT_ZIP}`);
}

buildZip().catch(err => { console.error('Erro ao gerar brand-kit.zip:', err); process.exit(1); });
