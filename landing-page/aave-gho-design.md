# Design Philosophy: The "Aave/GHO" Aesthetic

This style embodies the visual DNA of Aave and GHO—a clean, trustworthy fusion of modern fintech precision and DeFi innovation. It is **not generic light mode**; it is a refined, airy canvas where data breathes with subtle depth and mint-green energy signals growth and stability.

## Core Design Principles

1. **Clean Luminosity**: Light backgrounds with subtle shadows create depth. The mint-green accent glows softly, signaling active states and trust indicators.

2. **Geometric Precision**: Everything follows strict geometric rules. Ultra-thin 1px borders, generous whitespace, and consistent spacing create a premium fintech feel.

3. **Layered Transparency**: Glass morphism with backdrop blur creates floating panels. Cards lift subtly on hover, suggesting interactivity without heaviness.

4. **Subtle Texture**: Backgrounds use soft gradients and minimal patterns. The lightness breathes—never flat, never busy.

5. **Trust Through Clarity**: High contrast text, clear hierarchy, and ample breathing room communicate security and professionalism.

The vibe is **Clean, Professional, and Trustworthy**. This is modern DeFi—it should feel approachable, innovative, and engineered for clarity.

---

# Design Token System

## Colors (Light Mode)

* **Background**: `#FFFFFF` (Pure White)
* **Surface**: `#FBFBFB` (Soft Gray) - Cards and elevated surfaces
* **Foreground**: `#2C2D30` (Blackberry Black) - Primary text
* **Muted**: `rgba(44, 45, 48, 0.6)` (60% Black) - Secondary text
* **Tertiary**: `rgba(44, 45, 48, 0.4)` (40% Black) - Placeholder, hints
* **Border**: `rgba(0, 0, 0, 0.05)` - Subtle boundaries
* **Primary Accent**: `#1EC6A2` (Aave Mint) - CTAs, links, active states
* **Secondary Accent**: `#0FA049` (GHO Green) - Success, value indicators
* **Hover Accent**: `rgba(30, 198, 162, 0.07)` - Soft highlight backgrounds

**CSS Variables**:
```css
:root {
  --body-bg: #FFFFFF;
  --card-bg: rgba(44, 45, 48, 0.02);
  --text-primary: #2C2D30;
  --text-secondary: rgba(44, 45, 48, 0.6);
  --text-tertiary: rgba(44, 45, 48, 0.4);
  --accent-1: #1EC6A2;
  --accent-2: #0FA049;
  --border: rgba(0, 0, 0, 0.05);
}
```

---

## Typography

* **Primary (Headings)**: `var(--font-primary)` - Clean geometric sans-serif
  * Weights: 500 (Medium), 600 (Semibold)
  * Usage: h1-h6, hero text

* **Secondary (Body/UI)**: `var(--font-secondary)` - Highly legible sans-serif
  * Weights: 400, 500, 600
  * Size: 14px base, line-height 1.4
  * Letter-spacing: -0.09px

* **Scale**:
  * Hero: `text-4xl` → `md:text-5xl` → `lg:text-7xl`
  * Section titles: `text-2xl` → `md:text-4xl`
  * Body: 14-16px
  * Captions: 14px with `font-weight: 500`

---

## Radius & Borders

* **Cards/Containers**: `16px` (`rounded-2xl`)
* **Buttons**: `50px` (pill shape)
* **Inputs**: `8px`
* **Small elements**: `4px` - `8px`

* **Border Style**: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05)`
* **Hover Border**: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1)`

---

## Shadows & Effects

* **Card Elevation**:
  ```css
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.03);
  ```

* **Dropdown/Modal**:
  ```css
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.06);
  ```

* **Glass Morphism**:
  ```css
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  ```

* **Halo Animation** (for emphasis):
  ```css
  @keyframes halo {
    0% { transform: scale(0); opacity: 0; }
    35% { opacity: 0.7; }
    70% { transform: scale(1); opacity: 0; }
    100% { transform: scale(0); opacity: 0; }
  }
  ```

---

# Component Stylings

## Buttons

* **Primary**:
  ```css
  background-color: var(--accent-1);
  color: #fff;
  border-radius: 50px;
  height: 36px | 44px | 50px;
  padding: 0 16px | 0 26px;
  font-weight: 500;
  transition: 0.17s ease;
  ```
  * Hover: `background-color: var(--accent-2)`

* **Secondary**:
  ```css
  background-color: #fff;
  color: var(--text-primary);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  ```
  * Hover: `box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1)`

* **Ghost**:
  ```css
  background: transparent;
  color: var(--text-secondary);
  ```
  * Hover: `background: rgba(44, 45, 48, 0.03)`

* **Sizes**: `sm` (36px), `lg` (44px), `xl` (50px)

---

## Cards

* **Standard**:
  ```css
  background-color: var(--card-bg);
  border-radius: 16px;
  padding: 24px | 32px;
  ```

* **Hover Effect**:
  ```css
  transition: background-color 0.2s;
  &:hover { background-color: #f7f7f7; }
  ```

* **Glass Card**:
  ```css
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 4px rgba(0, 0, 0, 0.05);
  ```

---

## Inputs

```css
height: 40px;
padding: 11px 12px;
border-radius: 8px;
background: #fff;
box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
font-size: 14px;
transition: box-shadow 0.1s ease;

&:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(30, 198, 162, 0.4);
}

&[data-error="true"] {
  box-shadow: 0 0 0 2px rgba(255, 109, 46, 0.4);
}
```

---

## Navigation

* **Topbar**: Fixed, 80px height, white background
* **Nav Links**:
  ```css
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.1s;
  &:hover { color: var(--text-primary); }
  ```

* **Active State**:
  ```css
  background-color: rgba(30, 198, 162, 0.07);
  color: var(--accent-1);
  ```

* **Dropdown Menu**:
  ```css
  border-radius: 16px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.03);
  ```

---

## Dividers

* **Horizontal**: Full width, 1px, `rgba(0, 0, 0, 0.05)`
* **Vertical**: Height 100%, 1px
* **Inset Padding**: `48px` desktop, `16px` mobile

---

# Layout & Spacing

* **Container**: `max-width: 1082px` (centered)
* **Section Padding**: `padding: 64px 48px` desktop, `48px 16px` mobile
* **Grid Gap**: `16px` - `32px`
* **Card Gap**: `24px` - `40px`

**Responsive Grids**:
```css
grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
/* or */
grid-template-columns: repeat(3, 1fr); /* md+ */
grid-template-columns: 1fr; /* mobile */
```

---

# Animation & Motion

* **Transition Base**: `0.17s ease` or `0.2s ease`

* **Spin**:
  ```css
  @keyframes spin {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }
  ```

* **Enter/Exit (Dropdowns)**:
  ```css
  @keyframes enter {
    0% { opacity: 0; transform: scale(0.96) translateY(10px); }
    100% { opacity: 1; transform: scale(1); }
  }
  ```

* **Hover Effects**:
  * Cards: `background-color` shift
  * Buttons: `scale(0.99)` on active
  * Icons: `opacity` transition
  * External links: `transform: translate(4px, -4px)`

---

# Responsive Strategy

* **Breakpoints**:
  * `768px` - Major layout shifts
  * `820px` - Navigation collapse
  * `900px` - Complex grid adjustments

* **Mobile Adaptations**:
  * Single column layouts
  * Reduced padding (48px → 16px)
  * Stacked navigation with hamburger menu
  * Touch targets minimum 40px

---

# Accessibility

* **Contrast**: `#2C2D30` on white exceeds WCAG AA
* **Focus States**: `box-shadow: 0 0 0 2px rgba(30, 198, 162, 0.4)`
* **Hover States**: All interactive elements have visible feedback
* **Motion**: Respect `prefers-reduced-motion`

---

# Implementation Notes

* Use CSS variables for theming
* Prefer `box-shadow` over `border` for subtle boundaries
* Use `will-change: transform` sparingly for animated elements
* Icons: 24px - 40px base sizes, use opacity for state changes
* Glass effects: Combine `backdrop-filter: blur()` with semi-transparent backgrounds
