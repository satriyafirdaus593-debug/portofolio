---
name: Editorial Retro-HUD
colors:
  surface: '#131410'
  surface-dim: '#131410'
  surface-bright: '#393936'
  surface-container-lowest: '#0e0f0b'
  surface-container-low: '#1b1c18'
  surface-container: '#1f201c'
  surface-container-high: '#2a2a27'
  surface-container-highest: '#353531'
  on-surface: '#e4e2dd'
  on-surface-variant: '#c4c8c1'
  inverse-surface: '#e4e2dd'
  inverse-on-surface: '#30312d'
  outline: '#8e928c'
  outline-variant: '#444843'
  surface-tint: '#bfc9be'
  primary: '#bfc9be'
  on-primary: '#2a332b'
  primary-container: '#2d362e'
  on-primary-container: '#959f94'
  inverse-primary: '#576158'
  secondary: '#efc053'
  on-secondary: '#3f2e00'
  secondary-container: '#b48b21'
  on-secondary-container: '#372700'
  tertiary: '#bdcab9'
  on-tertiary: '#283327'
  tertiary-container: '#2b372b'
  on-tertiary-container: '#93a090'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe5d9'
  primary-fixed-dim: '#bfc9be'
  on-primary-fixed: '#151e16'
  on-primary-fixed-variant: '#404941'
  secondary-fixed: '#ffdf9d'
  secondary-fixed-dim: '#efc053'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#d9e6d5'
  tertiary-fixed-dim: '#bdcab9'
  on-tertiary-fixed: '#131e13'
  on-tertiary-fixed-variant: '#3e4a3d'
  background: '#131410'
  on-background: '#e4e2dd'
  surface-variant: '#353531'
typography:
  display:
    fontFamily: Bodoni Moda
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: 5rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Bodoni Moda
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: 3.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bodoni Moda
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: 3.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bodoni Moda
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Bodoni Moda
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: 2.5rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Bodoni Moda
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: 0em
  title-lg:
    fontFamily: Manrope
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: 0.01em
  title-md:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.625rem
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Manrope
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Manrope
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0.02em
  label-technical:
    fontFamily: Manrope
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.12em
  label-caption:
    fontFamily: Manrope
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system translates the raw, nostalgic tactility of Y2K tech-scrapbooks into an elevated, high-contrast editorial portfolio. It bridges the precision of technical IoT engineering with the theatrical typography of high-fashion print monographs. 

The aesthetic is characterized by:
- **Architectural Curated Structure:** Muted olive-slate surfaces act as the drafting canvas, organized via rigid grid alignments and thin technical rules.
- **Editorial Contrast:** Razor-thin serifs paired against high-legibility geometric sans-serif type create an immediate tension between literary elegance and computational utility.
- **Physical Retro-Tactility:** Elements behave like interactive digital artifacts—die-cut tags, clipped spec sheets, and HUD monitors grounded by rich, physical drop offsets.

The emotional resonance is deliberate, intellectual, and inventive: an engineer’s notebook re-imagined as an archival art object.

## Colors

The palette establishes an austere, natural dark-slate atmosphere punctuated by vibrant, utilitarian gold accents.

### Palette Architecture
- **Primary Canvas (`#2D362E`):** Deep olive-slate. Used for the global canvas, framing regions, and base-layer hierarchy.
- **Elevated Canvas (`#3E4A3D`):** Lightened olive-slate. Provides structural elevation for cards, architectural notch shells, and modular layout segments.
- **Accent Primary (`#E6B84C`):** Mustard gold. Directs visual focus to callouts, primary triggers, and active system states.
- **Accent Highlight (`#F2C963`):** Illuminating warm gold for hover overlays, focus borders, and telemetry pulses.
- **Accent Shade (`#9E7B28`):** Deep mustard bronze. Used strictly for mechanical borders, pill button undersides, and physical hard-drop offsets.
- **Neutral Light (`#F8F6F0`):** Archival bone cream. Provides maximum reading contrast for text, metrics, and precise vector icons against dark olive tiers.
- **Neutral Dark (`#1C1F1C`):** Deep carbon ink. Employed as an inverted foreground surface when gold accents invert into physical tags.

### Functional Application
Avoid high-saturation neon blues or reds. Semantic statuses must adapt the tonal palette: warnings utilize the primary gold (`#E6B84C`), confirmations utilize balanced soft-sage variants of olive, and critical stops use a desaturated terracotta brick. Glass surfaces (`rgba(230, 184, 76, 0.12)` to `rgba(230, 184, 76, 0.22)`) must always remain backed by a backdrop filter to maintain contrast against layered canvas graphics.

## Typography

The typographic hierarchy establishes tension between the high-contrast vertical stress of `Bodoni Moda` and the technical clarity of `Manrope`.

### Editorial Display (`Bodoni Moda`)
Reserved strictly for structural headlines, case study titles, large numerical indexes, and biographical statements. Its razor serifs require ample breathing room. Never use `Bodoni Moda` in all-caps across multiple lines; it is most effective in title case or sentence case to celebrate its dramatic ascenders and descenders.

### Technical & System Copy (`Manrope`)
Handles all interface operations, project descriptions, data readouts, and interactive components. 
- **Body Rhythm:** `body-lg` and `body-md` prioritize readability on dark olive backdrops using relaxed line heights (`1.6x` to `1.7x`).
- **Telemetry & HUD Labels:** `label-technical` uses forced uppercase styling with expanded letter-spacing (`0.12em`) and bold weights to evoke engineering schematics, micro-chips, and hardware port labeling without resorting to illegible pixel fonts.

## Layout & Spacing

The layout is rooted in a disciplined, structural 12-column grid referencing architectural portfolios and technical blueprints.

### Grid Specifications
- **Desktop (>= 1200px):** 12-column fluid grid, max-width `1440px`, centered. Outer margins set to `margin` (`3rem`), gutters set to `gutter` (`1.5rem`).
- **Tablet (768px – 1199px):** 8-column fluid grid. Outer margins set to `2rem`, gutters set to `1.25rem`.
- **Mobile (< 768px):** 4-column fluid grid. Outer margins set to `margin-mobile` (`1.25rem`), gutters set to `gutter-mobile` (`1rem`).

### Spatial Principles
1. **Asymmetric Scrapbook Density:** Component gaps alternate between tight technical clustering (`space-sm` to `space-md` for telemetry, metadata chips, and spec sheets) and broad editorial expanses (`space-2xl` to `space-3xl` between conceptual portfolio milestones).
2. **Monolithic Anchors:** Section headers align to column 1, while project media and narrative bodies occupy wide spans (columns 4–12), reinforcing an exhibition monograph structure.
3. **Responsive Reflow:** Multi-layered horizontal cards collapse into vertically-stacked architectural blocks on mobile screens, preserving internal padding rules (`space-md` on inner boundaries).

## Elevation & Depth

Visual hierarchy uses tactile physical layering rather than diffuse digital shadows. Depth is communicated through hard mechanical offsets, tinted glassmorphic overlays, and hairline structural borders.

### Elevation Levels

- **Base Layer (Ground - Level 0):** Background Canvas (`#2D362E`). Flat, non-elevated ground plane. Contains subtle ambient hairline grids (`rgba(248, 246, 240, 0.05)`).
- **Secondary Tier (Structural - Level 1):** Background Secondary (`#3E4A3D`). Used for card foundations, timeline tracks, and side-panel drawers. Edge definition is provided by a 1px border of `rgba(248, 246, 240, 0.12)`.
- **HUD Glass Float (Interactive - Level 2):** Semi-transparent surfaces using background `rgba(45, 54, 46, 0.75)` or accent tint `rgba(230, 184, 76, 0.15)` coupled with `backdrop-filter: blur(12px)`. Outlined with a high-precision 1px stroke of `rgba(230, 184, 76, 0.35)`. Ambient shadow: `0 20px 45px rgba(0, 0, 0, 0.42)`.
- **Tactile Pop (Action - Level 3):** Buttons and active pill components employ a physical hard drop: `box-shadow: 0 5px 0 #9E7B28`. Under active press, this shadow translates to `0 1px 0 #9E7B28` with an accompanying `transform: translateY(4px)`.
- **Floating Modals & Dock (Omnipresent - Level 4):** Floating application docks and active orbital overlays utilize heavy deep ambient shadows: `0 28px 60px rgba(0, 0, 0, 0.65)` enclosed within a crisp 1px perimeter border.

## Shapes

With a roundedness factor of `1`, the interface preserves an industrial, crisp geometry. Elements have micro-radii that soften harsh digital corners into architectural bevels while retaining the precision of hardware modules.

### Radius Scale
- **Base Components (`0.25rem` / `4px`):** Inputs, technical data chips, timeline event nodes, and code cells.
- **Card Containers (`rounded-lg` - `0.5rem` / `8px`):** Project showcase cards, stage panels, notch navigation enclosures, and docked frames.
- **Sub-Panels (`rounded-xl` - `0.75rem` / `12px`):** Outer stage containers and expansive dialog overlays.
- **Specialized Pill Geometry (`9999px`):** Applied exclusively to tactical connector switches, interactive status indicators, and hard-shadow buttons to create distinct physical affordances against the surrounding rectilinear layouts.

## Components

### 1. Buttons
- **Primary Action (Mustard Pill):** Symmetrical pill shape (`rounded: 9999px`), background `#E6B84C`, typography `label-technical` in `#1C1F1C`. Enhanced with a physical hard shadow (`0 5px 0 #9E7B28`). Hover state transitions background to `#F2C963`. Active state triggers `translateY(4px)` with shadow reducing to `0 1px 0 #9E7B28`.
- **Secondary HUD Connector:** Rectilinear form (`rounded: 0.25rem`), background `transparent`, 1px border `#3E4A3D`. Text set in `#F8F6F0`. Left edge anchored by a mini indicator dot (`6px × 6px`) in `#E6B84C`. Hover triggers border color change to `#E6B84C` and background tint `rgba(230, 184, 76, 0.08)`.

### 2. Architectural Top Notch Navigation Bar
- Positioned fixed at the top center of the viewport.
- Contoured like an industrial hardware chassis with tapered base corners.
- Background: `rgba(45, 54, 46, 0.88)` with `backdrop-filter: blur(14px)` and a continuous bottom border of `1px solid rgba(230, 184, 76, 0.25)`.
- Internal links use `label-technical` typography with subtle gold underline tracks that activate on hover.

### 3. Chips & Technical Tags
- **Telemetry Chip:** Micro-radii (`0.25rem`), background `rgba(62, 74, 61, 0.6)`, text `#F8F6F0`, border `1px solid rgba(248, 246, 240, 0.1)`. Padding: `space-xs` vertical, `space-sm` horizontal. Prefixed by an uppercase technical category code (e.g., `[SYS_OK]`, `[REV_04]`).
- **Interactive Gold Filter:** Same structure, but toggled active with `#E6B84C` background, `#1C1F1C` text, and no border.

### 4. Cards & Showcase Displays
- **Expandable Timeline Card:** Layered on Level 1 (`#3E4A3D`). Features an editorial serif heading paired with a discrete interactive `+` / `−` pill indicator on the right edge. On expansion, accordion reveals schematics, technical role specs, and date stamps set in `body-sm`.
- **3D Coverflow Stage Project Card:** Features high-contrast typography, high-res hardware photography, and custom schematic line drawings. Outlined with a 1px border of `rgba(230, 184, 76, 0.2)`. The active focal card receives a gold highlight border (`#E6B84C`) and elevation Level 2 HUD shadow.

### 5. Input Fields
- Dark slate surface (`#1C1F1C`), border `1px solid rgba(248, 246, 240, 0.2)`, `rounded: 0.25rem`. Text `body-md` in `#F8F6F0`.
- Focus state: Border transitions to `#E6B84C` with an inner glow `box-shadow: 0 0 0 1px #E6B84C`. Labels sit strictly above the input in `label-technical` uppercase bone cream.

### 6. Floating Hardware Dock
- Positioned floating at bottom-center of the screen.
- Elevated on Level 4 shadow. Rounded chassis (`rounded-lg` / `0.5rem`).
- Holds iconographic representations of developer toolsets and IoT instruments.
- Utilizes scale magnification transformations on proximity/hover (`scale(1.2)`), supported by micro gold tooltips positioned above the targeted item.