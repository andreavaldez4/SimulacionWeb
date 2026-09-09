import type { Metadata, Viewport } from 'next'
import { Roboto_Condensed } from 'next/font/google'

import { SiteNav } from '@/components/site-nav'
import { site } from '@/content/project'

import './globals.css'

// Auto-hospedada en el build: el sitio no depende de fonts.googleapis.com
// al abrirse desde el WiFi de invitados.
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto-condensed',
})

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1B3D1A',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body className="bg-bone text-ink">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-green-dark focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <SiteNav />
        {children}
      </body>
    </html>
  )
}
