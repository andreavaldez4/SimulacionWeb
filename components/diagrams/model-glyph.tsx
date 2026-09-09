/**
 * Siluetas de placeholder para los modelos 3D del equipo.
 * Son marcadores de posición dibujados a mano hasta que se sustituyan por
 * capturas de los modelos reales; cada una es distinta para que la rejilla
 * se lea de un vistazo.
 */

const stroke = { fill: 'none', stroke: '#367C2B', strokeWidth: 2 } as const
const solid = { fill: '#6B4F2A' } as const

const glyphs: Record<string, React.ReactNode> = {
  Tractor: (
    <>
      <path d="M14 40h34v-12h14l8 12h8" {...stroke} />
      <circle cx="24" cy="46" r="7" {...stroke} />
      <circle cx="64" cy="48" r="9" {...stroke} />
    </>
  ),
  Trailer: (
    <>
      <path d="M12 24h58v18H12z" {...stroke} />
      <path d="M70 38h10" {...stroke} />
      <circle cx="28" cy="48" r="6" {...stroke} />
      <circle cx="56" cy="48" r="6" {...stroke} />
    </>
  ),
  "Combine harvester": (
    <>
      <path d="M10 44h16v-6h12V22h22v22h18" {...stroke} />
      <path d="M10 44v-8h12" {...stroke} />
      <circle cx="46" cy="50" r="8" {...stroke} />
      <circle cx="76" cy="49" r="6" {...stroke} />
    </>
  ),
  Farmhouse: (
    <>
      <path d="M18 50V28l26-14 26 14v22z" {...stroke} />
      <path d="M38 50V36h12v14" {...stroke} />
    </>
  ),
  Silo: (
    <>
      <path d="M30 52V26a14 14 0 0 1 28 0v26z" {...stroke} />
      <path d="M30 36h28M30 44h28" {...stroke} />
    </>
  ),
  Scarecrow: (
    <>
      <circle cx="44" cy="20" r="7" {...stroke} />
      <path d="M44 27v18M24 34h40M44 45l-8 12M44 45l8 12" {...stroke} />
    </>
  ),
  Fence: (
    <>
      <path d="M16 24v28M32 24v28M48 24v28M64 24v28M78 24v28" {...stroke} />
      <path d="M10 32h74M10 44h74" {...stroke} />
    </>
  ),
  Trees: (
    <>
      <path d="M30 46a12 12 0 1 1 0-16 11 11 0 0 1 18 4 10 10 0 0 1-6 12z" {...stroke} />
      <path d="M34 46v10" {...stroke} />
      {/* Pine: layered canopy over a trunk. */}
      <rect x="62" y="46" width="4" height="10" {...solid} />
      <path d="M64 20l-9 12h18z" {...stroke} />
      <path d="M64 30l-11 14h22z" {...stroke} />
    </>
  ),
}

export function ModelGlyph({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 90 64"
      role="presentation"
      aria-hidden="true"
      className="h-24 w-full"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      {glyphs[name] ?? <rect x="20" y="20" width="50" height="26" {...stroke} />}
    </svg>
  )
}
