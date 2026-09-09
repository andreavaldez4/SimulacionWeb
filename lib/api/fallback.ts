import { hero } from '@/content/project'

import type { VideoSimulacion } from './types'

/**
 * Datos de respaldo. Se usan cuando la API no responde, no está configurada,
 * o tarda más que el timeout.
 *
 * La restricción del sitio es que el contenido de la presentación renderice
 * sin depender de la red: este módulo es lo que hace posible esa garantía,
 * porque toda ruta de fallo termina aquí en vez de en un spinner.
 */

export const FALLBACK_VIDEOS: VideoSimulacion[] = hero.video.fallbackSrc
  ? [
      {
        Id: 0,
        SimulacionId: 0,
        Ruta: hero.video.fallbackSrc,
        FechaCreacion: '',
      },
    ]
  : []
