## Goal

Replace the current placeholder home page (`/`) with the GrowthLoop "Solutions" page from the provided HTML, ported into the TanStack Start + Tailwind v4 stack.

## Sections to build (top to bottom)

1. **Top navigation bar** — GrowthLoop logo/wordmark on the left, links (Platform, Solutions, Pricing, Resources) in the center, "Book a Demo" CTA button on the right.
2. **Hero** — "Automate Your Lead Pipeline with AI" headline, supporting paragraph, two CTAs: "Explore Pipeline" (primary) and "View Integration Specs" (secondary/outline).
3. **Section intro** — "How Leads Flow to Conversion" heading + supporting copy.
4. **Intelligent Flow Management** — heading + subheading, then a 3-card grid featuring the Material Symbols icons `hub`, `database`, `timeline`:
   - AI Capture & Qualification — badge "+45% Capture Rate"
   - Centralized CRM Hub — badge "Zero Data Loss"
   - Automated Nurturing — badge "3x Conversion Speed"
5. **Footer** — GrowthLoop blurb, Product column (Features, Integrations, Pricing), Company column (About Us, Careers, Contact), bottom row with copyright and Privacy / Terms links.

## Visual direction

Enterprise SaaS aesthetic matching the source HTML:
- Light theme, near-white background, deep navy/near-black foreground, single vibrant accent for CTAs/badges (electric blue/indigo).
- **Typography**: Montserrat (600/700) for headings, Inter (400/500) for body, JetBrains Mono (500) for numeric badges/metrics.
- Rounded 2xl cards, subtle border + soft shadow, generous whitespace, monospace metric chips.
- Material Symbols Outlined for the three feature icons.

## Technical details

- Edit `src/routes/index.tsx`: remove the blank-app placeholder, build the page as a single `Index` component broken into small local sub-components (`Nav`, `Hero`, `FlowSection`, `FeatureCard`, `Footer`).
- Add real `head()` metadata on the index route: title "GrowthLoop — Automate Your Lead Pipeline with AI", matching description, og:title / og:description / og:type=website. Remove the "no head()" comment.
- Update `src/routes/__root.tsx` sitewide defaults: replace "Lovable App" title/description with GrowthLoop equivalents; add `<link>` tags in the root `head()` for Google Fonts (Montserrat, Inter, JetBrains Mono) and Material Symbols Outlined, including `preconnect` to fonts.googleapis.com and fonts.gstatic.com. Do not `@import` font URLs in `styles.css`.
- Update `src/styles.css` design tokens (light theme only used):
  - Set `--font-sans` to Inter, add `--font-display` (Montserrat) and `--font-mono` (JetBrains Mono) in `@theme`.
  - Adjust `--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`, `--radius` to match the enterprise light palette. Keep the existing `@theme inline` shadcn mapping intact.
- Nav links point to `/` for now (single-page); "Book a Demo" is a styled button (no handler).
- Use semantic HTML: single `<h1>` in hero, `<h2>` for section headings, `<nav>`, `<main>`, `<footer>`, `alt` text where needed.
- No new dependencies, no backend, no routing changes beyond the index page.

## Out of scope

- Building Platform / Solutions / Pricing / Resources as separate routes.
- Interactive behavior (form handling, demo booking, animations beyond simple hover states).
- Dark mode tuning.
