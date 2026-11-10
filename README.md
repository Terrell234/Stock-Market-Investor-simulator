# Stock Market Investor Simulator

Next.js App Router project prepared for Vercel deployment and Supabase integration. The current simulator UI is preserved at `public/simulator.html` and served from the home page.

## Local Development

Requirements: Node.js 20.9 or later and npm.

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable (or legacy anon) key.
3. Start the development server with `npm run dev` and open `http://localhost:3000`.

The Supabase browser and server clients are available in `lib/supabase/client.ts` and `lib/supabase/server.ts`. Session cookies are refreshed by `proxy.ts`. No database tables, authentication screens, or simulator persistence are assumed or configured yet; those need to match the intended Supabase schema and product behavior.

## Vercel Deployment

Import this repository into Vercel and keep the detected Next.js framework settings and default build command (`npm run build`). In **Project Settings → Environment Variables**, add:

- `NEXT_PUBLIC_SUPABASE_URL`: the project URL from Supabase.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: the project's publishable key. The legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY` is also supported.

Set them for the deployment environments you use, then redeploy. The public key is intended for browser use; protect data with Supabase Row Level Security and never add a service-role key to a `NEXT_PUBLIC_` variable.