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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden eyebrow text-white md:block",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].brand.primary,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-jd-yellow",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].brand.accent
                        }, void 0, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 58,
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
                                lineNumber: 66,
                                columnNumber: 17
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/components/site-nav.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/site-nav.tsx",
                    lineNumber: 61,
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
 * Fuente única de todo el texto visible del sitio.
 * Ningún componente debe contener strings de copy: todo se importa de aquí.
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
    title: 'MultiagentesReto — Cosecha autónoma simulada en Unity 6',
    description: 'Simulación multiagente de una granja de trigo autónoma: una cosechadora líder y un tractor seguidor recorriendo un campo procedural. Proyecto universitario presentado a John Deere como socio formador.'
};
const nav = {
    brand: {
        primary: 'Multiagentes',
        accent: 'Reto'
    },
    ariaLabel: 'Navegación principal',
    items: [
        {
            id: 'inicio',
            label: 'Inicio'
        },
        {
            id: 'algoritmo',
            label: 'Algoritmo'
        },
        {
            id: 'calculadora',
            label: 'Calculadora'
        },
        {
            id: 'equipo',
            label: 'Equipo'
        }
    ]
};
const hero = {
    id: 'inicio',
    eyebrow: 'Reto — Socio formador John Deere',
    title: 'Una cosechadora que decide sola por dónde pasar',
    subtitle: 'Simulación multiagente en Unity 6: una cosechadora líder y un tractor con remolque cosechando un campo de trigo generado por procedimiento.',
    video: {
        label: 'Simulación en Unity 6',
        caption: 'Grabación de la simulación corriendo en tiempo real.',
        /**
     * Ruta del video servida desde /public: no depende de la API ni de la red.
     * Déjala vacía mientras no exista el archivo; el componente muestra un
     * placeholder estático en vez de un reproductor que se queda cargando.
     * Para publicar: coloca el archivo en public/media/simulacion.mp4 y pon
     * aquí '/media/simulacion.mp4'.
     */ fallbackSrc: '',
        posterAlt: 'Vista de la simulación de cosecha autónoma en Unity 6',
        unavailable: 'La demo corre en vivo en el proyector durante la presentación.'
    },
    metrics: [
        {
            value: '4',
            label: 'cámaras'
        },
        {
            value: '15 s',
            label: 'por vuelta'
        },
        {
            value: '1,200+',
            label: 'espigas'
        }
    ],
    cta: {
        label: 'Cómo funciona',
        href: '#algoritmo'
    }
};
const algoritmo = {
    id: 'algoritmo',
    eyebrow: '01 — Algoritmo',
    title: 'Lo que la demo no alcanza a explicar',
    intro: 'En el proyector se ve el resultado: las máquinas se mueven y el trigo desaparece. Estas cuatro decisiones son las que hacen que ese movimiento sea eficiente y no una caminata al azar.',
    diagrams: [
        {
            id: 'boustrophedon',
            title: 'Recorrido en surco',
            body: 'El campo se divide en carriles paralelos del ancho exacto del cabezal. La máquina recorre uno completo, gira 180° en la cabecera y entra al siguiente en sentido contrario. Es el mismo patrón que sigue un arado: ida y vuelta, sin levantar el corte.'
        },
        {
            id: 'alternado',
            title: 'Secuencial vs. carriles alternados',
            body: 'Entrar al carril inmediatamente contiguo exigiría un giro más cerrado que el radio real de la máquina. Por eso el recorrido salta un carril y regresa después por los que dejó pendientes: cada giro tiene el espacio que la cosechadora necesita físicamente.'
        },
        {
            id: 'cabecera',
            title: 'Recorte de cabecera',
            body: 'Antes de trazar los carriles, el algoritmo reserva una franja perimetral del ancho del radio de giro. Los carriles solo ocupan el rectángulo interior, y la cabecera queda libre para maniobrar sin salirse del campo.'
        },
        {
            id: 'rejilla',
            title: 'Rejilla espacial',
            body: 'El campo se subdivide en celdas y cada espiga se registra en la suya. En vez de revisar más de mil espigas por frame para saber cuáles corta el cabezal, solo se consultan las celdas que el cabezal toca en ese instante.'
        }
    ],
    labels: {
        secuencial: 'Secuencial',
        alternado: 'Alternado',
        cabecera: 'Cabecera reservada',
        cabezal: 'Celdas consultadas'
    }
};
const arquitectura = {
    id: 'arquitectura',
    eyebrow: '02 — Arquitectura',
    title: 'Del panel de configuración al campo',
    intro: 'La configuración se define antes de entrar a la simulación y viaja entre escenas. Ya dentro, la cosechadora es la única que decide la ruta; el tractor reacciona a ella.',
    flow: [
        {
            title: 'Panel de configuración',
            detail: 'El usuario define el campo y las máquinas antes de arrancar.'
        },
        {
            title: 'ConfiguracionSimulacion',
            detail: 'Conserva esos valores al cambiar de escena.'
        },
        {
            title: 'Escena de simulación',
            detail: 'Genera el terreno, las espigas y los agentes.'
        },
        {
            title: 'Cosechadora (líder)',
            detail: 'Calcula la ruta en surco y ejecuta el corte.'
        },
        {
            title: 'Tractor (seguidor)',
            detail: 'Mantiene la posición lateral respecto a la líder.'
        }
    ],
    scriptsTitle: 'Scripts del proyecto',
    scripts: [
        {
            name: 'Cosechadora.cs',
            description: 'Traza los carriles, ejecuta los giros de cabecera y corta las espigas del cabezal.'
        },
        {
            name: 'TractorAlLado.cs',
            description: 'Mantiene el tractor y su remolque a un costado de la cosechadora mientras avanza.'
        },
        {
            name: 'ParcelaSpawner.cs',
            description: 'Genera por procedimiento el terreno, las espigas y los elementos del entorno.'
        },
        {
            name: 'PanelConfiguracionUI.cs',
            description: 'Construye la interfaz donde se ajustan los parámetros antes de simular.'
        },
        {
            name: 'ConfiguracionSimulacion.cs',
            description: 'Puente de datos que sobrevive al cambio de escena y transporta la configuración.'
        },
        {
            name: 'SelectorModelo.cs',
            description: 'Permite elegir qué modelo 3D se instancia para cada máquina.'
        },
        {
            name: 'CameraMove.cs',
            description: 'Controla las cuatro cámaras de observación y el cambio entre ellas.'
        }
    ],
    chipsTitle: 'Stack',
    chips: [
        'Unity 6',
        'URP',
        'Input System',
        'Shader Graph',
        'NavMesh',
        'TextMeshPro'
    ]
};
const calculadora = {
    id: 'calculadora',
    eyebrow: '03 — Calculadora',
    title: 'Las mismas cuentas, con tus números',
    intro: 'Mueve los controles y el campo de la derecha se redibuja. Todo el cálculo ocurre en tu teléfono: no hay ninguna llamada de red detrás de estos números.',
    sliders: [
        {
            id: 'ancho',
            label: 'Ancho del campo',
            unit: 'm',
            unitLong: 'metros',
            min: 50,
            max: 500,
            step: 5,
            defaultValue: 200
        },
        {
            id: 'largo',
            label: 'Largo del campo',
            unit: 'm',
            unitLong: 'metros',
            min: 50,
            max: 800,
            step: 5,
            defaultValue: 500
        },
        {
            id: 'anchoCorte',
            label: 'Ancho de corte',
            unit: 'm',
            unitLong: 'metros',
            min: 3,
            max: 15,
            step: 1,
            defaultValue: 9
        },
        {
            id: 'velocidad',
            label: 'Velocidad',
            unit: 'km/h',
            unitLong: 'kilómetros por hora',
            min: 2,
            max: 12,
            step: 0.5,
            defaultValue: 6
        }
    ],
    results: [
        {
            id: 'carriles',
            label: 'Carriles',
            unit: ''
        },
        {
            id: 'distanciaKm',
            label: 'Distancia recorrida',
            unit: 'km'
        },
        {
            id: 'tiempoH',
            label: 'Tiempo estimado',
            unit: 'h'
        },
        {
            id: 'areaHa',
            label: 'Área cosechada',
            unit: 'ha'
        }
    ],
    previewLabel: 'Vista del campo',
    previewAlt: 'Vista superior del campo con los carriles de cosecha calculados',
    footnote: 'Las mismas fórmulas que corren en la simulación.'
};
const equipo = {
    id: 'equipo',
    eyebrow: '04 — Equipo y modelado 3D',
    title: 'Todos los modelos son nuestros',
    intro: 'No se usó ningún asset de tienda. Cada máquina, edificio y pieza del entorno fue modelada por el equipo para este proyecto.',
    modelsTitle: 'Modelos del proyecto',
    models: [
        {
            name: 'Tractor',
            author: 'Andrés'
        },
        {
            name: 'Remolque',
            author: 'Andrés'
        },
        {
            name: 'Cosechadora',
            author: 'Iván'
        },
        {
            name: 'Granja',
            author: 'Andrés'
        },
        {
            name: 'Silo',
            author: 'Samantha'
        },
        {
            name: 'Espantapájaros',
            author: 'Andrea'
        },
        {
            name: 'Barda',
            author: 'Andrés'
        },
        {
            name: 'Árboles',
            author: 'Marcelo'
        }
    ],
    membersTitle: 'Integrantes',
    members: [
        {
            name: 'Andrés',
            contribution: 'Tractor, remolque, llantas, granja y barda.'
        },
        {
            name: 'Samantha',
            contribution: 'Silo y modelo de trigo.'
        },
        {
            name: 'Andrea',
            contribution: 'Espantapájaros, piso de rocas, pasto y panel de configuración.'
        },
        {
            name: 'Iván',
            contribution: 'Cosechadora y elementos de escena.'
        },
        {
            name: 'Marcelo',
            contribution: 'Árboles y elementos de escena.'
        }
    ]
};
const roadmap = {
    id: 'roadmap',
    eyebrow: '05 — Roadmap',
    title: 'Lo entregado y lo que sigue',
    doneTitle: 'Entregado',
    done: [
        {
            title: 'Ruta procedural',
            detail: 'Carriles y giros calculados a partir del tamaño del campo.'
        },
        {
            title: 'Corte optimizado con rejilla espacial',
            detail: 'Consulta por celdas vecinas en lugar de recorrer todas las espigas.'
        },
        {
            title: 'Tractor acompañante',
            detail: 'Seguimiento lateral de la cosechadora con remolque enganchado.'
        },
        {
            title: 'Poblado procedural del terreno',
            detail: 'Espigas, árboles y entorno generados en cada corrida.'
        },
        {
            title: 'Panel de configuración',
            detail: 'Parámetros ajustables antes de iniciar la simulación.'
        },
        {
            title: '4 cámaras',
            detail: 'Vistas alternables para observar el sistema desde distintos ángulos.'
        }
    ],
    nextTitle: 'Siguiente',
    next: [
        {
            title: 'Tractor como agente autónomo real',
            detail: 'Decisiones propias en vez de seguimiento rígido de la líder.'
        },
        {
            title: 'Instanciar N máquinas según configuración',
            detail: 'Flotilla de tamaño variable coordinándose sobre el mismo campo.'
        },
        {
            title: 'Evasión de obstáculos con NavMesh',
            detail: 'Rutas que esquivan entorno y otras máquinas sin detenerse.'
        },
        {
            title: 'Métricas de eficiencia por máquina',
            detail: 'Distancia, solape y tiempo muerto medidos por agente.'
        }
    ],
    businessTitle: 'Por qué importa',
    business: 'Cada una de estas piezas apunta al mismo lugar: agricultura de precisión. Una ruta bien trazada consume menos combustible, un patrón de carriles sin solape evita cosechar dos veces la misma franja, y una flotilla que se coordina sola reduce el tiempo muerto entre pasadas. Lo que aquí es una simulación universitaria es, en campo, margen operativo medible.'
};
const footer = {
    teamTitle: 'Equipo',
    team: [
        'Andrés',
        'Samantha',
        'Andrea',
        'Iván',
        'Marcelo'
    ],
    university: 'Tecnológico de Monterrey',
    course: 'Modelación de sistemas multiagentes con gráficas computacionales',
    repo: {
        label: 'Repositorio en GitHub',
        href: 'https://github.com'
    },
    tagline: 'Presentado a John Deere — Socio formador',
    disclaimer: 'Proyecto académico independiente. No afiliado a Deere & Company ni a sus marcas; la paleta es un homenaje, no una identidad oficial.'
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kqz_qd._.js.map