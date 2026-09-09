"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { nav } from "@/content/project";

const ids = nav.items.map((item) => item.id);

/**
 * Nav inferior fija en móvil, barra superior sticky en desktop.
 * El item activo se resuelve con IntersectionObserver: la sección visible
 * más cercana al inicio del viewport gana.
 */
export function SiteNav() {
  const [active, setActive] = useState<string>(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size === 0) return;

        // La sección visible cuyo borde superior esté más arriba es la que
        // el lector está mirando.
        const [topMost] = [...visible.entries()].sort((a, b) => a[1] - b[1]);
        setActive(topMost[0]);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label={nav.ariaLabel}
      className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-green-rule bg-green-dark md:sticky md:top-0 md:bottom-auto md:border-t-0 md:border-b"
    >
      {/* Tres columnas: marca / nav / logo del socio. La columna central usa
          1fr a cada lado, así los links quedan centrados respecto a toda la
          barra y no solo respecto al hueco entre las dos marcas. */}
      <div className="mx-auto flex w-full max-w-[1100px] items-stretch md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:px-4">
        <a
          href="#inicio"
          className="hidden items-center gap-2.5 eyebrow text-base text-white md:flex"
        >
          <BrandMark className="h-6 w-auto text-jd-yellow" />
          <span>
            {nav.brand.primary}{" "}
            <span className="text-jd-yellow">{nav.brand.accent}</span>
          </span>
        </a>

        <ul className="grid w-full grid-cols-4 md:flex md:w-auto md:justify-self-center md:gap-1">
          {nav.items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="contents">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={[
                    "border-t-2 px-3 py-3 text-center eyebrow transition-colors md:border-t-0 md:border-b-2 md:px-4 md:py-4",
                    isActive
                      ? "border-jd-yellow text-jd-yellow"
                      : "border-transparent text-green-soft hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Logo del socio formador, autorizado para este uso. El PNG trae
            wordmark (1920x1220, más ancho que alto), así que se fija por
            altura y el ancho queda libre para no deformarlo. El margen
            derecho del contenedor (px-4) espeja el que la marca propia tiene
            a la izquierda, para que la barra quede simétrica. */}
        <a
          href="#inicio"
          aria-label="John Deere, training partner"
          className="hidden items-center md:flex md:justify-self-end"
        >
          <img
            src="/juanvenadologo.png"
            alt="John Deere"
            className="h-11 w-auto shrink-0 object-contain"
          />
        </a>
      </div>
    </nav>
  );
}
