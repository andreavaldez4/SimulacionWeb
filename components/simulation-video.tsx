import { hero } from '@/content/project'

/**
 * Reproductor de la grabación de Unity.
 *
 * Se reproduce en bucle el archivo local de /public (LoopVideo.mov), sin
 * depender de la red: la restricción del proyecto es que el contenido de la
 * presentación no requiera conexión, ya que el sitio se abre desde el WiFi de
 * invitados.
 */
export function SimulationVideo({
  src = '/LoopVideo.mov',
}: {
  src?: string
}) {
  return (
    <figure className="m-0">
      <div className="relative aspect-video border border-green-rule bg-green-dark">
        <video
          className="h-full w-full bg-black object-contain"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={hero.video.posterAlt}
        />
      </div>
      <figcaption className="mt-3 text-sm text-green-soft">{hero.video.caption}</figcaption>
    </figure>
  )
}
