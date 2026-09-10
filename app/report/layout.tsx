import type { Metadata } from "next";

/**
 * El reporte tiene su propio layout raíz (fuera del route group `(site)`) para
 * que no herede la barra de navegación ni el fondo de la marca: es una hoja A4
 * que se imprime, no una página del sitio. Tampoco carga globals.css, así que
 * lo que se ve es exactamente lo que sale en el PDF.
 */

export const metadata: Metadata = {
  title: "Harvest insights report",
  robots: { index: false, follow: false },
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#ffffff" }}>{children}</body>
    </html>
  );
}
