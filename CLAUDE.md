# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS**. The site supports internationalization (i18n) with English and Spanish locales and features a simple profile page with social links.

**Key URLs:**
- Production: https://jorgeolarte.com
- Localized routes: `/en` and `/es`

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check-types

# Linting and formatting (Biome)
npm run check-biome
npm run format

# Run all checks (lint + types + build)
npm run test-all

# Clean build artifacts
npm run clean

# Expose local server via ngrok
npm run ngrok
```

## Code Quality & Git Hooks

This project uses **Biome** (not ESLint/Prettier) for linting and formatting:
- Configuration: `biome.json`
- Biome handles both linting and formatting in a single tool
- Settings: 2-space indentation, single quotes, semicolons as-needed

**Pre-commit hook** (`.husky/pre-commit`) enforces:
1. Clean build artifacts
2. Biome checks (lint + format)
3. TypeScript type checking
4. Successful Next.js build

All checks must pass before commits are allowed.

## Architecture

### Directory Structure

```
app/                      # Next.js App Router
  [lang]/                 # Locale-based dynamic route
    page.tsx              # Main page component
    layout.tsx            # Layout with metadata generation
    opengraph-image.tsx   # OG image generation
    twitter-image.tsx     # Twitter card image
  locale/[lang]/route.ts  # API route for locale handling
  layout.tsx              # Root layout (font, global styles)
  globals.css             # Global styles with Tailwind

components/
  header/                 # Header components (profile section)
  main/                   # Main content area (links)
  ui/                     # Reusable UI components

src/
  data/
    links.ts              # Link data logic
    links.en.json         # English links configuration
    links.es.json         # Spanish links configuration
  i18n/
    messages.ts           # Internationalization messages
```

### Internationalization (i18n)

**Supported locales:** `en` (English), `es` (Spanish)

The site uses a custom i18n implementation:
- Routes: `/en` and `/es` (dynamic `[lang]` segment)
- Messages: `src/i18n/messages.ts` exports `messagesByLocale` and `getMessages(locale)`
- Links: Separate JSON files per locale (`links.en.json`, `links.es.json`)
- Metadata: Generated per locale in `app/[lang]/layout.tsx` with proper `hreflang` alternates

**Adding translations:**
1. Update `src/i18n/messages.ts` for UI text
2. Create/update locale-specific link files in `src/data/`

### Links Configuration

Links are managed via JSON files in `src/data/`:
- Each link has: `type` (social/content), `url`, `text`, `target`, `icon`, `orden`
- Icons must exist in `/public/` directory
- Links are normalized in `src/data/links.ts` with `getLinks(locale)` function
- Types: `social` (social media) and `content` (newsletter, podcast, etc.)

**Adding a new link:**
1. Add SVG icon to `/public/`
2. Add link entry to both `links.en.json` and `links.es.json`
3. Set `orden` field to control display order

### Styling

- **Tailwind CSS** configured in `tailwind.config.ts`
- **shadcn/ui** components in `components/ui/` (based on Radix UI)
- Custom configuration: `components.json`
- Global styles: `app/globals.css`
- Font: Montserrat (Google Fonts) loaded in root layout

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Includes: `app/`, `components/`, `providers/`, `hooks/`

## Important Notes

- **No ESLint/Prettier:** This project uses Biome exclusively
- **Locale validation:** Routes validate locale in both page and layout to avoid 404s
- **Icon paths:** Icons in JSON must be normalized with leading `/` for Next.js Image component
- **Pre-commit checks:** Cannot bypass without fixing all lint, type, and build errors
