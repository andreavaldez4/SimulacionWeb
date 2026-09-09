(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/calculator/field-preview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldPreview",
    ()=>FieldPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$diagrams$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/diagrams/tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/project.ts [app-client] (ecmascript)");
;
;
;
/**
 * Vista superior del campo. Redibuja los carriles a partir de los mismos
 * parámetros que alimentan las fórmulas, respetando la proporción real
 * ancho:largo del terreno dentro de un marco fijo.
 */ const BOX = {
    w: 320,
    h: 280,
    pad: 12
};
/** Por encima de este número los carriles se funden visualmente: se ralean. */ const MAX_DRAWN = 60;
function FieldPreview({ ancho, largo, anchoCorte, carriles }) {
    const inner = {
        w: BOX.w - BOX.pad * 2,
        h: BOX.h - BOX.pad * 2
    };
    // Escala única para ambos ejes: el campo conserva su proporción.
    const scale = Math.min(inner.w / ancho, inner.h / largo);
    const fw = ancho * scale;
    const fh = largo * scale;
    const fx = (BOX.w - fw) / 2;
    const fy = (BOX.h - fh) / 2;
    const laneW = anchoCorte * scale;
    const step = Math.max(1, Math.ceil(carriles / MAX_DRAWN));
    const raleado = step > 1;
    // Grosor del carril: una fracción del ancho real para que siempre quede
    // verde visible entre carriles y la rejilla no se funda en un bloque sólido.
    const strokeW = Math.min(Math.max(laneW * 0.34, 0.8), 5);
    // Separación real entre carriles dibujados, ya considerando el raleo.
    const halo = laneW * step > strokeW + 2.5;
    const lanes = [];
    for(let i = 0; i < carriles; i += step){
        // Centro del carril i, recortado al borde derecho del campo.
        lanes.push(fx + Math.min(i * laneW + laneW / 2, fw));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: `0 0 ${BOX.w} ${BOX.h}`,
                className: "h-auto w-full",
                role: "img",
                "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].previewAlt,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: fx,
                        y: fy,
                        width: fw,
                        height: fh,
                        fill: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$diagrams$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"].field,
                        stroke: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$diagrams$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"].fieldEdge,
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/field-preview.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        clipPath: "url(#campo-clip)",
                        children: [
                            halo ? lanes.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x,
                                    y1: fy + 3,
                                    x2: x,
                                    y2: fy + fh - 3,
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$diagrams$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"].routeShadow,
                                    strokeWidth: strokeW + 2
                                }, `s${i}`, false, {
                                    fileName: "[project]/components/calculator/field-preview.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)) : null,
                            lanes.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: x,
                                    y1: fy + 3,
                                    x2: x,
                                    y2: fy + fh - 3,
                                    stroke: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$diagrams$2f$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"].route,
                                    strokeWidth: strokeW
                                }, `y${i}`, false, {
                                    fileName: "[project]/components/calculator/field-preview.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/calculator/field-preview.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "campo-clip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: fx,
                                y: fy,
                                width: fw,
                                height: fh
                            }, void 0, false, {
                                fileName: "[project]/components/calculator/field-preview.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/calculator/field-preview.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/field-preview.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/calculator/field-preview.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-2 text-sm text-ink-muted",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].previewLabel,
                    " · ",
                    ancho,
                    " × ",
                    largo,
                    " m",
                    raleado ? ` · 1 carril de cada ${step}` : ''
                ]
            }, void 0, true, {
                fileName: "[project]/components/calculator/field-preview.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/calculator/field-preview.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = FieldPreview;
var _c;
__turbopack_context__.k.register(_c, "FieldPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/calculator/harvest-calculator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HarvestCalculator",
    ()=>HarvestCalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calculator$2f$field$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calculator/field-preview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/project.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$harvest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/harvest.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const defaults = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].sliders.map((s)=>[
        s.id,
        s.defaultValue
    ]));
function Slider({ copy, value, onChange }) {
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "font-medium text-green-dark",
                        children: copy.label
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("output", {
                        htmlFor: id,
                        className: "text-2xl leading-none font-bold text-jd-green",
                        children: [
                            value,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 text-sm font-medium text-ink-muted",
                                children: copy.unit
                            }, void 0, false, {
                                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "range",
                className: "slider-surco mt-2",
                min: copy.min,
                max: copy.max,
                step: copy.step,
                value: value,
                "aria-valuetext": `${value} ${copy.unitLong}`,
                onChange: (e)=>onChange(Number(e.target.value))
            }, void 0, false, {
                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/calculator/harvest-calculator.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Slider, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Slider;
function HarvestCalculator() {
    _s1();
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaults);
    // Cálculo 100% en el cliente: sin red, sin estado asíncrono.
    const resultado = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HarvestCalculator.useMemo[resultado]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$harvest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcularCampo"])(params)
    }["HarvestCalculator.useMemo[resultado]"], [
        params
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-8 border border-line bg-white p-5 md:grid-cols-2 md:gap-10 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "order-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calculator$2f$field$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPreview"], {
                        ancho: params.ancho,
                        largo: params.largo,
                        anchoCorte: params.anchoCorte,
                        carriles: resultado.carriles
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-5 border-t border-line pt-4 text-sm text-ink-muted",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].footnote
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "order-1",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].sliders.map((copy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            copy: copy,
                            value: params[copy.id],
                            onChange: (v)=>setParams((prev)=>({
                                        ...prev,
                                        [copy.id]: v
                                    }))
                        }, copy.id, false, {
                            fileName: "[project]/components/calculator/harvest-calculator.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        "aria-live": "polite",
                        className: "mt-8 grid grid-cols-2 gap-px border border-line bg-line",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculadora"].results.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-dark p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-3xl leading-none font-bold text-jd-yellow",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$harvest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatearNumero"])(resultado[r.id], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$harvest$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECIMALES"][r.id]),
                                            r.unit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-base font-medium text-green-soft",
                                                children: r.unit
                                            }, void 0, false, {
                                                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "mt-2 eyebrow text-green-soft",
                                        children: r.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, r.id, true, {
                                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/calculator/harvest-calculator.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/calculator/harvest-calculator.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/calculator/harvest-calculator.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s1(HarvestCalculator, "ALYavBBhN0QIVsQJUThlNGB4ORc=");
_c1 = HarvestCalculator;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider");
__turbopack_context__.k.register(_c1, "HarvestCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/diagrams/tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Colores usados dentro de los SVG. Deben espejar los tokens de globals.css. */ __turbopack_context__.s([
    "D",
    ()=>D
]);
const D = {
    field: '#EAF2E5',
    fieldEdge: '#367C2B',
    route: '#FFDE00',
    routeShadow: '#1B3D1A',
    earth: '#6B4F2A',
    grid: '#B8CCB2',
    muted: '#6E7671',
    ink: '#2B2B2B'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/simulation-video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimulationVideo",
    ()=>SimulationVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/project.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SimulationVideo({ src = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].video.fallbackSrc }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showVideo = Boolean(src) && !failed;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video border border-green-rule bg-green-dark",
                children: showVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    className: "h-full w-full bg-black object-contain",
                    src: src,
                    controls: true,
                    playsInline: true,
                    preload: "metadata",
                    "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].video.posterAlt,
                    onError: ()=>setFailed(true)
                }, void 0, false, {
                    fileName: "[project]/components/simulation-video.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full flex-col items-center justify-center gap-3 px-6 text-center surco-texture-dark",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            className: "text-3xl text-jd-yellow",
                            children: "▶"
                        }, void 0, false, {
                            fileName: "[project]/components/simulation-video.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "eyebrow text-green-soft",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].video.label
                        }, void 0, false, {
                            fileName: "[project]/components/simulation-video.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-[32ch] text-sm text-green-soft",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].video.unavailable
                        }, void 0, false, {
                            fileName: "[project]/components/simulation-video.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/simulation-video.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/simulation-video.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                className: "mt-3 text-sm text-green-soft",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$project$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hero"].video.caption
            }, void 0, false, {
                fileName: "[project]/components/simulation-video.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/simulation-video.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(SimulationVideo, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c = SimulationVideo;
var _c;
__turbopack_context__.k.register(_c, "SimulationVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/harvest.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fórmulas del recorrido de cosecha.
 *
 * Estas funciones son puras y son la única definición de las cuentas en el
 * sitio: los componentes las importan, nunca las reimplementan.
 */ __turbopack_context__.s([
    "DECIMALES",
    ()=>DECIMALES,
    "calcularAreaHa",
    ()=>calcularAreaHa,
    "calcularCampo",
    ()=>calcularCampo,
    "calcularCarriles",
    ()=>calcularCarriles,
    "calcularDistanciaKm",
    ()=>calcularDistanciaKm,
    "calcularTiempoH",
    ()=>calcularTiempoH,
    "formatearNumero",
    ()=>formatearNumero
]);
function calcularCarriles(ancho, anchoCorte) {
    if (anchoCorte <= 0) return 0;
    return Math.ceil(ancho / anchoCorte);
}
function calcularDistanciaKm(carriles, largo, anchoCorte) {
    return (carriles * largo + carriles * anchoCorte * (Math.PI / 2)) / 1000;
}
function calcularTiempoH(distanciaKm, velocidad) {
    if (velocidad <= 0) return 0;
    return distanciaKm / velocidad;
}
function calcularAreaHa(ancho, largo) {
    return ancho * largo / 10000;
}
function calcularCampo({ ancho, largo, anchoCorte, velocidad }) {
    const carriles = calcularCarriles(ancho, anchoCorte);
    const distanciaKm = calcularDistanciaKm(carriles, largo, anchoCorte);
    return {
        carriles,
        distanciaKm,
        tiempoH: calcularTiempoH(distanciaKm, velocidad),
        areaHa: calcularAreaHa(ancho, largo)
    };
}
function formatearNumero(valor, decimales) {
    return valor.toLocaleString('es-MX', {
        minimumFractionDigits: decimales,
        maximumFractionDigits: decimales
    });
}
const DECIMALES = {
    carriles: 0,
    distanciaKm: 1,
    tiempoH: 1,
    areaHa: 1
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1cfy4hj._.js.map