<p align="center">
  <img src="public/images/royal-blades-logo-transparent.png" alt="Royal Blades" width="420" />
</p>

<h1 align="center">Royal Blades</h1>

<p align="center">A polished, mobile-first website for a neighborhood barbershop in Sialkot.</p>

<p align="center">
  <a href="#getting-started">Get started</a> ·
  <a href="#pages">Explore pages</a> ·
  <a href="#project-structure">Project structure</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-16-111111?logo=next.js&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-087ea4?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white" />
</p>

## Overview

Royal Blades is a frontend-only barbershop website built with Next.js App Router and TypeScript. It helps visitors explore services, browse haircut inspiration, learn about the shop, and prepare a booking preview.

> Booking is a frontend preview. Details are held temporarily in the browser session and are not sent to the shop or confirmed as an appointment.

## Pages

| Page | Route | What visitors can do |
| --- | --- | --- |
| Home | `/` | Explore the shop, services, and featured styles |
| Services | `/services` | Search and filter services, then review prices |
| Gallery | `/gallery` | Browse haircut ideas by category |
| Our story | `/about` | Learn about the shop's approach |
| Visit us | `/visit` | See the Sialkot location and opening hours |
| Book | `/book` | Choose details for a booking preview |
| Review | `/book/review` | Review the temporary booking details |

## Getting started

**Requirements:** Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Check code with ESLint |
| `npm run typecheck` | Check TypeScript without emitting files |

## Project structure

```text
src/app/          App Router pages, metadata, and global styles
src/components/   Shared navigation, service, gallery, and booking UI
src/data/         Shop details, services, and gallery content
src/lib/          SEO helpers
public/Gallery/   Haircut photography used by the gallery
public/images/    Brand marks and supporting visuals
design-previews/  Visual concepts and design previews
```

## Configuration and SEO

Set `NEXT_PUBLIC_SITE_URL` to the production origin before deployment. Canonical metadata and sitemap URLs depend on this value. Keep shop information and service details in `src/data/` so pages stay consistent.

The shop address and hours are maintained in `src/data/business.ts`. Do not publish invented contact details, social accounts, testimonials, map coordinates, or appointment confirmations.

## Design reference

See [`vertex-optimize-quantum-data-DESIGN.md`](vertex-optimize-quantum-data-DESIGN.md) for the visual direction and [`AGENTS.md`](AGENTS.md) for repository contribution guidelines.

---

<p align="center">
  <a href="https://devbyanas.vercel.app/">
    <img alt="Developed by Anas" src="https://img.shields.io/badge/Developed%20by-Anas-111111?style=flat&logo=github&logoColor=white" />
  </a>
  <a href="https://github.com/anas-kashif">
    <img alt="Anas on GitHub" src="https://img.shields.io/badge/GitHub-anas--kashif-181717?style=flat&logo=github&logoColor=white" />
  </a>
</p>
