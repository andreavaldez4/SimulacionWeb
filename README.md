# SimulacionWeb

Sitio que acompaña la presentación de **MultiagentesReto** a John Deere (socio formador).
Los asistentes lo abren con un QR desde su celular mientras la demo de Unity corre en el proyector.

## Correr en local

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de producción
```

## Restricción de red

El sitio se abre desde el WiFi de invitados de una oficina corporativa. **Todo el
contenido de la presentación renderiza sin ninguna llamada de red**: la tipografía se
auto-hospeda en el build (`next/font`), los diagramas son SVG inline y la calculadora
corre 100% en el cliente. No hay spinners en el contenido principal.

## Publicar el video de la simulación

1. Graba la simulación desde Unity y exporta a MP4 (H.264 + AAC).
2. Deja el archivo en `public/media/simulacion.mp4`.
3. En `content/project.ts`, cambia `hero.video.fallbackSrc` a `'/media/simulacion.mp4'`.

Mientras `fallbackSrc` esté vacío, el hero muestra un placeholder estático en vez de un
reproductor cargando. Sirviendo el archivo desde `/public` el video no depende de la API.

## Conectar la API (APIReto)

`lib/api/` está lista pero **no conectada**. El cliente tiene timeout de 3 s con
`AbortController`, nunca lanza excepciones y siempre devuelve datos de respaldo.
Para activarla, define:

```bash
NEXT_PUBLIC_API_URL=https://<host>:5001
```

Sin esa variable la capa queda inerte y responde `disabled`.

> **Nota:** la API corre con `ssl_context="adhoc"` (certificado autofirmado). Los
> navegadores móviles bloquean esos certificados, así que un celular en el WiFi de
> invitados **no** podrá alcanzarla sin un certificado válido. Por eso el video se sirve
> desde `/public` para la presentación.

## Estructura

```
app/           layout, page (solo compone secciones), globals.css (tokens)
components/
  sections/    Hero, Algoritmo, Arquitectura, Calculadora, Equipo, Roadmap, Footer
  diagrams/    SVG puros del algoritmo
  calculator/  calculadora y preview del campo (únicos client components con estado)
  ui/          shadcn — no editar a mano
lib/
  harvest.ts   fórmulas puras (única definición)
  api/         client.ts, types.ts, fallback.ts
content/
  project.ts   TODO el texto visible, tipado
```

Reglas: ningún componente contiene copy (se importa de `content/project.ts`), las
fórmulas viven solo en `lib/harvest.ts`, y todo es Server Component salvo la nav
(scroll-spy), la calculadora y el video.
