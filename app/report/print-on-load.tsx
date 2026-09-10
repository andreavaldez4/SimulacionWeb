"use client";

import { useEffect } from "react";

/**
 * Abre el diálogo de impresión cuando la URL trae ?print=1.
 *
 * Se espera a que las imágenes terminen de cargar: si se llama a print() con el
 * banner a medias, Chrome imprime el hueco. Sin el parámetro no hace nada, de
 * modo que la hoja se puede revisar en pantalla.
 */
export function PrintOnLoad() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("print") !== "1") return;

    let cancelado = false;

    const imprimir = () => {
      if (!cancelado) window.print();
    };

    const pendientes = Array.from(document.images).filter((img) => !img.complete);

    if (pendientes.length === 0) {
      // requestAnimationFrame doble: deja que el layout se asiente antes de imprimir.
      requestAnimationFrame(() => requestAnimationFrame(imprimir));
      return;
    }

    Promise.all(
      pendientes.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.addEventListener("load", () => resolve(), { once: true });
            img.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    ).then(() => requestAnimationFrame(imprimir));

    return () => {
      cancelado = true;
    };
  }, []);

  return null;
}
