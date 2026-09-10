# alikehel.dev

My personal website. Built with [TanStack Start](https://tanstack.com/start) and [Vite+](https://viteplus.dev), deployed on Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs at https://alikehel.localhost through [portless](https://github.com/vercel-labs/portless). Run `PORTLESS=0 pnpm dev` to skip it.

Content lives in `src/data/resume.tsx`.

## Scripts

- `pnpm dev`: dev server
- `pnpm build`: production build
- `pnpm preview`: build and run the production worker locally
- `pnpm deploy`: build and deploy with wrangler
- `pnpm check`: format, lint, and type check
- `pnpm check:fix`: same, but fixes what it can

## Deployment

Pushing to `main` deploys through Cloudflare Workers Builds.

- Build command: `pnpm build`
- Deploy command: `pnpm exec wrangler deploy`

The home page is prerendered at build time and ships no JavaScript.
