/**
 * Single source of every visible string on the site.
 * No component should contain copy strings: everything is imported from here.
 */

export type NavItem = {
  id: string;
  label: string;
};

export type Metric = {
  value: string;
  unit?: string;
  label: string;
};

export type DiagramCopy = {
  id: string;
  title: string;
  body: string;
};

export type ScriptCard = {
  name: string;
  description: string;
};

export type FlowStep = {
  title: string;
  detail: string;
};

export type ModelCard = {
  name: string;
  author: string;
  /** Image served from /public. Drop the file at this path to replace the placeholder. */
  image: string;
};

export type TeamMember = {
  name: string;
  contribution: string;
};

export type SliderCopy = {
  id: "ancho" | "largo" | "anchoCorte" | "velocidad";
  label: string;
  unit: string;
  unitLong: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
};

export type ResultCopy = {
  id: "carriles" | "distanciaKm" | "tiempoH" | "areaHa";
  label: string;
  unit: string;
};

export type RoadmapItem = {
  title: string;
  detail: string;
};

export const site = {
  title: "Agentic Harvest | Autonomous harvesting simulated in Unity 6",
  description:
    "Multi-agent simulation of an autonomous wheat farm: a lead combine harvester and a follower tractor working a procedural field. University project presented to John Deere as training partner.",
} as const;

export const nav = {
  brand: { primary: "Agentic", accent: "Harvest" },
  ariaLabel: "Main navigation",
  items: [
    { id: "inicio", label: "Home" },
    { id: "algoritmo", label: "Algorithm" },
    { id: "calculadora", label: "Calculator" },
    { id: "equipo", label: "Team" },
  ] satisfies NavItem[],
} as const;

export const hero = {
  id: "inicio",
  eyebrow: "Challenge · John Deere training partner",
  title: "A combine that decides its own path",
  subtitle:
    "Multi-agent simulation in Unity 6: a lead combine harvester and a tractor with trailer working a procedurally generated wheat field.",
  video: {
    label: "Unity 6 simulation",
    caption: "Recording of the simulation running in real time.",
    /**
     * Video path served from /public: depends on neither the API nor the network.
     * Leave it empty while the file does not exist; the component shows a static
     * placeholder instead of a player stuck loading.
     * To publish: drop the file at public/media/simulacion.mp4 and set this to
     * '/media/simulacion.mp4'.
     */
    fallbackSrc: "",
    posterAlt: "View of the autonomous harvesting simulation in Unity 6",
    unavailable: "The demo runs live on the projector during the presentation.",
  },
  metrics: [
    { value: "4", label: "observation cameras" },
    { value: "15", unit: "s", label: "average lap time" },
    { value: "1,200", unit: "+", label: "wheat stalks simulated" },
  ] satisfies Metric[],
  cta: {
    label: "How it works",
    href: "#algoritmo",
  },
} as const;

export const algoritmo = {
  id: "algoritmo",
  eyebrow: "01 · Algorithm",
  title: "What the demo cannot explain on its own",
  intro:
    "The projector shows the result: the machines move and the wheat disappears. These four decisions are what make that movement efficient rather than a random walk.",
  diagrams: [
    {
      id: "boustrophedon",
      title: "Furrow path",
      body: "The field is split into parallel lanes exactly as wide as the header. The machine runs one lane end to end, turns 180 degrees at the headland and enters the next one in the opposite direction. It is the same pattern a plough follows: back and forth, without lifting the cut.",
    },
    {
      id: "alternado",
      title: "Sequential vs. alternating lanes",
      body: "Entering the immediately adjacent lane would demand a tighter turn than the machine's real turning radius allows. So the route skips a lane and comes back later for the ones it left: every turn gets the space the combine physically needs.",
    },
    {
      id: "cabecera",
      title: "Headland trim",
      body: "Before laying out the lanes, the algorithm reserves a perimeter strip as wide as the turning radius. The lanes only occupy the inner rectangle, and the headland stays clear for manoeuvring without leaving the field.",
    },
    {
      id: "rejilla",
      title: "Spatial grid",
      body: "The field is subdivided into cells and every stalk is registered in its own. Instead of checking more than a thousand stalks per frame to know which ones the header cuts, only the cells the header touches at that instant are queried.",
    },
  ] satisfies DiagramCopy[],
  labels: {
    secuencial: "Sequential",
    alternado: "Alternating",
    cabecera: "Reserved headland",
    cabezal: "Queried cells",
  },
  /** Accessible descriptions read out for each diagram. */
  alts: {
    boustrophedon:
      "Rectangular field covered by six parallel lanes joined by 180 degree turns at each end",
    secuencial:
      "Sequential route: lanes are visited in order and the turn between adjacent lanes is too tight",
    alternado:
      "Alternating route: a lane is skipped and revisited later, giving the turn twice the space",
    cabecera:
      "Field with a reserved perimeter strip, marked with a dashed line, where the machine turns without leaving the ground",
    rejilla:
      "Field divided into a grid of cells with scattered stalks; only the four cells the header touches are highlighted",
  },
} as const;

export const arquitectura = {
  id: "arquitectura",
  eyebrow: "02 · Architecture",
  title: "From the configuration panel to the field",
  intro:
    "The configuration is defined before entering the simulation and travels between scenes. Once inside, the combine is the only one that decides the route; the tractor reacts to it.",
  flow: [
    {
      title: "Configuration panel",
      detail: "The user defines the field and the machines before starting.",
    },
    {
      title: "ConfiguracionSimulacion",
      detail: "Preserves those values across the scene change.",
    },
    {
      title: "Simulation scene",
      detail: "Generates the terrain, the stalks and the agents.",
    },
    {
      title: "Combine harvester (leader)",
      detail: "Computes the furrow route and performs the cut.",
    },
    {
      title: "Tractor (follower)",
      detail: "Holds its lateral position relative to the leader.",
    },
  ] satisfies FlowStep[],
  scriptsTitle: "Project scripts",
  scripts: [
    {
      name: "Cosechadora.cs",
      description:
        "Lays out the lanes, executes the headland turns and cuts the stalks under the header.",
    },
    {
      name: "TractorAlLado.cs",
      description:
        "Keeps the tractor and its trailer alongside the combine as it advances.",
    },
    {
      name: "ParcelaSpawner.cs",
      description:
        "Procedurally generates the terrain, the stalks and the environment props.",
    },
    {
      name: "PanelConfiguracionUI.cs",
      description:
        "Builds the interface where the parameters are set before simulating.",
    },
    {
      name: "ConfiguracionSimulacion.cs",
      description:
        "Data bridge that survives the scene change and carries the configuration.",
    },
    {
      name: "SelectorModelo.cs",
      description:
        "Lets you choose which 3D model is instantiated per machine.",
    },
    {
      name: "CameraMove.cs",
      description:
        "Drives the four observation cameras and the switching between them.",
    },
  ] satisfies ScriptCard[],
  chipsTitle: "Stack",
  chips: [
    "Unity 6",
    "URP",
    "Input System",
    "Shader Graph",
    "NavMesh",
    "TextMeshPro",
  ],
} as const;

export const calculadora = {
  id: "calculadora",
  eyebrow: "03 · Calculator",
  title: "The same maths, with your numbers",
  intro:
    "Move the controls and the field redraws. Every calculation happens on your phone: there is no network call behind these numbers.",
  sliders: [
    {
      id: "ancho",
      label: "Field width",
      unit: "m",
      unitLong: "metres",
      min: 50,
      max: 500,
      step: 5,
      defaultValue: 200,
    },
    {
      id: "largo",
      label: "Field length",
      unit: "m",
      unitLong: "metres",
      min: 50,
      max: 800,
      step: 5,
      defaultValue: 500,
    },
    {
      id: "anchoCorte",
      label: "Cutting width",
      unit: "m",
      unitLong: "metres",
      min: 3,
      max: 15,
      step: 1,
      defaultValue: 9,
    },
    {
      id: "velocidad",
      label: "Speed",
      unit: "km/h",
      unitLong: "kilometres per hour",
      min: 2,
      max: 12,
      step: 0.5,
      defaultValue: 6,
    },
  ] satisfies SliderCopy[],
  results: [
    { id: "carriles", label: "Lanes", unit: "" },
    { id: "distanciaKm", label: "Distance travelled", unit: "km" },
    { id: "tiempoH", label: "Estimated time", unit: "h" },
    { id: "areaHa", label: "Area harvested", unit: "ha" },
  ] satisfies ResultCopy[],
  previewLabel: "Field view",
  /** Shown when the field has too many lanes to draw them all. */
  previewThinned: (step: number) => `showing 1 lane in ${step}`,
  previewAlt: "Top view of the field with the computed harvesting lanes",
  footnote: "The same formulas that run in the simulation.",
  /** Locale used to format the output numbers. */
  locale: "en-US",
} as const;

export const equipo = {
  id: "equipo",
  eyebrow: "04 · Team and 3D modelling",
  title: "Every model is our own",
  intro:
    "No store assets were used. Every machine, building and piece of the environment was modelled by the team for this project.",
  modelsTitle: "Project models",
  /**
   * Each card points at an image under /public/models. Drop a file at the path
   * below (any name you like, just keep the path in sync) and it replaces the
   * drawn placeholder automatically.
   */
  models: [
    {
      name: "Tractor",
      author: "Andrés",
      image: "/models/tractor.png",
    },
    {
      name: "Trailer",
      author: "Andrés",
      image: "/models/trailer.png",
    },
    {
      name: "Combine harvester",
      author: "Iván",
      image: "/models/combine.png",
    },
    {
      name: "Farmhouse",
      author: "Andrés",
      image: "/models/farmhouse.png",
    },
    {
      name: "Silo",
      author: "Samantha",
      image: "/models/silo.png",
    },
    {
      name: "Scarecrow",
      author: "Andrea",
      image: "/models/scarecrow.png",
    },
    {
      name: "Ghost",
      author: "Iván",
      image: "/models/ghost.png",
    },
    {
      name: "Trees",
      author: "Marcelo",
      image: "/models/trees.png",
    },
  ] satisfies ModelCard[],
  membersTitle: "Team members",
  members: [
    {
      name: "Andrés",
      contribution: "Tractor, trailer, wheels, farmhouse and fence.",
    },
    { name: "Samantha", contribution: "Silo and wheat model." },
    {
      name: "Andrea",
      contribution: "Scarecrow, rock floor, grass",
    },
    { name: "Iván", contribution: "Combine harvester and scene props." },
    { name: "Marcelo", contribution: "Trees and scene props." },
  ] satisfies TeamMember[],
} as const;

export const roadmap = {
  id: "roadmap",
  eyebrow: "05 · Roadmap",
  title: "What shipped and what comes next",
  doneTitle: "Shipped",
  done: [
    {
      title: "Procedural route",
      detail: "Lanes and turns computed from the field dimensions.",
    },
    {
      title: "Cutting optimised with a spatial grid",
      detail: "Neighbour cell lookups instead of walking every stalk.",
    },
    {
      title: "Companion tractor",
      detail: "Lateral following of the combine with the trailer hitched.",
    },
    {
      title: "Procedural terrain population",
      detail: "Stalks, trees and environment generated on every run.",
    },
    {
      title: "Configuration panel",
      detail: "Parameters adjustable before the simulation starts.",
    },
    {
      title: "Four cameras",
      detail: "Switchable views to observe the system from several angles.",
    },
  ] satisfies RoadmapItem[],
  nextTitle: "Next",
  next: [
    {
      title: "Tractor as a real autonomous agent",
      detail: "Its own decisions instead of rigid following of the leader.",
    },
    {
      title: "Instantiate N machines from configuration",
      detail: "A fleet of variable size coordinating over the same field.",
    },
    {
      title: "Obstacle avoidance with NavMesh",
      detail:
        "Routes that dodge environment and other machines without stopping.",
    },
    {
      title: "Efficiency metrics per machine",
      detail: "Distance, overlap and idle time measured per agent.",
    },
  ] satisfies RoadmapItem[],
  businessTitle: "Why it matters",
  business:
    "Every one of these pieces points at the same place: precision agriculture. A well planned route burns less fuel, a lane pattern without overlap avoids harvesting the same strip twice, and a fleet that coordinates on its own cuts the idle time between passes. What is a university simulation here is, out in the field, measurable operating margin.",
} as const;

export const footer = {
  teamTitle: "Team",
  team: ["Andrés", "Samantha", "Andrea", "Iván", "Marcelo"],
  university: "Tecnológico de Monterrey",
  course: "Multi-agent systems modelling with computer graphics",
  repo: {
    label: "GitHub repository",
    href: "https://github.com",
  },
  tagline: "Presented to John Deere · Training partner",
  disclaimer:
    "Independent academic project. Not affiliated with or endorsed by Deere & Company or its brands; the palette is a tribute, not an official identity.",
} as const;
