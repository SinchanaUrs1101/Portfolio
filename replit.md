# Portfolio Website - Sinchana S Urs

## Overview

This is a modern, single-page portfolio website built for Sinchana S Urs, a Computer Science student. The application showcases professional information including projects, skills, education, and contact details through an elegant, photo-centric design with a deep purple gradient theme. The site is built as a full-stack application with React frontend and Express backend, though currently functioning primarily as a static portfolio with backend infrastructure ready for future dynamic features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Client-side routing using Wouter (lightweight React router)
- Single-page application (SPA) architecture with all content on one scrollable page

**UI Component System:**
- Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting dark mode (default) and light mode via ThemeProvider context
- Inter font family (Google Fonts) for typography across all weights

**State Management:**
- React Query (TanStack Query) for server state management and API calls
- React Context for theme management
- Local component state for UI interactions

**Styling Architecture:**
- Tailwind CSS with extensive custom configuration in `tailwind.config.ts`
- CSS variables for theming (HSL color system)
- Custom elevation system using `--elevate-1` and `--elevate-2` for hover/active states
- Design follows specifications in `design_guidelines.md` with purple gradient backgrounds and photo-centric hero section

**Page Structure:**
The portfolio is composed of distinct sections rendered on a single page:
- Navigation (sticky header with theme toggle)
- Hero (gradient background with portrait photo, CTA buttons)
- About (personal introduction with contact info cards)
- Skills (categorized technical and soft skills)
- Projects (featured project cards with technologies and highlights)
- Education (timeline of academic achievements and certifications)
- Footer (social links and copyright)

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for REST API endpoints
- Currently minimal backend with infrastructure ready for expansion
- Session management setup with `connect-pg-simple` for PostgreSQL-backed sessions
- Custom Vite middleware integration for development with HMR

**API Design:**
- RESTful API structure with `/api` prefix
- Request/response logging middleware for debugging
- JSON body parsing with raw body preservation for webhooks
- CORS and security headers ready for implementation

**Development vs Production:**
- Development: Vite dev server with middleware mode for SSR-like development experience
- Production: Static asset serving from compiled `dist/public` directory
- Hot module replacement (HMR) in development with Replit-specific plugins

### Data Storage & Database

**ORM & Schema:**
- Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- Schema defined in `shared/schema.ts` with Zod validation
- Migration system configured in `drizzle.config.ts`
- Currently includes a basic `users` table with UUID primary keys

**Storage Implementation:**
- Dual storage strategy: `MemStorage` (in-memory) for development/testing
- `@neondatabase/serverless` driver for PostgreSQL connections
- Storage abstraction layer (`IStorage` interface) allows switching between implementations
- CRUD operations defined in storage interface for users (expandable for portfolio content)

**Database Connection:**
- PostgreSQL via Neon serverless driver
- Connection string from `DATABASE_URL` environment variable
- Schema push capability via `npm run db:push` for migrations

### External Dependencies

**Core Libraries:**
- `express` - Backend web framework
- `react` & `react-dom` - UI library
- `vite` - Frontend build tool and dev server
- `drizzle-orm` & `drizzle-kit` - TypeScript ORM and migrations
- `@neondatabase/serverless` - PostgreSQL database driver

**UI & Styling:**
- `tailwindcss` - Utility-first CSS framework
- `@radix-ui/*` - Headless UI component primitives (20+ components)
- `lucide-react` - Icon library
- `class-variance-authority` & `clsx` - Utility for conditional classNames

**State & Data Management:**
- `@tanstack/react-query` - Server state management
- `react-hook-form` - Form state management
- `@hookform/resolvers` & `zod` - Form validation
- `wouter` - Lightweight routing

**Developer Tools:**
- `typescript` - Type checking
- `tsx` - TypeScript execution for Node.js
- `esbuild` - Fast JavaScript bundler for production builds
- `@replit/vite-plugin-*` - Replit-specific development tools (cartographer, dev banner, runtime error overlay)

**Utilities:**
- `date-fns` - Date manipulation
- `nanoid` - Unique ID generation
- `connect-pg-simple` - PostgreSQL session store

**Asset Management:**
- Portrait image stored in `attached_assets/` directory
- Vite alias `@assets` for importing static assets
- Path aliases configured: `@/` (client/src), `@shared/` (shared), `@assets/` (attached_assets)