module.exports = {

"[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/shared/skeletons/ListSkeleton.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ListSkeleton": (()=>ListSkeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function ListSkeleton({ className, liClassName, length, heights }) {
    const mockChatsHeight = heights || [
        'h-28',
        'h-24',
        'h-32',
        'h-28',
        'h-24',
        'h-24',
        'h-36',
        'h-38',
        'h-24',
        'h-16'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        role: "list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-grow flex-col gap-y-2 overflow-y-auto', className),
        children: mockChatsHeight.slice(0, length ?? mockChatsHeight.length).map((height, key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "flex cursor-pointer items-center justify-between text-light-gray",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])(`${height} bg-white/[16%]) w-full animate-pulse rounded-lg border-transparent`, liClassName)
                }, void 0, false, {
                    fileName: "[project]/src/shared/skeletons/ListSkeleton.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, key, false, {
                fileName: "[project]/src/shared/skeletons/ListSkeleton.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/shared/skeletons/ListSkeleton.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/Tabs.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/shared/Tabs.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Tabs.tsx <module evaluation>", "default");
}}),
"[project]/src/shared/Tabs.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/shared/Tabs.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Tabs.tsx", "default");
}}),
"[project]/src/shared/Tabs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/Tabs.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/Tabs.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfigToggler": (()=>ConfigToggler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ConfigToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfigToggler() from the server but ConfigToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx <module evaluation>", "ConfigToggler");
}}),
"[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfigToggler": (()=>ConfigToggler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ConfigToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfigToggler() from the server but ConfigToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx", "ConfigToggler");
}}),
"[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigToggler$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigToggler$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigToggler$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConfigTabItem": (()=>ConfigTabItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigToggler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/ConfigToggler.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function ConfigTabItem({ nameKey, descriptionKey, onToggle, iconClass, iconPaths, checked }) {
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-grow justify-between rounded-xl bg-white-opacity px-6 py-3.5', checked && 'bg-dark-aquamarine/[11%]'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "inline-flex gap-x-1.5 text-start text-lg font-semibold uppercase text-main",
                        children: [
                            iconClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: iconClass,
                                children: iconPaths && Array.from({
                                    length: iconPaths
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `path${i + 1}`
                                    }, i, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                                        lineNumber: 36,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            t(nameKey)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2 text-start text-light-gray",
                        children: t(descriptionKey)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            onToggle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigToggler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigToggler"], {
                checked: checked,
                onToggle: onToggle
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
                lineNumber: 44,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/categories.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "categories": (()=>categories)
});
const categories = [
    // {
    //   id: 'health-wellbeing-z8x7y6v3',
    //   name: 'Health & Wellbeing',
    //   instruction: 'Focusing on physical and mental health improvement',
    //   description:
    //     'Enhance your physical fitness, mental wellness, and lifestyle balance through healthy habits and mindful practices.',
    //   image: '',
    //   translateKey: 'Categories.options.healthAndWellbeing.name',
    //   tooltipKey: 'Categories.options.healthAndWellbeing.description',
    //   order: 1,
    // },
    // {
    //   id: 'finances-q9r8s7t6',
    //   name: 'Finances',
    //   instruction: 'Managing personal finances, budgeting, and financial planning',
    //   description: 'Manage your budgets, savings, and investments to achieve financial stability and long-term goals.',
    //   image: '',
    //   translateKey: 'Categories.options.finances.name',
    //   tooltipKey: 'Categories.options.finances.description',
    //   order: 2,
    // },
    {
        id: 'family-and-friends-k1l2m3n4',
        name: 'Family & Friends',
        instruction: 'Nurturing relationships with family and friends',
        description: 'Strengthen relationships and foster meaningful connections with loved ones through communication and quality time.',
        image: '',
        translateKey: 'Categories.options.familyAndFriends.name',
        tooltipKey: 'Categories.options.familyAndFriends.description',
        order: 3
    },
    {
        id: 'romance-e9f8g7h6',
        name: 'Romance',
        instruction: 'Navigating romantic relationships and personal connections',
        description: 'Develop and nurture romantic relationships with trust, communication, and shared experiences.',
        image: '',
        translateKey: 'Categories.options.romance.name',
        tooltipKey: 'Categories.options.romance.description',
        order: 4
    },
    {
        id: 'personal-growth-y1z2a3b4',
        name: 'Personal Growth',
        instruction: 'Focusing on self-improvement and personal development',
        description: 'Engage in self-improvement through learning new skills, self-reflection, and personal development activities.',
        image: '',
        translateKey: 'Categories.options.personalGrowth.name',
        tooltipKey: 'Categories.options.personalGrowth.description',
        order: 5
    },
    {
        id: 'fun-and-recreation-s9t8u7v6',
        name: 'Fun & Recreation',
        instruction: 'Balancing enjoyment and leisure activities with daily responsibilities',
        description: 'Balance your routine with leisure activities and hobbies that bring joy, relaxation, and creativity.',
        image: '',
        translateKey: 'Categories.options.funAndRecreation.name',
        tooltipKey: 'Categories.options.funAndRecreation.description',
        order: 6
    },
    {
        id: 'business-and-career-m5n6o7p8',
        name: 'Business & Career',
        instruction: 'Focusing on professional development and career advancement',
        description: 'Advance your professional objectives and career path through strategic planning and skill enhancement.',
        image: '',
        translateKey: 'Categories.options.businessAndCareer.name',
        tooltipKey: 'Categories.options.businessAndCareer.description',
        order: 7
    },
    {
        id: 'physical-environment-g9h8i7j6',
        name: 'Physical Environment',
        instruction: 'Creating and maintaining optimal living and working spaces',
        description: 'Create and maintain organized, inspiring, and functional spaces at home and work for optimal well-being.',
        image: '',
        translateKey: 'Categories.options.physicalEnvironment.name',
        tooltipKey: 'Categories.options.physicalEnvironment.description',
        order: 8
    },
    {
        id: 'spirituality-mindfulness-x1y2z3w4',
        name: 'Spirituality & Mindfulness',
        instruction: 'Focusing on meditation, introspection, and spiritual growth',
        description: 'Cultivate inner peace and a deeper connection with your values through mindfulness, meditation, and spiritual exploration.',
        image: '',
        translateKey: 'Categories.options.spiritualityAndMindfulness.name',
        tooltipKey: 'Categories.options.spiritualityAndMindfulness.description',
        order: 9
    },
    {
        id: 'community-and-contribution-c1o2m3p4',
        name: 'Community & Contribution',
        instruction: 'Focusing on community engagement, volunteering, and social impact',
        description: 'Engage in community service and social initiatives to foster teamwork, support others, and make a positive impact.',
        image: '',
        translateKey: 'Categories.options.communityAndContribution.name',
        tooltipKey: 'Categories.options.communityAndContribution.description',
        order: 10
    }
];
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CREATE_CATEGORY_ID": (()=>CREATE_CATEGORY_ID),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CREATE_CATEGORY_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CREATE_CATEGORY_ID() from the server but CREATE_CATEGORY_ID is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx <module evaluation>", "CREATE_CATEGORY_ID");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CREATE_CATEGORY_ID": (()=>CREATE_CATEGORY_ID),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CREATE_CATEGORY_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CREATE_CATEGORY_ID() from the server but CREATE_CATEGORY_ID is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx", "CREATE_CATEGORY_ID");
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx", "default");
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TopicCounter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
;
function TopicCounter({ categories, t }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-x-2 border-b border-storm-gray pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-dark-aquamarine",
                children: t('CoachDetails.Config.GoalVisionPage.topicCounter.minLabel', {
                    count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MIN_CATEGORIES_COUNT"]
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center gap-x-1 rounded-full bg-graphic/[14%] px-1.5 py-2 ps-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-1 left-1.5 top-1 flex w-[31.5%] rounded-full border border-dark-aquamarine content-['']"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_CATEGORIES_COUNT"]
                    }, (_, i)=>i + 1).map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])(`size-2.5 rounded-full border border-main bg-transparent`, categories.length >= value && 'border-dark-aquamarine bg-dark-aquamarine', value === 3 && 'me-1.5')
                        }, `topic-counter-${value}`, false, {
                            fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-light-gray",
                children: t('CoachDetails.Config.GoalVisionPage.topicCounter.maxLabel', {
                    count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_CATEGORIES_COUNT"]
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GoalVision)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/CategoriesManager.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$TopicCounter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/TopicCounter.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function GoalVision({}) {
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-grow flex-col gap-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-center font-semibold text-light-gray",
                children: t('CoachDetails.Config.GoalVisionPage.description')
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-y-3 overflow-hidden rounded-2xl border bg-white-opacity px-3.5 py-4 ${'border-dark-aquamarine'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-main",
                        children: t('CoachDetails.Config.GoalVisionPage.categoriesAreaTitile')
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-grow flex-col gap-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$TopicCounter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                t: t,
                                categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$CategoriesManager$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                categories$: Promise.resolve(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categories"])
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-x-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "solid",
                        color: "dark",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "cbi-undo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            t('General.Instruction.resetButton')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        name: `categories-submit`,
                        type: "submit",
                        variant: "solid",
                        color: "light",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "cbi-archive-tick"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            t('General.Instruction.saveButton')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(standalone)/coach/_components/Integration.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Integration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Logo.tsx [app-rsc] (ecmascript)");
;
;
;
function Integration({ assistant }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__["useTranslations"])();
    const isWhatsappOn = !!assistant.meta?.whatsapp;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-grow flex-col gap-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: `inline-flex items-center justify-center gap-x-2 text-center text-2xl font-bold uppercase leading-3 ${isWhatsappOn ? 'text-main' : 'text-light-gray'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isWhatsappOn ? 'cbi-tick-circle' : 'cbi-close-circle'} text-3xl leading-3`
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    t(isWhatsappOn ? 'CoachDetails.Config.IntegrationPage.connectedTitle' : 'CoachDetails.Config.IntegrationPage.notConnectedTitle')
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-light-gray",
                children: t(isWhatsappOn ? 'CoachDetails.Config.IntegrationPage.connectedDescription' : 'CoachDetails.Config.IntegrationPage.notConnectedDescription')
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-y-6 rounded-2xl border bg-white-opacity px-3.5 py-6 ${isWhatsappOn ? 'border-dark-aquamarine' : 'border-background-border/[11%]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm font-medium text-main",
                        children: t('CoachDetails.Config.IntegrationPage.whatsappDescription')
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-center gap-x-5 py-7 ${!isWhatsappOn && 'opacity-35'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logo"], {
                                className: "pointer-events-none w-1/3 xl:h-[3.25rem]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex flex-col items-center justify-center gap-y-0 !text-xl text-light-gray",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cbi-arrow-right -mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cbi-arrow-left"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-1/3 items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cbi-whatsapp text-[5rem]",
                                    children: Array.from({
                                        length: 4
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `path${i + 1}`
                                        }, i, false, {
                                            fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                            lineNumber: 44,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/Integration.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/Input.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Input() from the server but Input is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Input.tsx <module evaluation>", "Input");
}}),
"[project]/src/shared/Input.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Input() from the server but Input is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Input.tsx", "Input");
}}),
"[project]/src/shared/Input.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MarketplaceListing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function MarketplaceListing({ assistant }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__["useTranslations"])();
    const isPrivate = assistant.meta?.visibility === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].private;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-grow flex-col gap-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: `inline-flex items-center justify-center gap-x-2 text-center text-2xl font-bold uppercase leading-3 ${isPrivate ? 'text-main' : 'text-light-gray'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${isPrivate ? 'cbi-lock' : 'cbi-lock-slash'} text-3xl leading-3`,
                        children: !isPrivate && Array.from({
                            length: 3
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `path${i + 1}`
                            }, i, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                                lineNumber: 18,
                                columnNumber: 66
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    t(isPrivate ? 'CoachDetails.Config.MarketplacePage.titlePrivate' : 'CoachDetails.Config.MarketplacePage.title')
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-light-gray",
                children: t('CoachDetails.Config.MarketplacePage.description')
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-y-6 rounded-2xl border bg-white-opacity px-3.5 py-6 ${isPrivate ? 'border-dark-aquamarine' : 'border-background-border/[11%]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center font-semibold text-main",
                        children: t('CoachDetails.Config.MarketplacePage.shareTitle')
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Input"], {
                                id: 'share-link-input',
                                readOnly: true,
                                placeholder: `${process.env.SHARE_LINK || 'https://coachbot.ai/chat'}?cbsas=${assistant.id}`,
                                className: "flex-grow",
                                inputClassName: `text-light-gray py-1.5 text-ellipsis animate-none ${isPrivate ? 'border-main' : ' opacity-50'}`,
                                disabled: !isPrivate
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopyToClipboardButton"], {
                                searchParams: `cbsas=${assistant.id}`,
                                tooltipKey: 'General.shareLinkSuccess',
                                titileKey: "CoachDetails.Config.MarketplacePage.copyButton",
                                icon: "cbi-copy",
                                variant: 'solid',
                                color: 'light',
                                className: "px-5 py-2 text-background disabled:border-storm-gray disabled:bg-transparent disabled:text-storm-gray disabled:opacity-75",
                                disabled: !isPrivate
                            }, void 0, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(standalone)/coach/_components/Profile.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(standalone)/coach/_components/Profile.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/Profile.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(standalone)/coach/_components/Profile.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(standalone)/coach/_components/Profile.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(standalone)/coach/_components/Profile.tsx", "default");
}}),
"[project]/src/app/(standalone)/coach/_components/Profile.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Profile$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/Profile.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Profile$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/Profile.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Profile$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/RadioGroup.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroup": (()=>RadioGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const RadioGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RadioGroup() from the server but RadioGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/RadioGroup.tsx <module evaluation>", "RadioGroup");
}}),
"[project]/src/shared/RadioGroup.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroup": (()=>RadioGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const RadioGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RadioGroup() from the server but RadioGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/RadioGroup.tsx", "RadioGroup");
}}),
"[project]/src/shared/RadioGroup.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/RadioGroup.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/RadioGroup.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"60d90d843bf8dc0cebe6b960ca1fdd584619684bbc":"$$RSC_SERVER_ACTION_0"},"",""] */ __turbopack_context__.s({
    "$$RSC_SERVER_ACTION_0": (()=>$$RSC_SERVER_ACTION_0),
    "default": (()=>TranscriptSharing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/assistantActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/RadioGroup.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
const modeOptions = [
    {
        id: 0,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantMode"].fullAccess,
        labelKey: 'Assistants.newForm.modeOptions.0.title',
        decriptionKey: 'Assistants.newForm.modeOptions.0.description'
    },
    {
        id: 2,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantMode"].highLevel,
        labelKey: 'Assistants.newForm.modeOptions.1.title',
        decriptionKey: 'Assistants.newForm.modeOptions.1.description'
    },
    {
        id: 3,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantMode"].confidential,
        labelKey: 'Assistants.newForm.modeOptions.2.title',
        decriptionKey: 'Assistants.newForm.modeOptions.2.description'
    }
];
const $$RSC_SERVER_ACTION_0 = async function setSelected($$ACTION_CLOSURE_BOUND, mode) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("60d90d843bf8dc0cebe6b960ca1fdd584619684bbc", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertAssistant"])({
        ...$$ACTION_ARG_0,
        mode
    }, $$ACTION_ARG_0.id);
};
function TranscriptSharing({ assistant }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-grow flex-col gap-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-center text-base font-semibold text-light-gray",
                children: t('CoachDetails.Config.TranscriptPage.description')
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-3 rounded-2xl border border-background-border/[11%] bg-white-opacity p-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RadioGroup"], {
                        options: modeOptions,
                        optionClassName: "px-3 py-2.5 text-sm font-medium rounded-xl text-center",
                        className: "w-full gap-x-1 rounded-xl bg-graphic/[14%] p-1 backdrop-blur-sm",
                        variant: "transparent",
                        selected: assistant.mode,
                        setSelected: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "60d90d843bf8dc0cebe6b960ca1fdd584619684bbc", null).bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("60d90d843bf8dc0cebe6b960ca1fdd584619684bbc", assistant))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-x-1",
                        children: modeOptions.map(({ value, decriptionKey }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])('flex-1 rounded-xl border border-storm-gray px-5 py-6 text-center text-main', assistant.mode === value && 'border-main'),
                                children: t(decriptionKey)
                            }, `coach-mode-li-${index}`, false, {
                                fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(standalone)/coach/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/* __next_internal_action_entry_do_not_use__ [{"00c74936e4a077aff0f050b982be15a5ead4ca745a":"$$RSC_SERVER_ACTION_3","00d8fd67a21d63aacbf8a7d33fca5f09707336b43d":"$$RSC_SERVER_ACTION_2","6047bbfc9580519888a6aa1a20e625c929de249e66":"$$RSC_SERVER_ACTION_0","60cb22cb258b08b050fda2b03123a9bdfae7bf4ab8":"$$RSC_SERVER_ACTION_1"},"",""] */ __turbopack_context__.s({
    "$$RSC_SERVER_ACTION_0": (()=>$$RSC_SERVER_ACTION_0),
    "$$RSC_SERVER_ACTION_1": (()=>$$RSC_SERVER_ACTION_1),
    "$$RSC_SERVER_ACTION_2": (()=>$$RSC_SERVER_ACTION_2),
    "$$RSC_SERVER_ACTION_3": (()=>$$RSC_SERVER_ACTION_3),
    "ConfigTab": (()=>ConfigTab),
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/assistantActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$assistantClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/assistantClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tabs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/ConfigTabItem.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$GoalVision$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/GoalVision/GoalVision.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Integration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/Integration.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$MarketplaceListing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/MarketplaceListing.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Profile$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/Profile.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$TranscriptSharing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/_components/TranscriptSharing.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$assistantClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$TranscriptSharing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$assistantClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$TranscriptSharing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
var ConfigTab = /*#__PURE__*/ function(ConfigTab) {
    ConfigTab["profile"] = "profile";
    ConfigTab["transcript"] = "transcript";
    ConfigTab["marketplace"] = "marketplace";
    ConfigTab["integration"] = "integration";
    ConfigTab["goalVision"] = "goal-vision";
    ConfigTab["goalTrack"] = "goal-track";
    return ConfigTab;
}({});
const $$RSC_SERVER_ACTION_0 = async function onToggle($$ACTION_CLOSURE_BOUND, on) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("6047bbfc9580519888a6aa1a20e625c929de249e66", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAssistantMetaData"])($$ACTION_ARG_0, {
        visibility: on ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].private : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].public
    });
};
const $$RSC_SERVER_ACTION_1 = async function onToggle($$ACTION_CLOSURE_BOUND, whatsapp) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("60cb22cb258b08b050fda2b03123a9bdfae7bf4ab8", $$ACTION_CLOSURE_BOUND);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAssistantMetaData"])($$ACTION_ARG_0, {
        whatsapp
    });
};
const $$RSC_SERVER_ACTION_2 = async function onToggle() {
    console.log('goal vision');
};
const $$RSC_SERVER_ACTION_3 = async function onToggle() {
    console.log('goal track');
};
const getTabsOptions = (assistant)=>[
        {
            name: "profile",
            nameKey: 'CoachDetails.Config.sidebarOptions.0.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Profile$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                assistant: assistant
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 28,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-cpu",
                nameKey: "CoachDetails.Config.sidebarOptions.0.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.0.description"
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        },
        {
            name: "transcript",
            nameKey: 'CoachDetails.Config.sidebarOptions.1.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$TranscriptSharing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                assistant: assistant
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 40,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-share1",
                nameKey: "CoachDetails.Config.sidebarOptions.1.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.0.description"
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        },
        {
            name: "marketplace",
            nameKey: 'CoachDetails.Config.sidebarOptions.2.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$MarketplaceListing$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                assistant: assistant
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 52,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-unlock",
                nameKey: "CoachDetails.Config.sidebarOptions.2.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.1.description",
                checked: assistant?.meta?.visibility === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].private,
                onToggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "6047bbfc9580519888a6aa1a20e625c929de249e66", null).bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("6047bbfc9580519888a6aa1a20e625c929de249e66", assistant.id))
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        },
        {
            name: "integration",
            nameKey: 'CoachDetails.Config.sidebarOptions.3.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$Integration$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                assistant: assistant
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-whatsapp",
                iconPaths: 4,
                nameKey: "CoachDetails.Config.sidebarOptions.3.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.3.description",
                checked: !!assistant?.meta?.whatsapp,
                onToggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_1, "60cb22cb258b08b050fda2b03123a9bdfae7bf4ab8", null).bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("60cb22cb258b08b050fda2b03123a9bdfae7bf4ab8", assistant.id))
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        },
        {
            name: "goal-vision",
            className: 'flex flex-grow',
            nameKey: 'CoachDetails.Config.sidebarOptions.4.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$GoalVision$2f$GoalVision$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                assistant: assistant
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 88,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-chart",
                nameKey: "CoachDetails.Config.sidebarOptions.4.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.4.description",
                onToggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_2, "00d8fd67a21d63aacbf8a7d33fca5f09707336b43d", null)
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        },
        {
            name: "goal-track",
            nameKey: 'CoachDetails.Config.sidebarOptions.5.title',
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: " Page: goal track"
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 104,
                columnNumber: 14
            }, this),
            listItemContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f$_components$2f$ConfigTabItem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTabItem"], {
                iconClass: "cbi-health",
                nameKey: "CoachDetails.Config.sidebarOptions.5.title",
                descriptionKey: "CoachDetails.Config.sidebarOptions.5.description",
                onToggle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_3, "00c74936e4a077aff0f050b982be15a5ead4ca745a", null)
            }, void 0, false, {
                fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        }
    ];
async function Page({ params, searchParams }) {
    const [{ id }, { tab }] = await Promise.all([
        params,
        searchParams
    ]);
    const assistant = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$assistantClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAssistantData"])(id, {
        template: true,
        meta: {
            include: {
                price: true,
                feedbacks: true
            }
        }
    });
    if (!assistant) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].dashboard);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tabs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        id: `coach-config-tab-${id}`,
        initialTabName: tab,
        className: "flex-row flex-nowrap gap-x-7",
        listClassName: "flex-col gap-y-2.5 max-w-[40%] bg-graphic/[14%] rounded-xl p-3.5 shrink-0 overflow-y-auto overflow-x-hidden",
        panelClassName: "flex flex-col p-2 overflow-y-auto overflow-x-hidden",
        tabClassName: "flex-none border border-transparent data-[hover]:bg-white-opacity data-[hover]:data-[selected]:border-main data-[hover]:data-[selected]:bg-white-opacity data-[selected]:bg-transparent data-[selected]:border-main",
        tabs: getTabsOptions(assistant)
    }, void 0, false, {
        fileName: "[project]/src/app/(standalone)/coach/[id]/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/utils/date.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getDateDay": (()=>getDateDay),
    "getDateWeekDay": (()=>getDateWeekDay),
    "getFomatedDate": (()=>getFomatedDate),
    "getPassedTime": (()=>getPassedTime),
    "getTime": (()=>getTime)
});
const getFomatedDate = (rawDate, locale = 'en-US', options)=>{
    const date = new Date(rawDate);
    return date.toLocaleDateString(locale, options);
};
const getDateWeekDay = (rawDate, locale = 'en-US')=>{
    return getFomatedDate(rawDate, locale, {
        weekday: 'long'
    });
};
const getDateDay = (rawDate, locale = 'en-US')=>{
    return getFomatedDate(rawDate, locale, {
        month: 'long',
        day: 'numeric'
    });
};
const getTime = (rawDate, locale = 'en-US')=>{
    const date = new Date(rawDate);
    return date.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
};
function getPassedTime(startTime, range = 1000) {
    return startTime ? Math.floor(Date.now() - startTime) / range : 0;
}
}}),
"[project]/src/shared/Chip.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Chip": (()=>Chip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
const sizes = {
    s: 'py-0 px-2.5 text-base',
    m: 'py-1 px-3.5 text-base',
    md: 'py-1.5 px-5 text-base'
};
const variants = {
    white: 'bg-main text-background',
    aquamarine: 'bg-dark-aquamarine text-background',
    transparent: 'bg-transparent text-main border border-storm-gray',
    gray: 'bg-light-gray text-background',
    graphic: 'bg-graphic/[14%] text-light-gray'
};
const Chip = ({ text, size, variant, className, textClassName, children, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])('inline text-center', className),
        onClick: onClick,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex min-w-0 shrink-0 items-center justify-center text-wrap rounded-full md:text-nowrap', size && sizes[size], variant && variants[variant], textClassName),
            children: [
                text,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/Chip.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/Chip.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ModalButtons.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteWithConfirmationButton": (()=>DeleteWithConfirmationButton),
    "EditModalButton": (()=>EditModalButton),
    "ModalButton": (()=>ModalButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DeleteWithConfirmationButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DeleteWithConfirmationButton() from the server but DeleteWithConfirmationButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx <module evaluation>", "DeleteWithConfirmationButton");
const EditModalButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditModalButton() from the server but EditModalButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx <module evaluation>", "EditModalButton");
const ModalButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ModalButton() from the server but ModalButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx <module evaluation>", "ModalButton");
}}),
"[project]/src/shared/ModalButtons.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DeleteWithConfirmationButton": (()=>DeleteWithConfirmationButton),
    "EditModalButton": (()=>EditModalButton),
    "ModalButton": (()=>ModalButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DeleteWithConfirmationButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DeleteWithConfirmationButton() from the server but DeleteWithConfirmationButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx", "DeleteWithConfirmationButton");
const EditModalButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditModalButton() from the server but EditModalButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx", "EditModalButton");
const ModalButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ModalButton() from the server but ModalButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ModalButtons.tsx", "ModalButton");
}}),
"[project]/src/shared/ModalButtons.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ModalButtons.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ModalButtons.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx", "default");
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantMenu$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantMenu$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantMenu$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/public/images/socials/LinkedIn.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/LinkedIn.283b9ee1.svg");}}),
"[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => \"[project]/public/images/socials/LinkedIn.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/socials/LinkedIn.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 70,
    height: 65,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/socials/Instagram.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Instagram.56472555.svg");}}),
"[project]/public/images/socials/Instagram.svg.mjs { IMAGE => \"[project]/public/images/socials/Instagram.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/socials/Instagram.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 65,
    height: 65,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/socials/Facebook.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/Facebook.31ae4124.svg");}}),
"[project]/public/images/socials/Facebook.svg.mjs { IMAGE => \"[project]/public/images/socials/Facebook.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/socials/Facebook.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 65,
    height: 65,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/socials/TikTok.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/TikTok.b27de2e7.svg");}}),
"[project]/public/images/socials/TikTok.svg.mjs { IMAGE => \"[project]/public/images/socials/TikTok.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/socials/TikTok.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 65,
    height: 65,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/socials/X.svg (static in ecmascript)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v("/_next/static/media/X.9f6a6ce7.svg");}}),
"[project]/public/images/socials/X.svg.mjs { IMAGE => \"[project]/public/images/socials/X.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/images/socials/X.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 65,
    height: 65,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};
}}),
"[project]/public/images/socials/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => "[project]/public/images/socials/LinkedIn.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Instagram.svg.mjs { IMAGE => "[project]/public/images/socials/Instagram.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Facebook.svg.mjs { IMAGE => "[project]/public/images/socials/Facebook.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/TikTok.svg.mjs { IMAGE => "[project]/public/images/socials/TikTok.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/X.svg.mjs { IMAGE => "[project]/public/images/socials/X.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
;
;
;
;
;
;
}}),
"[project]/public/images/socials/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => "[project]/public/images/socials/LinkedIn.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Instagram.svg.mjs { IMAGE => "[project]/public/images/socials/Instagram.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Facebook.svg.mjs { IMAGE => "[project]/public/images/socials/Facebook.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/TikTok.svg.mjs { IMAGE => "[project]/public/images/socials/TikTok.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/X.svg.mjs { IMAGE => "[project]/public/images/socials/X.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public/images/socials/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/public/images/socials/Facebook.svg.mjs { IMAGE => \"[project]/public/images/socials/Facebook.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript) <export default as Facebook>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Facebook": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Facebook.svg.mjs { IMAGE => "[project]/public/images/socials/Facebook.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
}}),
"[project]/public/images/socials/Instagram.svg.mjs { IMAGE => \"[project]/public/images/socials/Instagram.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript) <export default as Instagram>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Instagram": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/Instagram.svg.mjs { IMAGE => "[project]/public/images/socials/Instagram.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
}}),
"[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => \"[project]/public/images/socials/LinkedIn.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript) <export default as LinkedIn>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LinkedIn": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => "[project]/public/images/socials/LinkedIn.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
}}),
"[project]/public/images/socials/TikTok.svg.mjs { IMAGE => \"[project]/public/images/socials/TikTok.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript) <export default as TikTok>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TikTok": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/TikTok.svg.mjs { IMAGE => "[project]/public/images/socials/TikTok.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
}}),
"[project]/public/images/socials/X.svg.mjs { IMAGE => \"[project]/public/images/socials/X.svg (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript) <export default as X>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "X": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/images/socials/X.svg.mjs { IMAGE => "[project]/public/images/socials/X.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript)');
}}),
"[project]/src/app/(main)/dashboard/_components/ShareModal.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShareModalContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/public/images/socials/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i('[project]/public/images/socials/Facebook.svg.mjs { IMAGE => "[project]/public/images/socials/Facebook.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript) <export default as Facebook>');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i('[project]/public/images/socials/Instagram.svg.mjs { IMAGE => "[project]/public/images/socials/Instagram.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript) <export default as Instagram>');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__LinkedIn$3e$__ = __turbopack_context__.i('[project]/public/images/socials/LinkedIn.svg.mjs { IMAGE => "[project]/public/images/socials/LinkedIn.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript) <export default as LinkedIn>');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__TikTok$3e$__ = __turbopack_context__.i('[project]/public/images/socials/TikTok.svg.mjs { IMAGE => "[project]/public/images/socials/TikTok.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript) <export default as TikTok>');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i('[project]/public/images/socials/X.svg.mjs { IMAGE => "[project]/public/images/socials/X.svg (static in ecmascript)" } [app-rsc] (structured image object, ecmascript) <export default as X>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Input.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const socialItems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$LinkedIn$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__LinkedIn$3e$__["LinkedIn"],
        title: 'LinkedIn'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$X$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
        title: 'X'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Facebook$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
        title: 'Facebook'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$Instagram$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        title: 'Instagram'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$images$2f$socials$2f$TikTok$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$29$__$3c$export__default__as__TikTok$3e$__["TikTok"],
        title: 'TikTok'
    }
];
function ShareModalContent({ id }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__["useTranslations"])();
    // const sharableLink = process.env.SHARE_LINK || 'https://coachbot.ai/chat';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-2xl flex flex-col gap-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-center text-base text-main",
                children: t('Common.shareModal.subTitle')
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-x-12 rounded-lg bg-graphic/[14%] px-16 py-5",
                children: socialItems.map(({ icon, title }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        prefetch: false,
                        href: "/",
                        className: "flex shrink-0 flex-col items-center justify-center gap-y-5 text-light-gray hover:text-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: icon,
                                alt: title,
                                className: 'h-full w-auto',
                                priority: true,
                                width: 64,
                                height: 64
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            title
                        ]
                    }, `social-${index}`, true, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-x-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Input"], {
                        id: 'share-link-input',
                        readOnly: true,
                        placeholder: "https://www.producthunt.com/posts/typeflowai?utm_campaign=muzli&...",
                        className: "flex-grow",
                        inputClassName: "text-light-gray py-1.5 text-ellipsis"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopyToClipboardButton"], {
                        searchParams: `cbsas=${id}`,
                        tooltipKey: 'General.shareLinkSuccess',
                        titileKey: "Dashboard.assistantCard.configPanel.copyLinkButton",
                        icon: "cbi-copy",
                        variant: 'solid',
                        color: 'light',
                        className: "px-5 py-2 text-background"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/dashboard/_components/ShareModal.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>AssistantCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useLocale.js [app-rsc] (ecmascript) <export default as useLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/useTranslations.js [app-rsc] (ecmascript) <export default as useTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(standalone)/coach/[id]/page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/date.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Chip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Chip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ModalButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantMenu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantMenu.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$ShareModal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/ShareModal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$StatisticCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/StatisticCards.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
const getAssistantInfoCards = ({ price, visibility, accessLevel, feedbacks = [] } = {})=>{
    return [
        {
            icon: 'cbi-user',
            titleKey: 'Dashboard.assistantCard.data.1',
            value: (Math.random() * 100).toFixed(0),
            href: '/users'
        },
        {
            icon: 'cbi-message-text',
            titleKey: 'Dashboard.assistantCard.data.0',
            value: (Math.random() * 1000).toFixed(0),
            href: '/conversations',
            className: 'text-blue bg-blue/[11%] hover:border-blue'
        },
        {
            icon: 'cbi-star',
            titleKey: 'Dashboard.assistantCard.data.2',
            className: 'bg-yellow/[11%] text-yellow hover:border-yellow',
            value: feedbacks?.reduce((total, { rating })=>total + rating, 0).toFixed(1),
            titleValue: feedbacks.length > 0 ? `(${feedbacks.length})` : '',
            titleValueClass: 'text-yellow text-xl leading-6',
            isVisible: visibility === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].public,
            href: '/ratings'
        },
        {
            icon: 'cbi-receipt',
            titleKey: 'Dashboard.assistantCard.data.3',
            className: 'bg-dark-aquamarine/[11%] text-dark-aquamarine hover:border-dark-aquamarine',
            value: `${price?.currency || '€'} ${(price?.amount || 0).toFixed(2)}`,
            isVisible: accessLevel === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccessLevel"].premium,
            href: '?tab=monetization'
        }
    ];
};
const chipVariant = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].published]: 'aquamarine',
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].draft]: 'white',
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].archived]: 'gray'
};
function AssistantCard({ assistant }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useTranslations$3e$__["useTranslations"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$useLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__useLocale$3e$__["useLocale"])();
    const configPath = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].coach}/${assistant.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-w-0 flex-col gap-y-4 rounded-3xl border border-graphic/[6%] bg-white-opacity p-3.5 hover:border-main",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-x-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-start gap-x-2",
                        children: [
                            assistant.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Chip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chip"], {
                                size: "md",
                                variant: chipVariant[assistant.status],
                                text: assistant.status,
                                textClassName: "capitalize"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Chip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chip"], {
                                size: "md",
                                variant: "graphic",
                                text: t('Dashboard.assistantCard.transcriptSharingLabel'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ms-1 font-bold capitalize text-main",
                                    children: assistant.mode
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-1 self-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                className: "cbi-config aspect-square rounded-md border-graphic/[14%] px-3 py-1.5 text-light-gray hover:border-main data-[hover]:text-main",
                                href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].coach}/${assistant.id}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantMenu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                assistant: assistant
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            assistant.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].published && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ModalButton"], {
                                config: {
                                    variant: 'white',
                                    titleKey: 'Common.shareModal.title',
                                    titleIcon: 'cbi-share text-background !text-sm bg-main rounded-md px-0.5',
                                    titleClass: 'text-main justify-center items-cenetr text-center'
                                },
                                className: "cbi-share aspect-square border-graphic/[6%] p-1 px-3 text-light-gray hover:border-main hover:text-main",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$ShareModal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    id: assistant.id
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-start gap-x-4 border-b border-storm-gray pb-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `${configPath}?tab=${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$standalone$292f$coach$2f5b$id$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConfigTab"].marketplace}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Chip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chip"], {
                            size: "md",
                            variant: "transparent",
                            textClassName: "rounded-lg border-yellow text-light-gray hover:bg-yellow/[11%]",
                            text: t('Dashboard.assistantCard.visibilityLabel'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ms-1 font-bold capitalize text-main",
                                children: assistant.meta?.visibility
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    assistant.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].archived && assistant.meta?.visibility === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Visibility"].private && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CopyToClipboardButton"], {
                        icon: "hidden",
                        className: "-ms-2 h-fit rounded-xl bg-yellow/[14%] px-3.5 py-1.5",
                        searchParams: `cbsas=${assistant.id}`,
                        tooltipKey: 'General.shareLinkSuccess',
                        titileKey: "Dashboard.assistantCard.configPanel.copyLinkButton"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Chip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Chip"], {
                        size: "md",
                        variant: "transparent",
                        text: t('Dashboard.assistantCard.accessLevelLabel'),
                        textClassName: "rounded-lg border-dark-aquamarine text-light-gray",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ms-1 font-bold capitalize text-main",
                            children: assistant.meta?.accessLevel
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ms-auto text-light-gray",
                        children: [
                            t('Dashboard.assistantCard.lastUpdatedLabel'),
                            "  ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-main",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFomatedDate"])(assistant.updated_at || assistant.created_at || new Date(), locale, {
                                    dateStyle: 'long'
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-y-1 ps-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "inline-flex items-center gap-x-2 text-[2.125rem] font-medium text-main",
                    children: [
                        assistant.name,
                        assistant.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].archived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            className: "cbi-edit-2 aspect-square border-storm-gray p-1 px-2 text-light-gray hover:border-main hover:text-main",
                            href: `/create-agent?id=${assistant.id}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-x-1",
                children: getAssistantInfoCards(assistant.meta).map((data, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$StatisticCards$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatisticCard"], {
                        basePath: configPath,
                        ...data
                    }, `assistant-card-${index}`, false, {
                        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "statusOptions": (()=>statusOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx <module evaluation>", "default");
const statusOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call statusOptions() from the server but statusOptions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx <module evaluation>", "statusOptions");
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "statusOptions": (()=>statusOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx", "default");
const statusOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call statusOptions() from the server but statusOptions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx", "statusOptions");
}}),
"[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantFilter$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantFilter$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantFilter$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(main)/dashboard/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>DasboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/assistant.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/assistantActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/userActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/CoomingSoon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$skeletons$2f$ListSkeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/skeletons/ListSkeleton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(main)/dashboard/_components/AssistantFilter.tsx [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
async function DasboardPage({ searchParams }) {
    const [t, { status = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$assistant$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AssistantStatus"].published }, assistants, user] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])(),
        searchParams,
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$assistantActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAssistants"])({
            meta: {
                include: {
                    price: true,
                    feedbacks: true
                }
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])()
    ]);
    const targetAssistants = assistants.filter((assistant)=>assistant.status === status);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: 'flex min-h-0 flex-grow flex-col rounded-xl bg-white/[8%]',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: 'flex w-full flex-col gap-y-3 rounded-t-xl border-b border-main bg-white/[10%] px-4 py-3.5',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CoomingSoon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-x-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AsideToggleButton"], {
                                label: t('Dashboard.Header.openSidebarButton'),
                                closedLabel: t('Dashboard.Header.closedSidebarButton'),
                                open: false,
                                iconClassName: "bg-graphic/[8%] border border-background-border/[16%] px-3 py-2 rounded-lg text-light-gray hover:border-main hover:text-main",
                                className: "-me-5 text-nowrap border-none bg-transparent p-0 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-grow justify-end gap-x-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        assistants: assistants,
                                        selected: status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    !!assistants.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewAssistantButton"], {
                                        user: user,
                                        assistants: assistants,
                                        className: "w-max px-3.5 py-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-grow flex-col gap-y-2.5 overflow-y-auto p-3.5",
                children: !!assistants.length ? targetAssistants.length ? targetAssistants.map((assistant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$main$292f$dashboard$2f$_components$2f$AssistantCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        assistant: assistant
                    }, index, false, {
                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$skeletons$2f$ListSkeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListSkeleton"], {
                    className: "gap-y-2.5",
                    liClassName: "bg-white-opacity min-h-[22rem] rounded-3xl",
                    length: 5
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col rounded-xl border border-graphic/[6%] bg-white-opacity p-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewAssistantButton"], {
                        user: user,
                        assistants: assistants,
                        className: "max-h-80 min-h-[25dvh] w-full bg-dark-aquamarine/[11%] text-2xl font-medium hover:bg-background/[70%]",
                        labelKey: "Dashboard.eptyState.createButton",
                        iconClassName: "!text-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/dashboard/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/dashboard/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=_f39d1be0._.js.map