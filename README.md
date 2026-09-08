# Portfolio

A lightweight static portfolio for Cloudflare Pages. The public project page is available at `/portfolio/`.

## Project structure

```text
portfolio/
├── index.html                  # Redirects the domain root to /portfolio/
├── README.md
└── portfolio/
    ├── index.html
    ├── style.css
    ├── script.js
    └── pdf/
        ├── petlens.pdf
        ├── agefriendly-bim.pdf
        └── n8n-information-agent.pdf
```

The original exported PDF files are kept in the repository root as source files. The website uses the stable, lowercase copies inside `portfolio/pdf/`.

## Deploy with Cloudflare Pages

Connect this repository to Cloudflare Pages and use these settings:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/` (repository root)

Every push to the production branch will publish automatically. The cards require no external fonts, CDN files, APIs, or build tools.

## Updating a project PDF

Replace the corresponding file in `portfolio/pdf/` while keeping the same filename. Commit and push the change; no HTML edits are needed.
