'use client'

import { useState } from 'react'

import { hero } from '@/content/project'

/**
 * Reproductor de la grabación de Unity.
 *
 * El video solo se monta si hay una fuente declarada. Mientras no exista el
 * archivo, se muestra un placeholder estático del mismo tamaño 16:9: nunca un
 * spinner, porque el sitio se abre desde el WiFi de invitados y la restricción
 * del proyecto es que el contenido de la presentación no dependa de la red.
 *
 * Si el archivo existe pero falla (códec no soportado, archivo corrupto),
 * `onError` cae al mismo placeholder y el layout no se mueve.
 *
 * Para publicar el video: deja `simulacion.mp4` en /public/media y el
 * componente lo toma solo.
 */
export function SimulationVideo({ src = hero.video.fallbackSrc }: { src?: string }) {
  const [failed, setFailed] = useState(false)
  const showVideo = Boolean(src) && !failed

  return (
    <figure className="m-0">
      <div className="relative aspect-video border border-green-rule bg-green-dark">
        {showVideo ? (
          <video
            className="h-full w-full bg-black object-contain"
            src={src}
            controls
            playsInline
            preload="metadata"
            aria-label={hero.video.posterAlt}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center surco-texture-dark">
            <span aria-hidden="true" className="text-3xl text-jd-yellow">
              ▶
            </span>
            <p className="eyebrow text-green-soft">{hero.video.label}</p>
            <p className="max-w-[32ch] text-sm text-green-soft">{hero.video.unavailable}</p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-sm text-green-soft">{hero.video.caption}</figcaption>
    </figure>
  )
}
