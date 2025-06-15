(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/shared/Tabs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/tabs/tabs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Tabs({ id, tabs, hideList, className, listClassName, panelClassName, tabClassName, initialTabName }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [tabIndex, setTabIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialTabName ? tabs.findIndex({
        "Tabs.useState": (tab)=>tab.name === initialTabName
    }["Tabs.useState"]) : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabGroup"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex min-h-0 flex-grow flex-col justify-between gap-y-2.5 rounded-xl', className),
        selectedIndex: tabIndex,
        onChange: setTabIndex,
        children: [
            !hideList && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabList"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full flex-row flex-nowrap rounded-xl border border-white/[2%]', listClassName),
                children: tabs.map(({ listItemContent, nameKey, name }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-1 items-center justify-center rounded-xl text-light-gray focus:outline-none data-[hover]:bg-background/[44%] data-[hover]:data-[selected]:bg-background data-[selected]:bg-background data-[hover]:text-main data-[selected]:text-main', tabClassName),
                        children: listItemContent ? listItemContent : nameKey ? t(nameKey) : name
                    }, nameKey || `tab-${index}`, false, {
                        fileName: "[project]/src/shared/Tabs.tsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, this))
            }, id, false, {
                fileName: "[project]/src/shared/Tabs.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabPanels"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-grow rounded-xl md:overflow-y-auto md:overflow-x-hidden', panelClassName),
                children: tabs.map(({ name, content, className }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$tabs$2f$tabs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabPanel"], {
                        className: className,
                        children: typeof content === 'function' ? content({
                            name
                        }) : content
                    }, `panel-${name || index}`, false, {
                        fileName: "[project]/src/shared/Tabs.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/shared/Tabs.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/Tabs.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Tabs, "pjCrXrkv3uBBSTT/MsPdkTYO5S0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = Tabs;
var _c;
__turbopack_context__.k.register(_c, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatSidebarPanel": (()=>ChatSidebarPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/CoomingSoon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tabs.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PanelContent({ name, descriptions }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    if (!descriptions.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-y-2 rounded-lg bg-graphic/[14%] p-3 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-light-gray",
                children: t('Sidebar.emptyDescription')
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 flex-col gap-y-4 rounded-lg bg-graphic/[14%] p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-sm text-light-gray",
                children: [
                    " ",
                    name
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-grow flex-col gap-y-8 overflow-y-auto text-base text-main",
                children: descriptions.map(({ title, type, value }, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-y-3 rounded-xl",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-bold text-main",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                                lineNumber: 24,
                                columnNumber: 23
                            }, this),
                            type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "",
                                children: value
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                                lineNumber: 25,
                                columnNumber: 33
                            }, this),
                            type === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "flex list-disc flex-col gap-y-2 text-main",
                                children: value.map((item, id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "inline-flex w-full",
                                        children: item
                                    }, `description-item-${id}`, false, {
                                        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                                        lineNumber: 29,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `tab-description-${key}`, true, {
                        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(PanelContent, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = PanelContent;
function ChatSidebarPanel({ data, id, inDevelopment }) {
    if (!data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 flex-col",
        children: [
            inDevelopment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                lineNumber: 56,
                columnNumber: 25
            }, this),
            data && data?.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: `inner-tab-${id}`,
                listClassName: "relative top-0 gap-x-1 sticky sticky-el",
                tabClassName: "bg-white/[8%] text-main border border-background-border/[18%] py-1.5 text-sm data-[hover]:data-[selected]:bg-storm-gray data-[selected]:bg-storm-gray data-[selected]:text-main",
                tabs: data.map((config, key)=>({
                        ...config,
                        content: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(PanelContent, {
                                ...config,
                                key: key,
                                __source: {
                                    fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                                    lineNumber: 63,
                                    columnNumber: 72
                                }
                            })
                    }))
            }, id, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this) : PanelContent(data[0])
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = ChatSidebarPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "PanelContent");
__turbopack_context__.k.register(_c1, "ChatSidebarPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatSidebar),
    "mockTabsData": (()=>mockTabsData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f40$sidebar$2f$_components$2f$ChatSidebarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/@sidebar/_components/ChatSidebarPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const tabsConfig = [
    {
        nameKey: 'Sidebar.tabs.0',
        name: 'details'
    },
    {
        nameKey: 'Sidebar.tabs.1',
        name: 'progress',
        inDevelopment: true
    },
    {
        nameKey: 'Sidebar.tabs.2',
        name: 'context',
        inDevelopment: true
    }
];
const mockTabsData = {
    progress: [
        {
            name: 'Current Stage',
            descriptions: [
                {
                    type: 'list',
                    title: 'Key Points',
                    value: [
                        '✨ Client greeted the coach.',
                        '✨ Client inquired about the coach’s role.',
                        '✨ Client expressed a desire to grow in life.'
                    ]
                },
                {
                    type: 'list',
                    title: 'Progress',
                    value: [
                        '🎯 Client initiated conversation.',
                        '🎯 Client initiated conversation.',
                        '🎯 Client asked about the coach\’s role, indicating opennes to coaching.'
                    ]
                },
                {
                    type: 'list',
                    title: 'Next Steps',
                    value: [
                        '- Clarify specific areas of growth the client is interested in.',
                        '- Discuss potential goals and aspirations related to their growth.',
                        '- Establish a comfortable and open environment for detailed discussion.'
                    ]
                }
            ]
        },
        {
            name: 'Session Overview',
            descriptions: [
                {
                    type: 'text',
                    value: "The user has moved beyond initial greetings and expressed a desire to 'Growth my life,' indicating readiness to discuss specific topics related to personal growth.Basic rapport seems to be established as the user continues the conversation, showing openness to sharing."
                }
            ]
        }
    ],
    context: [
        {
            name: 'Context',
            descriptions: [
                {
                    type: 'text',
                    value: 'The user has not yet mentioned any past experiences, ongoing goals, or provided enough detail that suggests a need for historical context at this stage.'
                }
            ]
        }
    ]
};
function ChatSidebar() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { sessionDetails, chatInfo, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatSidebar.useMemo[tabs]": ()=>{
            const isEmptyData = !sessionDetails || Object.values(sessionDetails).every({
                "ChatSidebar.useMemo[tabs]": (value)=>value.every({
                        "ChatSidebar.useMemo[tabs]": (item)=>!item.descriptions.length
                    }["ChatSidebar.useMemo[tabs]"])
            }["ChatSidebar.useMemo[tabs]"]);
            if (isEmptyData) return [];
            return tabsConfig.map({
                "ChatSidebar.useMemo[tabs]": (config, key)=>{
                    const data = sessionDetails[config.name];
                    if (!data) return;
                    return {
                        ...config,
                        content: ({
                            "ChatSidebar.useMemo[tabs]": ({ name })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f40$sidebar$2f$_components$2f$ChatSidebarPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatSidebarPanel"], {
                                    id: `${name}-${key}`,
                                    data: data,
                                    name: name,
                                    inDevelopment: config.inDevelopment
                                }, key, false, {
                                    fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this)
                        })["ChatSidebar.useMemo[tabs]"]
                    };
                }
            }["ChatSidebar.useMemo[tabs]"]).filter(Boolean);
        }
    }["ChatSidebar.useMemo[tabs]"], [
        sessionDetails
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-h-0 flex-grow flex-col gap-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-3 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: 'text-nowrap pe-14 text-[1.25rem] uppercase text-main',
                        children: t('Sidebar.defaultTitle')
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('line-clamp-3 text-base capitalize text-main'),
                        children: !tabs.length ? t('Sidebar.emptyTitle', {
                            name: user?.name || ''
                        }) : chatInfo.stage.replaceAll('_', ' ')
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            !tabs.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-2 rounded-lg bg-graphic/[14%] p-3 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-light-gray",
                    children: t('Sidebar.emptyDescription')
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "root-sidebar-tab",
                listClassName: `backdrop-blur-md order-2 bg-graphic/[14%] border-white/[44%] overflow-x-hidden ${tabs.length === 1 ? 'hidden border-none' : ''}`,
                panelClassName: "order-1",
                tabClassName: "py-3 px-5",
                tabs: tabs
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(ChatSidebar, "6xInXXvURuQChE1MwSc/gA90KuM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"]
    ];
});
_c = ChatSidebar;
var _c;
__turbopack_context__.k.register(_c, "ChatSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(main)/@sidebar/_components/ChatSidebar.tsx [app-client] (ecmascript)"));
}}),
"[project]/node_modules/@headlessui/react/dist/internal/focus-sentinel.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FocusSentinel": (()=>b)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-is-mounted.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
;
;
;
function b({ onFocus: n }) {
    let [r, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$is$2d$mounted$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMounted"])();
    return r ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        as: "button",
        type: "button",
        features: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiddenFeatures"].Focusable,
        onFocus: (a)=>{
            a.preventDefault();
            let e, i = 50;
            function t() {
                if (i-- <= 0) {
                    e && cancelAnimationFrame(e);
                    return;
                }
                if (n()) {
                    if (cancelAnimationFrame(e), !u.current) return;
                    o(!1);
                    return;
                }
                e = requestAnimationFrame(t);
            }
            e = requestAnimationFrame(t);
        }
    }) : null;
}
;
}}),
"[project]/node_modules/@headlessui/react/dist/utils/stable-collection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StableCollection": (()=>f),
    "useStableCollectionIndex": (()=>C)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function a() {
    return {
        groups: new Map,
        get (o, e) {
            var i;
            let t = this.groups.get(o);
            t || (t = new Map, this.groups.set(o, t));
            let n = (i = t.get(e)) != null ? i : 0;
            t.set(e, n + 1);
            let r = Array.from(t.keys()).indexOf(e);
            function u() {
                let c = t.get(e);
                c > 1 ? t.set(e, c - 1) : t.delete(e);
            }
            return [
                r,
                u
            ];
        }
    };
}
function f({ children: o }) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(a());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(s.Provider, {
        value: e
    }, o);
}
function C(o) {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(s);
    if (!e) throw new Error("You must wrap your component in a <StableCollection>");
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), [n, r] = e.current.get(o, t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "C.useEffect": ()=>r
    }["C.useEffect"], []), n;
}
;
}}),
"[project]/node_modules/@headlessui/react/dist/components/tabs/tabs.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Tab": (()=>Tt),
    "TabGroup": (()=>Be),
    "TabList": (()=>We),
    "TabPanel": (()=>Ke),
    "TabPanels": (()=>je)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-active-press.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-latest-value.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/hooks/use-sync-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$focus$2d$sentinel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/internal/focus-sentinel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/internal/hidden.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/focus-management.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/match.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/micro-task.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/owner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/render.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/utils/stable-collection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/keyboard.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Le = ((t)=>(t[t.Forwards = 0] = "Forwards", t[t.Backwards = 1] = "Backwards", t))(Le || {}), _e = ((l)=>(l[l.Less = -1] = "Less", l[l.Equal = 0] = "Equal", l[l.Greater = 1] = "Greater", l))(_e || {}), De = ((n)=>(n[n.SetSelectedIndex = 0] = "SetSelectedIndex", n[n.RegisterTab = 1] = "RegisterTab", n[n.UnregisterTab = 2] = "UnregisterTab", n[n.RegisterPanel = 3] = "RegisterPanel", n[n.UnregisterPanel = 4] = "UnregisterPanel", n))(De || {});
let Se = {
    [0] (e, r) {
        var d;
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(e.tabs, (u)=>u.current), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(e.panels, (u)=>u.current), a = t.filter((u)=>{
            var T;
            return !((T = u.current) != null && T.hasAttribute("disabled"));
        }), n = {
            ...e,
            tabs: t,
            panels: l
        };
        if (r.index < 0 || r.index > t.length - 1) {
            let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(Math.sign(r.index - e.selectedIndex), {
                [-1]: ()=>1,
                [0]: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(Math.sign(r.index), {
                        [-1]: ()=>0,
                        [0]: ()=>0,
                        [1]: ()=>1
                    }),
                [1]: ()=>0
            });
            if (a.length === 0) return n;
            let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(u, {
                [0]: ()=>t.indexOf(a[0]),
                [1]: ()=>t.indexOf(a[a.length - 1])
            });
            return {
                ...n,
                selectedIndex: T === -1 ? e.selectedIndex : T
            };
        }
        let s = t.slice(0, r.index), b = [
            ...t.slice(r.index),
            ...s
        ].find((u)=>a.includes(u));
        if (!b) return n;
        let f = (d = t.indexOf(b)) != null ? d : e.selectedIndex;
        return f === -1 && (f = e.selectedIndex), {
            ...n,
            selectedIndex: f
        };
    },
    [1] (e, r) {
        if (e.tabs.includes(r.tab)) return e;
        let t = e.tabs[e.selectedIndex], l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])([
            ...e.tabs,
            r.tab
        ], (n)=>n.current), a = e.selectedIndex;
        return e.info.current.isControlled || (a = l.indexOf(t), a === -1 && (a = e.selectedIndex)), {
            ...e,
            tabs: l,
            selectedIndex: a
        };
    },
    [2] (e, r) {
        return {
            ...e,
            tabs: e.tabs.filter((t)=>t !== r.tab)
        };
    },
    [3] (e, r) {
        return e.panels.includes(r.panel) ? e : {
            ...e,
            panels: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])([
                ...e.panels,
                r.panel
            ], (t)=>t.current)
        };
    },
    [4] (e, r) {
        return {
            ...e,
            panels: e.panels.filter((t)=>t !== r.panel)
        };
    }
}, V = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
V.displayName = "TabsDataContext";
function C(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(V);
    if (r === null) {
        let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, C), t;
    }
    return r;
}
let Q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
Q.displayName = "TabsActionsContext";
function Y(e) {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Q);
    if (r === null) {
        let t = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, Y), t;
    }
    return r;
}
function Fe(e, r) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(r.type, Se, e, r);
}
let Ie = "div";
function he(e, r) {
    let { defaultIndex: t = 0, vertical: l = !1, manual: a = !1, onChange: n, selectedIndex: s = null, ...g } = e;
    const b = l ? "vertical" : "horizontal", f = a ? "manual" : "auto";
    let d = s !== null, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])({
        isControlled: d
    }), T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), [p, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(Fe, {
        info: u,
        selectedIndex: s != null ? s : t,
        tabs: [],
        panels: []
    }), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: p.selectedIndex
        }), [
        p.selectedIndex
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(n || (()=>{})), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(p.tabs), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            orientation: b,
            activation: f,
            ...p
        }), [
        b,
        f,
        p
    ]), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>(c({
            type: 1,
            tab: i
        }), ()=>c({
                type: 2,
                tab: i
            }))), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>(c({
            type: 3,
            panel: i
        }), ()=>c({
                type: 4,
                panel: i
            }))), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((i)=>{
        _.current !== i && m.current(i), d || c({
            type: 0,
            index: i
        });
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$latest$2d$value$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestValue"])(d ? e.selectedIndex : p.selectedIndex), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            registerTab: P,
            registerPanel: A,
            change: E
        }), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        c({
            type: 0,
            index: s != null ? s : t
        });
    }, [
        s
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>{
        if (_.current === void 0 || p.tabs.length <= 0) return;
        let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortByDomNode"])(p.tabs, (R)=>R.current);
        i.some((R, X)=>p.tabs[X] !== R) && E(i.indexOf(p.tabs[_.current]));
    });
    let K = {
        ref: T
    }, J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StableCollection"], null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Q.Provider, {
        value: D
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(V.Provider, {
        value: S
    }, S.tabs.length <= 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$focus$2d$sentinel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusSentinel"], {
        onFocus: ()=>{
            var i, G;
            for (let R of M.current)if (((i = R.current) == null ? void 0 : i.tabIndex) === 0) return (G = R.current) == null || G.focus(), !0;
            return !1;
        }
    }), J({
        ourProps: K,
        theirProps: g,
        slot: h,
        defaultTag: Ie,
        name: "Tabs"
    }))));
}
let ve = "div";
function Ce(e, r) {
    let { orientation: t, selectedIndex: l } = C("Tab.List"), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: l
        }), [
        l
    ]), s = e, g = {
        ref: a,
        role: "tablist",
        "aria-orientation": t
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: g,
        theirProps: s,
        slot: n,
        defaultTag: ve,
        name: "Tabs.List"
    });
}
let Me = "button";
function Ge(e, r) {
    var ee, te;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: l = `headlessui-tabs-tab-${t}`, disabled: a = !1, autoFocus: n = !1, ...s } = e, { orientation: g, activation: b, selectedIndex: f, tabs: d, panels: u } = C("Tab"), T = Y("Tab"), p = C("Tab"), [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(m, r, h);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>T.registerTab(m), [
        T,
        m
    ]);
    let S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCollectionIndex"])("tabs"), P = d.indexOf(m);
    P === -1 && (P = S);
    let A = P === f, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        var $;
        let L = o();
        if (L === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success && b === "auto") {
            let q = ($ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$owner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOwnerDocument"])(m)) == null ? void 0 : $.activeElement, re = p.tabs.findIndex((ce)=>ce.current === q);
            re !== -1 && T.change(re);
        }
        return L;
    }), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        let L = d.map((q)=>q.current).filter(Boolean);
        if (o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Space || o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Enter) {
            o.preventDefault(), o.stopPropagation(), T.change(P);
            return;
        }
        switch(o.key){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].Home:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageUp:
                return o.preventDefault(), o.stopPropagation(), E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].First));
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].End:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].PageDown:
                return o.preventDefault(), o.stopPropagation(), E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Last));
        }
        if (E(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(g, {
                vertical () {
                    return o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowUp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowDown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error;
                },
                horizontal () {
                    return o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowLeft ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Previous | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : o.key === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$keyboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keys"].ArrowRight ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusIn"])(L, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].Next | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Focus"].WrapAround) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Error;
                }
            })) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$focus$2d$management$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusResult"].Success) return o.preventDefault();
    }), D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1), K = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(()=>{
        var o;
        D.current || (D.current = !0, (o = m.current) == null || o.focus({
            preventScroll: !0
        }), T.change(P), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$micro$2d$task$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["microTask"])(()=>{
            D.current = !1;
        }));
    }), J = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])((o)=>{
        o.preventDefault();
    }), { isFocusVisible: i, focusProps: G } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus: n
    }), { isHovered: R, hoverProps: X } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: a
    }), { pressed: Z, pressProps: ue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$active$2d$press$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivePress"])({
        disabled: a
    }), Te = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: A,
            hover: R,
            active: Z,
            focus: i,
            autofocus: n,
            disabled: a
        }), [
        A,
        R,
        i,
        Z,
        n,
        a
    ]), de = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: M,
        onKeyDown: _,
        onMouseDown: J,
        onClick: K,
        id: l,
        role: "tab",
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$resolve$2d$button$2d$type$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResolveButtonType"])(e, c),
        "aria-controls": (te = (ee = u[P]) == null ? void 0 : ee.current) == null ? void 0 : te.id,
        "aria-selected": A,
        tabIndex: A ? 0 : -1,
        disabled: a || void 0,
        autoFocus: n
    }, G, X, ue);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: de,
        theirProps: s,
        slot: Te,
        defaultTag: Me,
        name: "Tabs.Tab"
    });
}
let Ue = "div";
function He(e, r) {
    let { selectedIndex: t } = C("Tab.Panels"), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(r), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIndex: t
        }), [
        t
    ]), n = e, s = {
        ref: l
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])()({
        ourProps: s,
        theirProps: n,
        slot: a,
        defaultTag: Ue,
        name: "Tabs.Panels"
    });
}
let we = "div", Oe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].RenderStrategy | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderFeatures"].Static;
function Ne(e, r) {
    var A, E, _, D;
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(), { id: l = `headlessui-tabs-panel-${t}`, tabIndex: a = 0, ...n } = e, { selectedIndex: s, tabs: g, panels: b } = C("Tab.Panel"), f = Y("Tab.Panel"), d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$sync$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncRefs"])(d, r);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$hooks$2f$use$2d$iso$2d$morphic$2d$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsoMorphicEffect"])(()=>f.registerPanel(d), [
        f,
        d
    ]);
    let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$stable$2d$collection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStableCollectionIndex"])("panels"), p = b.indexOf(d);
    p === -1 && (p = T);
    let c = p === s, { isFocusVisible: h, focusProps: m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])(), M = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selected: c,
            focus: h
        }), [
        c,
        h
    ]), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
        ref: u,
        id: l,
        role: "tabpanel",
        "aria-labelledby": (E = (A = g[p]) == null ? void 0 : A.current) == null ? void 0 : E.id,
        tabIndex: c ? a : -1
    }, m), P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])();
    return !c && ((_ = n.unmount) == null || _) && !((D = n.static) != null && D) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$internal$2f$hidden$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hidden"], {
        "aria-hidden": "true",
        ...S
    }) : P({
        ourProps: S,
        theirProps: n,
        slot: M,
        defaultTag: we,
        features: Oe,
        visible: c,
        name: "Tabs.Panel"
    });
}
let ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ge), Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(he), We = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ce), je = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(He), Ke = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$utils$2f$render$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRefWithAs"])(Ne), Tt = Object.assign(ke, {
    Group: Be,
    List: We,
    Panels: je,
    Panel: Ke
});
;
}}),
}]);

//# sourceMappingURL=_84d711eb._.js.map