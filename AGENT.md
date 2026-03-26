# AGENTS.md

## Project Overview

Personal portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and DatoCMS as a headless CMS. The site includes a chatbot feature using Groq's LLaMA model through the Vercel AI SDK.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server on localhost:3000
npm run build        # Build for production
npm start            # Run production build
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run check-lint   # ESLint with extended checks
npm run check-format # Check Prettier formatting
npm run format       # Auto-format with Prettier
npm run check-types  # TypeScript type checking
npm run test-all     # Run all checks + build (format, lint, types, build)
npm run clean        # Remove .next directory
```

### Pre-commit Hook
This project uses Husky with a strict pre-commit hook that runs:
1. Clean (.next removal)
2. Prettier check
3. ESLint check
4. TypeScript type check
5. Production build

All checks must pass before commits are allowed. The hook provides colorful error messages to indicate failures.

## Architecture

### Directory Structure
- `app/` - Next.js App Router pages and API routes
  - `api/chat/route.ts` - Streaming AI chatbot endpoint using Groq/LLaMA
  - `api/bookings/route.ts` - Demo taxi booking endpoint
  - `bot/page.tsx` - Chatbot interface page
  - `contact/page.tsx` - Contact form page
  - `layout.tsx` - Root layout with Montserrat font
  - `page.tsx` - Home page
- `components/` - React components organized by feature
  - `bot/` - Chatbot UI components
  - `contact/` - Contact form components
  - `header/` - Header and image components
  - `main/` - Main content and social buttons
  - `ui/` - Reusable UI components (shadcn/ui style)
- `actions/` - Server actions
  - `datocms.ts` - DatoCMS GraphQL queries (fetches links data)
- `lib/` - Utilities
  - `utils.ts` - Utility functions (includes `cn()` for class merging)
- `hooks/` - Custom React hooks
- `providers/` - Context providers
- `schema/` - Validation schemas
- `public/` - Static assets

### Key Patterns

**Path Aliases**: `@/*` maps to project root (see `tsconfig.json`)

**DatoCMS Integration**: Server-side data fetching via GraphQL API. The `getLinks()` action fetches active links ordered by custom field. Requires environment variables:
- `NEXT_PUBLIC_DATOCMS_API_URL`
- `NEXT_PUBLIC_DATOCMS_API_TOKEN`

**AI Chatbot**: Uses Groq API (not OpenAI) with LLaMA 3 model. The chatbot is configured as a Spanish-language taxi booking assistant. Requires:
- `GROQ_API_KEY` environment variable

**Styling**: Tailwind CSS with custom theme including:
- HSL-based color system with CSS variables
- Custom animations (rotate, pulse, accordion)
- Montserrat font family loaded via next/font/google
- Gradient utilities (linear-gradient, radial-gradient)

**Component Structure**:
- UI components follow shadcn/ui patterns with Radix UI primitives
- Components are organized by feature/domain
- TypeScript with JSDoc comments

## Code Style

**ESLint**: Extends Google style guide + React + TypeScript recommended rules. React import not required in JSX files.

**Prettier**:
- 80 character line width
- 2 space indentation
- LF line endings
- ES5 trailing commas

**TypeScript**: Strict mode enabled with all recommended checks.

## Important Notes

- The project uses Next.js App Router (not Pages Router)
- Server Actions must be marked with `"use server"` directive
- DatoCMS queries use `cache: "no-cache"` for fresh data
- The chatbot system prompt is in Spanish and configured for taxi booking workflow
- Husky pre-commit hook is comprehensive and will block commits that don't pass all checks
