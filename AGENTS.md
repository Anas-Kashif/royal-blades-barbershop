# Repository Guidelines

## Project Structure

This is the Royal Blades frontend in Next.js App Router and TypeScript. Routes live in `src/app/` (Home, Services, Gallery, About, Book, Book Review, Visit); reusable UI is in `src/components/`; business and service content is centralized in `src/data/`; SEO helpers live in `src/lib/`; replaceable illustrations are in `public/images/`. The current theme uses only black, white, and neutral greys. Keep gradients subtle and preserve readable contrast. The homepage feature grid uses an editorial barber-detail-board layout; retain its monochrome image treatment, asymmetric 4+2 / 2+4 desktop spans, and complete mobile reflow.

## Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: compile the production app and validate route/build behavior.
- `npm start`: serve a completed production build.
- `npm run lint`: run ESLint.
- `npm run typecheck`: run TypeScript without emitting files.

## Coding Style

Use two-space indentation, semicolons, and single quotes in TypeScript/TSX. Name components in PascalCase and route segments in lowercase kebab-case. Prefer Server Components; isolate browser-only interactions in Client Components. Keep price, opening-hours, address, and service data in `src/data/`, not duplicated across pages. Use semantic, keyboard-accessible controls and honor `prefers-reduced-motion` for GSAP and CSS animations.

## Business & Booking Rules

Use the supplied address: Toheed Town, Defense Road, Sialkot. Hours are Monday to Saturday, 10:00 am to 6:00 pm, and Sunday, 11:00 am to 3:30 pm. Service prices are editable and currently range from Rs. 500 to Rs. 5,000. The booking flow (`/book` to `/book/review`) is a frontend preview only: its temporary details live in session storage and are not transmitted to the shop. Never imply an appointment was saved or confirmed. Do not invent a shop phone number, social account, exact map coordinates, testimonials, or establishment history.

## SEO, Validation & Contributions

Keep per-route titles/descriptions, LocalBusiness JSON-LD, `robots.txt`, and `sitemap.xml` accurate. Set `NEXT_PUBLIC_SITE_URL` to the real production origin before launch; canonical URLs and sitemap entries depend on it. There is no test framework yet; add tests only with an explicitly selected framework and cover navigation, service data, booking validation, and its honest preview state. Use imperative Conventional Commit subjects (for example, `feat: add service pages`). PRs should describe user-visible changes, list validation performed, and include desktop/mobile screenshots for visual changes.
