---
version: "1.0"
name: "GEN.IA SQUAD"
description: "Brutalist-technical dark cockpit system. Neon lime signature, warm cream typography on near-black canvas, Gilroy ExtraBold display headlines, Geist body, Geist Mono HUD overlays, hairline borders, zero-radius hero, surface-tier elevation. Brazilian AI squad orchestration system positioned as the antidote to AI-that-replaces-you."
defaultMode: "dark"
supportsDark: true
archetype: "Brutalist-Technical · Dark Cockpit · Neon Signature"
chips:
  - "Lime #D1FF00"
  - "Gilroy ExtraBold"
  - "Radius 0px"
  - "HUD bracket overlays"

consumer_contract:
  standalone: true
  goal: "Generate GEN.IA SQUAD-style interfaces from this file alone."
  priority_order:
    - "Use semantic tokens first: colors, dark, typography, spacing, rounded, shadows, motion."
    - "Apply component recipes exactly before inventing variants."
    - "Use prose sections for judgment when a token is ambiguous."
    - "Respect Do's and Don'ts over generic framework defaults."
  mode_rule: "Dark mode is the primary product context — most screens are dark. Light mode is reserved for docs/blog and light-tenant overlays. The same lime signature and component library applies in both modes; only the semantic token bindings flip."
  font_rule: "Use Gilroy ExtraBold for hero / display moments; Geist for body and UI; Geist Mono for HUD labels, eyebrows, and bracket annotations. Without Gilroy, fall back to Geist Bold — display loses identity but never blocks shipment."
  asset_rule: "Brand requires the GEN.IA SQUAD logo (white on dark, black on light, lime, negative variants). Do not require photographic imagery — grid, dot, circuit, neural-network patterns only."
  accessibility_rule: "Ship WCAG AA contrast, visible lime focus rings, keyboard-operable controls, no body text below 14px, and respect reduced-motion preferences."

colors:
  # Semantic UI color slots (DARK MODE default — the product context)
  primary: "#D1FF00"             # neon lime — signature, focus ring, glow, CTA
  primary-foreground: "#050505"  # near-black fg on lime
  secondary: "#1D1F19"           # ink — body text on light
  secondary-foreground: "#F5F4E7"
  tertiary: "#3D3D3D"            # charcoal — structural neutral
  neutral: "#9C9C9C"             # fg-meta — metadata, HUD labels
  background: "#050505"          # near-black canvas (dark mode default)
  foreground: "#F5F4E7"          # warm cream type on dark
  surface: "#050505"
  surface-foreground: "#F5F4E7"
  card: "#0F0F11"                # elevated dark surface
  card-foreground: "#F5F4E7"
  popover: "#1A1A1C"
  popover-foreground: "#F5F4E7"
  muted: "#1A1A1C"
  muted-foreground: "#9C9C9C"
  accent: "rgba(209, 255, 0, 0.10)"  # lime-10 alpha — subtle backdrop
  accent-foreground: "#D1FF00"
  destructive: "#D96A3F"         # flare — warm orange, NOT medical red
  destructive-foreground: "#FDFBF2"
  border: "rgba(156, 156, 156, 0.15)"   # 1px hairline — primary separator
  border-strong: "rgba(156, 156, 156, 0.45)"
  border-subtle: "rgba(156, 156, 156, 0.10)"
  border-lime: "rgba(209, 255, 0, 0.25)"
  input: "rgba(156, 156, 156, 0.15)"
  ring: "rgba(209, 255, 0, 0.50)"  # lime focus ring at 50% alpha
  success: "#10B981"
  warning: "#F5B340"
  info: "#0099FF"
  error: "#EF4444"
  chart-1: "#D1FF00"
  chart-2: "#0099FF"
  chart-3: "#D96A3F"
  chart-4: "#F5F4E7"
  chart-5: "#9C9C9C"

  # Surface ladder (dark cockpit tiers)
  surface-container-low: "#0A0A0C"     # sunk surface
  surface-container: "#111113"          # default panel
  surface-container-high: "#151518"     # hover surface
  surface-container-highest: "#1C1E19"  # alt panel (lime-tinted)
  surface-bright: "#D1FF00"             # lime editorial panel
  surface-dim: "#000000"                # void anchor
  surface-inverse: "#F5F4E7"            # cream — closing inverse section
  surface-inverse-foreground: "#050505"
  surface-console: "#12130F"            # terminal panel (lime-tinted)
  surface-overlay: "#1A1A1C"            # popover / dialog
  surface-deep: "#0A0A0C"
  surface-panel: "#111113"
  surface-dark: "#0F0F11"
  surface-alt: "#1C1E19"
  surface-hover: "#151518"

  # Brand swatch aliases
  lime: "#D1FF00"
  lime-deep: "#A8CC00"
  void: "#000000"
  ink: "#1D1F19"
  ink-soft: "#3D3D3D"
  ink-muted: "#5E5D59"
  cream: "#F5F4E7"
  cream-alt: "#F5F4E7"
  cream-ui: "#FDFBF2"
  warm-white: "#FDFBF2"
  fg-meta: "#9C9C9C"
  fg-muted: "#B0B0B0"

  # Neutral ramp
  gray-charcoal: "#3D3D3D"
  gray-dim: "#696969"
  gray-muted: "#999999"
  gray-silver: "#B0B0B0"
  gray-light: "#C2C2C2"

  # Secondary accents — sparing
  blue: "#0099FF"                # informational / data viz
  flare: "#D96A3F"               # warm orange — destructive

  # Status ramp
  status-success: "#10B981"
  status-warning: "#F5B340"
  status-error: "#EF4444"
  status-info: "#0099FF"

  # Lime alpha scale (15 pre-computed levels)
  lime-2: "rgba(209, 255, 0, 0.02)"
  lime-3: "rgba(209, 255, 0, 0.03)"
  lime-4: "rgba(209, 255, 0, 0.04)"
  lime-5: "rgba(209, 255, 0, 0.05)"
  lime-6: "rgba(209, 255, 0, 0.06)"
  lime-8: "rgba(209, 255, 0, 0.08)"
  lime-10: "rgba(209, 255, 0, 0.10)"
  lime-12: "rgba(209, 255, 0, 0.12)"
  lime-15: "rgba(209, 255, 0, 0.15)"
  lime-20: "rgba(209, 255, 0, 0.20)"
  lime-25: "rgba(209, 255, 0, 0.25)"
  lime-40: "rgba(209, 255, 0, 0.40)"
  lime-50: "rgba(209, 255, 0, 0.50)"
  lime-75: "rgba(209, 255, 0, 0.75)"
  lime-90: "rgba(209, 255, 0, 0.90)"

  # Lime glow
  lime-glow: "rgba(209, 255, 0, 0.25)"
  lime-glow-soft: "rgba(209, 255, 0, 0.10)"

dark:
  background: "#050505"
  foreground: "#F5F4E7"
  card: "#0F0F11"
  card-foreground: "#F5F4E7"
  popover: "#1A1A1C"
  popover-foreground: "#F5F4E7"
  primary: "#D1FF00"
  primary-foreground: "#050505"
  secondary: "#111113"
  secondary-foreground: "#F5F4E7"
  muted: "#1A1A1C"
  muted-foreground: "#9C9C9C"
  accent: "rgba(209, 255, 0, 0.10)"
  accent-foreground: "#D1FF00"
  destructive: "#D96A3F"
  destructive-foreground: "#FDFBF2"
  border: "rgba(156, 156, 156, 0.15)"
  input: "rgba(156, 156, 156, 0.15)"
  ring: "rgba(209, 255, 0, 0.50)"
  surface: "#050505"
  surface-foreground: "#F5F4E7"
  surface-container-low: "#0A0A0C"
  surface-container: "#111113"
  surface-container-high: "#151518"
  surface-container-highest: "#1C1E19"
  surface-bright: "#D1FF00"
  surface-dim: "#000000"
  surface-inverse: "#F5F4E7"
  surface-inverse-foreground: "#050505"
  elevation-raised: "none"
  elevation-floating: "none"
  elevation-overlay: "0 16px 40px rgba(0, 0, 0, 0.40)"
  elevation-modal: "0 24px 64px rgba(0, 0, 0, 0.55)"
  elevation-glow: "0 0 24px rgba(209, 255, 0, 0.25)"
  ink: "#F5F4E7"
  ink-soft: "#B0B0B0"
  ink-muted: "#9C9C9C"

light:
  background: "#F5F4E7"
  foreground: "#1D1F19"
  card: "#FFFFFF"
  card-foreground: "#1D1F19"
  primary: "#D1FF00"
  primary-foreground: "#1D1F19"
  secondary: "#F5F4E7"
  secondary-foreground: "#1D1F19"
  muted: "#FDFBF2"
  muted-foreground: "#696969"
  accent: "rgba(209, 255, 0, 0.15)"
  accent-foreground: "#3D3D3D"
  destructive: "#D96A3F"
  destructive-foreground: "#FDFBF2"
  border: "rgba(156, 156, 156, 0.24)"
  input: "rgba(0, 0, 0, 0.06)"
  ring: "rgba(209, 255, 0, 0.50)"
  surface: "#F5F4E7"
  surface-inverse: "#050505"
  surface-inverse-foreground: "#F5F4E7"

fonts:
  display: "'Gilroy', 'Arial Black', system-ui, sans-serif"
  body: "'Geist', system-ui, sans-serif"
  eyebrow: "'Geist Mono', 'Roboto Mono', ui-monospace, monospace"
  mono: "'Geist Mono', 'Roboto Mono', ui-monospace, monospace"
  sans: "'Geist', system-ui, sans-serif"
  serif: "'Geist', system-ui, sans-serif"

typography:
  hero:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 96px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.04em"
    textTransform: "uppercase"
  display:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 64px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.04em"
    textTransform: "uppercase"
  display-2:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  heading:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  title:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 32px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h4:
    fontFamily: "Gilroy, Arial Black, sans-serif"
    fontSize: 20px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h5:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.15em"
    textTransform: "uppercase"
  eyebrow:
    fontFamily: "Geist Mono, monospace"
    fontSize: 10px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.20em"
    textTransform: "uppercase"
  bracket:
    fontFamily: "Geist Mono, monospace"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "0.12em"
    textTransform: "uppercase"
  mono:
    fontFamily: "Geist Mono, Roboto Mono, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  micro:
    fontFamily: "Geist Mono, monospace"
    fontSize: 9px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.14em"
    textTransform: "uppercase"

spacing:
  "0": "0px"
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "14": "56px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
  section-lg: "128px"
  site-margin: "max(1.5rem, calc((100% - 1180px) / 2 + 1.5rem))"
  site-gutter: "24px"
  container-max: "1180px"
  reading-column: "640px"
  inline-media: "880px"

rounded:
  none: "0px"
  sm: "0px"
  md: "0px"
  lg: "0px"
  xl: "0px"
  "2xl": "0px"
  full: "0px"
  button: "0px"
  card: "0px"
  input: "0px"

shadows:
  none: "none"
  hairline: "0 0 0 1px rgba(156, 156, 156, 0.15)"
  hairline-strong: "0 0 0 1px rgba(156, 156, 156, 0.45)"
  glow: "0 0 24px rgba(209, 255, 0, 0.25)"
  glow-soft: "0 0 16px rgba(209, 255, 0, 0.10)"
  glow-strong: "0 0 32px rgba(209, 255, 0, 0.40)"
  overlay: "0 16px 40px rgba(0, 0, 0, 0.40)"
  modal: "0 24px 64px rgba(0, 0, 0, 0.55)"
  inner: "inset 0 1px 0 rgba(245, 244, 231, 0.04)"

motion:
  duration-instant: "0ms"
  duration-ultra-fast: "50ms"
  duration-faster: "100ms"
  duration-fast: "150ms"
  duration-normal: "200ms"
  duration-gentle: "350ms"
  duration-slow: "500ms"
  duration-slower: "700ms"
  duration-ultra-slow: "1000ms"
  ease-linear: "linear"
  ease-in: "cubic-bezier(0.4, 0, 1, 1)"
  ease-out: "cubic-bezier(0, 0, 0.2, 1)"
  ease-in-out: "cubic-bezier(0.4, 0, 0.2, 1)"
  ease-easy-ease: "cubic-bezier(0.33, 0, 0.67, 1)"
  press: "none"
  hover-opacity: "1"
  cursor-blink-duration: "1000ms"

elevation:
  flat: "none"
  raised: "none"
  floating: "none"
  overlay: "0 16px 40px rgba(0, 0, 0, 0.40)"
  modal: "0 24px 64px rgba(0, 0, 0, 0.55)"
  glow: "0 0 24px rgba(209, 255, 0, 0.25)"

components:
  button-primary:
    backgroundColor: "#D1FF00"
    textColor: "#050505"
    borderColor: "#D1FF00"
    typography: "Geist Mono 12px/1.3 600 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "12px 20px"
    height: "44px"
    shadow: "none"
  button-primary-hover:
    backgroundColor: "#D1FF00"
    textColor: "#050505"
    borderColor: "#D1FF00"
    shadow: "0 0 24px rgba(209, 255, 0, 0.25)"
  button-primary-disabled:
    backgroundColor: "#3D3D3D"
    textColor: "#696969"
    borderColor: "#3D3D3D"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.45)"
    typography: "Geist Mono 12px/1.3 600 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "11px 19px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "rgba(209, 255, 0, 0.10)"
    textColor: "#D1FF00"
    borderColor: "#D1FF00"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "#F5F4E7"
    borderColor: "transparent"
    typography: "Geist Mono 12px/1.3 600 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "8px 16px"
  button-destructive:
    backgroundColor: "#D96A3F"
    textColor: "#FDFBF2"
    borderColor: "#D96A3F"
    typography: "Geist Mono 12px/1.3 600 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "12px 20px"
  cta-button:
    backgroundColor: "#D1FF00"
    textColor: "#050505"
    borderColor: "#D1FF00"
    typography: "Geist Mono 14px/1.3 700 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "16px 24px"
    height: "52px"
    shadow: "0 0 24px rgba(209, 255, 0, 0.25)"
  site-cta:
    backgroundColor: "#D1FF00"
    textColor: "#050505"
    borderColor: "#D1FF00"
    typography: "Geist Mono 14px/1.3 700 +0.10em UPPERCASE"
    rounded: "0px"
    padding: "20px 32px"
    height: "60px"
    shadow: "0 0 24px rgba(209, 255, 0, 0.25)"
  card:
    backgroundColor: "#0F0F11"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.15)"
    rounded: "0px"
    padding: "24px"
    shadow: "none"
  card-hover:
    backgroundColor: "#151518"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.24)"
    rounded: "0px"
    shadow: "none"
  input-text:
    backgroundColor: "#0F0F11"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.15)"
    typography: "Geist 16px/1.65 400"
    rounded: "0px"
    padding: "12px 14px"
  input-text-focus:
    backgroundColor: "#0F0F11"
    textColor: "#F5F4E7"
    borderColor: "#D1FF00"
    shadow: "0 0 0 3px rgba(209, 255, 0, 0.25)"
  input-text-invalid:
    backgroundColor: "#0F0F11"
    textColor: "#D96A3F"
    borderColor: "#D96A3F"
  badge-default:
    backgroundColor: "#111113"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.15)"
    typography: "Geist Mono 10px/1.0 500 +0.12em UPPERCASE"
    rounded: "0px"
    padding: "4px 8px"
  badge-lime:
    backgroundColor: "#D1FF00"
    textColor: "#050505"
    borderColor: "#D1FF00"
    typography: "Geist Mono 10px/1.0 500 +0.12em UPPERCASE"
    rounded: "0px"
    padding: "4px 8px"
  nav-header:
    backgroundColor: "rgba(5, 5, 5, 0.85)"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.15)"
    typography: "Geist Mono 12px/1.3 500 +0.10em UPPERCASE"
    height: "64px"
    backdropFilter: "blur(20px)"
  inverse-section:
    backgroundColor: "#F5F4E7"
    textColor: "#1D1F19"
    rounded: "0px"
    padding: "96px 64px"
  brutalist-hero:
    backgroundColor: "#050505"
    textColor: "#F5F4E7"
    typography: "Gilroy 96px/1.0 800 -0.04em UPPERCASE"
    rounded: "0px"
    padding: "128px 64px 96px"
  hud-eyebrow:
    backgroundColor: "transparent"
    textColor: "#D1FF00"
    typography: "Geist Mono 10px/1.2 600 +0.20em UPPERCASE"
    rounded: "0px"
    padding: "0px"
  squad-card:
    backgroundColor: "#12130F"
    textColor: "#F5F4E7"
    borderColor: "rgba(156, 156, 156, 0.15)"
    typography: "Geist Mono 14px/1.5 400"
    rounded: "0px"
    padding: "16px"
  agent-tag:
    backgroundColor: "rgba(209, 255, 0, 0.08)"
    textColor: "#D1FF00"
    borderColor: "rgba(209, 255, 0, 0.20)"
    typography: "Geist Mono 10px/1.0 600 +0.12em UPPERCASE"
    rounded: "0px"
    padding: "4px 10px"

preview_tokens:
  button_primary_bg: "#D1FF00"
  button_primary_text: "#050505"
  button_primary_border: "#D1FF00"
  button_secondary_bg: "transparent"
  button_secondary_text: "#F5F4E7"
  button_secondary_border: "rgba(156, 156, 156, 0.45)"
  button_tertiary_text: "#F5F4E7"
  surface_bg: "#050505"
  card_bg: "#0F0F11"
  text: "#F5F4E7"
  text_muted: "#9C9C9C"
  border: "rgba(156, 156, 156, 0.15)"
  accent: "#D1FF00"
  button_radius: "0px"
  card_radius: "0px"
  input_radius: "0px"

brand_primitives:
  case-eyebrow: "uppercase"
  case-btn: "uppercase"
  case-nav-brand: "uppercase"
  case-section-heading: "uppercase"
  case-display: "uppercase"
  motion-press: "none"
  motion-hover-opacity: "1"
  btn-height: "44px"
  btn-padx: "20px"
  btn-pady: "12px"
  btn-shadow: "none"
  btn-shadow-hover: "0 0 24px rgba(209, 255, 0, 0.25)"
  btn-active-bg: "#D1FF00"
  btn-border-width: "1px"
  nav-cta-height: "44px"
  nav-cta-padx: "20px"
  card-pad: "24px"
  card-pad-sm: "16px"
  card-shadow: "none"
  card-shadow-hover: "none"
  card-hover-bg: "#151518"
  hairline-width: "1px"
  hairline-style: "solid"
  hairline-color: "rgba(156, 156, 156, 0.15)"
  hairline-color-strong: "rgba(156, 156, 156, 0.45)"
  nav-height: "64px"
  nav-padx: "clamp(24px, 5vw, 80px)"
  section-padx: "clamp(24px, 8vw, 80px)"
  section-pady: "96px"
  container-max: "1180px"
  reading-column: "640px"
  inline-media: "880px"
  hud-bracket-color: "#D1FF00"
  hud-eyebrow-tracking: "0.20em"
  hud-bracket-tracking: "0.12em"
  glass-blur: "20px"
  glass-blur-soft: "10px"
  modal-overlay: "rgba(61, 61, 61, 0.5)"

layers:
  base: 0
  elevated: 1
  sticky: 10
  nav: 100
  dropdown: 200
  overlay: 300
  modal: 400
  toast: 500

showcase:
  kicker: "[00] SQUADS DE AGENTES IA"
  headline: "O time de IA que trabalha por você."
  lead: "GEN.IA SQUAD constrói squads de agentes de inteligência artificial para automatizar, acelerar e potencializar operações de negócio. Não somos uma ferramenta. Somos um time."
  primary_cta: "Montar meu squad"
  secondary_cta: "Ver como funciona"
  tertiary_cta: "Documentação →"

assets:
  logo_icon:
    variants:
      - "gs-icon-lime.png — ícone G + rede neural, lime, fundos claros"
      - "gs-icon-black.png — ícone G + rede neural, preto e branco"
      - "gs-icon-black-lime.png — ícone G preto, rede neural lime"
      - "gs-icon-white.png — ícone G branco, fundos escuros"
      - "gs-icon-glow.png — ícone G com glow neon, impacto máximo"
    notes: "G com rede neural integrada — grafo de nós conectados representa IA distribuída"
  logo_wordmark:
    variants:
      - "gs-wordmark-lime.png — GEN.IA SQUAD em Gilroy ExtraBold, lime em preto"
    notes: "Sempre em Gilroy ExtraBold, ALL CAPS, letra-espacamento -0.04em"
  logo_full:
    variants:
      - "gs-logo-full-glow.png — ícone + wordmark com efeito glow, reflexo"
    notes: "Versão de máximo impacto — hero sections, splash screens"
  fonts:
    - "Gilroy-ExtraBold.otf — fonte proprietária, peso 800"
    - "Gilroy-Light.otf — fonte proprietária, peso 300"
    - "Geist — open-source, vercel.com/font"
    - "Geist Mono — open-source, vercel.com/font"
  download: "https://geniasquad-brand.vercel.app/assets/brand-kit.zip"

fidelity_notes:
  fonts_proprietary:
    - "Gilroy ExtraBold — auto-hospedada via @font-face"
  photography_not_captured: true
  intentional_gaps:
    - "Fotografia como fundo é intencionalmente ausente — padrões de grade, pontos, circuito, rede neural apenas"
    - "Sombras de elevação são intencionalmente ausentes em cards — surface tier shift + hairline border carregam profundidade"
    - "Branco puro (#FFFFFF) é intencionalmente ausente para texto — cream (#F5F4E7) carrega o calor"
    - "Vermelho médico (#EF4444) é evitado como destructive nos componentes primários — flare (#D96A3F) substitui"
    - "Emoji é intencionalmente ausente — a marca é brutalist-technical"
---

## 1. Visual Theme & Atmosphere

GEN.IA SQUAD lê como **dark cockpit com assinatura neon** — um sistema operacional brutalist-technical, não um SaaS de IA genérico. A superfície é mais próxima de um terminal HUD do que de uma landing page de marketing: canvas near-black (`#050505`), tipografia cream quente (`#F5F4E7` — papel sob lamparina, levemente analógico), e um único acento elétrico (lime neon `#D1FF00`) reservado para focus rings, ações primárias e o acento do logo da GEN.IA SQUAD.

A decisão fundamental da marca: **um acento, um canvas, uma cor de tipo — tudo mais é estrutural**. Lime é a assinatura, nunca decorativo. Bordas carregam separação, não sombras. Surface tiers carregam profundidade, não elevação. O sistema usa sua própria fiação como ornamento — prefixos bracket (`[00]`, `[GS]`, `[SQUAD]`), cursores piscando, labels mono, divisores unicode (`·`, `/`, `_`).

A linha de marca — *"O time de IA que trabalha por você."* — é o tom em uma frase: declarativa, segunda pessoa, direta, técnica. PT-BR por padrão; endereça o leitor como `você`, nunca voz passiva. Retórica grau manifesto. Anti-hype. Pro-operador.

Dark mode é o contexto *primário* do produto. A maioria das telas é escura. Light mode é reservado para docs/blog e overlays light-tenant. Ambos os modos compartilham a mesma assinatura lime e a mesma biblioteca de componentes — apenas os semantic token bindings mudam.

## 2. Color Palette & Roles

**Lime** `#D1FF00` — a assinatura. Lime neon que não pode ser substituído. Reservado para focus rings, CTAs primários, glow halos, o acento do logo da GEN.IA SQUAD, e o *único* fill não-neutro na maioria das composições. Nunca usado decorativamente. Nunca em tile. Nunca gradient-filled. O lime carrega profundidade através de sua **escala alpha pré-computada de 15 passos** (2%, 3%, 4%, 5%, 6%, 8%, 10%, 12%, 15%, 20%, 25%, 40%, 50%, 75%, 90%) — o sistema nunca escurece ou clareia o hex base.

**Cream** `#F5F4E7` — cream quente no escuro, a cor de papel canônica. Tipo foreground padrão no near-black. Levemente off-white intencionalmente: o calor previne leitura clínica.

**Ink** `#1D1F19` — near-black para tipo de corpo em superfícies claras. Um tinta levemente esverdeada e quente que pareia com cream sem parecer clínica.

**Surface tier ladder (dark cockpit):** `void` `#000000` (âncora de overlay) → `surface-deep` `#0A0A0C` (superfície afundada) → `dark` `#050505` (canvas) → `surface-panel` `#111113` (painel padrão) → `surface-dark` `#0F0F11` (card elevado) → `surface-hover` `#151518` (hover) → `surface-overlay` `#1A1A1C` (popover/dialog) → `surface-console` `#12130F` (painel terminal, tint lime sutil) → `surface-alt` `#1C1E19` (painel alt, lime-tinted). Componentes ganham peso por surface shift, nunca por sombra.

**Bordas são alpha-based, não sólidas:** `--border` é `rgba(156, 156, 156, 0.15)` (hairline 1px). `--border-strong` sobe para `0.45` para ênfase. `--border-lime` usa `rgba(209, 255, 0, 0.25)` para destaques com acento.

**Flare** `#D96A3F` — laranja-quente. Estados destrutivos e alertas críticos. Substitui "vermelho médico" — a postura da marca é técnica demais para vermelho puro.

**Blue** `#0099FF` para informacional e data viz; nunca misturado com lime no mesmo elemento de superfície.

## 3. Typography Rules

**Três faces, papéis estritos, sem exceções.**

**Gilroy ExtraBold** (`--font-display`) — OTF auto-hospedado, peso 800. Usado ALL CAPS com tracking `-0.04em` para hero, títulos de seção e o nome *GEN.IA SQUAD* em si. Um único momento display por página. Sem Gilroy, display cai para Geist Bold e perde identidade (não bloqueia shipment, mas documente a substituição).

**Geist 400–700** (`--font-sans`) — corpo, UI, labels, forms. Lê como preciso e levemente técnico. Pareia limpo com a display face sem competir. Hierarquia de peso: 400 corpo, 500 meta/nav, 600 h5/labels. Fonte variável.

**Geist Mono 400–600** (`--font-mono`) — HUD overlays, tickers de nav, bracket annotations, timestamps, código. Mono é a face de label estrutural *primária*, não uma afterthought de bloco de código.

**Escala.** Hero fluid `clamp(3rem, 8vw, 6rem)` máximo em 96px. Display-1 fixo em 64px. Display-2 máximo em 40px. Line-height 1–1.05, tracking negativo `-0.04em` a `-0.03em`. Headings: h1 40px · h2 32px · h3 24px · h4 20px (Gilroy 800). h5 muda para Geist 600 em 18px — o registro muda de display editorial para UI heading. Body: `body-lg` 18px/1.6; `body` 16px/1.65; `body-sm` 14px/1.5. Meta/HUD (Geist Mono): `label` 12px mono +0.15em; `eyebrow` 10px mono +0.20em; `bracket` 10px mono +0.12em; `micro` 9px mono +0.14em.

**Disciplina de case.** Display ALL CAPS com `-0.04em` tracking. Headings UPPERCASE. Body sentence case. Nav/labels UPPERCASE mono. Ênfase inline em `[BRACKETS]`. Eyebrows sempre pareados com prefixos bracket no registro HUD: `[00] SQUADS DE AGENTES IA`, `[GS] — FONTE ÚNICA DE VERDADE`, `[SQUAD] OPERAÇÃO EM ANDAMENTO`.

Nunca use mais de dois pesos de tipo em uma única tela. Nunca empilhe dois headings em tamanho display no mesmo eixo vertical.

## 4. Components

**Botões.** O botão primário é **lime fill no canvas dark** (`#D1FF00` background, `#050505` texto), 0px radius, 44px height. Sem sombra por padrão. No hover, ganha um lime glow halo: `0 0 24px rgba(209, 255, 0, 0.25)` — o *único* idioma de elevação não-border. Secundário: background transparente, texto cream, hairline border (`rgba(156, 156, 156, 0.45)`). No hover, preenche com `--lime-10` e muda texto para lime. Ghost: texto apenas, sem border, zero radius. Destructive usa flare (`#D96A3F`) — nunca vermelho.

**Cards.** Superfície dark (`#0F0F11`), 0px radius, 24px padding, 1px hairline border (`rgba(156, 156, 156, 0.15)`). **Sem sombra.** No hover, background muda para `#151518` (surface-hover) e border clareia para `rgba(156, 156, 156, 0.24)`. O padrão flat-com-tier-shift é a interação assinatura da marca — profundidade através da superfície, não sombra.

**Inputs.** Background surface-dark, 0px radius, 1px hairline border. Lime focus ring em 50% alpha + 3px offset. Estado inválido troca texto e border para flare (nunca vermelho). Disabled em 0.5 opacidade.

**Navegação.** 64px height, background near-black com `backdrop-filter: blur(20px)`, hairline border bottom. Nav links em Geist Mono 500 +0.10em UPPERCASE a 12px. CTA button usa o mesmo padrão lime primário em 44px height e 0px radius.

**Componentes HUD — os idiomas de conteúdo da marca.** `mono-label`: texto lime em Geist Mono 12px +0.15em UPPERCASE. `section-label` (eyebrow com prefixo bracket): `[00] SQUADS DE AGENTES IA` renderizado em lime Geist Mono 10px +0.20em UPPERCASE. `bracket` annotation: 10px +0.12em UPPERCASE inline marker. Estes são *componentes de conteúdo*, não utility styles.

**Squad card.** Variante especializada para cards de agentes/squads: background `surface-console` (`#12130F`), hairline border, padding 16px, tipo Geist Mono. Agent tags usam lime-8 background com lime text e lime-20 border.

## 5. Layout Principles

**Grid arquitetural. Spreads editoriais. Viewports quarteadas.**

Max content width **1180px** com fórmula `--gs-gutter` — `max(1.5rem, calc((100% - 1180px) / 2 + 1.5rem))`. **Coluna de leitura** máxima em 640px. **Inline media** em 880px.

**Sistemas de grid:** 4 colunas para hero/editorial/manifesto spreads; 12 colunas fluido para dashboards. O fundo radial lime no topo — `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(209,255,0,0.07), transparent)` — é a textura atmosférica padrão de hero sections.

**Escala de espaçamento** — ritmo 4/8px: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128. Espaçamento interno de componentes usa 16px e 24px; gutters de seção usam 48–96px; gaps de nível de página usam 96–128px.

**Z-layers — stack canônico, nunca z-index arbitrário.** `base: 0` → `elevated: 1` → `sticky: 10` → `nav: 100` → `dropdown: 200` → `overlay: 300` → `modal: 400` → `toast: 500`.

## 6. Depth & Elevation

**Sem sombras de elevação por padrão.** Este é um sistema brutalist. Profundidade é transmitida por:

1. **Surface tiers** — canvas → surface-panel → surface-dark → surface-alt → surface-hover → surface-overlay. Um componente ganha peso por surface shift, nunca por sombra.
2. **Hairline borders 1px** — `rgba(156, 156, 156, 0.15)` hairline; clareia para `0.24` no hover. Border forte `0.45` disponível para ênfase.
3. **Lime glow** — o *único* idioma de elevação não-border. `--lime-glow` (`rgba(209, 255, 0, 0.25)`) usado como halo de focus ring e em CTAs primários no hover.
4. **Glassmorphism é raro.** `blur(20px)` existe mas é reservado para nav overlay sticky.
5. **Modal overlay dim** — `rgba(61, 61, 61, 0.5)`. Overlay cinza quente, não preto puro.
6. **Gradientes são raros.** O gradiente canônico é o background radial lime no topo. Nunca animado.

## 7. Do's and Don'ts

**Do:**

- Reserve lime (#D1FF00) para exatamente uma ação por tela — CTA primário, focus ring, ou acento de lockup
- Use warm cream (#F5F4E7) para corpo de texto no dark — nunca branco puro (#FFFFFF)
- Use ink (#1D1F19) para corpo de texto no light — nunca preto puro (#000000)
- Empilhe frases curtas grau manifesto como retórica; use em-dashes e parágrafos de uma linha
- Prefira hairline borders (`rgba(156, 156, 156, 0.15)`) a sombras para separação
- Use mono + prefixos bracket (`[00]`, `[GS]`) como labels eyebrow estruturais
- Limite max content width em 1180px; use grid de 4 colunas para hero
- Use glifos unicode (`·`, `/`, `_`) como divisores estruturais
- Endereça o leitor em segunda pessoa (PT-BR `você`), nunca voz passiva
- Use a escala alpha de 15 passos do lime para ajustar profundidade — nunca escureça ou clareia o hex base
- Use o stack canônico de z-layer (base 0 → toast 500); z-index arbitrário é proibido

**Don't:**

- Usar emoji — em lugar nenhum, jamais. Esta marca é brutalist-technical
- Usar fotografia como fundo — apenas padrões de grade, pontos, circuito, rede neural
- Gradient-fill o lime — assinatura significa sólido
- Usar mais de um momento display por página
- Suavizar containers hero ou headline além de 0 radius
- Usar sombras de elevação em cards — use surface tier shift + hairline border
- Usar vermelho (#EF4444) como destructive em UI de produto — use flare (#D96A3F); vermelho parece médico
- Usar branco puro (#FFFFFF) para tipo foreground; use cream (#F5F4E7)
- Escurecer/clarear o hex lime — ajuste via escala alpha apenas
- Empilhar dois headings em tamanho display no mesmo eixo vertical

## 8. Responsive Behavior

Espaçamento de seção fluido: colapsa de 128px → 96px → 64px → 40px conforme o viewport encolhe. Container max 1180px com margem `max(1.5rem, ...)`. No mobile, coluna única com `clamp(1rem, 3vw, 2rem)` padding lateral. Escala de tipo mantida — não reduza tamanho do corpo abaixo de 14px. Hero escala fluidamente via `clamp(3rem, 8vw, 6rem)`. Nav colapsa para hamburger; CTA button permanece visível. Prefixos bracket encolhem para 9px micro em breakpoints pequenos mas nunca desaparecem — o registro HUD está sempre presente.

## 9. Accessibility & Interaction

Use **WCAG AA** como release gate. Cream `#F5F4E7` no near-black `#050505` (18.4:1 AAA) e ink `#1D1F19` no cream `#F5F4E7` são os pares acessíveis padrão. Lime `#D1FF00` é reservado como acento e cor de foco; evite usar lime como o *único* portador de significado.

Todos os elementos interativos devem ser acessíveis por teclado, visivelmente focados (lime ring com 3px offset), e pelo menos 44px de altura como tap targets primários. Focus rings usam `rgba(209, 255, 0, 0.50)` com offset.

Respeite preferências de reduced-motion. Não use efeitos `scale()` de press, parallax, motion de layout, ou gradientes decorativos. Transições preferenciais são color, border, background, opacity, e lime-glow halo em torno de 150–200ms com `cubic-bezier(0.33, 0, 0.67, 1)`.

## 10. Agent Prompt Guide

### Quick Color Reference

- **CTA Primário:** Lime `#D1FF00` no near-black `#050505` (44–60px height, 0px radius)
- **Acento da marca:** Lime `#D1FF00` (focus rings, glow halos, acento do logo — nunca decorativo)
- **Fundo da página (dark):** `#050505` canvas near-black
- **Fundo da página (light):** `#F5F4E7` warm cream
- **Fundo do card (dark):** `#0F0F11` surface-dark (0px radius, 1px hairline)
- **Border:** `rgba(156, 156, 156, 0.15)` — hairline alpha, não sólida
- **Corpo de texto no dark:** Cream `#F5F4E7` — nunca branco puro
- **Corpo de texto no light:** Ink `#1D1F19` — nunca preto puro
- **Texto muted:** `#9C9C9C` (fg-meta) para labels HUD e metadados
- **Destructive:** Flare `#D96A3F` (laranja-quente — substitui vermelho médico)
- **Focus ring:** `rgba(209, 255, 0, 0.50)` lime em 50% alpha

### Example Component Prompts

```
Build a GEN.IA SQUAD hero: near-black #050505 background with radial lime glow
at top (rgba(209,255,0,0.07)), Gilroy ExtraBold 96px 800 weight ALL CAPS with
-0.04em tracking, Geist body at 18px/1.6 cream #F5F4E7, lime #D1FF00 primary
CTA at 44px height with 0px radius, ghost secondary button with
rgba(156,156,156,0.45) hairline border. Bracket eyebrow [00] SQUADS DE AGENTES IA
in lime Geist Mono 10px +0.20em UPPERCASE above the hero.
```

```
Build a GEN.IA SQUAD agent card: surface-dark #0F0F11 background, 0px
border-radius, 1px hairline border rgba(156,156,156,0.15), no shadow. On hover:
background shifts to #151518 (surface-hover) and border brightens to
rgba(156,156,156,0.24). Card title in Gilroy 24px 800 uppercase. Body in
Geist 16px/1.65 cream. Agent tag in rgba(209,255,0,0.08) with lime text
and rgba(209,255,0,0.20) border. Bracket eyebrow [GS] AGENTE ATIVO above title.
```

```
Build a GEN.IA SQUAD navigation bar: 64px height, near-black background with
backdrop-filter blur(20px), hairline border-bottom rgba(156,156,156,0.15). Brand
GEN.IA SQUAD logo icon on left (gs-icon-white.png at 32px). Nav links in
Geist Mono 500 +0.10em UPPERCASE at 12px cream. CTA button in lime #D1FF00
with #050505 text, 44px height, 0px radius. Sticky at top with z-index 100.
```

```
Build a GEN.IA SQUAD light closing section: cream #F5F4E7 background, ink
#1D1F19 text (the inverse — light section closes the dark page), lime CTA
button #D1FF00 with #050505 text, no gradient, 96px vertical padding. The
light section is the contrast moment — all surrounding sections are dark.
Bracket eyebrow remains lime even on cream.
```

```
Build a GEN.IA SQUAD HUD overlay: bracket prefix [GS] in lime Geist Mono
10px +0.12em UPPERCASE, mono label "// FONTE ÚNICA DE VERDADE" in cream
Geist Mono +0.15em, unicode dividers (· / _) between segments. Optional
blinking cursor at line end. This is the brand's signature decoration —
wear the wiring as ornament, not cover.
```

### Iteration Guide

1. **Lime é a assinatura, não a cor do corpo.** Se lime aparece mais de uma vez por tela como fill, reduza para uma instância. Use a escala alpha de 15 passos para tudo mais.
2. **Corpo é Geist, headlines são Gilroy.** Nunca inverta — Gilroy a 16px lê pesado e brutalist (registro correto apenas em 20px+); Geist a 64px lê fino e fraco.
3. **Hairline borders, não sólidas.** `rgba(156, 156, 156, 0.15)` adapta-se a cada surface tier. Nunca use `#3D3D3D` sólido como border do sistema.
4. **Cards são surface-dark, não canvas.** `#0F0F11` background com 0px radius. Canvas (`#050505`) é a página, não a superfície.
5. **Zero radius em todo lugar.** Botões, inputs, cards, badges, estados de nav e containers hero usam 0px radius.
6. **Cards não têm sombra.** Surface tier shift no hover (`#0F0F11` → `#151518`) carrega a profundidade.
7. **Lime permanece sólido em toda superfície.** `#D1FF00` no `#050505`, no cream, no light — mesmo hex. A escala alpha é a única variação legítima.
8. **Registro HUD é binário.** Uma vez que você introduz um eyebrow bracket, toda a superfície se compromete com o vocabulário HUD.
9. **Voz PT-BR.** Endereça o leitor como `você`. Frases grau manifesto. Em-dashes liberais. Nunca voz passiva.
10. **Whitespace é arquitetural.** Section padding 96–128px, max width 1180px, reading column 640px.

## 11. Implementation

Use este arquivo como a fonte portátil de verdade para geração de UI estilo GEN.IA SQUAD. Deve funcionar em qualquer projeto moderno Next.js / React / Tailwind v4 / shadcn sem requerer arquivos específicos do repositório.

**Stack de origem:** Next.js + React + Tailwind CSS v4 + shadcn/ui + Radix Primitives + Lucide Icons + Geist (Vercel) + Gilroy (auto-hospedada OTF).

**Key shadcn/Tailwind mappings:**

| Token DESIGN.md | Tailwind utility | Valor |
|---|---|---|
| `colors.primary` | `bg-primary` | `#D1FF00` (lime) |
| `colors.foreground` | `text-foreground` | `#F5F4E7` (cream on dark) |
| `colors.background` | `bg-background` | `#050505` (near-black, dark default) |
| `colors.card` | `bg-card` | `#0F0F11` (surface-dark) |
| `colors.border` | `border-border` | `rgba(156, 156, 156, 0.15)` |
| `colors.destructive` | `bg-destructive` | `#D96A3F` (flare — NOT red) |
| `rounded.lg` | `rounded-none` | `0px` (cards) |
| `rounded.sm` | `rounded-none` | `0px` (buttons, inputs) |
| `shadows.glow` | `shadow-[0_0_24px_rgba(209,255,0,0.25)]` | lime halo |

**CSS snippet crítico (dark mode default):**

```css
@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy-ExtraBold.otf') format('opentype');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Gilroy';
  src: url('/assets/fonts/Gilroy-Light.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

:root {
  /* GEN.IA SQUAD defaults to DARK */
  --background: #050505;
  --foreground: #F5F4E7;
  --primary: #D1FF00;
  --primary-foreground: #050505;
  --card: #0F0F11;
  --card-foreground: #F5F4E7;
  --border: rgba(156, 156, 156, 0.15);
  --border-lime: rgba(209, 255, 0, 0.25);
  --ring: rgba(209, 255, 0, 0.50);
  --destructive: #D96A3F;
  --radius: 0px;
  --lime-glow: rgba(209, 255, 0, 0.25);
  --font-display: 'Gilroy', 'Arial Black', system-ui, sans-serif;
  --font-body: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Roboto Mono', ui-monospace, monospace;
  --hairline: 1px solid rgba(156, 156, 156, 0.15);
  --gs-gutter: max(1.5rem, calc((100% - 1180px) / 2 + 1.5rem));
}

.light {
  --background: #F5F4E7;
  --foreground: #1D1F19;
  --card: #FFFFFF;
  --card-foreground: #1D1F19;
  --border: rgba(156, 156, 156, 0.24);
}

/* Lime alpha scale — the depth mechanism */
:root {
  --lime-2:  rgba(209, 255, 0, 0.02);
  --lime-4:  rgba(209, 255, 0, 0.04);
  --lime-8:  rgba(209, 255, 0, 0.08);
  --lime-10: rgba(209, 255, 0, 0.10);
  --lime-15: rgba(209, 255, 0, 0.15);
  --lime-20: rgba(209, 255, 0, 0.20);
  --lime-25: rgba(209, 255, 0, 0.25);
  --lime-50: rgba(209, 255, 0, 0.50);
}

/* Radial lime hero atmosphere */
.hero-bg {
  background:
    radial-gradient(ellipse 80% 50% at 50% -10%, rgba(209,255,0,0.07), transparent),
    var(--background);
}

/* Z-layer governance */
:root {
  --layer-base:     0;
  --layer-elevated: 1;
  --layer-sticky:   10;
  --layer-nav:      100;
  --layer-dropdown: 200;
  --layer-overlay:  300;
  --layer-modal:    400;
  --layer-toast:    500;
}
```

**Brand kit para download:** [geniasquad-brand.vercel.app](https://geniasquad-brand.vercel.app)  
**Criado por:** ÉLidy Izidio — [@elidyizzy](https://github.com/elidyizzy)  
**Organização:** GEN.IA SQUAD © 2026
