# PIFI Landing Page

React + Vite landing page for PIFI Electronics.

## Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`) for styling
- **`cn()`** helper ([`src/lib/cn.js`](src/lib/cn.js)) — `clsx` + `tailwind-merge` for conditional classes
- **UI primitives** in [`src/components/ui/`](src/components/ui/) — shared Button, Container, Card, etc.

## Styling

Design tokens and cart animations live in [`src/index.css`](src/index.css) via `@theme` and `@keyframes`. Extend colors, fonts, or animations there; use Tailwind utilities in components.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # ESLint
```
