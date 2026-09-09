module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/site-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteNav",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/project.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const ids = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].items.map((item)=>item.id);
function SiteNav() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ids[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = ids.map((id)=>document.getElementById(id)).filter((el)=>el !== null);
        if (sections.length === 0) return;
        const visible = new Map();
        const observer = new IntersectionObserver((entries)=>{
            for (const entry of entries){
                if (entry.isIntersecting) {
                    visible.set(entry.target.id, entry.boundingClientRect.top);
                } else {
                    visible.delete(entry.target.id);
                }
            }
            if (visible.size === 0) return;
            // La sección visible cuyo borde superior esté más arriba es la que
            // el lector está mirando.
            const [topMost] = [
                ...visible.entries()
            ].sort((a, b)=>a[1] - b[1]);
            setActive(topMost[0]);
        }, {
            rootMargin: '-72px 0px -55% 0px',
            threshold: 0
        });
        for (const section of sections)observer.observe(section);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].ariaLabel,
        className: "on-dark fixed inset-x-0 bottom-0 z-40 border-t border-green-rule bg-green-dark md:sticky md:top-0 md:bottom-auto md:border-t-0 md:border-b",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-[1100px] items-stretch md:items-center md:justify-between md:px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#inicio",
                    className: "hidden items-center gap-2 eyebrow text-white md:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandMark, {
                            className: "h-5 w-auto text-jd-yellow"
                        }, void 0, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].brand.primary,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-jd-yellow",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].brand.accent
                                }, void 0, false, {
                                    fileName: "[project]/components/site-nav.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid w-full grid-cols-4 md:flex md:w-auto md:gap-1",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].items.map((item)=>{
                        const isActive = active === item.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "contents",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${item.id}`,
                                "aria-current": isActive ? 'true' : undefined,
                                className: [
                                    'border-t-2 px-3 py-3 text-center eyebrow transition-colors md:border-t-0 md:border-b-2 md:px-4 md:py-4',
                                    isActive ? 'border-jd-yellow text-jd-yellow' : 'border-transparent text-green-soft hover:text-white'
                                ].join(' '),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/components/site-nav.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-nav.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-nav.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/project.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Single source of every visible string on the site.
 * No component should contain copy strings: everything is imported from here.
 */ __turbopack_context__.s([
    "algoritmo",
    ()=>algoritmo,
    "arquitectura",
    ()=>arquitectura,
    "calculadora",
    ()=>calculadora,
    "equipo",
    ()=>equipo,
    "footer",
    ()=>footer,
    "hero",
    ()=>hero,
    "nav",
    ()=>nav,
    "roadmap",
    ()=>roadmap,
    "site",
    ()=>site
]);
const site = {
    title: "Agentic Harvest | Autonomous harvesting simulated in Unity 6",
    description: "Multi-agent simulation of an autonomous wheat farm: a lead combine harvester and a follower tractor working a procedural field. University project presented to John Deere as training partner."
};
const nav = {
    brand: {
        primary: "Agentic",
        accent: "Harvest"
    },
    ariaLabel: "Main navigation",
    items: [
        {
            id: "inicio",
            label: "Home"
        },
        {
            id: "algoritmo",
            label: "Algorithm"
        },
        {
            id: "calculadora",
            label: "Calculator"
        },
        {
            id: "equipo",
            label: "Team"
        }
    ]
};
const hero = {
    id: "inicio",
    eyebrow: "Challenge · John Deere training partner",
    title: "A combine that decides its own path",
    subtitle: "Multi-agent simulation in Unity 6: a lead combine harvester and a tractor with trailer working a procedurally generated wheat field.",
    video: {
        label: "Unity 6 simulation",
        caption: "Recording of the simulation running in real time.",
        /**
     * Video path served from /public: depends on neither the API nor the network.
     * Leave it empty while the file does not exist; the component shows a static
     * placeholder instead of a player stuck loading.
     * To publish: drop the file at public/media/simulacion.mp4 and set this to
     * '/media/simulacion.mp4'.
     */ fallbackSrc: "",
        posterAlt: "View of the autonomous harvesting simulation in Unity 6",
        unavailable: "The demo runs live on the projector during the presentation."
    },
    metrics: [
        {
            value: "4",
            label: "cameras"
        },
        {
            value: "15 s",
            label: "per lap"
        },
        {
            value: "1,200+",
            label: "wheat stalks"
        }
    ],
    cta: {
        label: "How it works",
        href: "#algoritmo"
    }
};
const algoritmo = {
    id: "algoritmo",
    eyebrow: "01 · Algorithm",
    title: "What the demo cannot explain on its own",
    intro: "The projector shows the result: the machines move and the wheat disappears. These four decisions are what make that movement efficient rather than a random walk.",
    diagrams: [
        {
            id: "boustrophedon",
            title: "Furrow path",
            body: "The field is split into parallel lanes exactly as wide as the header. The machine runs one lane end to end, turns 180 degrees at the headland and enters the next one in the opposite direction. It is the same pattern a plough follows: back and forth, without lifting the cut."
        },
        {
            id: "alternado",
            title: "Sequential vs. alternating lanes",
            body: "Entering the immediately adjacent lane would demand a tighter turn than the machine's real turning radius allows. So the route skips a lane and comes back later for the ones it left: every turn gets the space the combine physically needs."
        },
        {
            id: "cabecera",
            title: "Headland trim",
            body: "Before laying out the lanes, the algorithm reserves a perimeter strip as wide as the turning radius. The lanes only occupy the inner rectangle, and the headland stays clear for manoeuvring without leaving the field."
        },
        {
            id: "rejilla",
            title: "Spatial grid",
            body: "The field is subdivided into cells and every stalk is registered in its own. Instead of checking more than a thousand stalks per frame to know which ones the header cuts, only the cells the header touches at that instant are queried."
        }
    ],
    labels: {
        secuencial: "Sequential",
        alternado: "Alternating",
        cabecera: "Reserved headland",
        cabezal: "Queried cells"
    }
};
const arquitectura = {
    id: "arquitectura",
    eyebrow: "02 · Architecture",
    title: "From the configuration panel to the field",
    intro: "The configuration is defined before entering the simulation and travels between scenes. Once inside, the combine is the only one that decides the route; the tractor reacts to it.",
    flow: [
        {
            title: "Configuration panel",
            detail: "The user defines the field and the machines before starting."
        },
        {
            title: "ConfiguracionSimulacion",
            detail: "Preserves those values across the scene change."
        },
        {
            title: "Simulation scene",
            detail: "Generates the terrain, the stalks and the agents."
        },
        {
            title: "Combine harvester (leader)",
            detail: "Computes the furrow route and performs the cut."
        },
        {
            title: "Tractor (follower)",
            detail: "Holds its lateral position relative to the leader."
        }
    ],
    scriptsTitle: "Project scripts",
    scripts: [
        {
            name: "Cosechadora.cs",
            description: "Lays out the lanes, executes the headland turns and cuts the stalks under the header."
        },
        {
            name: "TractorAlLado.cs",
            description: "Keeps the tractor and its trailer alongside the combine as it advances."
        },
        {
            name: "ParcelaSpawner.cs",
            description: "Procedurally generates the terrain, the stalks and the environment props."
        },
        {
            name: "PanelConfiguracionUI.cs",
            description: "Builds the interface where the parameters are set before simulating."
        },
        {
            name: "ConfiguracionSimulacion.cs",
            description: "Data bridge that survives the scene change and carries the configuration."
        },
        {
            name: "SelectorModelo.cs",
            description: "Lets you choose which 3D model is instantiated per machine."
        },
        {
            name: "CameraMove.cs",
            description: "Drives the four observation cameras and the switching between them."
        }
    ],
    chipsTitle: "Stack",
    chips: [
        "Unity 6",
        "URP",
        "Input System",
        "Shader Graph",
        "NavMesh",
        "TextMeshPro"
    ]
};
const calculadora = {
    id: "calculadora",
    eyebrow: "03 · Calculator",
    title: "The same maths, with your numbers",
    intro: "Move the controls and the field redraws. Every calculation happens on your phone: there is no network call behind these numbers.",
    sliders: [
        {
            id: "ancho",
            label: "Field width",
            unit: "m",
            unitLong: "metres",
            min: 50,
            max: 500,
            step: 5,
            defaultValue: 200
        },
        {
            id: "largo",
            label: "Field length",
            unit: "m",
            unitLong: "metres",
            min: 50,
            max: 800,
            step: 5,
            defaultValue: 500
        },
        {
            id: "anchoCorte",
            label: "Cutting width",
            unit: "m",
            unitLong: "metres",
            min: 3,
            max: 15,
            step: 1,
            defaultValue: 9
        },
        {
            id: "velocidad",
            label: "Speed",
            unit: "km/h",
            unitLong: "kilometres per hour",
            min: 2,
            max: 12,
            step: 0.5,
            defaultValue: 6
        }
    ],
    results: [
        {
            id: "carriles",
            label: "Lanes",
            unit: ""
        },
        {
            id: "distanciaKm",
            label: "Distance travelled",
            unit: "km"
        },
        {
            id: "tiempoH",
            label: "Estimated time",
            unit: "h"
        },
        {
            id: "areaHa",
            label: "Area harvested",
            unit: "ha"
        }
    ],
    previewLabel: "Field view",
    previewAlt: "Top view of the field with the computed harvesting lanes",
    footnote: "The same formulas that run in the simulation.",
    /** Locale used to format the output numbers. */ locale: "en-US"
};
const equipo = {
    id: "equipo",
    eyebrow: "04 · Team and 3D modelling",
    title: "Every model is our own",
    intro: "No store assets were used. Every machine, building and piece of the environment was modelled by the team for this project.",
    modelsTitle: "Project models",
    /**
   * Each card points at an image under /public/models. Drop a file at the path
   * below (any name you like, just keep the path in sync) and it replaces the
   * drawn placeholder automatically.
   */ models: [
        {
            name: "Tractor",
            author: "Andrés",
            image: "/models/tractor.png"
        },
        {
            name: "Trailer",
            author: "Andrés",
            image: "/models/trailer.png"
        },
        {
            name: "Combine harvester",
            author: "Iván",
            image: "/models/combine.png"
        },
        {
            name: "Farmhouse",
            author: "Andrés",
            image: "/models/farmhouse.png"
        },
        {
            name: "Silo",
            author: "Samantha",
            image: "/models/silo.png"
        },
        {
            name: "Scarecrow",
            author: "Andrea",
            image: "/models/scarecrow.png"
        },
        {
            name: "Fence",
            author: "Andrés",
            image: "/models/fence.png"
        },
        {
            name: "Trees",
            author: "Marcelo",
            image: "/models/trees.png"
        }
    ],
    membersTitle: "Team members",
    members: [
        {
            name: "Andrés",
            contribution: "Tractor, trailer, wheels, farmhouse and fence."
        },
        {
            name: "Samantha",
            contribution: "Silo and wheat model."
        },
        {
            name: "Andrea",
            contribution: "Scarecrow, rock floor, grass and configuration panel."
        },
        {
            name: "Iván",
            contribution: "Combine harvester and scene props."
        },
        {
            name: "Marcelo",
            contribution: "Trees and scene props."
        }
    ]
};
const roadmap = {
    id: "roadmap",
    eyebrow: "05 · Roadmap",
    title: "What shipped and what comes next",
    doneTitle: "Shipped",
    done: [
        {
            title: "Procedural route",
            detail: "Lanes and turns computed from the field dimensions."
        },
        {
            title: "Cutting optimised with a spatial grid",
            detail: "Neighbour cell lookups instead of walking every stalk."
        },
        {
            title: "Companion tractor",
            detail: "Lateral following of the combine with the trailer hitched."
        },
        {
            title: "Procedural terrain population",
            detail: "Stalks, trees and environment generated on every run."
        },
        {
            title: "Configuration panel",
            detail: "Parameters adjustable before the simulation starts."
        },
        {
            title: "Four cameras",
            detail: "Switchable views to observe the system from several angles."
        }
    ],
    nextTitle: "Next",
    next: [
        {
            title: "Tractor as a real autonomous agent",
            detail: "Its own decisions instead of rigid following of the leader."
        },
        {
            title: "Instantiate N machines from configuration",
            detail: "A fleet of variable size coordinating over the same field."
        },
        {
            title: "Obstacle avoidance with NavMesh",
            detail: "Routes that dodge environment and other machines without stopping."
        },
        {
            title: "Efficiency metrics per machine",
            detail: "Distance, overlap and idle time measured per agent."
        }
    ],
    businessTitle: "Why it matters",
    business: "Every one of these pieces points at the same place: precision agriculture. A well planned route burns less fuel, a lane pattern without overlap avoids harvesting the same strip twice, and a fleet that coordinates on its own cuts the idle time between passes. What is a university simulation here is, out in the field, measurable operating margin."
};
const footer = {
    teamTitle: "Team",
    team: [
        "Andrés",
        "Samantha",
        "Andrea",
        "Iván",
        "Marcelo"
    ],
    university: "Tecnológico de Monterrey",
    course: "Multi-agent systems modelling with computer graphics",
    repo: {
        label: "GitHub repository",
        href: "https://github.com"
    },
    tagline: "Presented to John Deere · Training partner",
    disclaimer: "Independent academic project. Not affiliated with or endorsed by Deere & Company or its brands; the palette is a tribute, not an official identity."
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kqz_qd._.js.map