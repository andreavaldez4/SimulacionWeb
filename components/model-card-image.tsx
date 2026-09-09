"use client";

import { useState } from "react";

import { ModelGlyph } from "@/components/diagrams/model-glyph";

/**
 * Rendered image of a 3D model, with the drawn placeholder as fallback.
 *
 * The file is served straight from /public, so it needs no network call beyond
 * the page's own assets. While the file does not exist the drawn glyph shows
 * instead, so the grid never breaks and there is no broken-image icon.
 *
 * To publish a render: drop the file at the path declared in
 * content/project.ts (equipo.models[].image) and it appears automatically.
 */
export function ModelCardImage({
  src,
  name,
  alt,
}: {
  src: string;
  name: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ModelGlyph name={name} />;
  }

  return (
    // Plain <img>: next/image is configured unoptimized, and this keeps the
    // component free of layout-shifting loaders.
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-24 w-full object-contain"
      onError={() => setFailed(true)}
    />
  );
}
