# Agentic Harvest

Companion site for the **Agentic Harvest** presentation to John Deere (training partner).
Attendees open it by QR from their phone while the Unity demo runs on the projector.

## Run locally

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
```

## Network constraint

The site is opened over a corporate guest WiFi. **All presentation content renders with
zero network calls**: the typeface is self hosted at build time (`next/font`), diagrams
are inline SVG, and the calculator runs entirely client side. No spinners in the main
content.

## Publishing the simulation video

1. Record the simulation from Unity and export to MP4 (H.264 + AAC).
2. Put the file at `public/media/simulacion.mp4`.
3. In `content/project.ts`, set `hero.video.fallbackSrc` to `'/media/simulacion.mp4'`.

While `fallbackSrc` is empty the hero shows a static placeholder instead of a player
stuck loading. Serving from `/public` keeps the video independent of the API.

## Model images

Drop a render of each 3D model in `public/models/`. See `public/models/README.md` for
the expected filenames. Missing files fall back to a drawn placeholder, so the grid
never breaks.

## Simulations section

`#simulaciones` renders the latest recorded runs with their KPIs and charts. It is a
Server Component, so the API is called from the server and the attendee's phone never
has to reach it.

It reads `GET /ObtenerUltimosVideosConEstadisticas` (no parameters: the stored procedure
`ObtenerUltimosVideosConKPIs` already returns the 3 most recent runs with its own
`LIMIT`, joined against `SimulacionKPIs`). To show a different number of runs, change
the `LIMIT` in that procedure; the site does not need to be touched.

The five charts come from one endpoint each, per `SimulacionId`:
`ObtenerDeliveredOverTime`, `ObtenerDieselConsumption`, `ObtenerHarvesterOperatingTime`,
`ObtenerDistanciaPorVehiculo` and `ObtenerFleetComposition`. They are requested in
parallel, and a series that fails renders as absent instead of breaking the section.

Two things worth knowing:

- MySQL returns `DECIMAL` columns as **strings** (`"412.75"`), so `lib/api/client.ts`
  coerces every number before it reaches a component.
- The procedure `LEFT JOIN`s the KPIs, so a run that uploaded a recording but no metrics
  arrives with `kpis: null`. That is rendered as "no metrics yet", never as zeros.

Charts are inline SVG (`components/charts/primitives.tsx`) rather than a charting
library, for the same reason the diagrams are: nothing to download at open time. The
categorical palette is validated for contrast and colorblind separation against the
`green-light` surface.

## Connecting the API (APIReto)

`lib/api/` is wired up for the simulations section. The client has a 3s
`AbortController` timeout, never throws, and always returns fallback data. To enable it,
set:

```bash
NEXT_PUBLIC_API_URL=https://<host>:5001
```

Without that variable the layer stays inert and returns `disabled`.

> **Note:** the API runs with `ssl_context="adhoc"` (self signed certificate). Mobile
> browsers block those, so a phone on the guest WiFi **cannot** reach it without a valid
> certificate. That is why the video is served from `/public` for the presentation.

## Branding

The site uses its own **Agentic Harvest** wordmark. John Deere is referenced in text only
("training partner"); their logo and assets are deliberately not used, and the footer
carries a non affiliation disclaimer. `public/JUANVENADO.svg` and `public/logojuan.png`
are their marks and are not referenced by the site.

## Structure

```
app/           layout, page (composes sections only), globals.css (tokens)
components/
  sections/    Hero, Algoritmo, Arquitectura, Simulaciones, Calculadora, Equipo, Roadmap, Footer
  diagrams/    pure algorithm SVGs
  charts/      inline SVG chart primitives for the simulations section
  calculator/  calculator and field preview (the only stateful client components)
  ui/          shadcn, do not hand edit
lib/
  harvest.ts   pure formulas (single definition)
  api/         client.ts, types.ts, fallback.ts
content/
  project.ts   ALL visible copy, typed
```

Rules: no component holds copy (it is imported from `content/project.ts`), formulas live
only in `lib/harvest.ts`, and everything is a Server Component except the nav
(scroll spy), the calculator, the video, and the model card image.
