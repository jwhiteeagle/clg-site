# Chief Live Gaming Website Rebuild - Project Primer

## 🚨 CRITICAL: Assistant Behavior Protocol

Before responding to ANY technical question, the assistant must:

- [ ] Search official documentation for the tool/feature in question
- [ ] Verify syntax against installed version
- [ ] Confirm solution with official sources
- [ ] Provide documentation link when available

**FAILURE TO FOLLOW THIS PROTOCOL WASTES DEVELOPER TIME.**

---

## Strict Rules for AI Assistant

🚫 **NEVER**:
- Guess at configuration syntax without checking docs
- Suggest solutions without verifying against official documentation
- Provide version-specific advice without confirming compatibility
- Skip documentation searches when troubleshooting errors
- Use placeholder/example code syntax when real syntax is required
- Assume configuration options exist without verification

✅ **ALWAYS**:
- Search official documentation before answering technical questions
- Verify configuration syntax against current tool versions
- Check error messages against official troubleshooting guides
- Cite documentation sources when providing solutions
- Admit uncertainty and search rather than guess
- Use proper tool invocation syntax (never use shorthand placeholders)
- State explicitly: "Let me search the documentation first" when uncertain
- Suggest commonly used VScode extensions that may provide value to the project

⚠️ **REQUIRED SEARCH TRIGGERS**:
- Any configuration file changes (biome.json, tailwind.config.ts, etc.)
- Error messages during build/lint/format/runtime
- Tool compatibility questions (e.g., "Does Biome work with Tailwind v4?")
- Version-specific feature availability
- Official best practices or conventions
- Integration between multiple tools/libraries

---

## Project Overview

**Project Name**: Chief Live Gaming Website Rebuild  
**Description**: Professional portfolio and e-commerce site for Chief Live Gaming, showcasing custom retro gaming modifications, commissions, and eBay store integration.  
**Primary Goal**: Create a modern, performant website to showcase work, attract commission clients, and drive eBay sales.  
**Target Audience**: Retro gaming enthusiasts, collectors, and potential commission clients.

---

## Tech Stack

### Core Framework
- **Next.js** v16.0.1 - Modern React framework with App Router for optimal performance and SEO
  - Docs: https://nextjs.org/docs

### Language
- **TypeScript** v5 - Type safety and better developer experience
  - Docs: https://www.typescriptlang.org/docs/

### Styling
- **Tailwind CSS** v4 - Utility-first CSS with modern CSS-based configuration
  - Docs: https://tailwindcss.com/docs
  - **Important**: Using v4 syntax with `@import "tailwindcss"` and `@theme` in CSS

### Component Library
- **shadcn/ui** - Copy-paste React components built on Radix UI primitives
  - Docs: https://ui.shadcn.com/docs
  - **Note**: Manually installed without CLI due to Tailwind v4 compatibility

### Development Tools
- **Biome** v2.3.4 - Fast linter and formatter replacing ESLint + Prettier
  - Docs: https://biomejs.dev/
  - **Important**: CSS parser configured with `tailwindDirectives: true` for Tailwind v4 support

### React & UI
- **React** v19.2.0
  - Docs: https://react.dev/reference/react
- **React DOM** v19.2.0
- **Lucide React** v0.553.0 - Icon library
  - Docs: https://lucide.dev/

### Additional Dependencies
- **class-variance-authority** v0.7.1 - For component variants
- **clsx** v2.1.1 - Conditional className utility
- **tailwind-merge** v3.3.1 - Merge Tailwind classes intelligently
- **@radix-ui/react-slot** v1.2.4 - Composition primitive for shadcn components
- **tw-animate-css** v1.4.0 - Animation utilities

---

## Official Documentation Sources

**PRIMARY REFERENCES** - Assistant must check these when working with respective tools:

- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev/reference/react
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Biome**: https://biomejs.dev/
- **shadcn/ui**: https://ui.shadcn.com/docs
- **Radix UI**: https://www.radix-ui.com/primitives/docs/overview/introduction
- **Lucide Icons**: https://lucide.dev/icons

---

## Project Structure

```
clg-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts and global structure
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind v4 base styles and theme variables
├── components/
│   └── ui/                 # shadcn UI components
├── lib/
│   └── utils.ts            # Helper functions (cn for class merging)
├── public/                 # Static assets
├── .vscode/
│   └── settings.json       # VSCode Biome configuration
├── biome.json              # Biome linter/formatter config
├── tailwind.config.ts      # Tailwind v3 bridge (minimal, mostly unused)
├── postcss.config.mjs      # PostCSS configuration for Tailwind
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

**Key Files:**
- `app/layout.tsx` - Global app wrapper with Geist fonts
- `app/page.tsx` - Homepage
- `app/globals.css` - Tailwind v4 configuration via CSS
- `biome.json` - Linting and formatting rules
- `lib/utils.ts` - Contains `cn()` utility for merging class names

---

## Development Workflow

### Initial Setup
```bash
# Clone and install
git clone https://github.com/jwhiteeagle/clg-site.git
cd clg-site
npm install

# Start development server
npm run dev
```

### Daily Development
```bash
# Before starting work
git pull
npm run dev

# Before committing
npm run lint:fix
npm run build  # Verify build works
git add .
git commit -m "descriptive message"
git push
```

### Available Scripts
- `npm run dev` - Start Next.js development server (http://localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Check for linting/formatting issues (doesn't modify files)
- `npm run lint:fix` - Auto-fix linting/formatting issues
- `npm run format` - Format files only (no linting)
- `npm run check` - Same as lint:fix (convenient shorthand)

---

## Code Standards

### General Principles
- Prefer functional components over class components
- Use TypeScript strict mode - avoid `any` types
- Write self-documenting code with clear variable names
- Keep components small and focused (single responsibility)
- Use React 19 features (Server Components where appropriate)

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Functions**: camelCase (e.g., `fetchUserData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS`)
- **Files**: kebab-case for non-components (e.g., `user-utils.ts`)

### File Organization
- One component per file
- Colocate related components in feature folders
- Group utilities in `/lib`
- shadcn components live in `/components/ui`

### Code Style (Enforced by Biome)
- **Indentation**: Tabs
- **Quotes**: Double quotes
- **Semicolons**: Always
- **Line Length**: 100 characters max
- **Line Endings**: LF (Unix-style)
- **Trailing Commas**: ES5 style (in objects/arrays, not function params)

---

## Configuration Notes

### Tailwind CSS v4
- **Version**: v4.0
- **Config Location**: `app/globals.css` (CSS-based configuration)
- **Important Notes**: 
  - Using v4 syntax: `@import "tailwindcss"` instead of separate @tailwind directives
  - Custom theme defined inline with `@theme` directive in globals.css
  - `tailwind.config.ts` exists for shadcn compatibility but is mostly unused by Tailwind v4
- **Gotchas**: 
  - shadcn CLI expects v3, so components are added manually
  - Most Tailwind tooling assumes v3 configuration format

### Biome
- **Version**: v2.3.4
- **Config Location**: `biome.json`
- **Important Notes**:
  - VCS integration enabled (respects .gitignore automatically)
  - CSS parser has `tailwindDirectives: true` for Tailwind v4 support
  - Organizes imports automatically on save
  - Replaces both ESLint and Prettier
- **Gotchas**: 
  - Must have `tailwindDirectives: true` in CSS parser or will error on Tailwind syntax
  - Some rules are warnings to ease learning curve (`noExplicitAny`, `noConsoleLog`)

### shadcn/ui
- **Version**: Latest (installed manually)
- **Config Location**: Components in `/components/ui`, utils in `/lib/utils.ts`
- **Important Notes**:
  - Not using CLI due to Tailwind v4 - components copied manually from website
  - Dependencies installed manually: CVA, clsx, tailwind-merge, Radix primitives
  - Works perfectly with Tailwind v4, just skip the init command
- **Gotchas**: 
  - Don't run `npx shadcn@latest init` - it will try to configure for Tailwind v3

### Next.js 16 App Router
- **Version**: v16.0.1
- **Config Location**: `next.config.ts`
- **Important Notes**:
  - Using App Router (not Pages Router)
  - React 19 support
  - File-based routing in `/app` directory
- **Gotchas**:
  - Server Components by default - add 'use client' directive when needed

---

## Version Control

### Git Strategy
- **Main Branch**: `main` - Production-ready code
- **Feature Branches**: `feature/description` - For new features
- **Fix Branches**: `fix/description` - For bug fixes

### Commit Message Format
```
type: short description

Optional detailed description
```

**Types**: feat, fix, docs, style, refactor, test, chore, config

**Examples**:
- `feat: add commission request form`
- `fix: resolve mobile nav menu overflow`
- `style: format all files with Biome`
- `config: add Biome CSS Tailwind support`

### What NOT to Commit
- `node_modules/`
- `.next/`
- `.env` and `.env.local` files
- `out/`
- `build/`
- `.DS_Store`
- `*.log`

---

## Common Tasks

### Adding a New shadcn Component
1. Go to https://ui.shadcn.com/docs/components/[component-name]
2. Check "Installation" section for required dependencies
3. Install any new dependencies: `npm install [package-name]`
4. Copy the component code from the website
5. Create file in `components/ui/[component-name].tsx`
6. Paste and save (Biome will auto-format)

### Adding a New Page/Route
1. Create folder in `app/` with route name (e.g., `app/about/`)
2. Add `page.tsx` in that folder
3. Export default component:
```tsx
export default function AboutPage() {
  return <div>About content</div>;
}
```
4. Optional: Add `layout.tsx` for route-specific layout
5. Optional: Add `loading.tsx` for loading state

### Installing a New Dependency
```bash
npm install [package-name]
```
Then document in this primer if it's a significant addition.

### Debugging Common Issues

**Issue**: Biome errors on CSS files
**Solution**: Ensure `biome.json` has `"css": { "parser": { "tailwindDirectives": true } }`
**Docs**: https://biomejs.dev/linter/rules/

**Issue**: "Module not found" errors
**Solution**: Check import paths, ensure file extensions are correct, restart dev server
**Docs**: https://nextjs.org/docs/messages/module-not-found

**Issue**: Tailwind classes not applying
**Solution**: Check `globals.css` has `@import "tailwindcss"`, verify Tailwind is in dependencies
**Docs**: https://tailwindcss.com/docs/installation

---

## Deployment

### Build Process
```bash
npm run build
```
This creates an optimized production build in `.next/` directory.

### Deployment Platform
- **Platform**: TBD (Vercel recommended for Next.js)
- **URL**: TBD
- **Environment Variables**: TBD

### Pre-Deployment Checklist
- [ ] All tests pass (when tests are added)
- [ ] Build succeeds locally (`npm run build`)
- [ ] No linting errors (`npm run lint`)
- [ ] All images have alt text
- [ ] Environment variables configured on platform
- [ ] Test on mobile and desktop viewports

---

## Resources & Links

### Project Links
- **Repository**: https://github.com/jwhiteeagle/clg-site
- **Production**: TBD
- **eBay Store**: [Link to Chief Live Gaming eBay store - TBD]

### Brand Information
- **Business Name**: Chief Live Gaming
- **Focus**: Custom retro gaming modifications and restorations
- **Services**: Custom commissions, rare game sales, restoration work

### Learning Resources
- Next.js 16 App Router: https://nextjs.org/docs/app
- Tailwind v4 Migration: https://tailwindcss.com/docs/upgrade-guide
- React 19 Docs: https://react.dev/blog/2024/12/05/react-19
- Biome vs ESLint/Prettier: https://biomejs.dev/guides/migrate-eslint-prettier/

---

## Troubleshooting

### Common Errors

**Error**: `Tailwind-specific syntax is disabled` in Biome
- **Cause**: Biome CSS parser doesn't have Tailwind directives enabled
- **Solution**: Add to `biome.json`: `"css": { "parser": { "tailwindDirectives": true } }`
- **Docs**: https://biomejs.dev/linter/rules/

**Error**: `Found an unknown key 'ignore'` in biome.json
- **Cause**: Using wrong syntax for ignore patterns in Biome v2.3.4
- **Solution**: Use `.biomeignore` file or context-specific ignore arrays
- **Docs**: https://biomejs.dev/reference/configuration/

**Error**: shadcn component imports not resolving
- **Cause**: Missing dependency or incorrect path alias
- **Solution**: Verify dependency installed, check `tsconfig.json` paths
- **Docs**: https://ui.shadcn.com/docs/installation

**Error**: LF will be replaced by CRLF warnings in Git
- **Cause**: Windows line ending differences
- **Solution**: Run `git config --global core.autocrlf true` (one-time fix)
- **Docs**: https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration

---

## Project-Specific Notes

### Important Context
- Chief Live Gaming specializes in custom retro gaming hardware modifications
- Target audience appreciates attention to detail and craftsmanship
- Site should feel professional but approachable, nostalgic but modern
- Primary revenue streams: eBay sales and custom commissions
- Need clear call-to-actions for commission requests

### Future Enhancements
- [ ] Gallery/portfolio section with project showcases
- [ ] Commission request form with file upload
- [ ] eBay store integration/feed
- [ ] Blog or updates section for new projects
- [ ] Testimonials/reviews section
- [ ] Image optimization and lazy loading
- [ ] SEO optimization (meta tags, structured data)
- [ ] Analytics integration

### Known Issues
- None currently - fresh project

---

## Assistant Verification Checklist

When providing technical guidance, the assistant should verify:

- [ ] Searched official documentation for the feature/tool in question
- [ ] Verified syntax matches the installed version
- [ ] Checked for version compatibility between integrated tools
- [ ] Provided links to official documentation when applicable
- [ ] Used proper tool invocation syntax (no placeholder formats)
- [ ] Confirmed configuration options exist before suggesting them
- [ ] Checked for known issues with the specific version combination

**If any checkbox is unchecked, STOP and search documentation first.**

---

## Last Updated
**Date**: 2025-11-09  
**Updated By**: Project Owner  
**Changes**: Initial primer creation with Biome and Tailwind v4 configuration notes