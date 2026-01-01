# Design Philosophy: The "Ditto" Aesthetic

This style embodies the visual DNA of Ditto—a warm, organic fusion of modern editorial elegance and approachable brand identity. It is **not generic corporate**; it is a refined, natural canvas where content breathes with soft textures and golden-yellow energy signals optimism and clarity.

## Core Design Principles

1. **Warm Luminosity**: Cream/tan backgrounds with subtle layering create depth. The bright yellow accent energizes key interactions and brand moments.

2. **Organic Precision**: Generous rounded corners (1.5rem-3rem) soften geometric layouts. Typography balances serif elegance with sans-serif readability.

3. **Layered Naturalism**: Subtle surface variations (tan → tan-dark → tan-light) create visual hierarchy without harsh contrasts.

4. **Refined Texture**: Backgrounds use warm neutrals and natural tones. The palette feels earthy—never cold, never sterile.

5. **Trust Through Warmth**: High-contrast navy text on cream backgrounds communicates professionalism with approachability.

The vibe is **Warm, Organic, and Premium**. This is modern brand design—it should feel inviting, sophisticated, and crafted for clarity.

---

# Design Token System

## Colors

* **Background Primary**: `#eff2e5` (Tan) - Main page background
* **Background Secondary**: `#e8ebd9` (Tan Dark) - Cards, sections
* **Background Tertiary**: `#f9fbf2` (Tan Light) - Elevated surfaces
* **Foreground**: `#130e30` (Navy) - Primary text
* **Muted**: `#5f5c6e` (Neutral Gray) - Secondary text
* **Border Strong**: `#130e30` (Navy) - Emphasis borders
* **Border Medium**: `#b6ba95` (Tan Darkest) - Standard borders
* **Border Subtle**: `rgba(182, 186, 149, 0.35)` - Light borders
* **Primary Accent**: `#ffe228` (Brand Yellow) - CTAs, highlights
* **Secondary Accent**: `#efd624` (Yellow on Tan) - Hover states
* **Accent Blue**: `#3a93ff` - Links, info states
* **Accent Green**: `#59e25d` - Success indicators
* **Accent Magenta**: `#e261e5` - Special highlights

**CSS Variables**:
```css
:root {
  --surface-primary: #eff2e5;
  --surface-secondary: #e8ebd9;
  --surface-tertiary: #f9fbf2;
  --text-primary: #130e30;
  --text-neutral: #5f5c6e;
  --border-strong: #130e30;
  --border-medium: #b6ba95;
  --border-subtle: rgba(182, 186, 149, 0.35);
  --brand-yellow: #ffe228;
  --brand-blue: #3a93ff;
  --brand-green: #59e25d;
  --brand-magenta: #e261e5;
}
```

---

## Typography

* **Primary (Headings)**: `Hedvig Letters Serif, "Times New Roman", sans-serif`
  * Weight: 400
  * Usage: h1-h6, hero text
  * Letter-spacing: Negative (-0.02rem to -0.04rem)

* **Secondary (Body/UI)**: `Inter, Arial, sans-serif`
  * Weights: 400, 500, 600
  * Size: 1rem base, line-height 1.25-1.5
  * Letter-spacing: -0.02rem

* **Scale**:
  * Hero: `4rem` (line-height: 1.1)
  * Section titles: `3rem` (line-height: 1.15)
  * Subsection: `2rem` (line-height: 1.2)
  * Body large: `1.375rem` (line-height: 1.25)
  * Body: `1rem` (line-height: 1.25)
  * Caption: `0.875rem` (line-height: 1.2)
  * Small: `0.75rem`

---

## Radius & Borders

* **Cards/Containers**: `1.5rem` (24px) - Default
* **Large elements**: `3rem` (48px) - Hero cards, modals
* **Small elements**: `0.75rem` (12px) - Tags, badges
* **Buttons**: `0.5rem` (8px) - Standard buttons

* **Border Style**: `1px solid var(--border-medium)`
* **Focus Border**: `0.125rem solid #4d65ff` with `0.125rem` offset

---

## Shadows & Effects

* **Card Elevation**:
  ```css
  border: 1px solid var(--border-medium);
  border-radius: 1.5rem;
  ```

* **Table Wrap**:
  ```css
  border-radius: 16px;
  background: var(--surface-secondary);
  border: 1px solid #e6e1d6;
  ```

* **Hover Effect**:
  ```css
  background: rgba(106, 76, 243, 0.06);
  ```

* **Image Hover**:
  ```css
  transform: scale(1.05);
  transition: transform 250ms ease-in-out;
  ```

---

# Component Stylings

## Buttons

* **Primary**:
  ```css
  background-color: var(--text-primary);
  color: var(--surface-primary);
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  ```
  * Hover: `background-color: var(--text-neutral)`

* **Secondary**:
  ```css
  background-color: var(--brand-yellow);
  color: var(--text-primary);
  ```
  * Hover: `background-color: #efd624`

* **Tertiary**:
  ```css
  background: transparent;
  color: var(--text-primary);
  ```
  * Hover: `background: rgba(182, 186, 149, 0.13)`

---

## Cards

* **Standard**:
  ```css
  background-color: var(--surface-secondary);
  border-radius: 1.5rem;
  padding: 1.5rem;
  ```

* **Featured Card** (Blog first item):
  ```css
  background-color: var(--brand-yellow);
  flex-flow: row;
  gap: 1.5rem;
  ```

* **Image Card Hover**:
  ```css
  .card-image:hover .media-full-size {
    transform: scale(1.05);
  }
  ```

---

## Inputs

```css
border-radius: 0.5rem;
background: var(--surface-tertiary);
border-bottom: 1px solid var(--border-medium);
font-size: 1rem;
transition: all 200ms ease-in-out;

&:focus {
  border-width: 2px;
  border-color: var(--border-strong);
}
```

---

## Navigation

* **Navbar**: Fixed, white/cream background
* **Nav Links**:
  ```css
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: all 0.4s ease;
  ```

* **Dropdown**:
  ```css
  border-radius: 1.5rem;
  background: var(--surface-tertiary);
  transition: all 400ms ease-in-out;
  ```

* **Hamburger Menu**:
  ```css
  --thickness: 0.15rem;
  --gap: 0.5rem;
  --rotate: 45deg;
  ```

---

## Tables

```css
.blog-table {
  border-collapse: separate;
  border-spacing: 0;
  background: var(--surface-secondary);
  border-radius: 16px;
  font-size: 0.95rem;
}

.blog-table thead th {
  position: sticky;
  top: 0;
  background: #fffdf6;
  font-weight: 700;
}

.blog-table tbody tr:nth-child(even) {
  background: #faf8f1;
}

.blog-table tbody tr:hover {
  background: rgba(106, 76, 243, 0.06);
}
```

---

## Dividers

* **Standard**: `1px solid var(--border-medium)`
* **Strong**: `1px solid var(--border-strong)`

---

# Layout & Spacing

* **Global Padding**: `3rem`
* **Section Gap**: `6rem` - `13rem`
* **Card Gap**: `1.5rem` - `2.5rem`
* **Component Gap**: `0.5rem` - `1rem`

**Spacing Scale**:
```css
--gap-xs: 0.25rem;
--gap-sm: 0.5rem;
--gap-md: 1rem;
--gap-lg: 1.5rem;
--gap-xl: 2rem;
--gap-2xl: 3rem;
--gap-3xl: 5rem;
--gap-4xl: 8rem;
```

---

# Animation & Motion

* **Transition Base**: `200ms ease-in-out` or `400ms ease-in-out`

* **Image Hover**:
  ```css
  transform: scale(1.05);
  transition: transform 250ms ease-in-out;
  ```

* **Dropdown Enter**:
  ```css
  transition: grid-template-columns 400ms ease-in-out;
  transition-delay: 400ms;
  ```

* **Icon Rotation**:
  ```css
  transition: transform 0.4s ease;
  &:hover { transform: rotate(-180deg); }
  ```

---

# Responsive Strategy

* **Breakpoints**:
  * `991px` - Tablet layout shifts
  * `767px` - Mobile landscape
  * `479px` - Mobile portrait

* **Mobile Adaptations**:
  * Single column layouts
  * Reduced font sizes (heading 4rem → responsive)
  * Stacked navigation with hamburger
  * `body:has([data-nav-menu-open]) { overflow: hidden; }`

---

# Accessibility

* **Focus States**: `outline: 0.125rem solid #4d65ff; outline-offset: 0.125rem`
* **Font Smoothing**: `-webkit-font-smoothing: antialiased`
* **Text Rendering**: `optimizeLegibility`
* **Scrollbar**: Hidden for cleaner UI (`.page-wrapper *::-webkit-scrollbar { display: none }`)

---

# Implementation Notes

* Use CSS custom properties for theming
* Prefer semantic color names (`--surface-primary` vs `--tan`)
* Text truncation utilities: `.text-style-2lines`, `.text-style-3lines`
* Hide utilities: `.hide`, `.hide-tablet`, `.hide-mobile`
* Container centering: `margin-right: auto; margin-left: auto`
