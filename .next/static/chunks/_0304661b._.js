(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_0304661b._.js", {

"[project]/app/_components/AboutMe.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const AboutMe = ()=>{
    _s();
    const container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "AboutMe.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5
                }
            });
            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05
            });
        }
    }["AboutMe.useGSAP"], {
        scope: container
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "AboutMe.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5
                }
            });
            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02
            });
        }
    }["AboutMe.useGSAP"], {
        scope: container
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pb-section",
        id: "about-me",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            ref: container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl sm:text-4xl md:text-6xl font-thin mb-12 sm:mb-20 slide-up-and-fade leading-tight",
                    children: "Ambiciono integrar uma equipa na qualidade de programador, com o propósito de contribuir para o desenvolvimento e a manutenção de soluções digitais."
                }, void 0, false, {
                    fileName: "[project]/app/_components/AboutMe.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "pb-3 border-b text-muted-foreground slide-up-and-fade",
                    children: "Sobre mim."
                }, void 0, false, {
                    fileName: "[project]/app/_components/AboutMe.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-12 mt-9 gap-8 md:gap-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl sm:text-4xl md:text-5xl slide-up-and-fade leading-tight",
                                children: "O meu nome é Damásio Caliqui."
                            }, void 0, false, {
                                fileName: "[project]/app/_components/AboutMe.tsx",
                                lineNumber: 68,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/AboutMe.tsx",
                            lineNumber: 67,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-7",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-base sm:text-lg text-muted-foreground max-w-[450px] leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "slide-up-and-fade",
                                        children: "Sou estudante de programação na Escola 42 Luanda, possuindo formação em Informática de Gestão pelo IMEL. Detenho experiência em desenvolvimento web e de software, dominando linguagens como C, C++, C#, HTML, CSS, JavaScript e Next.js."
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/AboutMe.tsx",
                                        lineNumber: 74,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 slide-up-and-fade",
                                        children: "Fui distinguido como vencedor do Hackathon interno da Escola 42 Luanda, mediante o desenvolvimento de uma aplicação orientada para o controlo da malária. Adicionalmente, concebi um sistema web destinado a instituições religiosas e concluí o projecto Inception através da utilização do Docker. Em 2025, participei no concurso da Mirantes com o grupo Codespace, alcançando o 9.º lugar e o prémio de melhor pitch."
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/AboutMe.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/AboutMe.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/_components/AboutMe.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/_components/AboutMe.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/AboutMe.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/AboutMe.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
_s(AboutMe, "RMhQw4oVuI3zf6tnHvaVVy87OIQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = AboutMe;
const __TURBOPACK__default__export__ = AboutMe;
var _c;
__turbopack_context__.k.register(_c, "AboutMe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ArrowAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const ArrowAnimation = ()=>{
    _s();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrow1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrow2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ArrowAnimation.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('#banner-arrow-svg', {
                fill: 'transparent',
                autoAlpha: 0
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.svg-arrow-1', {
                strokeDasharray: arrow1Ref.current?.getTotalLength(),
                strokeDashoffset: arrow1Ref.current?.getTotalLength()
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.svg-arrow-2', {
                strokeDasharray: arrow2Ref.current?.getTotalLength(),
                strokeDashoffset: arrow2Ref.current?.getTotalLength()
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                repeat: -1
            });
            tl.to('#banner-arrow-svg', {
                autoAlpha: 1,
                duration: 0.1
            });
            tl.to('.svg-arrow', {
                duration: 2,
                delay: 1,
                strokeDashoffset: 0
            });
            tl.to('#banner-arrow-svg', {
                duration: 0.5,
                delay: 0.5,
                fill: '#ffffff08'
            });
            tl.to('#banner-arrow-svg', {
                duration: 1,
                y: 300
            });
            tl.to('#banner-arrow-svg', {
                duration: 0,
                autoAlpha: 0
            });
        }
    }["ArrowAnimation.useGSAP"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        id: "banner-arrow-svg",
        width: "376",
        height: "111",
        viewBox: "0 0 376 111",
        fill: "transparent",
        xmlns: "http://www.w3.org/2000/svg",
        className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-0",
        ref: svgRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "svg-arrow svg-arrow-1",
                d: "M1 1V39.9286L188 110V70.6822L1 1Z",
                stroke: "#2C2C2C",
                ref: arrow1Ref
            }, void 0, false, {
                fileName: "[project]/components/ArrowAnimation.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "svg-arrow svg-arrow-2",
                d: "M375 1V39.9286L188 110V70.6822L375 1Z",
                stroke: "#2C2C2C",
                ref: arrow2Ref
            }, void 0, false, {
                fileName: "[project]/components/ArrowAnimation.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArrowAnimation.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
};
_s(ArrowAnimation, "GvQMXspQdf5wKl4MbjTdpKPaKOI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = ArrowAnimation;
const __TURBOPACK__default__export__ = ArrowAnimation;
var _c;
__turbopack_context__.k.register(_c, "ArrowAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Child = ({ icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center justify-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "animate-spin h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Button.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this),
            !icon && 'Processing...'
        ]
    }, void 0, true, {
        fileName: "[project]/components/Button.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
_c = Child;
const Button = ({ loading, variant, className, children, as = 'link', icon = false, ...rest })=>{
    const variantClasses = {
        primary: `bg-primary text-primary-foreground  hover:bg-primary-hover`,
        secondary: `bg-secondary text-secondary-foreground hover:bg-secondary-hover`,
        success: `bg-green-500 text-white hover:bg-green-600`,
        warning: `bg-orange-500 text-white hover:bg-orange-600`,
        danger: `bg-destructive text-destructive-foreground hover:bg-destructive/70`,
        info: `bg-blue-500 text-white hover:bg-blue-600`,
        light: `bg-background-active text-foreground hover:bg-background-active`,
        dark: `bg-foreground text-background hover:bg-foreground/80`,
        link: `text-foreground hover:text-primary`,
        'no-color': ''
    }[variant || 'primary'];
    const iconClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('min-w-9 aspect-square text-xl p-0 inline-flex items-center justify-center rounded-md', variantClasses);
    const buttonClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(`group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden`, variantClasses, {
        [iconClasses]: icon
    }, className);
    if (as === 'link') {
        const props = rest;
        if (props.target === '_blank') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: buttonClasses,
                ...props,
                href: props.href.toString() || '#',
                children: [
                    variant !== 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 88,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "z-[1]",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Child, {
                            icon: icon
                        }, void 0, false, {
                            fileName: "[project]/components/Button.tsx",
                            lineNumber: 91,
                            columnNumber: 36
                        }, this) : children
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Button.tsx",
                lineNumber: 82,
                columnNumber: 17
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: buttonClasses,
            ...props,
            href: props.href || '#',
            children: [
                variant !== 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"
                }, void 0, false, {
                    fileName: "[project]/components/Button.tsx",
                    lineNumber: 100,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "z-[1]",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Child, {
                        icon: icon
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 103,
                        columnNumber: 32
                    }, this) : children
                }, void 0, false, {
                    fileName: "[project]/components/Button.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Button.tsx",
            lineNumber: 98,
            columnNumber: 13
        }, this);
    } else if (as === 'button') {
        const props = rest;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: buttonClasses,
            ...props,
            children: [
                variant !== 'link' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"
                }, void 0, false, {
                    fileName: "[project]/components/Button.tsx",
                    lineNumber: 113,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "z-[1]",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Child, {
                        icon: icon
                    }, void 0, false, {
                        fileName: "[project]/components/Button.tsx",
                        lineNumber: 116,
                        columnNumber: 32
                    }, this) : children
                }, void 0, false, {
                    fileName: "[project]/components/Button.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Button.tsx",
            lineNumber: 111,
            columnNumber: 13
        }, this);
    }
};
_c1 = Button;
const __TURBOPACK__default__export__ = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Child");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArrowAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ArrowAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const Banner = ()=>{
    _s();
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // move the content a little up on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Banner.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1
                }
            });
            tl.fromTo('.slide-up-and-fade', {
                y: 0
            }, {
                y: -150,
                opacity: 0,
                stagger: 0.02
            });
        }
    }["Banner.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        id: "banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ArrowAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/_components/Banner.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container min-h-[100svh] py-16 sm:py-20 md:py-0 flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center gap-10 md:gap-0",
                ref: containerRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[544px] flex flex-col justify-center items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "banner-title slide-up-and-fade leading-[0.95] text-4xl sm:text-5xl md:text-[80px] font-anton",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "DESENVOLVEDOR DE SOFTWARE"
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Banner.tsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "banner-description slide-up-and-fade mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed",
                                children: [
                                    "O meu nome é",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-foreground",
                                        children: "Damásio Caliqui"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 50,
                                        columnNumber: 25
                                    }, this),
                                    ". Sou estudante na Escola 42 Luanda e exerço a atividade de programador web e de software, encontrando-me apto a desenvolver soluções impactantes e escaláveis."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                as: "link",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GENERAL_INFO"].email}`,
                                variant: "primary",
                                className: "mt-6 sm:mt-9 banner-button slide-up-and-fade",
                                children: "Contactar"
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "size-3 rounded-full bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Disponível para novas oportunidades profissionais"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/Banner.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full md:absolute md:top-8 md:right-24 lg:right-28 grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col gap-4 md:gap-8 text-left md:text-right z-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group order-first hidden md:order-none md:mb-0 md:mr-0 md:ml-0 md:flex md:justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-64 h-64 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full w-full overflow-hidden rounded-lg bg-card shadow-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/projects/images/minhafoto.jpeg",
                                                alt: "Foto de Damásio Caliqui",
                                                width: 480,
                                                height: 480,
                                                className: "h-full w-full object-cover scale-100 grayscale contrast-90 brightness-90 saturate-0 transition-[filter,transform] duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:saturate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/_components/Banner.tsx",
                                                lineNumber: 80,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/_components/Banner.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -top-2 -left-2 pointer-events-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px h-12 bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Banner.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-px bg-primary -mt-px shadow-[0_0_12px_hsl(var(--primary))]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Banner.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Banner.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-2 -right-2 pointer-events-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px h-12 -translate-y-12 bg-primary ml-auto shadow-[0_0_12px_hsl(var(--primary))]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Banner.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-px -mt-12 ml-auto bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Banner.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/_components/Banner.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/_components/Banner.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-up-and-fade",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                                        children: "4+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Anos de Experiência"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-up-and-fade",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                                        children: "20+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 109,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Projectos Concluídos"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "slide-up-and-fade",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                                        children: "1200+"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Horas de Prática"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Banner.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/Banner.tsx",
                                lineNumber: 114,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/Banner.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/Banner.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/Banner.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
};
_s(Banner, "R5+5KjrXQ5+JB5wCKyyreNNaUX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Banner;
const __TURBOPACK__default__export__ = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/icons/SectionFlower.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SvgSectionFlower = ({ title, titleId, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        fill: "none",
        viewBox: "0 0 25 29",
        "aria-labelledby": titleId,
        ...props,
        children: [
            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                id: titleId,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/icons/SectionFlower.tsx",
                lineNumber: 20,
                columnNumber: 18
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "url(#section-flower_svg__a)",
                d: "M25 0H0v28.929h25z"
            }, void 0, false, {
                fileName: "[project]/components/icons/SectionFlower.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                        id: "section-flower_svg__a",
                        width: 1,
                        height: 1,
                        patternContentUnits: "objectBoundingBox",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                            xlinkHref: "#section-flower_svg__b",
                            transform: "matrix(.00255 0 0 .0022 -.01 0)"
                        }, void 0, false, {
                            fileName: "[project]/components/icons/SectionFlower.tsx",
                            lineNumber: 29,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/icons/SectionFlower.tsx",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                        xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAHFCAYAAADc/K+IAAAAAXNSR0IArs4c6QAAIABJREFUeF7sfQmcHFXxf1XPzIZAgE0QvABBUOTwgoAQ8Fh2+vVkQwznoiggiIqieKECikQ88EJ/iDeKJwoLgpC4mfd6wijHBjCAKCoif1BURIVkE0Li7sx0/T8PJhiSPbpn+njdXe/zyYeP7ntV3/rWm67ud1QhcGMGOmEAAYA6GchjUs0A+z3V7gsbvJ4O3JgBZoAZYAaYgcAMcAAJTBkPYAaYAWaAGdAMcADhecAMMAPMADPQEQMcQDqijQdljQFe2s+aR9meOBjgABIHy6yDGWAGmIEMMsABJINOZZOYAWaAGYiDAQ4gcbDMOpgBZoAZyCADHEAy6FQ2Kd0M8H5Muv2XNPo45w8HkKS9zfqZAWaAGUgpAxxAUuo4hs0MMAPMwJMMxPnJsRnlHEB4DjIDzEAHDCT41OoALQ+JhgEOINHwylKZAWaAGYiWAQNieOIBxAAOonUyS2cGmAFmIKMMJB5AzOSVw5qZfkknKp5N6fQbo56eAQ4g03PEPXLMgJRyGwCYUygUSpvQUETEJ5rN5qjjOE/kmB42PTMMdPaawwEkMxOADemUgWq1+lzLsg4EgP0AYE9E3JOI9tSBAwBmTCO3AQD/BIC/AMCDRHQ/It5pWdYd5XL5X51i4nHMQBoYSFEA6SxCpsEJjDFeBur1+nPGx8cHENEBgEMAYJeIEPwNAJYTUZWI3EqlsioiPSw2Bgb4CbQlySkKIDHMEFaRWQZqtdqzPc97MwC8EQD2T6CUQQsAbgCAH46NjV2zcOHC9Zklmw3LDQMcQHLj6nwaqpQSAPBuAJgPAEUTWEDEx4noMiK6yHEc/ZXCjRlIJQMcQFLpNgY9FQNEhEqpRYh4LgDovQ1Tm94/+XGhUDivv7//H6aCZFzMwGQMcADhuZFyBp65Mu267q4A8H0i6kuRYeuJ6AutVuvCgYGBsRThzg5U3uDoyJccQDqijQeZyICUciEi/ggAtjcRnw9Md3meN1ipVO730Ze7MAOJM8ABJHEXMIAwGHBd9xgi+ikAbHpfIwzRcctYg4in2rZ9TdyKWR8zEJQBDiBBGeP+xjEgpTwWEXXwiHiTPLZ1Do+I3uk4zreNI5sBMQObMMABhKdDqhlQSs0FgJsAYKtUG7IleELEM23b/mrG7GJzMsRA7gNIbO+UGZo0ppjSvtuxEgB2NgVTyDg8ADhKCHF9yHJZHDMQCgO5DyChsMhCYmdgaGio0Nvb+0sAOCx25fEqXGtZ1iHlcvkP8aplbczA9AxwAJmeI+5hIANSynMQ8TMGQosC0oOlUumgvr6+R6MQzjKZgU4ZCDWAxL4cFLvCTmnmcWEyIKXcDxH10tV0iQ7DVJu0rGuFEEcnDYL1MwObMhBqAGFqmYGoGajX68Vms3kbEel8Vnlrg0KIq/JmNNtrLgMcQJKtSW/uzDAUmZTyTES82FB4UcN6tFQq7c1LWVHTnJz8tC2qcABJbq6w5oAM1Ov1ZzUajT+163QEHJ2Z7t8XQpySGWvYkFQzwAEk1e7LF3il1DcB4B35snoLa4mIDnQc546c88DmG8AAB5CJnJC270gDJlLUEKrV6r6WZd0NAIWodaVAPm+op8BJmYeIABxAMu/lbBjouu4VRHR8fNYY/RZBnue9slKp6IAaXTOagujMZsn+GeAA4p8r7pkQA67r7k1E9wCAlRAE49QS0c8cxznWOGAMKFcMcADJlbvTaaxS6iftUrTpNCAa1Drh4m5c0TAaclmqPwY4gPjjiXslxMDy5cv3aLVa+uQV731s5gMiOtdxnAsTcg2rZQZ4D4TngNkMuK77JSJ6v0bJS/Jb+Oo+IcReZnuQ0WWZAf4CybJ3U27bkiVLtp4xY8bfcn7vY0ovep73qkqlcnvKXc3wU8oAB5CUOi4PsJVSpwHApXmwtQsbLxZCvK+L8Tw0JwxE8QXPASQnkyeNZiqldMLEA9KIPUbMvxdC7BejPlZlCgNRRISAtnEACUgYd4+HgVqt9mLP8/TmObepGaBSqfS8vr6+R5goZiBuBjiAxM046/PFgFLqPAC4wFfnnHciojc4jnNlzmlg8xNggANIANIN+GIMgDbdXZVS+uLgvum2Ijb03xJCnB6btrwq4gfAFp7nAJKaH0N+Zm/75jmXcPU/N3kfxD9X3DNEBjiAhEgmiwqHAaXUBwDgonCk5UJKY86cOdvMnTu3kQtr2UhjGOAAYowrGMhGBpRSvwCAAWbEPwNEtLfjOPf6H8E9mYHuGeAA0j2HLCFEBnTJ2kaj8RgAbBei2MyLQsRjbNu+JvOGsoFGMcABxCh3MJhqtfpqy7JuZCYmYWCSrTAiOs9xnE8xb8xAnAxwAImTbdY1LQNSysWIeP60HbnD5gz8WAhxItPCDMTJAAeQONlmXdMyoJS6GQAOnbYjd9icgeVCiDLTwgzEyQAHkDjZZl1TMjA0NNTT29v7OAD0MFWBGbhbCPGKwKN4ADPQBQMcQLogj4eGy0C1Wt3fsqw7wpWaG2kPCyGenxtr2VAjGOAAYoQbGIRmQEr5VkT8DrPREQPjtm1vhYjU0egJBuXn6mpYjOVPDgeQGH3OP8ipyd60eFSMbsmMKkTstW17TWYMYkOMZ6CzAJKbJ2FuDA15onbGm1JK32M4KmQwuRHXarV2nz9//l9yYzAbmjgDnQWQxGFnA0Bnj9ls2D6RFUqp3yDAy0Nbg8kuVRNa5nneiyqVyv05M5vNTZABDiAJkt+p6qwGHqXUowCwQ6e85H0cpzPJ+wyI334OIPFzzhonYICI0HVdnQywwAR1xoBlWfuWy2XOYtwZfTyqAwY4gHRAGg8JnwHXdbcnotHwJedHomVZLy+Xy7/Nj8VsadIMcACJ2wMRrj9FKDpylqSUuyDiQ5EryrACz/MOqFQqd2bYRDbNMAY4gBjmkLzCWb58+QtarRafIOpiAliWdVC5XP51FyIyNzTNL1VpcAYHkDR4KQcYOYB072QieqnjOLoUMDdmIBYGOIDEQjMrmY4BDiDTMTT934nohY7jPDh9T+7BDITDAAeQcHhkKb4YmHxBQUq5EyL+y5cY7jQhA81mc6eBgYH/MD3MQFwMcACJi2nWMyUD7Uy8Y0xT5wzMmjVr63nz5m3oXAKPZAaCMcABJBhf3DtCBpRS+uG3VYQqsizas227GGYyxSyTxbaFwwAHkHB4ZCkhMKCUehgAnhuCqDyKWCuE2D6PhrPNyTHAASQ57lnzZgwopVYCwAFMTEcMxFQPhA/GduQdkwaF6EIOICY5NlYsIc6ikHC7rnstER0Zkri8ifmNEOKVeTOa7Y2RgQkeGRxAYuSfVU3NgJTyK4j4HuYpOANEVHUcZ37wkTyCGeicAQ4gnXPHI0NmwHXds4joCyGLzYu4Hwgh3pIXY/Ngp3lrBFuyzgEkDzMxJTa6rruIiH6eErhGwSSizzqOc45RoKYAk4aHY1q4TBInB5Ak2Wfdz2Bg2bJlexUKhXuZluAMIOL7bdv+v+AjeQQz0DkDHEA6545HhsxAvV4vNhqN9QBQCll05sUR0Rsdx7ki84Z2bWC83z7xauuanMACOIAEpowHRMmAUkoXRNo7Sh1ZlO153uGVSqWeRdvYJnMZ4ABirm9yiUwpdSUADObS+C6Mtixrr3K5fF8XInhoiAxk/ctjI1UcQEKcNCyqewZc1z2biC7sXlKuJHjNZnPrgYEBziWWK7cnbywHkOR9wAg2YcB1XUffaWBSAjHwVyHEboFGcGdmIAQGOICEQCKLCI8BTusenEtErNu2fXjwkTyCGeiOAQ4g3fHHoyNgQCn1dwB4fgSiMykSES+zbfutmTSOjTKaAQ4gRrsnn+CklFcj4jH5tL4jqz8qhPhMRyN5EDPQBQMcQLogj4dGw4CU8v2I+KVopGdPKt8ByZ5P02IRB5C0eCpHOGu12oGe592eI5O7MtXzvFdVKpXc8pWXI7NdTZKIBnMAiYjYbIuN9ie7cuXK0qpVq0YBYOts8xiOdZZlPatcLj8WjrSMSol2ymaUtOnNykUA4bkz/UQwrYdSSt+qfp1puEzDQ0SPOI7DVRxNc0xO8OQigOTEl5kyU0r5KUT8aNqMSuBl5QYhRH/aeGK82WCAA0g2/Jg5K6SU8xFxOBTDEniqh4LbhxAiusRxnDN9dOUuzEDoDHAACZ1SFhgGA8PDw9sVi8VVAFAIQ16GZZwuhPhWhu1j0wxmgAOIwc7JOzSl1G8B4KXd8pDhDxBAxFfbtn1ztxxtOT7LrIXPVl4lcgDJq+dTYLdS6hsAcLpZUM16sGbmBJZZtJo15QxGwwHEYOfkHZpS6s0A8KPoeEj3U4tPYEU3M1iyPwY4gPjjiXslwIDrursS0V8TUJ0WlcuFEOW0gI0DZ7pfCeJgKFwdHEDC5ZOlhcyAUupPAPDikMVmRdzFQoj3ZcUYtiN9DHAASZ/PcoVYSvl1RHxnroz2aSwinmzb9g99duduzEDoDHAACZ1SFhgmA67rHkNEV4cpMyuyiOiljuPckxV72I70McABJH0+yxXipUuXzu7p6fkP3wfZwu0bSqXSdn19fc1cTQg21igGUhNA6vX6Vs1mc3cAeCER7QgA2wDArPZ/n9CsEtFqANCXzx5utVoPzZw58xH+gRk13zoCo5T6NQDM7WhwooMi3dK9TQhxcKLmsfLcM2BkAKnX68WxsbFDEPFg/a/98NgFAILi/S8A/JaI7kDEOxHxNtu2f5d7r6eMAKXUZwHgIymDHSlcIvqG4zjvilQJC2cGpmEg6AM5MkLbXxiv9zxvESLOB4DZESn7GxEtLRQK1xcKhV/29fXpIMPNYAZqtVrZ8zzXYIhJQHubEOI7SShmnczARgYSDyCu6+5NRO8AgBMBYE7MrlkHAFcR0XccxxmJWTer88nAyMjIzHXr1umlya18Dsl8N8/zDqhUKndm3lA20GgGEgsg1Wr15Yh4HiIeBQCWASz9QQeSQqHww+iK80S6Jm4AhdFBUEotB4DDo9OQKsnjo6Oj2w4ODo6nCjWDzRwDsQeQ4eHhnYvF4hcA4PgO9jTicMATRHQpAHzJcZy/xaGQdUzPgFLqXAD49PQ9s99D7+fZtn1A9i1lC01nILYAojfGm83mWUT0sfbJKdO50W93lxPR5x3Hudd0sFnHJ6V8FSLemnU7fdr3LSGEYUkmfSLnbpliIJYAUq1W97Qs68cA8KoUsufpQFIoFM7r7+/nvEwJOXBoaKjQ29v7KAD0xgfBzCVHRDzVtu3vxcdDUprM5L8bNur1+qzx8fHZlmX1ep7Xs4msMSJ6bO3atY+laWky8gCilHojAHy7fWejG+6nHhv9XNOntb7med5nKpWK3tDlFjMDruteS0RHxqzWOHWIuI9t2380DhgDepIBnQTU87yDEHFvfW9tk3/PBoDSdDQh4uNEpJfPdR64PxPRHzzPu3X+/Pn6fxvVIgsgRIS1Wu0CItJ1rSPTkwCbq4nowjVr1lycpjeFBHgKXaVS6gwA+GrogtMlcHRkZGSHxYsX6y9jbgYw4LquLnq2gIjmAcBBAKADRRTtP4h4CwAMe553neM4/45CSRCZkTzYV65cWVq9evWPiEhvlGeyIeKfiOgMIYQ+HcQtBgaWL1++R6vVuj8GVSarUEIIx2SAWceml1PnzJnT12q1Xo+ICwFgtwRs1i8Q+urBD4jop47jPJmNI+4WegAZGhrq6e3tvQIA9PHcPDRt6weFEA/nwdikbVRK/RkA9kwaR4L6LxBCnJ+g/tyq1nu5iPgWnQUZAHY2iIg1RPRDz/O+NH/+/L/EiSvUANLe6LwqR8Fjo6/WIuL5q1evvmRwcLAVpwO70hX9vlFX8CYarJS6BADeHbpgXwKNIGyBEGLYF1zu1DUD+pk2e/bsY/ScI6LDDF+OH0fE7+vj7rZtP9S18T4EhBpApJRfQcT3+NCb1S63tk/I5GeDM+ZnqpTyCERcktUJNI1dZFnWjtFddM0pqxOYPTw8PKNUKukl+HOJaK+UMbNBXz/o6en5bNSpmkILIEqpDwDARSkjOgq4/yWij69Zs+ZLqfoaiYKJCGRKKbdBxMcAYEYE4k0X+WchBFdnjNBLw8PD25VKpfcTkX4R3iFCVXGIvg8AThVC6I33SFooAaR9yesmP0fUIrHCTKG3IeIpfNwy/E8UpVQNAPrNdHt0qPQ6t+M4ev09nS38qRAaD/qLo1AonIyIF0R4iio0vAEEtYjoU2vWrPlkFC+0XQeQWq22g+d5dwGATrfO7ZkM6K+RjwghLkFEYnLCYcB1XZ3RQKfDyVVDxHfZtv2NXBkdsbH6xOhjjz32NkTUGTKeG7G6JMW7iHicbdtrgoCYLuZ3HUCklJcj4glBQCXbdzpKIkG3zLKsU8rl8r8ikZ4zoVLK/RAxd3VdEPFlXM8mvMkupbQR8WIA0Bf+8tDuQcQFYW6wdxVAlFICAGQemA/BRh089Hrk1CdoEolvIVgXswillL6pa9JRyqgZWD0yMvIsvkDYPc1Syt0RUe/X5uWqwaak/cPzvNdVKpVQ7lN1HEDaa4a/R8Q9undpbiToZaxLSqXSR6I+HZF1RpVSupjSW+O0M8nYjohLbdvWl9a4dchA+5l1DiLq6pZ5ri3zUKvVem0Yd0Y6DiCu676HiL7SoS/zPuwuz/MGw3oLyCOZUspjEVHfOcpLO1sI8bm8GBu2nVLKeYioyzTsE7bsNMojov/X09NzcF9fn05Q2nHrKIC0K8TpG8HP71gzD9SXD99m2/YQUxH83b5er/c2Go3/AEAxD/xZljWvXC6vyIOtYdq4ZMmSrWfMmPFxADgLAAphys6ArJtHR0f7u8np11EAUUq9FwD+7ykCg//4M0B8WCYQEV28ww47fHju3LmNsITmRY5S6mYAODQH9m4YHR3t7eaHngOOtjCxvUmulzp3zaP9fmwmokscxznTT9+J+gQOIIsXL7YOOeSQ+3jvo1PKJxy3kogGHcd5MFSpGRemlNJvlp/IuJnavF8KIfpyYGcoJtbr9a0ajcZiAPiQIeWyQ7ErQiEdp8cJHECklAsR8foIjcmr6Ed19mLHcW7IKwFB7a7Vagd6nnd70HFp64+In7Jt+7y04U4Cr5TyAET8UY6O5oZB88Oe5720kzpHgQOIUupnAHB0GKhZxmYMIDTJow87jvNl5mZ6BvTX8Lx58x4BgB2n753eHohYsW2bj8tP4cJ20sOziUhnKp62aFN6Z0MA5MF2F74phHhnAOlPdg0UQK677rptZ86cqe8zzAyqiPsHYuDHs2bNevu8efM2BBqVw87pu8ga2EmtDRs2zF60aNHjgUfmZEC1Wn1uu2T24TkxOQozdcqTVziOc08Q4YECiOu6JxDR5UEUcN/OGEDEOy3LOprrsE/Nn5RS5y/SKayz2u4QQszNqnHd2uW6rqNzhAHATt3K4vGwTAgxEISHQAFEKaV/qOlN5haEGTP66hKWg7Zt/zJuOMG+fuNG9z99SqnnAcDfg35NJ4d4As1Tk32REEIfQeW2CQM6h9WqVas+1d4oD/QcYyInZwAR97dtW+c29NUCEa+U0kVKOGmiL2pD6zQOAO8QQmT5LbsrspRSvwUAXZc6c42IFjqOszRzhnVhUPulQV8i1TXIuYXLwBVCiDf6Fek7gHA9ar+URtbvQtu2P8pZfbfkVyn1RV1WODLmkxPcQsQdgmZQTQ5u9JqllK8BgCsR8TnRa8ulhqbnebtWKpV/+rHedwBxXfcYIrraj1DuEw0DRPSz8fHxkxYuXLg+Gg3plNpeB6+mE/2UqG8XQrwqg3Z1ZJKU8u2I+FU+ZdURfUEGnSWE8FUc0HcAydGlrSBEJ9H39lKptKivr08fX+UGAO3UOqueSpCXlt0bX677vBBCJ/7LdWtXodQ3yt+QayKmMz68qX+3EOIV06nTf/cdQFzXvUJfdPMjlPtEzsBfEXEh14b4H89KKQUAduTMx6iAiAYcx1kWo0rjVEkpd2lfXPb1QDPOgJQCIqIX+smM4TuAKKV0ydrDUspHFmGvI6I38gbrU66VUn4IET+fIUc3N2zYMCfP9z90qWwA+DnvdyQyq98phPjmdJqDBBCdfXfP6QTy32NloElE73Uc5+uxajVQWa1We5nneXcbCK1TSLcKIQ7pdHDax0kp34CIl/Gl5cQ8ea0QYtqMI0ECyCgAbJ+YOax4KgYuHh0d/eDg4GArrzQRESqlHs7Q2+qFQohz8+bPth/PR0SdKNP38ylvPMVg78NCiGnLdfh2kFJKp9XIcxWvGHzWlQrZbDYHBwYG1nYlJcWDlVL6RvKJxpoQYJOTiITjOG53tgRQ2J2iUEbrioHFYlFvlr85FIEspCsGSqXSc6c7rBMkgOgLbZykrCuXRD74N4VC4Yj+/v5/RK7JQAVKKf3g0ZlY097GiWiO4zhPpN0Qv/jb+ax+DgAH+R3D/aJlwE8SzyABpMkVvaJ1WEjS/0pEFcdx7g1JXmrE1Gq1Z3uepy9A+Z7Xhhp3sxDi1YZiCx2WUkqfsNIlIjjLRejsdiVw2o103z80pdRqAOjtCg4PjosBfSfi9UKIW+JSaIoepdRvAODlpuDpEMcnhRB6DyDzTUo5HxGvAIDtMm+sKQb6X9n8jBDio1PBDhJAHgCA3U3hgHFMy4Be/hgUQgxP2zNDHVzX/TwR6Up0aW5lIcTyNBvgB3u7NPaXuGqgH7YS6fMDIcRbwgogKwHggETMYKWdMtBAxNNs29aby501/28rnckPeVQG0pqMj42Nzc5yuhp90sp13QsBID+37FP2O2r/LK8RQhwTSgCRUl6NiFMKC/lZwOLCYYCI6ALHcXSN6My3er0+q9Fo6CW8VB74QMSbbNvWCQMnb+l8GD1pT71eLzYajW8AwGmZn4zpN3BYCLFguqnoy0yl1GcA4BxfnbmTcQwg4pfL5fIH85DNVyl1KwCkMglhluuf6+A+Pj5+lT7dY9wPhAFtwQAi1m3bnrLKY5A9EL0W9j3mOb0MIOLls2fPPmXu3LmN9FoxPXKl1OcA4MPT9zSyRyb3P4aHh3csFou/AIADjWSdQW3BABFVHceZH8oXiJRyP0T8HfOcegaWN5vNo7N84VAppcty6odV2lom9z+WLVu2W7FYrBLRXmlzSJ7x6vIRjuMcG0oAWbx4sTVv3rzH+ChvJqbUr5vN5oKBgYH/ZMKazYwYHh7erlgs6rlaTJl9mbv/oe94ENGyDKWYSdmU6hyurjXvOM6UJcx9L2FpGEopfSR0yk+azuHyyJgZuK/Vajnz58//S8x6Y1GnlLo9bcslWdv/UEr1A8A1xt7xSPFhhFh+RADT1qMJGkDeCwD/FxN4VhM9A/+0LKtSLpd1TfFMNSnlFxDxrJQZlZn9Dynl8Yioj4/3pMwHDLfNACK+x7ZtXQFy0hYogCxfvvwFrVbrwQykiuBJ8j8GViPigG3b+uRSZprruguIaGmKDMrM/ofruu8kIv3gsVLEP0PdkoFFQgidYiacAKKlKKXuBIBXMtuZYuAJIjqq++yv5nDiuu72RKT3QQrmoJrih+jn/kcKDFFK6dNvn+WXzBQ4axqInue9qFKp3B92APkAAPgquJ5+CnNlwRginmDbtl6zzkRTSqUpe0Lq818ppfTNch08uKWfgbW2bfdOd28s0BKW5qRWq+3ged7fuTZI+mfIBBa0iOitjuP8IAvWKaX0i45+4UlDS+3+h05NUqvVLiKi96eBaMboi4FfCiH6pusZOIBogUopXXOBi75Mx246/+4h4um2bV+aTvj/Qy2lXIiIU67hGmLjNPsf5h4XGhoaKsyePfvbRHRqx1yaa17HJqV9IBF91nGcaTOPdBRAqtXq/pZl6eWBjsanndwc4CcAOEsIoTOlprbV6/VnNRqNf5s+T33lvzLQCytXriytXr36R0R0vIHwGFIXDBBRv+M4N0wnouMAoJS6TtecmE4B/z3VDHxOCHF2mi1QSv0ZAPY03IbU7X/o8rOlUukKIjrScG4ZXnAG1jebrTkDA/PHphvacQCRUh6AiL82/e1uOgL471MzkPYkjClZbk3V/kc747F+gZwy0R7/tlLLwBIhhK+Pg44DiKbGdV39BpLjz1dDF2/Dh/Wd0dHR0wcHB1tp+0m4rvtuIrrEYNxjY2Njc9JS/2Pp0qWze3p6dEaKgw3mlKF1wQAivsm27Z/4EdFVABkeHt65WCz+EQBm+VHGfVLNwBVz5sw5KW2ZfGu12oGe5+m0Jka2NO1/SCl3QkSVgZLBRs4FQ0CtI6LnOI6jK5pO27oKIFq6lPJDiPj5aTXF2iH8V/BY4RuqDBGXFovF4/r6+v5rKMQtYA0NDfX09vauMfjYeSr2P5YvX/78VqtVA4CXpMX3jLMjBn4khDjJ78iuA4g+ibFq1aoVXO7WL+Xp7qeLzBSLxdf39fWtS4slSqmbAeBQQ/Eav/8hpdwdEXXweKGhHDKskBhAxEOCpDXqOoC0v0Jegoh3AMDWIdmRajFZ//4hohWWZc23bVu/2RvfDL5QODZr1qzZ8+bN22AqiVJK/dt2AWBnUzEyrtAYuF0IEaiSZygBRMNXSp0OALrWMbd8MLDS8zynUqno+uNGN9d1B4noStNAmr7/UavVXuZ5nt7zeLZp3DGe8Bkgojc7jnN5EMmhBZB2ENE7928MAoD7ppqB3zSbTWF6YSrXdXclor+axjQRfdpxnI+ZhkvjqVarB1mWtQwA5piIjzGFzsB9pVJp376+vmYQyaEGkJGRkZnr1q37VdoK+QQhjPtuwcDvS6VSua+v7xGTuVFKPQwAzzUM4wIhhD4Sa1STUr4GEZcYWwjKKLayAYaI3ug4zhVBrQkYQKZf3a/X689pNBr6giGvmQb1Rkr7I+KfGo1GeWBgQCfZNLIppXRtkAUGgSPP855l2hJgtVrtsyxL5w/jo/kGTZaIofxuZGTkFYsXL/aC6gkYQPyJb6+d1vnz1x9fGekRxVhaAAAgAElEQVR1PyL227b9kIn2KKU+DQDnGoTtD0KIfQ3Co4/kH4mI+i10hkm4GEvkDHR8EjCSAKLNVUq9AgB0Mq7ZkZvPCkxh4KFCoXB4f3///zMF0EYcpm2kE9GljuO83RSepJRvaJegLZmCKWoc06+nRI3ACPlXCCE63reOLIBoalzXPYyIqgCwjRFUMYg4GPgbAPQLIXQSQ2Na+ziqzppgRGvXXbnMBDBSyrcj4tfTUr3RBM6ygAERH7csa+/+/v5/dGpPpAFEg6rVaod4nqfXn/k0R6deSt+4f7aXs4x5YOu6Fb29vWtNuatERHs7jnNv0q7lErRJeyA5/UR0huM4+sWh4xZ5ANHIqtXqvpZlSQB4fsdIeWDaGPgXItq2bf/OFOBKKZ0T60AD8Dxm2/aO05ULjRqnlPJCREx1uv6oOcqw/GW2bS/odg7GEkC0E6SUu1iW9XMi2j/DTmHTnsnAfyzLKpfL5d+aQIxSSldZPG1iLPGtiOucYrZtL0yKk8WLF1vz5s37GgDoy7/c8sfAo6VS6aVhHL2PLYBoHy1ZsmTrGTNmfBcA3pA/n+XW4kc9zytXKpW7k2bAlNTuRHSu4zgXJsFHO3edrnkfaOM0vvCaBCu50ukR0SLHcfS2Qtct1gCi0RIRuq77fgDQP6Ceri1gAWlgwIggUq1WX21Z1o1JE4aIfbZt/zJuHO2LvlcZdh8mbhpyrY+IPuE4zuKwSIg9gGwE3q6r/lMAeHFYxqRdTsbf8h4DAH3e/DdJ+aler/c2Go3VSelv622MjY31xl1Aanh4eLtisahvl78mYftZfXIMLBkZGTmykwuDk0FOLIBoQO3SmF8EAH0ePlEsyfk0V5ofa2+s35WU1UqpfwHATknpB4CVQohYN/KHh4d3LBaLOq/VAfHYnZZXobTgDMVrdyPia8POoG3EQ7t9X0RvcHKxmlDmitFCRi3LEuVyWae7ib0ZUBvkYiHE++IyvFqtPrd9AvKlcelkPcYxcG+pVOoLY9N8c8uMCCAaVHt9Vmcm/SCnUjBuAoYNaDUR2Y7j6BoysTallL68d0qsSjdRRkRvcBwnltTy7cuT+vj8rknZy3oTZ+DXRHSE4zj/jgKJMQFko3G1Wu2FnufpZa2jojCYZRrDgN6LEEKIlXEiklKeg4ifiVPnprqIaFfHcfRt/UhbOx37LwDgWZEqYuEmM/DdUqn07ihLUBsXQDZ6Q0p5eLvWekzrtibPg8xii305y3XdY4jo6oQY/bsQYpeodbuu67Rt5Iy6UZNtpvxRIvqg4ziRp8oxNoBs8kVS9jzvCwCgkzNyyx4DaxCxEqQOczcUVKvVl1uWldRJsK4S1/mx23XdE4joe9k/Ip+rDXA/rn+yj76k2mg03hlXaQXjA4gmpX1z9k0AcA4A7O2bTe6YFgZiCyLty6zrEjr19z4hxMVROUVKeSYifhkArKh0sFxjGbjbsqyzy+WyTl4bW0tFANnIRjuQLAKAjwBAoOLvsTHKijplYC0RzXccZ6RTAX7HKaX0HkTsBc8syzooitNn7cu5nzKs3olfd3C/7hj4MxF9fMWKFUNh3u/wCylVAWRTo3TltEKh8AEiGuA3Lr/uNrufTi+tg4gQ4pbukU6+xOG67o1E9OrudQSSsGHOnDnbz507txFo1DSd21mGvzl5jq8wtbEsgxjQh0++VCqVrgpaxzxMG1IbQDaSUK1W9ywUCu8iolMBYPswyWFZ8TOggwgADNi2fXNU2qWUlyPiCVHJn0guEa1wHGdemDrr9fpWzWbzp0R0ZJhyWZaxDLQA4HrP875cqVRuMgHl9AEkJXtV+lZ7s9k8kYjeBgCvNIFcxtAxA+uIaIHjOJHkrVJKfba9DNoxwKADiegSx3HODDpusv7VanWOZVnXAcBhYclkOcYy8CARXdZqtb4f1+a4XyamDyB+JRnUT0qpj/6+tf2WmY2vkpQE8icT0lAok+EJnfRPCPGrUKRtIkQpdQYAfDVsuVPJI6K3OI6js+B23ZYvX/6CVqulU5PwgZKu2TRWwHoi+jkiXjYyMlJPYn/DDzOZDCAbDW/fbj+WiE7SGVC5ZKefKWFUnyc8z1tYqVTqYaJSSr0eAPTbe2zN87z9KpXK77tV6LruK4lIXxB8breyeLxxDIzr0kmIeIXnedc5jqNfooxumQ4gmzKvlHpeuwbCiQDwcqO9wuA2ZWA9ALxeCLE8LFraD+E7w5LnQ84To6Oj2w8ODuo17I6blNK2LOtnRLRtx0J4oGkM6EMV+gXpKs/zrqlUKqtMAzgVntwEkE1JkFLup4taIeIxnMAxFdN1g2VZry+Xy7Uw0Laz00aSG2gSfDcLIbo69eW67klE9B0AKIXBActIlAH9UqTva1xbKpWW9vX1jSaKpgvluQwgm/JVq9X28TxPB5Kj+bZ7FzMp+qH/BYAThBDXdquqfW9CLw/M7FaWz/FdZeBVSp0LAPqeR+5/rz75NrHbPxFxGREtHRsbk3HXg4mKEJ6QmzCrEzm2Wq1jEFEHE31RkfmJauZ1JlcvAZ0uhNBv4l01pdRfAOAFXQnxP/gkIcSP/Hd/qme9Xi82Go1LuHZ5UOaM6K/n6m2IOKwPPDiOcxcihnO8xAjzngLBD8hJnKGXOUql0nwAOI6IHF46MGjWAnxOCHF2N4iUUroeydxuZPgda1nWy8vl8m/99m8HD30sXd/xOCLIOO6bKAO66uYNRFTr6em5Por6G4laN4HyaQJIeGcyTTM8CJ72mrlOoaIDShkAtgsynvtGwsDFIyMjH+j0eKNSSp9k0lkMom7NZrM5a2BgYMyvomXLlu1WKBR0+Vm9V8fNXAY8ALiDiIb1v1tvvXVlp/PRXBOnRsZfIAE9t3LlytLq1asP1Sk3iKiCiC8LKIK7h8fA0NjY2CmdrCcrpb4PACeHB2VSSX8QQuzrV4/rugfr8/8A8Gy/Y7hfrAz8CxH1YQ7leV41qkJNsVrUhTIOIF2Qp4dKKXfStYYBYGH7X2+XInl4AAaISC8NHek4zoMBhmm/fQERzwoypsO+Q0KI4/2MlVIei4g/jHFz3w+svPfRF/pGdNDQS1NCiDuzuJcxlZOnWofiABLiz0Mnttt+++113ZKFiKjXrvfnfaYQCZ5c1GNENOg4zg1+tSmlPgwAn/Pbv4t+HxdCfHK68Uqp9+rkeJwYdDqmIv+7Xpa6CwBqlmXVxsfHbwqy/Bg5OsMUcACJ0CH68mJ7mcsGAH0TnpclouO7QUTvcxzn635UuK57is4v5Kdvl32Onurocbs+yXf1vaQu9fDwzhm4XwcM/ZUxNjZ2wxFHHKHLLXPzwQAHEB8khdWlfUy4jIh6I74fAOaEJZvlPM3A1Z7nvWO6G72u6y7QZ/Kj5o2IXuo4zj0T6ZFS7oKI18R1GixqW1Mk/+nTUgDgBl3+TJGdkUPlABI5xRMr0MWxDj744L0R8dB2QBGcjj4cZxDRI4VC4ZSpqrNVq9WDLMu6LRyNk0tBxF7bttds3sN13dcR0ZUAsFPUGFg+PGMfY8WKFXfl7bRUVHOAA0hUzAaUu3H/RAcTItJfKTpN91YBxXD3/zGgL21d0mw2PzzRGraUcndEfCBiwtYKIZ6RDbp9C16ndf8iABQj1t+d+PSe4m8CwN28j9Gd+/2M5gDih6UE+uhMwuvXrz/U8zy9d3J4e5nD7AdOAjz5UHm353knVyoV/UB5uun6MY1GQxevirLdI4R46UYF9Xr9Oc1m81K+HBg65Xrj+24i0gk39UGKG9OQyTZ0FhIQyAEkAdI7UXnddddtu/XWW7/G87zXtVPT69NehU5khT/G+FdV/UZ6calUWtzX17duo/1KKZ3ULrJ8WIh4k23br9H6XNc9hoh06dlnhc9/LiXetzFgFAqFerlc1vsa3GJmgANIzISHpa5er/c2Gg39cDqciPoQUb/psj+nJvhvRHSm4zj6oh4opf4KALuG5ZPN5SDin4jozfq+CRH5ugsSHhbjg3pQU/+xMWC0Wq3lplXmC2pMVvrzAycjntRfKNtss82rPM/TJ7z0P76DMolvEXFps9l8T6FQuBoAdPVKboYxgIiPe56nkxHm9gKfYS6ZEA4HkDR4qQOMer19fHy8v33CSweUnTsQk+UhOp27XsLaMctGpsg27Y+b9VeG/nfrrbf+hk9Kme89DiDm+ygUhJvdQdEBZXYogk0VkrkVHFOJ7hiXTnf+Gz4p1TF/RgxMbwDhB0THE2iCI8O6Wt6MjgXyQGbAHwMPbFySQkQ10f0Yf2K4lykMpDeAmMJgBnDoI63NZvO1ev8EEXXtk70zYBabkDwDU5yU4jfA5N3TPQIOIN1zmDkJ7fsKon1fIfvLXZnzYGIG/UvfwdBZa4vFouzv79en3LhlmAEOIBl2rj/Tpn4TbJdV1eV99ZeJ/qer+Fn+ZHOvjDOgU7Q8WYFP/9dxnHszbi+btxkDHEB4SgRioFar7eB53uHtlCu6QuMugQRw5zQz8IyN71WrVt04ODg4nmaDGHt3DHAA6Y6/3I+u1Wova7VaTnvvROfv4s34bM2K+/WGt+d5rmVZdd74zpZzu7WGA0i3DPL4pxnYJH/XxsuM5l7S4z3cyWauTvuisxQvsSxrSblc/gNPcWZgMgY4gIQ9N/jB9DSjOuMtANjty4y6qBaX+w17voUj79+6OrMOGs1mUw4MDKwNRyxLyToDHECy7mFD7NOb8ePj4/MQsQIAeu9EJ4PklhADiHgnEemcYEts2747b3W+E6I9c2o5gGTOpSEYFMNXlJRyJ8uyKu2jwlxMKwS3TSNCb4DfqgMGAFwjhPhz9CpZQ9YZ4ACSdQ+nwL6hoaGe3t5efRt+oP3vJSmAnQaIY+2lqWvb+xmc8jwNXksRxhwGkBher1M0AUyEuuneiV7yIqJtTcRpKKaNXxpXlUqly/v6+h41FCfDioSBeJ9vOQwgkXiNhUbEgD7ZtW7dOl3vZAER6b0TvTHP7ZkMeIj4K8/zrujp6bmGgwZPj7gY4AASF9OsJxQGNmYVtixrIRHpk115vnfyEAD8lIi+5TjOg6EQzEKYgQAMcAAJQBZ3NYuBdplfu/1lovdPnmcWwkjQrEPEoVar9X3HcW7m01ORcMxCfTLAAcQnUdzNfAaq1eq+lmUdQUQ6q/BrAaBkPmrfCB8mokuJ6CuVSmWV71GTdox3rbx7vCzBRAamCSA8yUx0GmOanIHh4eEZxWLxDAD4WEaKZt2BiBeuXr3654ODg3qDnBszYAwD/AVijCsYSLcMSCkXAsCXEXGPbmUZMF5/cXxizZo13+XAYYA3GMKEDHAA4YmRagYWL15sHXLIIUcj4rkA8MpUG/M/8Lfq48ucuDAj3sywGRxAMuzc8E0zZ0lz5cqVpccee+wERDwbALJ28fCrQoj3bOk/c/gPf26xxDQywAEkjV7LMWbXdbcHgFOI6L0AsFtGqdB7HWcIIb6VUfvYrIwwwAEkI47Muhm1Wm2fVqv1bkQ8EQBmZd3etn0uAHxYCPEbs+w17UvINDxmeStKNBxAomSXZXfFwNDQUGH27NlHeJ6nA0c/AORxvhIALCWiS1asWLF88eLFXlekZnwwh5J4HZzHH+RTDPNMi3emBdA2PDy8c6FQOBER38apS55BnL55/n0i0pcI+eZ5gDnFXaNhIL8BJBo+WWqHDOicV0888cRRRHQyAOiKhlaHovIwTH+F/BIAvjdr1qyfzZs3b0MejGYbzWOAA4h5PskVIinlAYh4EgC8CQB2yJXx4Ri7ARGXA8BVAHAdH/0Nh9Q8SAljEYYDSB5mimE2Ll++/PmtVuvNAHAqALzYMHgTwgnjxxapnU8B3DSV+5V9fX2PRKqTheeeAQ4guZ8C8RAwPDy8Y6lU0unYjyMiXda2GI/m7rUYHzwmNlEvc63QFQg9z/tZpVK5v3smWAIz8EwGOIDwjIiMASnlLpZlHUNExwHAwbyvERnV0wnWJ7nuBIBhRBy+5ZZbbufTXNNRxn/3wwAHED8scZ8nGfDzJq6DBiIerb80AGBeTo/emj5jdGnbG4io1tPTcz0vdZnuLnPxcQAx1zepQea67q5EdBQHjQhc5idqd6dWL3XdBQA1RFxaLpdv4Roj3RGap9EcQPLk7ZBs1QkMDz744LmFQkFXBVyQoSSGITGUajEPA8AyvdS1fv16d9GiRY+nzprog27qKIkKMAeQqJjNmNx6vT6r0WjYiKgLNumg8eyMmcjmbMlAAwBuAQCdUkWNjIzcyXsnPE02ZYADCM+HSRlo559ydGpxANAV/vJcf5xnCsCj7aUuZVmW6u/v/4dRpPCXR+zuiDSAsD9j92dXCqtSblMsFA7xPE8XZloEAC/oSiAPzjoDDyBiTW/GN5tNOTAwsDbrBrN9z2Qg0gDCZJvNQL1eL46Pjx/UTlQo2kdtU3M/w2x2c4fuv0R0s17qIiLlOM5veTM++3OAA0j2ffwMC2u12gtbrVYZEXW+KRsAenNGAZsbDwP/0fm69NdJq9UaHhgY+Hs8allLnAxwAImT7QR0SSlfgoivAwCdDl3/91kJwGCV+WaAiOh3lmXpnF3L169ff2MqT3fl24cTWs8BJGOTYpMvjMPaAWOXjJnI5qSUgU32RHXOLl0kq2ZZVm18fPymgYGBsS1X1/UFem4mM8ABxGTvTIOtvYdxgGVZryai1wCADhqzU2xSHNB/BQAH5KiqYRycdqvjCSK6aeMXyi233HI3HxfultJ4xnMAiYfnULTU6/Wt2pve+kjtq9upQrYJRXgOhCDit9evX3/WzJkz1ySRYkXf9CaiI3JAdbcm6uPCdb3c5Xneck4E2S2dE48P45QsB5BofBOK1CVLlmy91VZb7U9EhxKR3vjWXxhbhSI8X0L0kslHhRCfU0q9CADuS8h87b/TAOAtCelPq9p/AsDNekNe35J3HOdvaTUka7hTGUDCiJwmOlLf9m61Wge3Wi39oDkUEfVXRjYu7yXntFWWZR1fLpf1wweklIe3CzDFPgWI6DQhxGVKqa8h4jtjBxCDwpjc/PT9k/Hx8doRRxyxOgbTWMUEDKQygHTlyZhm+KYYJ1Opa2QUCoWDEfHQ9v7FQQBQ6so+HrwpA38motc7jnPvxv9TSnkyIn4/IZouEkKcRURYq9W+SkTvSghHltQ+Y0O+UCjc3NfX998sGWiyLfkLIAl647rrrtt25syZfQCgL+3p/+4dx1p8AjEzQZafVq1rX5yweYlXKeXHEPGTSQAkoqrjOLqoFugg4rruNwDgHUlgybDO9Xq5S++fENHyFStW3MUb8tF5mwNIdNyCzlp7yCGHvFJf2mvvYeiTUj0RqmTROiIjfrtYLJ7R19fX3JwQKeW3EfFtCRH1VyHEbht16yCilLoYEd+TEJ7Mq0XExz3Pu21jyhUhxJ18Qz48t3MACY/LJyXV6/XnNBoNvXeh80nprLVzQlbB4iZnYEzvLdi2/b3JukgpdapynRwyiUYbNmzYftNLdO0vkS8DwHuTAJQ3nUT0CCLepDfkLcuq2rb9UN44CNNeDiBdsqlPSs2cOXOe53k6NYj+p+8YcIufgUeJ6BjHcW6cSrVS6h4A2Dd+eE9ptCzroHK5/OvN9SulPgMA58SBK6dLmpNRyxvyXUw6DiAdkFer1V7carUWIaL+wtBlW3njuwMewxqCiHd6nnekn+OdSil9B2S7sHQHlUNEb3Ec5wcTjVNKfREAPhhUZjb6GxHW9Ib8yo37Jz09PSO8IT/17OIA4uPXt3EvQy9LIaKu9b2Pj2HcJR4Grh4bGzt54cKFevN0ylav15/VaDR0kr8k2+eEEGdPBsB13U8S0ceSBMi6n2ZgAwDcqTfldcqV3t7eX82dO1cX2eLWZoADyCRTYWhoqKe3t1cvSemAofczduBZYxQDOlHSJ23bXux3U7RWqx3oed7tSVqhb6Pbtq3n06RNKfVpADg3SZwd6Y7pIyImNRNRoO+b/FJ/oViWtaxcLj/QEU8ZGsQBZBNn6qAxe/Zsm4h00NAFlTjVuZmTfYyI3uo4zuVB4Ekpj0fEK4KMiaDvA0KIPaaTq5T6BAB8fLp+/PfkGEDEPxHRL3QwWbVq1Y2Dg4PjyaFJRnPuA0h7eep1iPhmADiKg0YyEzGA1kcR8SjbtvVZ/0BNSnkOIurN6iSbNzY2tq2fJTel1AcAQO+LZOt3muAnRISOX0dE0rKsnxaLxV/kZe8kWxMzwOxo1/seRMSTAGD3AEO5a3IM3G9Z1oJyudxRLiul1KXtXFTJWfDUPZX9bdu+yw8IpZR+sdHHkmOtFJnNZ7wfxkPpow9qXE9EV/X09Cyb6D5SKFoMEJKrADI8PLxdsVg8AQDeDgCvNIB/huCfgeXj4+PHdZP3SCml82HpwlqJNiJ6c5DlNynlkYj4U06kmajbOlX+DwC4DAC+KYR4uFMhpo7LRQCRUuqaGW8nIh08ZpnqDMY1MQOIeNns2bNP7/YEjFLqQQB4+iZ453x3935ORJ92HCfQSSullE7hf32SR5A754tHAkALEfUl1ov7+/uX+z34YTpzmQ0gK1euLK1evfo4InofABxouiMY34QMeER0tuM4X+iWn/apuifiXgqaCDci/ty2bb3fFqjpFyH9EAKAHQMN5M6mMXA3EX25p6fn8rQvb2UugNTr9d5Go6GXqHR+oZ1NmzmMxzcD+mF/ohDiWt8jpuio97w8z/t9GLJCkHGfEGKvTuS0a9xLANi1k/E8xhwGiOj/AcBndthhhx91+3WdlFWZCSC1Wu3Znud9uL2/wctUSc2ocPQ+3E7Dfkc44gBc1z2aiH4WjrzulrD0csasWbO2nTdvnr6oFrhJKXdBRAUALwk8mAeYyIBeWv3M6OjoD9N2FDj1AURKuRMi6sChC/RsbeLsYEyBGLi72WweMTAw8PdAo6bprJTSF/P0BT0jGhHNdRyn4wDZvlWvl7PmGmEQgwiDgfsR8Szbtq8LQ1gcMlIbQFzX3Z6IdPK5dwMA1wWPY7ZErAMRdR1sfcdDH4MMtUkpf9A+sh2q3C6EnSKE6KqwVbu+jP6qsrvAwUPNY0Bvsr/ftu3fmQftmYhSF0Dq9Xqx2Wy+jYj0TV3eTDR9hvnEh4hXNhqNkwcGBsZ8DgnUTSl1GwDoio+mtCerE3YLRh8WWbVqlS5M9dZuZfF4oxjQiR0v9Tzvo5VKZZVRyDYBk6oAopTSZ/gvTjIdt6mOTDmui0dGRj4QZeU4pdQoAGxvEE9SCBFaXZL2Et2nMndr3SCHJQFF1y+xLOsM27aveVp/11tw4VmSigBSrVbnWJZ1EQCczD+Q8JxvgCQioo+EcUx3KluUUs8DAH2hy6T2sBDi+WECklK+ARH1rfWtwpTLspJnoP2F/p6BgYGks0k/gwzjA4jruoNE9BUAeHbybmQEITKg02KfKoT4cYgyJxSllNI16PXRV6Oa53k7hL084bruYUT0c84ebZSrwwKjg8cZQoirwhLYrRxjA0h7g/Br+i5At0byeOMY0Pscbwzrjsd01imldJEmnZTQqEZEr52ugmIngGu12guJaJiIOrpr0olOHhMrAz+aNWvWOzo9Bh4mUiMDiFJqLoDO/UN7hmksyzKCgXWWZR1VLpd1XqpYmlJKn3bSy5+mtXcLIfRLUuitveyrL2G+JnThLNAEBu4qFArH9ff368uIiTXjAojruu8hIr3fwWViE5sWkSl+DAAqQghdNjS2ppTS+kysVf8tIcTpURFRr9e3ajQaek/kDVHpYLmJMjBKRKc4jqOXLBNpxgQQfTy30Wh8uX2vIxEyWGl0DLRPk4i4z7YPDQ0Vent7HweAmdFZ17HkW4QQh3U82sdAIkKl1PmIeL6P7twlfQzogygXOI6zOAnoRgSQ9q1afSGKP7eTmAXR63yAiMqO4+iUDbG2ZcuW7VUoFO6NVal/ZWts254dR2ZW13VPIaJvAkCPf3jcM0UMfKtUKr077uSMiQeQ4eHhnYvFos7rs3eKnMVQ/TPwB8/zypVK5Z/+h4TX03XdY4jo6vAkhisJEV9g2/ZD4UqdWJqU8jWIqO8T7BCHPtYROwPLSqXSYF9f37q4NCcaQJRSLwIAFwBeEJfBrCdWBn7X/vL4d6xaN1GmlLoAAM5LSv/kep+6DYaIR9i2/Yu48FWr1T0ty1rCiRjjYjx2PStLpZLd19enL85G3hILIK7r7k1EOvcR3++I3M2JKPhNeyI/moj2tlLXdZcQ0RFJYphKNyKeY9v2Z+PEp0sejI+PX4WI5Tj1sq7YrpD/ulQqiTiCSCIBZPny5Xu0Wq0bAUDfEOaWMQYQ8c5Wq2WHfUmuE5qUUjqrb6g3vjvBMdkYRLzctm1d9zzW1j60cgkARHYKLDSDYnvuhobYBEG3I6I+tBJ6YtJNjYs9gLT3PG4Kp7SoCX5iDJsxsHJ8fFx0U7s8LEbbqf7/FZa8iOTcLYR4RUSypxUrpTwTEb8EAIVpO3OHtDFw24YNG+xFixbpU4iRtFgDSLta4C0AsE8k1rDQpBm4rVQqVeL4dPZjqOu6DhFV/fRNsM9YqVSaFffpmU3tlVLOR8QruN56grMgOtW/GB0dXTQ4OKiz+4beYgsg7bTTerOQaxeE7kYjBI40m835AwMDa41Ao5NfSXkOIn7GFDyT4UDEfWzb/mOSOKWU+yHi9QCwe1c4eLmpK/oiGnyxEOJ9UciOLYBIKb+NiG+LwgiWmTgDN2/YsGEgyk/lTixUSl0JAIOdjI1zDCIeb9v2UJw6J9LVXvLT6U/mJY2F9YfLABGd4TjO18OVChBLAGlfYrosbPCB5PGbUSC6AnT+ValUOiLOs+d+sSml/gQAL/bbP8F+nxRCfDxB/U+r1ulPms3md4joTSbgYQyhMdAEgLIQ4lehSYyjtka1Wt3XsqzbuV55mG4zRtaNpVJpgYnBY3h4eLtisbgaACxj2JocyLVCiKNNwqmUei8A6N6lUFQAAB79SURBVM31NPBnEnUmY/mHZVkvL5fLOiddKC3EL5AtX/GHh4dnFItFnchuv1DQshCTGHBnzZq1yISU0hOR0q6LoU/7paHdL4TQl2qNau1aPDqTsYl5xIziKi1giOhnjuMcGxbeEAPIlpCUUp8GgHPDAstyjGFAzpo16yhTg4dmqX08VZc/TkPziGg7x3GeMA2slPJViHgdX/gNwzNmrKN7RKdVHOe7YVkUhpwtZCil9Nl2vXTFadkjYTgxob9oNpvHDAwM6KJQxjallN5zO8VYgJsBsyzroHK5/GsT8Uopd0dEfYIyw/nqzHi4x+F/RHyciF4ihHi4W32RfIHoFNKu644AwMHdAoxzfH6mUMesXj86Onrc4ODgeMcSYhqolLoLABK7oBfUTEQ81bZtXbvDyNa+w6WTUvYbCZBBBWXgx0KIrqu9RhJAlFJvBICfBLWI+5vLACIubTQax5r+5aEZHBoa6mnXAElT6vIvCSF06V1jm05/Mj4+/hVEfKexIBmYXwZ0HZHXdVtSOfQA0q6Cpi9F7ebXEu5nPANXz5kz54S5c+c2pkea/HdctVrd37KsO6bHalQPVwghjEI0CRjXdc8mIn1BM/TnRxrszxDGu0ZHRw/s5pZ66BNASvkuRIykznOGHJcaUxDxymKx+OYkU20EJUtK+VZE/E7QcQn3/6cQIjXJRZVSxwHAD/iEVsKzpnv1g0KIq3yJmeDdMNQA0k5Xch9/ffhyRxo6DZVKpTelKXhoUpVSXwWAM9JA8KYYm83mTgMDA/9JC+70ntBK/ivZIB+vFEIc2CmeUAOIlPJkRNTnxrmlnAEi+smaNWtO6ubzNikKlFI3A8ChSenvVC8i9tm2/ctOxycxrn1CayknSE2C/XB0ElG/4zg3dCIt1ACilLoVAF7VCRAeYxQDPx4dHX1LGoPH4sWLrXnz5ukaCLOMYtQHGEQ807ZtXaMjVY1PaKXKXROBlUKISidWhBZAarXayzzPu7sTEDzGKAauKJVKJ6Zt2Wojg8uWLdurUCjcaxSj/sF8SwiReIGnThZ4+ISWfycb2JMKhcLu/f39fw2KLbQAopT6PwDQ+XO4pZeBH4yMjJy6ePFiL60mSCmPb9e2SKMJI0KI1C29bUp0dCe0EBAIKI1eTQfmDwohdO6zQC2UANK+OKij1y6BtHNnkxj43sjIyGlpDh6aTKWUri/+EZOIDYBlrW3bvYiY6uek67rHENEPOYFqAM8n3/V2IUTg7YdQAki1Wj3IsqzbkueAEXTIwHdHRkbenvbg0Q4gugKh0yEPiQ9DxBfYtv1Q4kC6BOC67sFEpHNo7dSlKB4eDwP6YuEejuM8GERdKAFEKfUJADCinkEQ47kvABFdumLFitOzEDzaAeSRlCf+WyCEGM7C3OQTWqnz4tuEEIHuT4USQFzXvYGI+lJHV84BI+K3y+Xy6WlfMtnoRqWUvoj3jzS7FRE/ZNv2F9Nsw6bY+YRWqjz5XSHEaUEQdx1A2nmHdOGerYMo5r6JM/BN27Z11oBUr7dvyqLruguISN9JSHP7vhAiNVmE/RCtnxHbb7/9pYh4kp/+Hffp5PhYx8oyOfAeIcRLg1jWdQBpp23XmU+5pYQBRPx6uVx+d5aCh6bedd2PEtGnUuKGyWD+WghxUMpt2AJ++6CNXuo+L2u2Zcger9lszh4YGFjr16YwAohOCaxPXHBLAQNZW7balHKl1M8AwKjSsB1MiSdGRka2y8qe1Ob2K6XeAgDf5jpBHcyMGIYg4v62bfv+IAgjgKT52GQMLjFKxVds235f1r48NjIspbwfEfcwivEOwBDRC4OehulATWJDXNfVp+SuIqJtEwPBiidkwLKs+eVyWZ9k9NXCCCA/BYA3+NIWYSde/pyW3MzteWxq8fDw8HbFYnE0CynGiWih4zhp38uZckJKKfdDRH3ajO+OTfvTjbXDKUII3/kMuw4gfAIrVud2quwiIcRZnQ5Owzgp5WsQ8VdpwOoD49lCiM/56JfqLlLKXdqlcgNt3KbaaMPBI+I5tm3rVSVfresAopS6BwD29aWNOyXBwCeFEJm/o6OU0ml0dDqdLLQfCSGiPbFkCEuu625PRHrvikvlmuGTQM+LMALI/wOAF5phO6PYjIHzhRAX5IEVpZT+7D45MVtDXENFxDtt2z4gMVtiVqwTMTabza8R0dtjVs3qtmQg0DMjjADyNwDYmT1hFAOEiB+wbTsrb+TTkiulvBsRXzZtx3R02DA6OrptGtPpd0qvPuarlDofEfXXctfPpU5xpGJciC8rm9uLiB+zbfvTfnno2lFKKQ4gftmOp19Lv8k5jnNZPOqS1zI8PDyjWCw+nqWjoZ7nvahSqdyfPLvxIpBSnoqI38ySL+NlsGttgfbfwgggfwCAvbuGzQLCYKBBRCc5jnNFGMLSIqNare5vWdYdacHrByciHmnbtk5GmLumlBL6mC8AbJc74xM2mIje6zjOV/zCCCOA3A4AHdfU9QuU+03LwBgiHp/Hh077rfW70zKUrg4fFUJ8Jl2Qw0NbrVZfblnWLwDg+eFJZUnTMUBEb3Ac58rp+m38exgB5HoAWOhXIfeLhIF1AHCkEGJ56NIjXG8NC6tSSpeBfXdY8kyQo2vSO47zJhOwJIVheHh450Kh8IsM7W0lRaVvvUT0WsdxbvQ7IIwAkrkfr1/yDOm32rKsBeVyeYUheGKHoZS6BQDmxa44WoV3CyFeEa0K86XX6/VZjUZDL8kuMB9t+hEG3XsLI4B8AAAuSj91qbTg74gobNv+YyrRhwB68eLF1qGHHjqawbQY/x0dHZ2Vp5NYk00Hfcy30Wh8AwACpRoPYXrlTYQ3Nja27cKFC9f7NbzrAFKtVvssy7rBr8Jc9wt3OeiBQqEg+vv79T2c3LZarfZiz/P+lEUCLMvaq1wu35dF2zqxqX1ZVNfttjoZz2OmZeBeIUSgA1FdB5D2TdJV7NRpnRNaB33RzPO8+Y7j/Ds0oYkJ6i6qSimPR8Ssnjo7WghxbWKuMVCxlPJYRNTZv2caCC/tkH4qhDghiBFdBxCtLGOXuILwF3tfRKw3Go0jg+Tsjx1kjAqllBci4tkxqoxT1ceFEJ+MU2EadLmuexgR/RwAdkgD3hRh/IgQ4vNB8IYSQFzX/TwRfSiIYu4bnAF9MqfVap06MDAwFnx0NkdIKZchYiWL1iHilbZtJ57p2kRu20uX+pjvnibiSyOmoCewtI2hBBDeB4llunzOtu1zslrLoxMGh4aGCr29vXoZb04n41MwJnCJ0RTYFBrEer3+rEajoS9bZu0EXmgcBRA0WiqVduzr62sGGBNOANEnYebNm/dXzokVhHrffVsA8F4hxNd8j8hJR9d1DyYiQ44vd7eXM4nLGnPmzNlm7ty5jZy4NLCZOo1NoVC4DBEDrd0HVpTxAZ1+7YbyBaK55WWsSGbYev3DyOPtcj9sKqV04j1dZzuzzbKsfcvlsk4XxG0SBtpHuT/Ly+idTxFEPNm27cClyUMLIEqpFwHAvXwaq3MnbjbyX0S0yHGc20KTmDFBGb1A+AwvEdFxjuNcnTHXRWKOUuodAPBVAChGoiCjQhHx8UajsXMnB3NCCyCaWynlzxFxUUZ5js0sIvqt53mL5s+f/5fYlKZMUb1e7200Gv/J+sMCERfbtp3pr6wwp161Wn21ZVm6QNWOYcrNsiwi+objOO/qxMZQA0itVjvE87yRToDwmKcZuLZUKp3U19en81txm4SB9n0AnbE16+0qIcRg1o0M0z59QouIrieivcKUm1VZnue9olKp3N2JfaEGEA1AKXUNABzVCZicjyEAuHBkZOS8xYsXe5FwEck+byRIpxWqlLo0J6kt/iCE4JLR086IZ3ZYunTp7FKpNISI5YBDc9WdiGqO49idGh16AFm2bNlehULhtwDQ0ymoHI77LyK+1bbtn+TQ9o5MVkrpU3+7djQ4XYMa7ZxY4+mCnTzadg4tXZXzjOTRGIlAv7QeJIRY2Sm60AOIBiKlXIyI53cKKmfjHiKiQd4s9+/1Wq22j+d5v/c/It09ieiljuPck24rkkOvlDoRAL4Ve/oTw7/4Oz26u6knIwkgQ0NDPb29vbpC3H7JTZtUaL5+fHz8LUccccTqVKA1BKTruu8joi8bAidyGEGL/EQOKIUKqtXqQe3N9Z1TCD8KyE8UCoWXd5uMNZIAoq3VS1nFYvHXGUyzHYYzdd3yT61YseKCyPY7wkBpqAylVBUAHEPhRQHrAiEEf9F3yWz75rpOvNnfpagsDH+nEELXnu+qRRZA2ktZb0LEH3eFMHuD/9m+HPjL7JkWvUX1en2rRqOhsz/nJhsrEf3McZxjo2c3+xr0vsj4+PgXEPG9YaVyShtrRFQVQgyEkRYp0gCiiVVKXQAA56WN5Cjw6gdBT0/P6X19fY9GIT8PMqWUhyNi+KV7zSbvj0KIfcyGmC50UsojEfG7Gc6jNplDHiqVSq/q6+t7JAyPRR5AiAhd19VHLt8aBuCUylhLRGc6jvODlOI3BraU8lOI+FFjAMUDZIuTWIbvz8bDSpdaXNfdlYguB4DDuhSVluG6cuerOzmQMdl8izyAaGbbyRb1KYg8lqS8sdVqncy3ysP5jUkpRxDxkHCkpUcKn8SKxld6SavZbJ5PROdmPA3TOBHpInShVo+NJYBo17e/RL4IALqGeh7aKiI6Z8WKFd/hjfJw3H3ddddtO3PmTL3/kbtcR4h4vG3bQ+EwyVI2Z0ApdSgAXAYAL84aOzrXFSIeXS6Xa2HbFlsA2QhcKaW/QnRq8qxeNNSXc35MRGdlo+Rs2FOuc3mu6y4goqWdS0jvSCL6hOM4i9NrgfnI2wc0NMdnAUDBfMS+EOqkrAscx9HXKkJvsQcQbYGUcl77dNbuoVuUrMC7PM97b6VSuSlZGNnUrpS6KEdfsJs78WohxHHZ9KxZVkkpX4WI38nAPbbbiOiNjuM8GBXDiQQQbczw8PB2xWJRpxk4JSrj4pKLiH8CgI+Xy+WrwjgaFxfutOlRSt0FAK9IG+6Q8HJOrJCI9COmnQZFp4fXmZDTVntdF6H7XKlUOj9ohUE/3GzaJ7EAshGEUuq1RPQVRHxZUPAG9P8rEV3Q09Pzw6gdZYCtEUOY+lxRrVbbwfM8Xb7WihiIQeKfwQlXJ0zAMzop44wZM84jIp1PKw3L7jqv1fuEELfEQVfiAUQb2Y72bwEAfRIiDctav0LES4rF4nUcOOKYpk8uex6LiHlI3z4poVydMJ65NpEWKeXulmWdRUR6xcTES6x/A4CPjoyMXB7noR0jAshGh61cubK0evXqNwPAu4lo/+Smy4SaVyHi1a1W6+ud5s7v2J4tXs7zdwtASvl1RHxnxxxmY+CgECLXQTRpN0opdwKAM9tzcU7SeABAL+t+pdls/nRgYGAsbjxGBZBNjVdKzSWiU/XxMwB4dtzEtPXpJIfXEdHQDjvsUJs7d24jIRy5V6uU0nXB984zEWmpTpiH1xt9YqvZbA4Q0ZsAYAAAtopxbupKnNd7nveDpA/sGBtANjpDX0I8+OCDD0VEnbvlNQAwN8K1yEeJSK8d6iWqm0ZHR+8aHBzUG1LcEmRgeHh4x2Kx+K+85i7ahPohIcTxCbqCVU/AQLu88hGI2KdvegPAi0ImSn9Z6C+NWzzPu27t2rUjpjyXjA8gmztiZGRk5vr1619BRPt5nrcPImpnPb/9laK/VKbaZF2DiI8QkY7g+t/fiEifoLq3p6fnD2Hlhwl58uReXDtv0bW5JwLg90IILpFg+ERQSj2vnS3hRUS0ByLuof8LANsCwPaTPKPWE9FaRNR7GbpYmj6g8wARrVy7du1vBgcHjSwolroAMt3c0fsojzzyyKxN+3VbbyMPn+TT8Zrk35VSOoPBB5PEYIju8Tlz5szipVRDvNEhjOHh4Rme522th2+zzTaNvr6+dR2KSnxY5gJI4owygNAZUErdpktvhi54OoEGvjkg4j62bf9xOujB/m6gocEM4N4JMcABJCHiWa0/BpYsWbL1jBkz9GGGNJzB92dUF70Q8Vjbtn/WhQgeygyExgAHkNCoZEFRMJDT+h9TUXm+EELX2OHGDCTOAAeQxF2QDgBJLXIopT7eTieRDqIiRomIV9q2/YaI1bB4ZsAXA/kLIEk9CX25gzttzoBSSgGAzcw8xQAR/dZxnJczH8yACQzkL4CYwDpj8MVAu9iPrquijz9ye4qB/46Ojs4y5R4AOyXfDHAAybf/jbbedd1XEtGdRoNMAJxlWXuUy+UHElA9gUr+pDfDD8mg4ACSDO+s1QcDSimdTvubPrrmrcsCIcRw3oxme81jgAOIeT5hRG0GlFK6qM9bmZAtGPigEOJLzAszkDQDHECS9gDrn5QBKeXdKa0TE6lXEfHbtm3rrzNukzHAK2uxzA0OILHQzEqCMtC+QLgGAIpBx2a9v070adu2TizKjRlIlAEOIInSz8onY8B13cOIiGvLT0zQf4QQui4FN2YgUQY4gCRKPyufjAEp5fsRkdf5JyHIsqxnlcvlx3gGMQNJMsABJEn2U6c7voVlpdRPAOCNkVAUnxmRwG8LPSyuutdRGsGy080AB5B0+y+z6JVSfwaAPTNrYJeGEdFpjuN8t0sxPJwZ6IoBDiBd0ceDo2DAdd3tiUhn4OX5OQnBRPRFx3E+FAX/LJMZ8MsA/0D9MsX9YmNAKXUoANwcm8IUKkLEpbZtL0whdIacIQY4gGTImVkxhW+g+/Lk/UKIsGtv+1LMnZiBjQxwAOG5YBwDSqmvAsAZxgEzC1CrVCrN6uvr+69ZsBhNnhjgAJInb6fEVqXULwHgtSmBmxhMInqp4zj3JAaAFeeeAQ4guZ8C5hGglHoUAHYwD5lZiIjoOMdxrjYLFaPJEwMcQPLk7RTYqpR6HgD8IwVQE4dIROc6jnNh4kAYQG4ZmCCAZOOWVW49mnLDXdd1iKiacjPigv8dIcTb4lKWTz38PJzK7/wFks9fhbFWK6U+AAAXGQvQIGCIWLdt+3B+xBnklJxB4QCSM4ebbq5S6hsAcLrpOA3B91chxG6GYIkIBofHiIgNRSwHkFBoZCFhMaCUkgAgwpKXcTles9ncemBgYCzjdrJ5mzNgSFzlAMJT0ygGOAdWMHdYlrVXuVy+L9go7s0MhMMAB5BweGQpITAwNDRU6O3tXQ8APSGIy4UIy7Lml8tlPnSQIW8b8nHhi1EOIL5o4k5xMLB8+fIXtFqtv8ShKys6iOgMx3G+nhV72I50McABJF3+yjRaKeXhiLg800aGbBwRfdZxnHNCFsvimAFfDHAA8UUTd4qWgac+2pVSpwHApdHqypz0HwshTsycVWxQKhjgAJIKN+UDpFLqAgA4Lx/Whmblr4QQrwtNGgtiBgIwwAEkAFncNVoGpJTfRkS+WR2M5geEEHsEG8K9mYFwGOAAEg6PLCUEBlzXvZaIjgxBVJ5EjNm2PRMRKU9Gs61mMMABxAw/MAoAvQdyCwDMYzKCMUBEz3Yc59/BRnFvZqB7BjiAdM8hSwiJAaWUvhCXmyp7YZ339zzvFZVK5e6Q3MBimAHfDEQcQML6ifi2hzummAGl1CgAbJ9iExKBTkT9juPckIhyVpprBiIOILnmlo0PwMDQ0FBPb2+vLs/KczIAb7orIh5v2/ZQwGHcnRnomoHOf6z8cdE1+SzgfwzU6/XnNBqNfzInwRlAxHfZtq2zGHNjBmJloPMAEitMVpZ1BpYtW7ZboVB4MOt2RmTfx4UQn4xINotlBiZlwF8A4a8NnkIRM1Cr1V7sed6fIlZjmPjQflgXCyHeZ5hxDCcHDPgLIDkggk1MloFqtbqvZVn3JIsitdq/L4Q4JbXoGXhqGeAAklrXZQt4tVrd37KsO7JlVWzW/FQIcUJs2lgRM9BmgAMITwUjGHBd92AiWmEEmPSBuEYIcUz6YDPiMBkIbUE0ACgOIAHI4q7RMVCtVl9tWdaN0WnItORhIcSCTFvIxhnJAAcQI92SP1C1Wu0Qz/NG8md5KBYvF0KUQ5HEQpiBAAxwAAlAFneNjgEp5X6I+LvoNGRXMiLeZNv2a7JrIVtmKgMcQEz1TM5wSSl3R8QHJjU7iQXe9PiAv0DS46tMIeUAkil3pteY4eHhHYvF4hQZZTmCTOZdRFxq2/bC9HqfkaeVAQ4gafVcxnCPjIzMXLdu3fqMmRWXOVcJIQbjUsZ6mIGNDHAA4blgDANKqQYAFI0BlB4gPxJCnJQeuIw0KwxwAMmKJzNgh1JK58LaLQOmxG3Ct4QQp8etlPUxAxxAeA4Yw4BSajkAHG4MoPQA4WSK6fFVppByAMmUO9NtjFLqUgA4Ld1WJIL+FCHE9xPRzEpzzQAHkFy73yzjlVLnAsCnzUKVCjRlIYT+euPGDMTKAAeQWOlmZVMxIKU8HhGvYJaCMWBZ1l7lclnXk+cWNwM5P13OASTuCcf6JmWgVqvt43ne75miQAyMNZvN7QcGBsYCjYqic84fplFQarpMDiCmeyhH+IgIXdf9FwDsmCOzuzX1NiHEwd0K4fHMQCcMcADphDUeExkDUsqfI+KiyBRkTDARXeI4zpkZM4vNSQkDHEA6cRR/qnfCmq8xruueRURf8NWZO2kGThRC/JipYAaSYIADSBKss85JGeDCUsEmR6vV2n3+/Pl/CTaKezMD4TDAASQcHllKSAwsXrzYmjdv3kMA8PyQRGZZzEohxIFZNpBt64SB+JZIOIB04h8eEykDSqmLAOADkSrJhvCzhRD/v737eW2kjOM4/n3Spj/EH9tFWFFhQRFBxKKeFEUinUwMhe6peBDRi4uKh9V/oFdB9iLoIqh48FJQqcWYpq2jLNuK1MMuguDuXlQ8tgui1Uyarwz2sLsoyT6ZH8/MvHPpIfM8z/f7eqb9pEkmebMYrdBFHgUIkDzuWsFrbrfbj1Qqle8L3ubI7fX7/fsajcalkSdiAgQsBQgQSziGJSvQ6XSi60EeSHaVXM9+rl6vP5HrDkpbfHpPMSVNTIAkLcz8VgJra2unjDGnrQaXYJAx5oTneSslaJUWHRYgQKw2pziPIKzaT2HQ6urqTZOTk9FX3B6LY7mC7diPW1tbDy4tLfXjsGEOBGwFCBBbOcYlLtDpdKIX0qMX1LldJaCqL/i+/xEoCGQtQIBkvQMjrl+wR9bXaARBMBWG4WURuXNEpsIMV9ULExMTj9ZqtV5hmqKR3AoQILndunIU3ul0TorImXJ0O7DLfr/ff6zRaHw38EgOQCAFAQIkBWSWsBc4/IDFL0XEt58lrZHJ/j+oqu/6vv9KWt2wDgKDBAiQQULcn7nA5ubm8YODgwsicmvmxWRXwC/dbnd2fn5+79oSkg2t7Npl5TwIECB52CVqlE6nE33VbfSVt2W8hSJSq9fr58rYPD27K0CAuLs3VHaVwOFTWe+LyItJwLj8OF5VX/V9/50k+mbOhARcPqFibJkAiRGTqZIV2NnZqe7u7n4hIl6yK7kzuzHmY8/znnOnov+upCR/L13fhtTrI0BSJ2fBUQRWVlZumZ6ePisis6PMk4exxphgfHy8WavV/spDvdRYPgECpHx7nvuOW63W3dVqdUNV7899M//fwM7+/v7TCwsLvxe4R1rLuQABkvMNLGv57Xb7aKVSWRWRxwtocLFSqTw5NzcXfT88NwScFSBAnN0aChskEATBzWEYfiIi9UHH5uj+H3q93jPNZvPXHNVMqWkJOPZiEwGS1sazTiICy8vLEzMzM2+r6kuJLJDupN9Uq9UTtVrtSrrLshoCdgIEiJ0boxwTWF9fX1TV90TkNsdKG7acD3u93svNZvPvYQdwHAJZCxAgWe8A68cmsLGxcU+/3/9ARJ6KbdLkJ7pijDnped5y8kuxAgLxChAg8XoyW8YChxccPisib+XgU3w/N8a85nnezxmzsTwCVgIEiBUbg1wXiK4XmZqaeiP6Ay0iRx2r97yqvu77/leO1UU5CNyQAAFyQ1wcnDeBw3dqRR8Jf0pE7sqyflXdFpHT29vbn/JtglnuBGvHJUCAxCXJPE4LBEEwHoZh3RjzvKouiMhUSgVH76haMcac8Tzv25TWZBkEUhEgQFJhZhGXBIIgOBKGYfR5WtH1I9HP43HWp6qXjTFfG2M+29vbW19cXOzGOT9zIeCKAAHiyk5QR2YC0bu3VPVhVX1IVWeNMfeKyB0icvuAov5U1UsictEY85OqnjfGnK3X679l1gwLI5CiAAGSInYmSzl25WomBpaLtlqtyWq1eswYM26MMb1e74iI/DE2NrbX7XavcM2GJSzDCiNAgORiK0mBf7cJh1ycrhR5nUBxz1sChJMdAQQQQMBKgACxYmMQAggggAABwjmAAAIIIGAlQIBYsTEIAQQQQIAA4RxAAAEEELASIECs2BiEAAIIIECAcA4ggAACCFgJECBWbAxCAAEEEBgxQIp7gQynBgKxCvCrEisnk7khMGKAuNEEVSCAAAIIpC9AgKRvzooIIIBAIQQIkEJsI00ggMDQAjydODTVoAMJkEFCpb2f37LSbj2NIzCkAAEyJBSHIVB6AR5TlP4UuB6AAOGUQACB+AUIm/hNHZzxH4q9NnpKmpUIAAAAAElFTkSuQmCC",
                        id: "section-flower_svg__b",
                        width: 400,
                        height: 453
                    }, void 0, false, {
                        fileName: "[project]/components/icons/SectionFlower.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/icons/SectionFlower.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons/SectionFlower.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
_c = SvgSectionFlower;
const __TURBOPACK__default__export__ = SvgSectionFlower;
var _c;
__turbopack_context__.k.register(_c, "SvgSectionFlower");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/icons/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/icons/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SectionFlower$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/SectionFlower.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/icons/index.ts [app-client] (ecmascript) <locals>");
}}),
"[project]/components/icons/SectionFlower.tsx [app-client] (ecmascript) <export default as SectionFlower>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SectionFlower": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SectionFlower$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SectionFlower$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/icons/SectionFlower.tsx [app-client] (ecmascript)");
}}),
"[project]/components/SectionTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/icons/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SectionFlower$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionFlower$3e$__ = __turbopack_context__.i("[project]/components/icons/SectionFlower.tsx [app-client] (ecmascript) <export default as SectionFlower>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const SectionTitle = ({ icon, title, className, classNames })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-4 mb-10', className, classNames?.container),
        children: [
            icon ? icon : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2f$SectionFlower$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionFlower$3e$__["SectionFlower"], {
                width: 25,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('animate-spin duration-7000', classNames?.icon)
            }, void 0, false, {
                fileName: "[project]/components/SectionTitle.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xl uppercase leading-none', classNames?.title),
                children: title
            }, void 0, false, {
                fileName: "[project]/components/SectionTitle.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionTitle.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
};
_c = SectionTitle;
const __TURBOPACK__default__export__ = SectionTitle;
var _c;
__turbopack_context__.k.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Experiences.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const Experiences = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Experiences.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1
                }
            });
            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3
            });
        }
    }["Experiences.useGSAP"], {
        scope: containerRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Experiences.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1
                }
            });
            tl.to(containerRef.current, {
                y: -150,
                opacity: 0
            });
        }
    }["Experiences.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-section",
        id: "my-experience",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "A Minha Experiência"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Experiences.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-14",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MY_EXPERIENCE"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "experience-item",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xl text-muted-foreground",
                                    children: item.company
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Experiences.tsx",
                                    lineNumber: 62,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-5xl font-anton leading-none mt-3.5 mb-2.5",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Experiences.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg text-muted-foreground",
                                    children: item.duration
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Experiences.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, item.title, true, {
                            fileName: "[project]/app/_components/Experiences.tsx",
                            lineNumber: 61,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/_components/Experiences.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/Experiences.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Experiences.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
};
_s(Experiences, "s8liHluc47+lo+uB8jKHHkDNMHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Experiences;
const __TURBOPACK__default__export__ = Experiences;
var _c;
__turbopack_context__.k.register(_c, "Experiences");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/Skills.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const Skills = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Skills.useGSAP": ()=>{
            const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');
            if (!slideUpEl?.length) return;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5
                }
            });
            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4
            });
        }
    }["Skills.useGSAP"], {
        scope: containerRef
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "Skills.useGSAP": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1
                }
            });
            tl.to(containerRef.current, {
                y: -150,
                opacity: 0
            });
        }
    }["Skills.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "my-stack",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "As Minhas Tecnologias"
                }, void 0, false, {
                    fileName: "[project]/app/_components/Skills.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-20",
                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MY_STACK"]).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "slide-up text-5xl font-anton leading-none text-muted-foreground uppercase",
                                        children: key
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/Skills.tsx",
                                        lineNumber: 69,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Skills.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap",
                                    children: value.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "slide-up flex gap-3.5 items-center leading-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: item.icon,
                                                        alt: item.name,
                                                        width: "40",
                                                        height: "40",
                                                        className: "max-h-10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/_components/Skills.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Skills.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl capitalize",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/_components/Skills.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, item.name, true, {
                                            fileName: "[project]/app/_components/Skills.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/_components/Skills.tsx",
                                    lineNumber: 74,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/app/_components/Skills.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/_components/Skills.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/Skills.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/Skills.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
    "TURBOPACK unreachable";
};
_s(Skills, "s8liHluc47+lo+uB8jKHHkDNMHU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = Skills;
const __TURBOPACK__default__export__ = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TransitionLink.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const TransitionLink = ({ href, onClick, children, back = false, ...rest })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { contextSafe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "TransitionLink.useGSAP": ()=>{}
    }["TransitionLink.useGSAP"]);
    const handleLinkClick = contextSafe(async (e)=>{
        e.preventDefault();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.page-transition', {
            yPercent: 100
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set('.page-transition--inner', {
            yPercent: 100
        });
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
        tl.to('.page-transition', {
            yPercent: 0,
            duration: 0.3
        });
        tl.then(()=>{
            if (back) {
                router.back();
            } else if (href) {
                router.push(href.toString());
            } else if (onClick) {
                onClick(e);
            }
        });
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        ...rest,
        onClick: handleLinkClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/TransitionLink.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
};
_s(TransitionLink, "5CcmVzSEkI2Eibearn8mZh+U4iA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = TransitionLink;
const __TURBOPACK__default__export__ = TransitionLink;
var _c;
__turbopack_context__.k.register(_c, "TransitionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/_components/ProjectList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TransitionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-up-right.js [app-client] (ecmascript) <export default as MoveUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]);
const getPlainDescription = (description)=>description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const ProjectCard = ({ project, index })=>{
    _s();
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const images = project.images.length ? project.images : [
        project.thumbnail
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "grid overflow-hidden border border-border bg-card shadow-2xl lg:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative min-h-[280px] sm:min-h-[420px] lg:min-h-[560px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: images[imageIndex],
                        alt: "",
                        fill: true,
                        sizes: "(max-width: 1023px) 100vw, 50vw",
                        "aria-hidden": "true",
                        className: "scale-110 object-cover object-center opacity-35 blur-2xl"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: images[imageIndex],
                        alt: `${project.title} — imagem ${imageIndex + 1}`,
                        fill: true,
                        sizes: "(max-width: 1023px) 100vw, 50vw",
                        className: "relative z-[1] object-contain object-center",
                        priority: index === 0 && imageIndex === 0
                    }, images[imageIndex], false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/3 bg-gradient-to-t from-card/80 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-5 z-[3] flex justify-center gap-3",
                        children: images.map((image, currentImageIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Ver imagem ${currentImageIndex + 1} de ${project.title}`,
                                "aria-current": imageIndex === currentImageIndex,
                                onClick: ()=>setImageIndex(currentImageIndex),
                                className: `h-2.5 rounded-full transition-all ${imageIndex === currentImageIndex ? 'w-10 bg-primary' : 'w-2.5 bg-foreground/70 hover:bg-primary'}`
                            }, image, false, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 53,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/ProjectList.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[560px] flex-col p-6 sm:p-10 lg:p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4 font-mono text-sm text-primary sm:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "_",
                                    String(index + 1).padStart(2, '0'),
                                    ". PROJECTO"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: project.year
                            }, void 0, false, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-9 font-anton text-4xl leading-none sm:text-5xl",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg",
                        children: getPlainDescription(project.description)
                    }, void 0, false, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-7 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-sm text-primary",
                                        children: "MINHA FUNÇÃO"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 leading-relaxed",
                                        children: project.role
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-sm text-primary",
                                        children: "TECNOLOGIAS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 89,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2",
                                        children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-background-light px-2.5 py-1 text-sm",
                                                children: tech
                                            }, tech, false, {
                                                fileName: "[project]/app/_components/ProjectList.tsx",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto flex flex-wrap items-center gap-x-7 gap-y-4 pt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${project.slug}`,
                                className: "inline-flex items-center gap-3 font-mono text-base text-primary transition-transform hover:translate-x-1 sm:text-lg",
                                children: [
                                    "VER DETALHES ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__["MoveUpRight"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 108,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            project.liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.liveUrl,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                className: "inline-flex items-center gap-3 font-mono text-base text-foreground transition-colors hover:text-primary sm:text-lg",
                                children: [
                                    "VER DEMONSTRAÇÃO ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/_components/ProjectList.tsx",
                                        lineNumber: 117,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/_components/ProjectList.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/_components/ProjectList.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/_components/ProjectList.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
};
_s(ProjectCard, "o3QdOvBx1glE+C1mg68BfbxAJt0=");
_c = ProjectCard;
const ProjectList = ()=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "ProjectList.useGSAP": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from('.project-card', {
                y: 80,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            });
        }
    }["ProjectList.useGSAP"], {
        scope: containerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pb-section",
        id: "selected-projects",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "Projectos em destaque",
                    className: "mb-10 md:mb-14",
                    classNames: {
                        title: 'font-anton text-4xl sm:text-5xl md:text-7xl lg:text-8xl',
                        icon: 'text-primary'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/_components/ProjectList.tsx",
                    lineNumber: 149,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-10 md:space-y-16",
                    ref: containerRef,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "project-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: project,
                                index: index
                            }, void 0, false, {
                                fileName: "[project]/app/_components/ProjectList.tsx",
                                lineNumber: 161,
                                columnNumber: 29
                            }, this)
                        }, project.slug, false, {
                            fileName: "[project]/app/_components/ProjectList.tsx",
                            lineNumber: 160,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/_components/ProjectList.tsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/_components/ProjectList.tsx",
            lineNumber: 148,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/_components/ProjectList.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
};
_s1(ProjectList, "R5+5KjrXQ5+JB5wCKyyreNNaUX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c1 = ProjectList;
const __TURBOPACK__default__export__ = ProjectList;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "ProjectList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_0304661b._.js.map