# Catholic Faith Formation Checklist Starter

A minimal Next.js checklist project that runs locally with `npm run dev` and deploys to Netlify.

## What is included

- A single homepage with lorem ipsum placeholder content
- Left sidebar checklist tree with collapsible sections:
  - God (`page-1` to `page-3`)
  - Jesus (`page-4` to `page-6`)
  - Catholicism (`page-7` to `page-9`)
- Per-page checkboxes that persist in browser local storage

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Deploying to Netlify

This repository includes `netlify.toml` with:

- Build command: `npm run build`

Connect your Git repository to Netlify and deploy.
