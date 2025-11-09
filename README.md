bootstrapped with create-next-app
React
TypeScript
Tailwind v4
Shadcn component library bridged
tailwindv3 bridge added with tailwind.config.ts


## Project File Overview

- `/app/layout.tsx` — global app wrapper
- `/app/page.tsx` — home page
- `/app/globals.css` — Tailwind v4 base styles and theme variables
- `/components/ui/` — Shadcn UI components
- `/lib/utils.ts` — helper functions for class merging


RootLayout (app/layout.tsx)
│
├── Navbar  →  site-wide navigation
├── <main>  →  dynamic page content
└── Footer  →  simple site footer
