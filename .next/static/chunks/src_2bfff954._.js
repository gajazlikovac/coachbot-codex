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
"[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfigToggler": (()=>ConfigToggler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ConfigToggler({ checked, className, onToggle }) {
    _s();
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(checked);
    const handleToggle = ()=>{
        onToggle?.(!isChecked);
        setIsChecked((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex items-center gap-1', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: 'inline-flex cursor-pointer items-center',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    value: "",
                    className: 'peer sr-only size-0',
                    checked: isChecked,
                    onChange: handleToggle
                }, void 0, false, {
                    fileName: "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(`peer relative h-7 w-12 rounded-full border border-light-gray bg-graphic/[6%] after:absolute after:start-[3px] after:top-[3px] after:size-5 after:rounded-full after:bg-light-gray after:transition-all after:content-[''] peer-checked:border-main peer-checked:after:translate-x-full peer-checked:after:bg-main rtl:peer-checked:after:-translate-x-full`)
                }, void 0, false, {
                    fileName: "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ConfigToggler, "PhP7ZOkwJBhoZyPv2N65OySr648=");
_c = ConfigToggler;
var _c;
__turbopack_context__.k.register(_c, "ConfigToggler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Input = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ id, type = 'text', name, className, inputClassName, placeholderKey, placeholder, disablePalaceholderKey, labelKey, labelClassName, disabled, children, initialValue, isSubmitting, readOnly, ...props }, ref)=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const elRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const adjustHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Input.useCallback[adjustHeight]": ()=>{
            if (type === 'textarea' && elRef?.current) {
                elRef.current.style.height = 'auto';
                elRef.current.style.height = `${elRef.current.scrollHeight + 2}px`;
            }
        }
    }["Input.useCallback[adjustHeight]"], [
        elRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Input.useEffect": ()=>adjustHeight()
    }["Input.useEffect"], [
        isSubmitting,
        initialValue
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex flex-col gap-x-2 font-normal', className),
        children: [
            labelKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('text-base text-light-gray', labelClassName),
                children: [
                    t(labelKey),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/Input.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, this),
            type === 'textarea' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: (el)=>{
                    elRef.current = el;
                    if (typeof ref === 'function') ref(el);
                    else if (ref) ref.current = el;
                },
                id: id,
                disabled: disabled,
                rows: 1,
                defaultValue: initialValue,
                name: name,
                placeholder: disabled && disablePalaceholderKey ? t(disablePalaceholderKey) : placeholderKey && t(placeholderKey),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('focus:no-outline !max-h-40 resize-none overflow-y-auto rounded-lg border border-light-gray bg-white/[18%] px-4 py-3 text-lg text-main focus:ring-0', disabled && 'pointer-events-none animate-pulse bg-dark-gray/[80%] text-transparent placeholder:text-main', inputClassName),
                ...props,
                onChange: async (e)=>{
                    adjustHeight();
                    await props.onChange?.(e);
                }
            }, void 0, false, {
                fileName: "[project]/src/shared/Input.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: id,
                disabled: disabled,
                readOnly: readOnly,
                type: type,
                name: name,
                defaultValue: initialValue,
                placeholder: placeholderKey && t(placeholderKey) || placeholder,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('focus:no-outline rounded-lg border border-light-gray bg-white/[18%] px-4 py-2 text-lg text-main placeholder:text-base focus:ring-0', disabled && 'pointer-events-none animate-pulse bg-dark-gray/[80%] placeholder:hidden', inputClassName),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/shared/Input.tsx",
                lineNumber: 96,
                columnNumber: 11
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/Input.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, this);
}, "ah+HxJaaLUD2tkXcPL8pj0vi+ic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
})), "ah+HxJaaLUD2tkXcPL8pj0vi+ic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SimpleRadar": (()=>SimpleRadar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__range$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/range.js [app-client] (ecmascript) <export default as range>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx [app-client] (ecmascript)");
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
const LABEL_COLORS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT]: {
        circleColor: '#AFB1BD',
        dotColor: '#33B3A9',
        activeColor: '#473F65'
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK]: {
        circleColor: '#727379',
        dotColor: '#33B3A9',
        activeColor: '#FFFFFF'
    }
};
const calculateTextWidth = (text, offset, font = '400 14px Helvetica Now Display')=>{
    const canvas = document?.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Could not get 2D context');
    }
    context.font = font;
    return context.measureText(text).width + offset;
};
const SimpleRadar = ({ data, onClick })=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { dotColor, circleColor, activeColor } = LABEL_COLORS[theme];
    const [svgWidth, setSvgWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [svgHeight, setSvgHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimpleRadar.useMemo[dimensions]": ()=>({
                width: svgWidth,
                height: svgHeight,
                labelHeight: 46,
                radius: Math.min(85, svgWidth / 3 * 0.2)
            })
    }["SimpleRadar.useMemo[dimensions]"], [
        svgHeight,
        svgWidth
    ]);
    const circles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__range$3e$__["range"])(1, 11).reverse();
    const radiusScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
        0,
        10
    ]).range([
        0,
        dimensions.radius
    ]).nice();
    const angleScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$range$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__range$3e$__["range"])(data.length + 1))).range([
        0,
        2 * Math.PI
    ]);
    const getCoordinatesForAngle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimpleRadar.useCallback[getCoordinatesForAngle]": (angle, offset = 1)=>{
            return [
                dimensions.radius * Math.cos(angle - Math.PI / 2) * offset,
                dimensions.radius * Math.sin(angle - Math.PI / 2) * offset
            ];
        }
    }["SimpleRadar.useCallback[getCoordinatesForAngle]"], [
        dimensions.radius
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimpleRadar.useEffect": ()=>{
            setId(CSS.escape(`id-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`));
            const updateSvgWidth = {
                "SimpleRadar.useEffect.updateSvgWidth": ()=>{
                    if (svgRef.current) {
                        const svgRect = svgRef.current.getBoundingClientRect();
                        setSvgHeight(svgRect.height);
                        setSvgWidth(svgRect.width);
                    }
                }
            }["SimpleRadar.useEffect.updateSvgWidth"];
            updateSvgWidth();
            const resizeObserver = new ResizeObserver({
                "SimpleRadar.useEffect": ()=>{
                    updateSvgWidth();
                }
            }["SimpleRadar.useEffect"]);
            if (svgRef.current) {
                resizeObserver.observe(svgRef.current);
            }
            return ({
                "SimpleRadar.useEffect": ()=>{
                    resizeObserver.disconnect();
                }
            })["SimpleRadar.useEffect"];
        }
    }["SimpleRadar.useEffect"], []);
    const highlightDot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimpleRadar.useCallback[highlightDot]": (d, highlight)=>{
            const selectedDot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(`circle.${id}-dot[data-key='${d.id}']`);
            if (!selectedDot.empty()) {
                !d.active && selectedDot.attr('fill', highlight ? '#b6b6b6' : dotColor);
            } else {
                console.error(`Element with class .${id}-dot[data-key='${d.id}'] not found`);
            }
        }
    }["SimpleRadar.useCallback[highlightDot]"], [
        id
    ]);
    const getLabelOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SimpleRadar.useCallback[getLabelOffset]": (angle, labelWidth, labelX)=>{
            const offsetX = labelX < 0 ? labelWidth : labelX < 3 ? labelWidth / 2 : 0;
            const angleDeg = (angle - Math.PI / 2) * 180 / Math.PI;
            const labelheightOffset = dimensions.labelHeight * 0.5;
            const offsetY = Math.abs(angleDeg) === 90 ? angleDeg < 0 ? labelheightOffset : -labelheightOffset : angleDeg > 63 && angleDeg < 126 ? -dimensions.labelHeight * 0.5 : 0;
            return [
                offsetX,
                offsetY + dimensions.labelHeight / 2
            ];
        }
    }["SimpleRadar.useCallback[getLabelOffset]"], [
        svgWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        id: id,
        width: "100%",
        height: "100%",
        viewBox: `0 0 ${svgWidth} ${svgHeight}`,
        preserveAspectRatio: "xMinYMin meet",
        ref: svgRef,
        className: "overflow-visible",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            className: `${id}-chartGroup`,
            transform: `translate(${svgWidth / 2} ,${svgHeight / 2} )`,
            children: [
                circles.map((circle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: `${id}-circle`,
                        r: radiusScale(circle),
                        fill: "none",
                        stroke: circleColor,
                        strokeWidth: "0.5"
                    }, `circle-${i}`, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)),
                data.map((item, i)=>{
                    const angle = angleScale(i);
                    const [x, y] = getCoordinatesForAngle(angle);
                    const labelWidth = Math.max(svgWidth / 2.8, calculateTextWidth(item.name, 80));
                    const [labelX, labelY] = getCoordinatesForAngle(angle, 2);
                    const [offsetX, offsetY] = getLabelOffset(angle, labelWidth, labelX);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: `${id}-axis`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                x2: x,
                                y1: "0",
                                y2: y,
                                stroke: circleColor,
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                className: `${id}-dot z-10 cursor-pointer`,
                                "data-key": item.id,
                                cx: x,
                                cy: y,
                                r: dimensions.radius / 10,
                                fill: item.active ? activeColor : dotColor,
                                onMouseEnter: ()=>highlightDot(item, true),
                                onMouseLeave: ()=>highlightDot(item, false),
                                onClick: ()=>onClick?.(item)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                x: labelX - offsetX,
                                y: labelY - offsetY,
                                width: labelWidth,
                                height: dimensions.labelHeight,
                                className: `${id}-label`,
                                onMouseEnter: ()=>highlightDot(item, true),
                                onMouseLeave: ()=>highlightDot(item, false),
                                onClick: ()=>onClick?.(item),
                                children: item.id === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CREATE_CATEGORY_ID"] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: 'add-category-input',
                                    className: "flex-grow gap-y-2",
                                    placeholder: `Add topic ${data.length} / 10`,
                                    inputClassName: "flex items-center justify-between gap-x-2 rounded-xl border border-dark-aquamarine bg-transparent p-2 px-5 pe-10 text-light-gray hover:border-main placeholder:text-light-gray",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "cbi-add absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-0 text-2xl hover:text-light-gray"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                        lineNumber: 200,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                    lineNumber: 194,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${id}-label-content group flex size-full items-center justify-between gap-x-2 text-nowrap rounded-full border border-transparent bg-graphic/[14%] p-3.5 text-base text-light-gray hover:border-main hover:text-main`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-clamp-1 inline-block w-[75%] overflow-hidden text-ellipsis text-nowrap ps-1",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                            lineNumber: 206,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex gap-x-2 text-dark-gray group-hover:text-light-gray`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cbi-edit-2 p-0 text-lg hover:text-main"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cbi-trash p-0 text-lg hover:text-main disabled:opacity-20"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                            lineNumber: 209,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                    lineNumber: 203,
                                    columnNumber: 19
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `axis-${i}`, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, "chart-group", true, {
            fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
};
_s(SimpleRadar, "/+j9i+usWPDgyoaexVttqpD1vbw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SimpleRadar;
var _c;
__turbopack_context__.k.register(_c, "SimpleRadar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CREATE_CATEGORY_ID": (()=>CREATE_CATEGORY_ID),
    "default": (()=>CategoriesManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$Radar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/Radar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CREATE_CATEGORY_ID = 'create-category-placeholder';
function CategoriesManager({ categories$ }) {
    _s();
    const sourceCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(categories$);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sourceCategories);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleClick = (targetCategory)=>{
        setCategories((prev)=>prev.map((category)=>({
                    ...category,
                    active: category.id === targetCategory.id
                })));
        setActiveCategory(targetCategory);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoriesManager.useEffect": ()=>{
            setCategories(sourceCategories.length < 10 ? [
                ...new Set([
                    ...sourceCategories,
                    {
                        id: CREATE_CATEGORY_ID
                    }
                ])
            ] : sourceCategories);
        }
    }["CategoriesManager.useEffect"], [
        sourceCategories
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-grow flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex max-h-[45dvh] min-h-[23rem] flex-grow flex-col p-3.5 2xl:min-h-[32rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$Radar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleRadar"], {
                    data: [
                        ...categories
                    ],
                    onClick: handleClick
                }, void 0, false, {
                    fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                labelKey: "CoachDetails.Config.GoalVisionPage.CategoriesManager.topicDescriptionLable",
                id: 'decription-input',
                placeholder: "Add topic description",
                className: "flex-grow gap-y-2",
                type: "textarea",
                initialValue: activeCategory?.description,
                inputClassName: "border-storm-gray bg-transparent text-light-gray py-2.5 line-clamp-2 rounded-xl min-h-[4.5rem] text-base focus:text-main focus:border-main"
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(CategoriesManager, "r6tcZND07yyTASMOG2/sJxUKA5k=");
_c = CategoriesManager;
var _c;
__turbopack_context__.k.register(_c, "CategoriesManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:523a0a [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"608a31f9228c5cb99f63322f7be67da509d292f5cd":"upsertAssistant"},"src/server/actions/assistantActions.ts",""] */ __turbopack_context__.s({
    "upsertAssistant": (()=>upsertAssistant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var upsertAssistant = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("608a31f9228c5cb99f63322f7be67da509d292f5cd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "upsertAssistant"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXNzaXN0YW50QWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IFByaWNlQ29uZmlndXJhdGlvbiB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IHsgQXNzaXN0YW50LCBBc3Npc3RhbnRDb25maWd1cmF0aW9uLCBBc3Npc3RhbnRFZGl0YWJsZSwgQXNzaXN0YW50TWV0YSB9IGZyb20gJ0AvbGliL21vZGVscy9hc3Npc3RhbnQubW9kZWxzJztcbmltcG9ydCB7IFN0YXRlLCBUZW1wbGF0ZSB9IGZyb20gJ0AvbGliL21vZGVscy9jb21tb24ubW9kZWxzJztcbmltcG9ydCB7IGFzc2lzdGFudFByaWNlU2NoZW1hLCBhc3Npc3RhbnRTY2hlbWEsIG1hcFJlbGF0aW9uQ29uZmlnIH0gZnJvbSAnQC9saWIvdXRpbHMvZGIudXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlckFzc2lzdGFudCxcbiAgZGVsZXRlVXNlckFzc2lzdGFudCxcbiAgZHVwbGljYXRlQXNzaXN0YW50LFxuICBnZXRBbGxUZW1wbGF0ZXMsXG4gIGdldFVzZXJBc3NpdGFudHMsXG4gIHVwZGF0ZUFzc2lzdGFudE1ldGEsXG4gIHVwZGF0ZVVzZXJBc3Npc3RhbnQsXG4gIHVwc2VydEFzc2lzdGFudFByaWNlLFxufSBmcm9tICcuLi9kYi9hc3Npc3RhbnRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0RnVsbENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9kYi9jb25maWd1cmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyLCB2ZXJpZnlTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uQWN0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50QXNzaXN0YW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhc3Npc3RhbnRJZCB9ID0gKGF3YWl0IHZlcmlmeVNlc3Npb24oKSkgfHwge307XG5cbiAgICByZXR1cm4gYXNzaXN0YW50SWQgfHwgJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2F1dGhBY3Rpb25zXSBFcnJvciBmZXRjaGluZyBjdXJyZW50IGFzc2lzdGFudGAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKCk6IFByb21pc2U8VGVtcGxhdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBhd2FpdCBnZXRBbGxUZW1wbGF0ZXMoKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMubWFwKG1hcFJlbGF0aW9uQ29uZmlnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIHRlbXBsYXRlczpgLCBlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzc2lzdGFudHMoaW5jbHVkZT86IGFueSk6IFByb21pc2U8QXNzaXN0YW50W10+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGFzc2lzdGFudHMgPSBhd2FpdCBnZXRVc2VyQXNzaXRhbnRzKHVzZXJJZCwgaW5jbHVkZSk7XG5cbiAgICByZXR1cm4gYXNzaXN0YW50cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIGFzc2lzdGFudHMgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QXNzaXN0YW50KFxuICB7IHRlbXBsYXRlLCAuLi5hc3Npc3RhbnREYXRhIH06IEFzc2lzdGFudEVkaXRhYmxlLFxuICBpZD86IHN0cmluZ1xuKTogUHJvbWlzZTxTdGF0ZTxBc3Npc3RhbnQgfCBudWxsPj4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG4gICAgbGV0IGFzc2lzdGFudDtcblxuICAgIGlmICghdXNlcklkKSByZXR1cm4geyB2YWx1ZTogbnVsbCB9O1xuXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGFzc2lzdGFudFNjaGVtYS5zYWZlUGFyc2UoeyB0ZW1wbGF0ZSwgLi4uYXNzaXN0YW50RGF0YSB9KTtcblxuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBlcnJvcnM6IHBhcnNlZERhdGEuZXJyb3IuZXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBwYXRoIH0pID0+ICh7IG5hbWU6IHBhdGguam9pbignLicpLCBtZXNzYWdlIH0pKSB9O1xuICAgIH1cblxuICAgIGlmICghIWlkKSB7XG4gICAgICBhc3Npc3RhbnQgPSBhd2FpdCB1cGRhdGVVc2VyQXNzaXN0YW50KHVzZXJJZCwgaWQsIHtcbiAgICAgICAgbmFtZTogYXNzaXN0YW50RGF0YS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXNzaXN0YW50RGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgbW9kZTogYXNzaXN0YW50RGF0YS5tb2RlLFxuICAgICAgICBzdGF0dXM6IGFzc2lzdGFudERhdGEuc3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lzdGFudCA9IGF3YWl0IGNyZWF0ZVVzZXJBc3Npc3RhbnQodXNlcklkLCBhc3Npc3RhbnREYXRhLCB0ZW1wbGF0ZSBhcyBhbnkpO1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVUYWcoJ2Fzc2lzdGFudHMnKTtcblxuICAgIHJldHVybiB7IHZhbHVlOiBhc3Npc3RhbnQgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yICR7ISFpZCA/ICd1cGRhdGluZycgOiAnY3JlYXRpbmcnfSBhc3Npc3RhbnQgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiB7IHZhbHVlOiBudWxsLCBlcnJvcjogJycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzaXN0YW50Q29uZmlndXJhdGlvbihcbiAgaWQ/OiBzdHJpbmcsXG4gIGZ1bGw6IGJvb2xlYW4gPSB0cnVlXG4pOiBQcm9taXNlPEFzc2lzdGFudENvbmZpZ3VyYXRpb24gfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoYXdhaXQgZ2V0RnVsbENvbmZpZ3VyYXRpb24oYXNzaXN0YW50SWQgfHwgJycsIGZ1bGwpKSBhcyBhbnk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0NsaWVudF0gRXJyb3IgZ2V0dGluZyBhc3Npc3RhbnQgJHthc3Npc3RhbnRJZH0gZGF0YTpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29weUFzc2lzdGFudChhc3Npc3RhbnQ6IEFzc2lzdGFudCk6IFByb21pc2U8QXNzaXN0YW50IHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIWFzc2lzdGFudCB8fCAhdXNlcklkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Fzc2lzdGFudCBub3QgcGFzc2VkIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gYXdhaXQgZHVwbGljYXRlQXNzaXN0YW50KHVzZXJJZCwgYXNzaXN0YW50KTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG5cbiAgICByZXR1cm4gY29weTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBjcmVhdGluZyBjb3B5IG9mIGFzc2lzdGFudCAke2Fzc2lzdGFudC5pZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzc2lzdGFudE1ldGFEYXRhKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8QXNzaXN0YW50TWV0YT4pOiBQcm9taXNlPEFzc2lzdGFudE1ldGEgfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRNZXRhID0gYXdhaXQgdXBkYXRlQXNzaXN0YW50TWV0YShhc3Npc3RhbnRJZCwgZGF0YSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB1cGRhdGVkTWV0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBnZXR0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBkYXRhOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3Npc3RhbnRNZXRhUHJpY2UoXG4gIGFzc2lzdGFudDogQXNzaXN0YW50LFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8U3RhdGU8UHJpY2VDb25maWd1cmF0aW9uIHwgbnVsbD4+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gYXNzaXN0YW50LmlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiB7IGVycm9yOiAnR2VuZXJhbC5lcnJvcnMudW5leHBlY3RlZEVycm9yJywgdmFsdWU6IG51bGwgfTtcbiAgICB9XG4gICAgY29uc3QgcHJpY2UgPSBbLi4uZm9ybURhdGFdLnJlZHVjZSgoZGF0YTogYW55LCBba2V5LCB2YWx1ZV06IGFueSkgPT4gKHsgLi4uZGF0YSwgW2tleV06IHZhbHVlIH0pLCB7fSk7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IGFzc2lzdGFudFByaWNlU2NoZW1hLnBhcnNlKHByaWNlKTtcblxuICAgIGlmICh2YWxpZGF0ZWREYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiB2YWxpZGF0ZWREYXRhLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBhd2FpdCB1cHNlcnRBc3Npc3RhbnRQcmljZShhc3Npc3RhbnQubWV0YT8uaWQgfHwgJycsIHtcbiAgICAgIC4uLnZhbGlkYXRlZERhdGEsXG4gICAgICB0cmlhbERheXM6ICEhdmFsaWRhdGVkRGF0YS50cmlhbERheXMgPyAxNCA6IG51bGwsXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgdmFsdWU6IHVwZGF0ZWRQcmljZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtpbnN0cnVjdGlvbnNDbGllbnRdIEVycm9yIHVwZGF0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBtZXRhIHByaWNlIGRhdGE6YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdHZW5lcmFsLmVycm9ycy51bmV4cGVjdGVkRXJyb3InLCB2YWx1ZTogbnVsbCB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBc3Npc3RhbnQoaWQ6IHN0cmluZykge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuO1xuXG4gICAgYXdhaXQgZGVsZXRlVXNlckFzc2lzdGFudCh1c2VySWQsIGlkKTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2Fzc2lzdGFudENsaWVudF0gRXJyb3IgcmVtb3ZpbmcgdXNlciAke3VzZXJJZH0gYXNzaXN0YW50ICR7aWR9OmAsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrU0E0RHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(standalone)/coach/_components/Profile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Profile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:523a0a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Profile({ assistant }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [state, saveAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "Profile.useActionState": async (_, formData)=>{
            const name = formData.get('name')?.toString().trim() || assistant.name;
            const description = formData.get('description')?.toString().trim() || assistant.description;
            const updatedAssistant = {
                ...assistant,
                template: {},
                name,
                description
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertAssistant"])(updatedAssistant, assistant.id);
            return {
                ...response,
                value: response.value || updatedAssistant
            };
        }
    }["Profile.useActionState"], {
        value: assistant
    });
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Profile.useMemo[errors]": ()=>state.errors?.reduce({
                "Profile.useMemo[errors]": (errs, item)=>({
                        ...errs,
                        [item.name]: item.message
                    })
            }["Profile.useMemo[errors]"], {})
    }["Profile.useMemo[errors]"], [
        state.errors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-grow flex-col gap-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-center text-base font-semibold text-light-gray",
                children: t('CoachDetails.Config.ProfilePage.description')
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: saveAction,
                className: "mt-2 flex flex-grow flex-col gap-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-y-3 rounded-2xl border border-background-border/[11%] bg-white-opacity p-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        className: "flex flex-col gap-y-2.5",
                                        placeholderKey: "Assistants.newForm.namePlaceholder",
                                        id: "name",
                                        name: "name",
                                        labelKey: "Assistants.newForm.nameLabel",
                                        labelClassName: "text-sm ps-2",
                                        inputClassName: "bg-white/[8%] text-base text-light-gray focus:text-main focus:border-main",
                                        disabled: isPending,
                                        initialValue: state.value?.name || ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    !!errors?.name && t.has(String(errors?.name)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-salmon",
                                        children: t(String(errors?.name))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "description",
                                        type: "textarea",
                                        name: "description",
                                        labelClassName: "text-sm ps-2",
                                        labelKey: "Assistants.newForm.descriptionLabel",
                                        placeholderKey: "Assistants.newForm.descriptionPlaceholder",
                                        className: "textarea flex flex-grow flex-col gap-y-2.5",
                                        inputClassName: "overflow-y-auto line-height-[1.2em] bg-white/[8%] min-h-64 placeholder:text-base text-base focus:border-main text-light-gray focus:text-main",
                                        disabled: isPending,
                                        initialValue: state.value?.description || ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    errors?.description && t.has(String(errors.description)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-salmon",
                                        children: t(String(errors?.description))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-1/2 flex-row justify-end gap-x-1 self-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            variant: "solid",
                            color: "light",
                            className: `w-44 px-7 ${isPending && 'animate-pulse'}`,
                            disabled: isPending,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "cbi-tick-circle-fill"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                t('General.saveButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/Profile.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Profile, "5TuL+DaUOt79ryFGgw+t2VvpHWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = Profile;
var _c;
__turbopack_context__.k.register(_c, "Profile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/ModalButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteWithConfirmationButton": (()=>DeleteWithConfirmationButton),
    "EditModalButton": (()=>EditModalButton),
    "ModalButton": (()=>ModalButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function DeleteWithConfirmationButton({ config, iconClassName, className, children, buttonText }) {
    _s();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DeleteWithConfirmationButton.useCallback[handleConfirm]": async ()=>{
            config?.confirm && await config?.confirm();
            setModalOpen(false);
        }
    }["DeleteWithConfirmationButton.useCallback[handleConfirm]"], [
        config.confirm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('items-center justify-center', className),
                onClick: ()=>setModalOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: iconClassName
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ModalButtons.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    buttonText
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            config && modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                ...config,
                isOpen: modalOpen,
                closeModal: ()=>setModalOpen(false),
                confirm: handleConfirm,
                confirmButtonClass: "bg-main hover:bg-white/[8%] hover:border-background-border/[16%] text-background",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DeleteWithConfirmationButton, "FfZMtjwbhv2vZjsP11If8MRkQaI=");
_c = DeleteWithConfirmationButton;
function EditModalButton({ initialValue, config, className, children }) {
    _s1();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditModalButton.useCallback[handleConfirm]": async ()=>{
            config?.confirm && await config?.confirm(value);
            setModalOpen(false);
        }
    }["EditModalButton.useCallback[handleConfirm]"], [
        config.confirm,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-trash'), className),
                onClick: ()=>setModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            config && modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                ...config,
                isOpen: modalOpen,
                closeModal: ()=>setModalOpen(false),
                confirm: handleConfirm,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "edit-value-input",
                        required: true,
                        defaultValue: initialValue || '',
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('focus:no-outline rounded-lg border border-light-gray bg-white/[18%] px-4 py-2 text-lg text-main placeholder:text-base focus:ring-0'),
                        onChange: (e)=>setValue(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ModalButtons.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s1(EditModalButton, "qWNwzxwSsHdY3TwXB9ka4EWTPk4=");
_c1 = EditModalButton;
function ModalButton({ config, className, children, showButtons = false }) {
    _s2();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-trash'), className),
                onClick: ()=>setModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            config && modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                ...config,
                showButtons: showButtons,
                isOpen: modalOpen,
                closeModal: ()=>setModalOpen(false),
                confirm: ()=>setModalOpen(false),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/shared/ModalButtons.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s2(ModalButton, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");
_c2 = ModalButton;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DeleteWithConfirmationButton");
__turbopack_context__.k.register(_c1, "EditModalButton");
__turbopack_context__.k.register(_c2, "ModalButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/models/assistant.models.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccessLevel": (()=>AccessLevel),
    "AssistantMode": (()=>AssistantMode),
    "AssistantStatus": (()=>AssistantStatus),
    "AssistantUsageType": (()=>AssistantUsageType),
    "CommunicationMode": (()=>CommunicationMode),
    "Visibility": (()=>Visibility)
});
var AssistantMode = /*#__PURE__*/ function(AssistantMode) {
    AssistantMode["fullAccess"] = "fullAccess";
    AssistantMode["highLevel"] = "high-level";
    AssistantMode["confidential"] = "confidential";
    return AssistantMode;
}({});
var AssistantStatus = /*#__PURE__*/ function(AssistantStatus) {
    AssistantStatus["published"] = "published";
    AssistantStatus["draft"] = "draft";
    AssistantStatus["archived"] = "archived";
    return AssistantStatus;
}({});
var Visibility = /*#__PURE__*/ function(Visibility) {
    Visibility["public"] = "public";
    Visibility["private"] = "private";
    return Visibility;
}({});
var AccessLevel = /*#__PURE__*/ function(AccessLevel) {
    AccessLevel["free"] = "free";
    AccessLevel["premium"] = "premium";
    return AccessLevel;
}({});
var AssistantUsageType = /*#__PURE__*/ function(AssistantUsageType) {
    AssistantUsageType["general"] = "general";
    AssistantUsageType["unique"] = "unique";
    return AssistantUsageType;
}({});
var CommunicationMode = /*#__PURE__*/ function(CommunicationMode) {
    CommunicationMode["text_to_text"] = "text_to_text";
    CommunicationMode["speech_to_text"] = "speech_to_text";
    CommunicationMode["voice_to_voice"] = "voice_to_voice";
    CommunicationMode["video_avatar"] = "video_avatar";
    return CommunicationMode;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:240d68 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40bdb1594d9d7edf733766ff35336b4ac35eebc785":"createCopyAssistant"},"src/server/actions/assistantActions.ts",""] */ __turbopack_context__.s({
    "createCopyAssistant": (()=>createCopyAssistant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createCopyAssistant = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bdb1594d9d7edf733766ff35336b4ac35eebc785", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCopyAssistant"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXNzaXN0YW50QWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IFByaWNlQ29uZmlndXJhdGlvbiB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IHsgQXNzaXN0YW50LCBBc3Npc3RhbnRDb25maWd1cmF0aW9uLCBBc3Npc3RhbnRFZGl0YWJsZSwgQXNzaXN0YW50TWV0YSB9IGZyb20gJ0AvbGliL21vZGVscy9hc3Npc3RhbnQubW9kZWxzJztcbmltcG9ydCB7IFN0YXRlLCBUZW1wbGF0ZSB9IGZyb20gJ0AvbGliL21vZGVscy9jb21tb24ubW9kZWxzJztcbmltcG9ydCB7IGFzc2lzdGFudFByaWNlU2NoZW1hLCBhc3Npc3RhbnRTY2hlbWEsIG1hcFJlbGF0aW9uQ29uZmlnIH0gZnJvbSAnQC9saWIvdXRpbHMvZGIudXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlckFzc2lzdGFudCxcbiAgZGVsZXRlVXNlckFzc2lzdGFudCxcbiAgZHVwbGljYXRlQXNzaXN0YW50LFxuICBnZXRBbGxUZW1wbGF0ZXMsXG4gIGdldFVzZXJBc3NpdGFudHMsXG4gIHVwZGF0ZUFzc2lzdGFudE1ldGEsXG4gIHVwZGF0ZVVzZXJBc3Npc3RhbnQsXG4gIHVwc2VydEFzc2lzdGFudFByaWNlLFxufSBmcm9tICcuLi9kYi9hc3Npc3RhbnRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0RnVsbENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9kYi9jb25maWd1cmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyLCB2ZXJpZnlTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uQWN0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50QXNzaXN0YW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhc3Npc3RhbnRJZCB9ID0gKGF3YWl0IHZlcmlmeVNlc3Npb24oKSkgfHwge307XG5cbiAgICByZXR1cm4gYXNzaXN0YW50SWQgfHwgJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2F1dGhBY3Rpb25zXSBFcnJvciBmZXRjaGluZyBjdXJyZW50IGFzc2lzdGFudGAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKCk6IFByb21pc2U8VGVtcGxhdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBhd2FpdCBnZXRBbGxUZW1wbGF0ZXMoKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMubWFwKG1hcFJlbGF0aW9uQ29uZmlnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIHRlbXBsYXRlczpgLCBlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzc2lzdGFudHMoaW5jbHVkZT86IGFueSk6IFByb21pc2U8QXNzaXN0YW50W10+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGFzc2lzdGFudHMgPSBhd2FpdCBnZXRVc2VyQXNzaXRhbnRzKHVzZXJJZCwgaW5jbHVkZSk7XG5cbiAgICByZXR1cm4gYXNzaXN0YW50cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIGFzc2lzdGFudHMgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QXNzaXN0YW50KFxuICB7IHRlbXBsYXRlLCAuLi5hc3Npc3RhbnREYXRhIH06IEFzc2lzdGFudEVkaXRhYmxlLFxuICBpZD86IHN0cmluZ1xuKTogUHJvbWlzZTxTdGF0ZTxBc3Npc3RhbnQgfCBudWxsPj4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG4gICAgbGV0IGFzc2lzdGFudDtcblxuICAgIGlmICghdXNlcklkKSByZXR1cm4geyB2YWx1ZTogbnVsbCB9O1xuXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGFzc2lzdGFudFNjaGVtYS5zYWZlUGFyc2UoeyB0ZW1wbGF0ZSwgLi4uYXNzaXN0YW50RGF0YSB9KTtcblxuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBlcnJvcnM6IHBhcnNlZERhdGEuZXJyb3IuZXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBwYXRoIH0pID0+ICh7IG5hbWU6IHBhdGguam9pbignLicpLCBtZXNzYWdlIH0pKSB9O1xuICAgIH1cblxuICAgIGlmICghIWlkKSB7XG4gICAgICBhc3Npc3RhbnQgPSBhd2FpdCB1cGRhdGVVc2VyQXNzaXN0YW50KHVzZXJJZCwgaWQsIHtcbiAgICAgICAgbmFtZTogYXNzaXN0YW50RGF0YS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXNzaXN0YW50RGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgbW9kZTogYXNzaXN0YW50RGF0YS5tb2RlLFxuICAgICAgICBzdGF0dXM6IGFzc2lzdGFudERhdGEuc3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lzdGFudCA9IGF3YWl0IGNyZWF0ZVVzZXJBc3Npc3RhbnQodXNlcklkLCBhc3Npc3RhbnREYXRhLCB0ZW1wbGF0ZSBhcyBhbnkpO1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVUYWcoJ2Fzc2lzdGFudHMnKTtcblxuICAgIHJldHVybiB7IHZhbHVlOiBhc3Npc3RhbnQgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yICR7ISFpZCA/ICd1cGRhdGluZycgOiAnY3JlYXRpbmcnfSBhc3Npc3RhbnQgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiB7IHZhbHVlOiBudWxsLCBlcnJvcjogJycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzaXN0YW50Q29uZmlndXJhdGlvbihcbiAgaWQ/OiBzdHJpbmcsXG4gIGZ1bGw6IGJvb2xlYW4gPSB0cnVlXG4pOiBQcm9taXNlPEFzc2lzdGFudENvbmZpZ3VyYXRpb24gfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoYXdhaXQgZ2V0RnVsbENvbmZpZ3VyYXRpb24oYXNzaXN0YW50SWQgfHwgJycsIGZ1bGwpKSBhcyBhbnk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0NsaWVudF0gRXJyb3IgZ2V0dGluZyBhc3Npc3RhbnQgJHthc3Npc3RhbnRJZH0gZGF0YTpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29weUFzc2lzdGFudChhc3Npc3RhbnQ6IEFzc2lzdGFudCk6IFByb21pc2U8QXNzaXN0YW50IHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIWFzc2lzdGFudCB8fCAhdXNlcklkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Fzc2lzdGFudCBub3QgcGFzc2VkIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gYXdhaXQgZHVwbGljYXRlQXNzaXN0YW50KHVzZXJJZCwgYXNzaXN0YW50KTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG5cbiAgICByZXR1cm4gY29weTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBjcmVhdGluZyBjb3B5IG9mIGFzc2lzdGFudCAke2Fzc2lzdGFudC5pZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzc2lzdGFudE1ldGFEYXRhKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8QXNzaXN0YW50TWV0YT4pOiBQcm9taXNlPEFzc2lzdGFudE1ldGEgfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRNZXRhID0gYXdhaXQgdXBkYXRlQXNzaXN0YW50TWV0YShhc3Npc3RhbnRJZCwgZGF0YSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB1cGRhdGVkTWV0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBnZXR0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBkYXRhOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3Npc3RhbnRNZXRhUHJpY2UoXG4gIGFzc2lzdGFudDogQXNzaXN0YW50LFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8U3RhdGU8UHJpY2VDb25maWd1cmF0aW9uIHwgbnVsbD4+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gYXNzaXN0YW50LmlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiB7IGVycm9yOiAnR2VuZXJhbC5lcnJvcnMudW5leHBlY3RlZEVycm9yJywgdmFsdWU6IG51bGwgfTtcbiAgICB9XG4gICAgY29uc3QgcHJpY2UgPSBbLi4uZm9ybURhdGFdLnJlZHVjZSgoZGF0YTogYW55LCBba2V5LCB2YWx1ZV06IGFueSkgPT4gKHsgLi4uZGF0YSwgW2tleV06IHZhbHVlIH0pLCB7fSk7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IGFzc2lzdGFudFByaWNlU2NoZW1hLnBhcnNlKHByaWNlKTtcblxuICAgIGlmICh2YWxpZGF0ZWREYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiB2YWxpZGF0ZWREYXRhLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBhd2FpdCB1cHNlcnRBc3Npc3RhbnRQcmljZShhc3Npc3RhbnQubWV0YT8uaWQgfHwgJycsIHtcbiAgICAgIC4uLnZhbGlkYXRlZERhdGEsXG4gICAgICB0cmlhbERheXM6ICEhdmFsaWRhdGVkRGF0YS50cmlhbERheXMgPyAxNCA6IG51bGwsXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgdmFsdWU6IHVwZGF0ZWRQcmljZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtpbnN0cnVjdGlvbnNDbGllbnRdIEVycm9yIHVwZGF0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBtZXRhIHByaWNlIGRhdGE6YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdHZW5lcmFsLmVycm9ycy51bmV4cGVjdGVkRXJyb3InLCB2YWx1ZTogbnVsbCB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBc3Npc3RhbnQoaWQ6IHN0cmluZykge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuO1xuXG4gICAgYXdhaXQgZGVsZXRlVXNlckFzc2lzdGFudCh1c2VySWQsIGlkKTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2Fzc2lzdGFudENsaWVudF0gRXJyb3IgcmVtb3ZpbmcgdXNlciAke3VzZXJJZH0gYXNzaXN0YW50ICR7aWR9OmAsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtVEFzSHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/CoomingSoon.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ComingSoon = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ComingSoon({ className, onlyLabel }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex items-center gap-x-1 py-2 text-sm font-bold text-light-gray', className),
        children: [
            !onlyLabel && t('General.inDevelopmentLabel'),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rounded-full bg-grape px-2 uppercase leading-4 text-main",
                children: t('General.comingSoon')
            }, void 0, false, {
                fileName: "[project]/src/shared/CoomingSoon.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/CoomingSoon.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
})), "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = ComingSoon;
const __TURBOPACK__default__export__ = ComingSoon;
var _c, _c1;
__turbopack_context__.k.register(_c, "ComingSoon$memo");
__turbopack_context__.k.register(_c1, "ComingSoon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/DropdownMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/menu/menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/CoomingSoon.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ menuId, menuBtnClass, menuBtnIcon, menuItemsClass, options }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], {
        children: ({ open, close })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuButton"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-main focus:outline-none data-[focus]:text-main data-[hover]:text-main data-[open]:text-main', menuBtnClass),
                        children: menuBtnIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: menuBtnIcon
                        }, void 0, false, {
                            fileName: "[project]/src/shared/DropdownMenu.tsx",
                            lineNumber: 40,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"], {
                        transition: true,
                        anchor: "bottom end",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('z-10 flex w-max min-w-40 flex-col gap-y-1.5 rounded-xl border border-light-gray bg-violet-950 p-2.5 text-light-gray transition duration-200 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0', menuItemsClass),
                        children: options && options.map((option, id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                                as: 'div',
                                children: [
                                    option.children ? option.children(close) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>option.onClick?.(menuId),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('group flex w-full items-center justify-start gap-2 p-1.5 text-base font-semibold hover:text-main data-[focus]:text-main data-[hover]:text-main', option.className),
                                        children: [
                                            option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: option.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/DropdownMenu.tsx",
                                                lineNumber: 65,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-start",
                                                children: [
                                                    option.label,
                                                    option.subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-4 text-light-gray",
                                                        children: [
                                                            " ",
                                                            option.subTitle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 47
                                                    }, this),
                                                    option.inDevelompent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        onlyLabel: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/DropdownMenu.tsx",
                                                lineNumber: 66,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                                        lineNumber: 58,
                                        columnNumber: 23
                                    }, this),
                                    option.divider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$menu$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuSeparator"], {
                                        className: "my-1 h-px bg-storm-gray"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                                        lineNumber: 73,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, `menu-item-${id}`, true, {
                                fileName: "[project]/src/shared/DropdownMenu.tsx",
                                lineNumber: 54,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/shared/DropdownMenu.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                ]
            }, menuId, true, {
                fileName: "[project]/src/shared/DropdownMenu.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/DropdownMenu.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = DropdownMenu;
var _c;
__turbopack_context__.k.register(_c, "DropdownMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AssistantMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$240d68__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:240d68 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$1a6f44__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:1a6f44 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:523a0a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$DropdownMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/DropdownMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ModalButtons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const modalConfig = {
    buttonTitleKey: 'Assistants.deleteModal.deleteButton',
    buttonIcon: 'cbi-trash',
    titleIcon: 'cbi-send',
    titleKey: 'Assistants.deleteModal.title',
    variant: 'red'
};
const getMenuOptions = (assistant, t)=>[
        {
            icon: 'cbi-export',
            label: t('Dashboard.assistantCard.menuItems.0'),
            subTitle: t('Dashboard.assistantCard.menuItems.1'),
            className: 'text-dark-aquamarine',
            divider: true,
            onClick: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertAssistant"])({
                    ...assistant,
                    template: {},
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].published
                }, assistant.id),
            allowedStatuses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft
            ]
        },
        {
            icon: 'cbi-scroll',
            label: t('Dashboard.assistantCard.menuItems.2'),
            subTitle: t('Dashboard.assistantCard.menuItems.3'),
            inDevelompent: true,
            divider: true,
            className: 'text-yellow',
            onClick: ()=>console.log('Integrate item clicked'),
            allowedStatuses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft
            ]
        },
        {
            icon: 'cbi-export',
            label: t('Dashboard.assistantCard.menuItems.8'),
            divider: true,
            onClick: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertAssistant"])({
                    ...assistant,
                    template: {},
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft
                }, assistant.id),
            allowedStatuses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].published,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].archived
            ]
        },
        {
            icon: 'cbi-copy',
            label: t('Dashboard.assistantCard.menuItems.4'),
            onClick: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$240d68__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCopyAssistant"])(assistant),
            allowedStatuses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].archived,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft
            ]
        },
        {
            children: (close)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportAssistantButton"], {
                        assistant: assistant,
                        callback: close,
                        className: "border-none p-1.5 text-base font-semibold text-light-gray hover:text-main",
                        iconClassName: "!text-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this);
            }
        },
        {
            icon: 'cbi-archive',
            label: t('Dashboard.assistantCard.menuItems.6'),
            onClick: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$523a0a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["upsertAssistant"])({
                    ...assistant,
                    template: {},
                    status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].archived
                }, assistant.id),
            allowedStatuses: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].published,
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft
            ]
        },
        {
            children: (close)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteWithConfirmationButton"], {
                        buttonText: t('Dashboard.assistantCard.menuItems.7'),
                        iconClassName: "cbi-trash !text-xl",
                        className: 'border-none p-1.5 font-semibold text-salmon hover:text-main',
                        config: {
                            ...modalConfig,
                            confirm: async ()=>{
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$1a6f44__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAssistant"])(assistant?.id);
                                close();
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-light-gray",
                            children: t(`Assistants.deleteModal.content`, {
                                name: assistant?.name
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
        }
    ].filter(({ allowedStatuses })=>!allowedStatuses || allowedStatuses.includes(assistant.status));
function AssistantMenu({ assistant }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$DropdownMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        options: getMenuOptions(assistant, t),
        menuBtnIcon: "cbi-more",
        menuBtnClass: "aspect-square border border-graphic/[14%] text-xl text-light-gray hover:border-main data-[hover]:text-main",
        menuItemsClass: "min-w-60"
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(AssistantMenu, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = AssistantMenu;
var _c;
__turbopack_context__.k.register(_c, "AssistantMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AssistantFilter),
    "statusOptions": (()=>statusOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/RadioGroup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const statusOptions = [
    {
        id: 0,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].published,
        labelKey: 'Dashboard.assistantStatusOptions.0'
    },
    {
        id: 1,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].draft,
        labelKey: 'Dashboard.assistantStatusOptions.1'
    },
    {
        id: 2,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].archived,
        labelKey: 'Dashboard.assistantStatusOptions.2'
    }
];
function AssistantFilter({ assistants, selected }) {
    _s();
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(selected || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AssistantStatus"].published);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AssistantFilter.useMemo[options]": ()=>{
            return statusOptions.map({
                "AssistantFilter.useMemo[options]": (option)=>{
                    const count = assistants.reduce({
                        "AssistantFilter.useMemo[options].count": (count, assistant)=>assistant.status === option.value ? ++count : count
                    }["AssistantFilter.useMemo[options].count"], 0);
                    return {
                        ...option,
                        displayValue: count,
                        disabled: !count
                    };
                }
            }["AssistantFilter.useMemo[options]"]);
        }
    }["AssistantFilter.useMemo[options]"], [
        assistants
    ]);
    const handleFilterSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantFilter.useCallback[handleFilterSelected]": (value)=>{
            setSelectedStatus(value);
            router.push(`${pathname}?status=${value}`);
        }
    }["AssistantFilter.useCallback[handleFilterSelected]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssistantFilter.useEffect": ()=>{
            const currentOption = options.find({
                "AssistantFilter.useEffect.currentOption": ({ value })=>value === selectedStatus
            }["AssistantFilter.useEffect.currentOption"]);
            if (!currentOption?.displayValue) {
                const targetOption = options.find({
                    "AssistantFilter.useEffect.targetOption": ({ displayValue })=>displayValue > 0
                }["AssistantFilter.useEffect.targetOption"]);
                targetOption?.value && handleFilterSelected(targetOption?.value);
            }
        }
    }["AssistantFilter.useEffect"], [
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        options: options,
        selected: selectedStatus,
        setSelected: handleFilterSelected,
        optionClassName: "p-3 text-sm",
        className: "flex max-w-xl flex-grow gap-x-1",
        variant: "graphic"
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(AssistantFilter, "Vmu860THUvcNdhZfq9hw3DcvquM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AssistantFilter;
var _c;
__turbopack_context__.k.register(_c, "AssistantFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2bfff954._.js.map