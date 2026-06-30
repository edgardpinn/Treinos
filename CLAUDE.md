# Be Hapynn Fit

TanStack Start (SSR) + Supabase + Tailwind v4 + shadcn/ui.

## Stack

- **Framework**: TanStack Start v1 (file-based routing, SSR, server functions)
- **Database / Auth**: Supabase (PostgreSQL + RLS + Storage)
- **Email (2FA)**: Resend direct API
- **UI**: shadcn/ui + Tailwind v4 + Radix

## Commands

```bash
bun install        # install deps (or npm install)
bun run dev        # dev server at http://localhost:3000
bun run build      # production build
bun run start      # serve production build
```

## Env vars required

See `.env.example`.

## Architecture notes

- Server functions live in `src/lib/*.functions.ts` using `createServerFn`
- Auth middleware in `src/integrations/supabase/auth-middleware.ts` extracts JWT from `Authorization: Bearer`
- The client attaches the token automatically via `src/integrations/supabase/auth-attacher.ts` registered in `src/start.ts`
- 2FA window: 12h (stored in localStorage with key `bhf_2fa_{userId}`)
- RLS: all tables have Row Level Security enabled
- Migrations: apply in order from `supabase/migrations/`

## Deploy targets

- **Node.js**: `vite build` then `node .output/server/index.mjs`
- **Docker**: use the provided `Dockerfile`
- **Railway / Render / Fly.io**: point to repo root, set env vars, run `npm run build && npm run start`
