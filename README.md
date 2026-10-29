# Machrus Alifuddin — Portfolio

Personal portfolio website for Machrus Alifuddin, a software engineer based in Surabaya. It is a responsive single-page application that can be published with GitHub Pages.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

## Run locally

Prerequisites: Node.js 20 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:8443` in your browser.

To create a production build:

```bash
pnpm build
pnpm preview
```

## Customize content

Update identity data, contact links, experience, and projects in [src/data/portfolio.ts](./src/data/portfolio.ts). Portrait assets are stored in [public/assets](./public/assets).

## Project structure

```text
src/
├── components/  # Reusable UI components
├── data/        # Portfolio content
├── sections/    # Page sections
├── App.tsx      # Main page composition
└── index.css    # Styling and responsive rules
```

## GitHub Pages

For a free personal domain, use a repository named `machrusali.github.io`. For the Panda Oren organization, use `pandaoren.github.io`. Enable GitHub Pages through **Settings → Pages**, then select a suitable deployment method (GitHub Actions for this Vite project).

## License

Copyright © Machrus Alifuddin. Not for redistribution without permission.
