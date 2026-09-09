/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Permite abrir el dev server desde el celular por la IP de la red local.
  // Sin esto Next bloquea los chunks de JS como peticiones cross-origin: el
  // HTML se ve bien pero React nunca hidrata y los sliders no responden.
  // Solo aplica en desarrollo; en producción no tiene efecto.
  allowedDevOrigins: ['10.22.191.163', '192.168.*.*', '10.*.*.*'],
}

export default nextConfig
