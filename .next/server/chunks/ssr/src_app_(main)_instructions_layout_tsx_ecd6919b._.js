module.exports = {

"[project]/src/app/(main)/instructions/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstructionLauoyt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/sessionActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$layout$2f$TopNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/layout/TopNavigation.tsx [app-rsc] (ecmascript)");
;
;
;
;
const getNavigationOptions = (hidden)=>[
        {
            label: 'Instructions.topNavigationOptions.0',
            href: '/instructions'
        },
        {
            label: 'Instructions.topNavigationOptions.1',
            href: '/instructions/stages'
        },
        {
            label: 'Instructions.topNavigationOptions.3',
            href: '/instructions/tone-of-voice',
            hidden: true
        },
        {
            label: 'Instructions.topNavigationOptions.2',
            href: '/instructions/moderation',
            hidden
        }
    ];
async function InstructionLauoyt({ children }) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])();
    const isAllowedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsAllowedUser"])(userId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex min-h-0 flex-grow flex-col rounded-xl bg-white/[8%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col gap-y-3 rounded-t-xl border-b border-main bg-white/[10%] px-7 py-3.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$layout$2f$TopNavigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    strictEqual: true,
                    navigationOptions: getNavigationOptions(!isAllowedUser),
                    variant: "secondary",
                    className: "max-w-80 lg:max-w-[65%]",
                    optionClassName: "max-w-40 lg:max-w-[unset] lg:min-w-0"
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/instructions/layout.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/instructions/layout.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-grow flex-col gap-y-2.5 overflow-y-auto p-3.5",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/instructions/layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/instructions/layout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_%28main%29_instructions_layout_tsx_ecd6919b._.js.map