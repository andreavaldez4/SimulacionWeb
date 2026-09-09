# Model images

Drop a render of each 3D model here. The file must match the `image` path
declared in `content/project.ts` (`equipo.models[].image`):

| Model             | Expected path              |
|-------------------|----------------------------|
| Tractor           | `/models/tractor.png`      |
| Trailer           | `/models/trailer.png`      |
| Combine harvester | `/models/combine.png`      |
| Farmhouse         | `/models/farmhouse.png`    |
| Silo              | `/models/silo.png`         |
| Scarecrow         | `/models/scarecrow.png`    |
| Fence             | `/models/fence.png`        |
| Trees             | `/models/trees.png`        |

To use different filenames, edit the `image` field in `content/project.ts`.

While a file is missing, the card falls back to a drawn placeholder, so the
grid never shows a broken image. PNG with transparency works best; the image is
rendered with `object-contain` at 96px tall.
