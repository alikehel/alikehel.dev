# alikehel.dev

My personal website. Built with [TanStack Start](https://tanstack.com/start) and [Vite+](https://viteplus.dev), deployed on Cloudflare Workers.

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs at https://alikehel.localhost through [portless](https://github.com/vercel-labs/portless). Run `PORTLESS=0 pnpm dev` to skip it.

Home page content lives in `src/data/resume.tsx`: each job, client, school and project there gets a card on the home page and its own page (`/work/ovarc`, `/freelance/talabatk`, `/education/udacity`, `/projects/disworse` and so on). The pages carry more detail than the resume, which keeps only the main points. Blog posts are MDX files in `content/blog/` (the file name is the URL slug) with `title`, `description` and `date` in the frontmatter; add `draft: true` to keep a post out of production. The `/uses` page is `content/uses.mdx`.

The Open Graph image, `public/og.jpg`, is rendered from `scripts/og.html` by `scripts/og.sh` (needs Google Chrome). Run it again after changing the hero text or the photo.

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

Every page is prerendered at build time, and production loads no JavaScript bundle. The only scripts on a page are a small inline one that TanStack Router adds and the Cloudflare Web Analytics beacon, which Cloudflare injects at the edge.
