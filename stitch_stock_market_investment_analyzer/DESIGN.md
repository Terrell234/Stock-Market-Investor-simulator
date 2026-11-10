---
name: Obsidian Wealth
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  mono-metric:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets ambitious, self-directed investors aged 20–40 who demand institutional-grade clarity without archaic institutional friction. It merges high-velocity precision with a bespoke wealth management posture. 

The aesthetic is **Precision Dark Minimalist**: disciplined, low-glare, and architected around high information density with zero cognitive clutter. The emotional resonance must inspire quiet confidence, control, and surgical execution. 

Key attributes:
- **Atmosphere:** Deep nocturnal backgrounds, razor-sharp data displays, and purposeful luminous accents.
- **Visual Weight:** Light-footed, border-conscious components that prioritize numeric telemetry and real-time delta perception over decorative distraction.
- **Affordance Style:** Restrained, functional feedback. Surfaces recede cleanly into the dark substrate, allowing dynamic metrics—yields, asset distributions, real-time candles—to capture absolute visual priority.

## Colors

The palette operates on a true-dark foundation engineered for continuous monitoring without ocular fatigue, utilizing strategic chromatic surges to signal status, yield, and volatility.

### Palette Architecture
- **Base Surfaces (Canvas & Containers):**
  - App Canvas Base: `#0B0F19` (Obsidian Void)
  - Surface Base: `#111827` (Deep Slate)
  - Elevated Container / Card: `#1E293B` (Muted Indigo Slate)
  - Surface Highlight / Interactive: `#334155`
- **Primary Kinetic Accent (Emerald Growth):** `#10B981` (Hover/Active: `#059669`). Dedicated to positive asset movement, primary action anchors, confirmed profit margins, and buy triggers.
- **Secondary Structural Accent (Sapphire Intelligence):** `#3B82F6`. Employed for platform mechanics, multi-asset comparative graphs, neutral selection states, and informational callouts.
- **Tertiary Diagnostic Accent (Warm Amber):** `#F59E0B`. Reserved for cautionary states, pending settlements, margin requirement alerts, and volatile threshold crossings.
- **Critical Diagnostic (Crimson Fallback):** `#EF4444`. Strictly deployed for negative variance, liquidation thresholds, and balance loss metrics.
- **Typographic Scale:**
  - High Contrast (Headers, Core Numbers): `#F8FAFC`
  - Mid Contrast (Labels, Meta, Secondary Metrics): `#94A3B8`
  - Subdued (Disabled, Structural Timestamps): `#64748B`

Keep background surfaces flat or subtly translucent. Color must function strictly as semantic information, never pure decoration.

## Typography

Typography pairs **Plus Jakarta Sans** for prominent structural anchors and balances with **Inter** for data ingestion, financial tables, and telemetry readability.

- **Plus Jakarta Sans:** Injects geometric structure and modern prestige into primary asset valuations, page anchors, and high-level card summaries.
- **Inter:** Ensures zero ambiguity in high-density tables, multi-column ledgers, order book slips, and small diagnostic labels.
- **Tabular Figures:** All numeric displays (prices, quantities, percentage deltas, time metrics) must activate open-type tabular numbers (`font-variant-numeric: tabular-nums`) to prevent horizontal jitter during real-time web-socket updates.
- **Hierarchy Rules:** Reserve full-bleed white (`#F8FAFC`) strictly for net asset valuations, active ticker symbols, and primary interactive titles. Secondary metric context (e.g., "24h Volume", "Cost Basis") must universally sit in `label-sm` or `body-sm` using `#94A3B8`.

## Layout & Spacing

The layout model is constructed on an adaptable 12-column responsive fluid grid designed to toggle cleanly between wide-angle trading stations and focused vertical mobile streams.

- **Desktop (1024px+):** 12 columns, 2rem margins, 1.25rem gutters. Facilitates persistent modular side panels (watchlist, order book) paired with a dominant multi-chart workspace.
- **Tablet (768px - 1023px):** 8 columns, 1.5rem margins, 1rem gutters. Side modules collapse into sliding overlays or bottom drawers.
- **Mobile (Below 768px):** 4 columns, 1rem margin, 0.75rem gutters. Visual cards snap to full-width containers with internal data structured via horizontal micro-scrolls or vertically consolidated lists.
- **Rhythm:** Interior component spacing strictly follows an 8pt base discipline (multiples of 0.25rem / 0.5rem / 1rem). Complex financial modules must remain tightly packed internally using `space-xs` and `space-sm` for dense stat clusters, separated from adjacent cards by `space-md` or `space-lg`.

## Elevation & Depth

Visual hierarchy uses a refined **Tonal Surface Stacking** model augmented with **Subtle Luminous Outlines**, deliberately rejecting heavy drop shadows that cause murky visual weight on OLED displays.

- **Level 0 (App Canvas):** Pure flat base `#0B0F19`. Unbordered.
- **Level 1 (Card & Module Layer):** `#111827` paired with a 1px ghost border using `rgba(255, 255, 255, 0.07)`. Creates crisp delineation without distracting contrast.
- **Level 2 (Popovers, Tooltips, Action Drawers):** `#1E293B` surrounded by `rgba(255, 255, 255, 0.12)` border and an ambient directional shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.6)`.
- **Level 3 (Modal Dialogs & Critical Executions):** `#1E293B` elevated with an ambient glow tinted to the semantic action:
  - Positive Execution: `0 0 24px -2px rgba(16, 185, 129, 0.15)`
  - Standard Elevation: `0 20px 40px -8px rgba(0, 0, 0, 0.8)`
- **Glassmorphic Accents:** Sticky table headers and navigation rails utilize background blur (`backdrop-filter: blur(12px)`) with `rgba(11, 15, 25, 0.82)` to preserve contextual spatial awareness during vertical telemetry scanning.

## Shapes

The design system maintains an intentional geometric sharpness: disciplined and modern, avoiding cartoonish bulbous curves while eschewing severe industrial brutality.

- **Cards & Data Modules:** Standardize on `rounded-lg` (1rem / 16px) for major dashboard cards and execution panels.
- **Buttons, Form Fields & Segments:** Standardize on base `rounded` (0.5rem / 8px). Creates a secure, tangible target with sharp technical definition.
- **Tags, Badges & Ticker Pills:** Micro containers leverage `rounded` (0.25rem / 4px to 0.5rem / 8px) to frame tabular performance metrics compactly. Full pill radii are strictly prohibited for buttons, reserved solely for micro status indicators (e.g., Live Market Open dots).

## Components

### Buttons
- **Primary (Execute / Buy):** Solid Emerald (`#10B981`) background, deep slate text (`#0B0F19`), font weight 600. On hover, shifts to `#059669`. No borders.
- **Secondary (Inspect / Configure):** Dark Indigo Slate (`#1E293B`) background, `#F8FAFC` label, with a persistent 1px border `rgba(255, 255, 255, 0.1)`. On hover, background brightens to `#334155`.
- **Tertiary / Ghost:** Transparent background, `#94A3B8` text. Transitions to `#F8FAFC` text and `rgba(255, 255, 255, 0.05)` surface on hover.
- **Dimension:** Standard height 40px (`py: 0.5rem`, `px: 1rem`); Compact modal/table actions at 32px.

### Metric Cards & ROI Indicators
- **Card Shell:** Background `#111827`, border 1px `rgba(255, 255, 255, 0.07)`, 16px corner radius, internal padding of `1.25rem`.
- **ROI Badges:** Small inline components showing return rates. Green positive states use a 10% opacity Emerald background (`rgba(16, 185, 129, 0.1)`) with vivid `#10B981` text and an upward trend glyph (`▲`). Negative states swap cleanly to a 10% opacity Crimson base (`rgba(239, 68, 68, 0.1)`) with `#EF4444` typography.

### Data Visualization Widgets (Charts & Sparklines)
- **Sparklines:** Compact, 0-axis baseline rendered in 1.5px stroke width. Upward trends feature `#10B981` with a delicate vertical linear gradient fill fading from `rgba(16, 185, 129, 0.2)` to transparent.
- **Interactive Scrubber:** Thin 1px vertical guide (`#94A3B8`) accompanied by a pinned tooltip at Level 2 elevation displaying precise price point and timestamp with tabular alignment.

### Chips & Filter Pills
- **State Neutral:** Deep slate surface (`#111827`), 1px outline `rgba(255, 255, 255, 0.08)`, text `#94A3B8`.
- **State Active:** Sapphire tint (`rgba(59, 130, 246, 0.15)`), border 1px `#3B82F6`, text `#60A5FA`.

### Input Fields & Order Slips
- **Field Base:** Height 44px, background `#0B0F19`, border 1px `rgba(255, 255, 255, 0.12)`, radius 8px, text `#F8FAFC`.
- **Focus State:** 1px ring `#3B82F6` with subtle field-glow `0 0 0 1px #3B82F6`.
- **Inline Steppers / Suffixes:** Currency denotation (e.g., `USD`, `SHARES`) aligned right in monospace-weighted `label-md` `#64748B`.

### Lists & Ledger Rows
- Continuous data rows separated solely by 1px subtle divider lines (`rgba(255, 255, 255, 0.04)`).
- Padding: 12px vertical, 8px horizontal.
- Hover: Entire row shifts smoothly to `rgba(255, 255, 255, 0.02)`.
- Layout: Fixed column arrangement: Left (Asset Icon + Ticker + Company Name), Center-Right (Real-Time Mini Sparkline), Far Right (Price + 24h Delta Pill).