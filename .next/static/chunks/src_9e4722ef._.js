(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/AsideContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AsideContextProvider": (()=>AsideContextProvider),
    "useAsideContext": (()=>useAsideContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const AsideContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useAsideContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AsideContext);
    if (context === undefined) {
        throw new Error('useAsideContext must be used within a RootProvider');
    }
    return context;
}
_s(useAsideContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const AsideContextProvider = ({ isOpen, children })=>{
    _s1();
    const [isAsideOpen, setIsAsideOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isOpen ?? true);
    const toggleAside = ()=>{
        setIsAsideOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AsideContext.Provider, {
        value: {
            isAsideOpen,
            toggleAside,
            setIsAsideOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AsideContext.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
};
_s1(AsideContextProvider, "kOcArWuCdkjfHMn7yv9YZQKy+rw=");
_c = AsideContextProvider;
var _c;
__turbopack_context__.k.register(_c, "AsideContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/models/chat.models.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatMode": (()=>ChatMode),
    "MessageRole": (()=>MessageRole),
    "MessageStatus": (()=>MessageStatus)
});
var MessageStatus = /*#__PURE__*/ function(MessageStatus) {
    MessageStatus["generating"] = "generating";
    MessageStatus["complete"] = "complete";
    return MessageStatus;
}({});
var MessageRole = /*#__PURE__*/ function(MessageRole) {
    MessageRole["user"] = "user";
    MessageRole["assistant"] = "assistant";
    return MessageRole;
}({});
var ChatMode = /*#__PURE__*/ function(ChatMode) {
    ChatMode["new"] = "new";
    ChatMode["recurring"] = "recurring";
    return ChatMode;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/chat.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSessionName": (()=>generateSessionName),
    "generateUUID": (()=>generateUUID),
    "getMessage": (()=>getMessage),
    "mapSessionStageAnalysis": (()=>mapSessionStageAnalysis)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/chat.models.ts [app-client] (ecmascript)");
;
const generateSessionName = (locale = 'en-US')=>{
    const now = new Date();
    // Get day abbreviation (Mon, Tue, etc.)
    const day = now.toLocaleDateString(locale, {
        weekday: 'short'
    });
    // Get hours and minutes with padding
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `Session - ${day} [${hours}:${minutes}]`;
};
const generateUUID = ()=>{
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }
    // Fallback implementation
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
const getMessage = (content, role, { stage, mode })=>({
        id: generateUUID(),
        content,
        stage,
        role,
        created_at: new Date().toISOString(),
        recurring: mode === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMode"].recurring
    });
const mapSessionStageAnalysis = (data)=>{
    if (!data?.reasoning || !data?.criteria_missing) {
        return [
            {
                name: 'Details',
                descriptions: []
            }
        ];
    }
    return [
        {
            name: 'Details',
            descriptions: [
                {
                    type: 'text',
                    value: data.reasoning
                },
                {
                    type: 'list',
                    value: data.criteria_missing.map((item)=>`▪︎  ${item}`),
                    title: data.criteria_missing.length ? 'Missing Criterias' : ''
                }
            ]
        }
    ];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:6cbcdc [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"70425448e81a40aaef871c95f3f46f2a736857ca6f":"updateSession"},"src/server/actions/sessionActions.ts",""] */ __turbopack_context__.s({
    "updateSession": (()=>updateSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateSession = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70425448e81a40aaef871c95f3f46f2a736857ca6f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateSession"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2Vzc2lvbkFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgJ3NlcnZlci1vbmx5JztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGgsIHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IGlzRHluYW1pY1NlcnZlckVycm9yIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9jb21wb25lbnRzL2hvb2tzLXNlcnZlci1jb250ZXh0JztcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xuXG5pbXBvcnQgeyBTRVNTSU9OX0NPT0tJRV9OQU1FIH0gZnJvbSAnQC9saWIvY29uc3RhbnRzJztcbmltcG9ydCB7IFNlc3Npb25QYXlsb2FkIH0gZnJvbSAnQC9saWIvbW9kZWxzL2F1dGgubW9kZWxzJztcbmltcG9ydCB7IGRlbGV0ZUNvb2tpZSwgZ2V0Q29va2llIH0gZnJvbSAnQC9saWIvdXRpbHMvY29va2llLnV0aWxzJztcbmltcG9ydCB7IGVuY3J5cHQgfSBmcm9tICdAL2xpYi91dGlscy9lbmNyeXB0aW9uLnV0aWxzJztcblxuY29uc3Qgc2VjcmV0S2V5ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9KV1RfS0VZO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgYWNjZXNzQWxsb3dlZDogYm9vbGVhbiwgYXNzaXN0YW50SWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IGV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBjb25zdCBzZXNzaW9uID0gKGF3YWl0IGVuY3J5cHQoeyB1c2VySWQsIGV4cGlyZXNBdCwgYWNjZXNzQWxsb3dlZCwgYXNzaXN0YW50SWQgfSwgc2VjcmV0S2V5KSkgfHwgJyc7XG4gICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XG5cbiAgICBjb29raWVTdG9yZS5zZXQoU0VTU0lPTl9DT09LSUVfTkFNRSwgc2Vzc2lvbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBleHBpcmVzOiBleHBpcmVzQXQsXG4gICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW3Nlc3Npb25BY3Rpb25zXSBFcnJvciBjcmVhdGluZyBzZXNzaW9uOicsIGVycm9yKTtcblxuICAgIHRocm93IG5ldyBFcnJvcignW3Nlc3Npb25dIFNlc3Npb24gY3JlYXRpb24gZXJyb3InKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5U2Vzc2lvbigpOiBQcm9taXNlPFNlc3Npb25QYXlsb2FkIHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRDb29raWU8U2Vzc2lvblBheWxvYWQ+KFNFU1NJT05fQ09PS0lFX05BTUUsIHRydWUsIHNlY3JldEtleSk7XG5cbiAgICByZXR1cm4gc2Vzc2lvbjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoaXNEeW5hbWljU2VydmVyRXJyb3IoZXJyb3IpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignW3Nlc3Npb25BY3Rpb25zXSBFcnJvciB2ZXJpZnlpbmcgc2Vzc2lvbjonLCBlcnJvcik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvblVzZXIoKTogUHJvbWlzZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgdmVyaWZ5U2Vzc2lvbigpO1xuXG4gICAgcmV0dXJuIHNlc3Npb24/LnVzZXJJZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbc2Vzc2lvbkFjdGlvbnNdIEVycm9yIGdldHRpbmcgc2Vzc2lvbiB1c2VyOicsIGVycm9yKTtcblxuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU2Vzc2lvbihcbiAgbmV3RGF0YT86IFBhcnRpYWw8U2Vzc2lvblBheWxvYWQ+LFxuICB0YWdzPzogc3RyaW5nW10sXG4gIHBhdGhzPzogc3RyaW5nW11cbik6IFByb21pc2U8dm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB2ZXJpZnlTZXNzaW9uKCk7XG5cbiAgICBpZiAoIXBheWxvYWQpIHJldHVybjtcblxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpO1xuICAgIGNvbnN0IHNlc3Npb24gPSAoYXdhaXQgZW5jcnlwdCh7IC4uLnBheWxvYWQsIC4uLm5ld0RhdGEgfSwgc2VjcmV0S2V5KSkgfHwgJyc7XG5cbiAgICBjb29raWVTdG9yZS5zZXQoU0VTU0lPTl9DT09LSUVfTkFNRSwgc2Vzc2lvbiwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHRydWUsXG4gICAgICBzYW1lU2l0ZTogJ2xheCcsXG4gICAgICBwYXRoOiAnLycsXG4gICAgfSk7XG5cbiAgICB0YWdzICYmIHRhZ3MuZm9yRWFjaChyZXZhbGlkYXRlVGFnKTtcbiAgICBwYXRocyAmJiBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiByZXZhbGlkYXRlUGF0aChwYXRoKSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW3Nlc3Npb25BY3Rpb25zXSBFcnJvciB1cGRhdGluZyBzZXNzaW9uOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbigpIHtcbiAgYXdhaXQgZGVsZXRlQ29va2llKFNFU1NJT05fQ09PS0lFX05BTUUpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0E4RHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RootContextProvider": (()=>RootContextProvider),
    "useRootContext": (()=>useRootContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/chat.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$chat$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/chat.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$6cbcdc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:6cbcdc [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const RootContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useRootContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(RootContext);
    if (context === undefined) {
        throw new Error('useRootContext must be used within a RootProvider');
    }
    return context;
}
_s(useRootContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const RootContextProvider = ({ firstStage$, assistants$, user$, children, sessionAssistantId })=>{
    _s1();
    const firstStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(firstStage$);
    const assistants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(assistants$);
    const currentUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(user$);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUser);
    const [selectedAssistant, setSelectedAssistant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(assistants[0]);
    const [selectedChat, setSelectedChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatInfo, setChatInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        stage: firstStage?.name || '',
        style: null,
        mode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMode"].new
    });
    const [sessionDetails, setSessionDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
    });
    const updateSelectedAssistant = async (assistant)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$6cbcdc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateSession"])({
            assistantId: assistant?.id ?? null
        }, [
            'stages',
            'styles',
            'firstStage',
            'moderationRules'
        ], [
            '/instructions'
        ]);
        setSelectedAssistant(assistant ?? null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootContextProvider.useEffect": ()=>{
            setChatInfo({
                "RootContextProvider.useEffect": (prevInfo)=>({
                        ...prevInfo,
                        stage: selectedChat?.currentStage || firstStage?.name || ''
                    })
            }["RootContextProvider.useEffect"]);
            setSessionDetails({
                "RootContextProvider.useEffect": (prev)=>({
                        ...prev,
                        details: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$chat$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapSessionStageAnalysis"])(selectedChat?.stageAnalysis)
                    })
            }["RootContextProvider.useEffect"]);
        }
    }["RootContextProvider.useEffect"], [
        selectedChat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootContextProvider.useEffect": ()=>{
            setChatInfo({
                "RootContextProvider.useEffect": (prevInfo)=>({
                        ...prevInfo,
                        stage: selectedChat?.currentStage || firstStage?.name || ''
                    })
            }["RootContextProvider.useEffect"]);
        }
    }["RootContextProvider.useEffect"], [
        firstStage,
        selectedChat?.currentStage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootContextProvider.useEffect": ()=>setUser(user)
    }["RootContextProvider.useEffect"], [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootContextProvider.useEffect": ()=>{
            if (assistants.length) {
                const selectedAssistant = sessionAssistantId && assistants.find({
                    "RootContextProvider.useEffect": (a)=>a.id === sessionAssistantId
                }["RootContextProvider.useEffect"]);
                selectedAssistant ? setSelectedAssistant(selectedAssistant) : updateSelectedAssistant(assistants[0]);
            }
        }
    }["RootContextProvider.useEffect"], [
        sessionAssistantId,
        assistants
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RootContext.Provider, {
        value: {
            user,
            sessionDetails,
            chatInfo,
            selectedChat,
            assistants,
            selectedAssistant,
            updateSelectedAssistant,
            setSelectedChat,
            setChatInfo
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/RootContextProvider.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
};
_s1(RootContextProvider, "NF30B6zZNK1HmDzzU7hjhecI2pQ=");
_c = RootContextProvider;
var _c;
__turbopack_context__.k.register(_c, "RootContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:1a6f44 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40dd6c761bfb7b8f199153b185c56dac7979a243bb":"deleteAssistant"},"src/server/actions/assistantActions.ts",""] */ __turbopack_context__.s({
    "deleteAssistant": (()=>deleteAssistant)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteAssistant = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40dd6c761bfb7b8f199153b185c56dac7979a243bb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteAssistant"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXNzaXN0YW50QWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IFByaWNlQ29uZmlndXJhdGlvbiB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IHsgQXNzaXN0YW50LCBBc3Npc3RhbnRDb25maWd1cmF0aW9uLCBBc3Npc3RhbnRFZGl0YWJsZSwgQXNzaXN0YW50TWV0YSB9IGZyb20gJ0AvbGliL21vZGVscy9hc3Npc3RhbnQubW9kZWxzJztcbmltcG9ydCB7IFN0YXRlLCBUZW1wbGF0ZSB9IGZyb20gJ0AvbGliL21vZGVscy9jb21tb24ubW9kZWxzJztcbmltcG9ydCB7IGFzc2lzdGFudFByaWNlU2NoZW1hLCBhc3Npc3RhbnRTY2hlbWEsIG1hcFJlbGF0aW9uQ29uZmlnIH0gZnJvbSAnQC9saWIvdXRpbHMvZGIudXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlckFzc2lzdGFudCxcbiAgZGVsZXRlVXNlckFzc2lzdGFudCxcbiAgZHVwbGljYXRlQXNzaXN0YW50LFxuICBnZXRBbGxUZW1wbGF0ZXMsXG4gIGdldFVzZXJBc3NpdGFudHMsXG4gIHVwZGF0ZUFzc2lzdGFudE1ldGEsXG4gIHVwZGF0ZVVzZXJBc3Npc3RhbnQsXG4gIHVwc2VydEFzc2lzdGFudFByaWNlLFxufSBmcm9tICcuLi9kYi9hc3Npc3RhbnRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0RnVsbENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9kYi9jb25maWd1cmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyLCB2ZXJpZnlTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uQWN0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50QXNzaXN0YW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhc3Npc3RhbnRJZCB9ID0gKGF3YWl0IHZlcmlmeVNlc3Npb24oKSkgfHwge307XG5cbiAgICByZXR1cm4gYXNzaXN0YW50SWQgfHwgJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2F1dGhBY3Rpb25zXSBFcnJvciBmZXRjaGluZyBjdXJyZW50IGFzc2lzdGFudGAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKCk6IFByb21pc2U8VGVtcGxhdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBhd2FpdCBnZXRBbGxUZW1wbGF0ZXMoKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMubWFwKG1hcFJlbGF0aW9uQ29uZmlnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIHRlbXBsYXRlczpgLCBlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzc2lzdGFudHMoaW5jbHVkZT86IGFueSk6IFByb21pc2U8QXNzaXN0YW50W10+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGFzc2lzdGFudHMgPSBhd2FpdCBnZXRVc2VyQXNzaXRhbnRzKHVzZXJJZCwgaW5jbHVkZSk7XG5cbiAgICByZXR1cm4gYXNzaXN0YW50cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIGFzc2lzdGFudHMgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QXNzaXN0YW50KFxuICB7IHRlbXBsYXRlLCAuLi5hc3Npc3RhbnREYXRhIH06IEFzc2lzdGFudEVkaXRhYmxlLFxuICBpZD86IHN0cmluZ1xuKTogUHJvbWlzZTxTdGF0ZTxBc3Npc3RhbnQgfCBudWxsPj4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG4gICAgbGV0IGFzc2lzdGFudDtcblxuICAgIGlmICghdXNlcklkKSByZXR1cm4geyB2YWx1ZTogbnVsbCB9O1xuXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGFzc2lzdGFudFNjaGVtYS5zYWZlUGFyc2UoeyB0ZW1wbGF0ZSwgLi4uYXNzaXN0YW50RGF0YSB9KTtcblxuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBlcnJvcnM6IHBhcnNlZERhdGEuZXJyb3IuZXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBwYXRoIH0pID0+ICh7IG5hbWU6IHBhdGguam9pbignLicpLCBtZXNzYWdlIH0pKSB9O1xuICAgIH1cblxuICAgIGlmICghIWlkKSB7XG4gICAgICBhc3Npc3RhbnQgPSBhd2FpdCB1cGRhdGVVc2VyQXNzaXN0YW50KHVzZXJJZCwgaWQsIHtcbiAgICAgICAgbmFtZTogYXNzaXN0YW50RGF0YS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXNzaXN0YW50RGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgbW9kZTogYXNzaXN0YW50RGF0YS5tb2RlLFxuICAgICAgICBzdGF0dXM6IGFzc2lzdGFudERhdGEuc3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lzdGFudCA9IGF3YWl0IGNyZWF0ZVVzZXJBc3Npc3RhbnQodXNlcklkLCBhc3Npc3RhbnREYXRhLCB0ZW1wbGF0ZSBhcyBhbnkpO1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVUYWcoJ2Fzc2lzdGFudHMnKTtcblxuICAgIHJldHVybiB7IHZhbHVlOiBhc3Npc3RhbnQgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yICR7ISFpZCA/ICd1cGRhdGluZycgOiAnY3JlYXRpbmcnfSBhc3Npc3RhbnQgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiB7IHZhbHVlOiBudWxsLCBlcnJvcjogJycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzaXN0YW50Q29uZmlndXJhdGlvbihcbiAgaWQ/OiBzdHJpbmcsXG4gIGZ1bGw6IGJvb2xlYW4gPSB0cnVlXG4pOiBQcm9taXNlPEFzc2lzdGFudENvbmZpZ3VyYXRpb24gfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoYXdhaXQgZ2V0RnVsbENvbmZpZ3VyYXRpb24oYXNzaXN0YW50SWQgfHwgJycsIGZ1bGwpKSBhcyBhbnk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0NsaWVudF0gRXJyb3IgZ2V0dGluZyBhc3Npc3RhbnQgJHthc3Npc3RhbnRJZH0gZGF0YTpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29weUFzc2lzdGFudChhc3Npc3RhbnQ6IEFzc2lzdGFudCk6IFByb21pc2U8QXNzaXN0YW50IHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIWFzc2lzdGFudCB8fCAhdXNlcklkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Fzc2lzdGFudCBub3QgcGFzc2VkIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gYXdhaXQgZHVwbGljYXRlQXNzaXN0YW50KHVzZXJJZCwgYXNzaXN0YW50KTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG5cbiAgICByZXR1cm4gY29weTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBjcmVhdGluZyBjb3B5IG9mIGFzc2lzdGFudCAke2Fzc2lzdGFudC5pZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzc2lzdGFudE1ldGFEYXRhKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8QXNzaXN0YW50TWV0YT4pOiBQcm9taXNlPEFzc2lzdGFudE1ldGEgfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRNZXRhID0gYXdhaXQgdXBkYXRlQXNzaXN0YW50TWV0YShhc3Npc3RhbnRJZCwgZGF0YSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB1cGRhdGVkTWV0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBnZXR0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBkYXRhOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3Npc3RhbnRNZXRhUHJpY2UoXG4gIGFzc2lzdGFudDogQXNzaXN0YW50LFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8U3RhdGU8UHJpY2VDb25maWd1cmF0aW9uIHwgbnVsbD4+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gYXNzaXN0YW50LmlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiB7IGVycm9yOiAnR2VuZXJhbC5lcnJvcnMudW5leHBlY3RlZEVycm9yJywgdmFsdWU6IG51bGwgfTtcbiAgICB9XG4gICAgY29uc3QgcHJpY2UgPSBbLi4uZm9ybURhdGFdLnJlZHVjZSgoZGF0YTogYW55LCBba2V5LCB2YWx1ZV06IGFueSkgPT4gKHsgLi4uZGF0YSwgW2tleV06IHZhbHVlIH0pLCB7fSk7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IGFzc2lzdGFudFByaWNlU2NoZW1hLnBhcnNlKHByaWNlKTtcblxuICAgIGlmICh2YWxpZGF0ZWREYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiB2YWxpZGF0ZWREYXRhLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBhd2FpdCB1cHNlcnRBc3Npc3RhbnRQcmljZShhc3Npc3RhbnQubWV0YT8uaWQgfHwgJycsIHtcbiAgICAgIC4uLnZhbGlkYXRlZERhdGEsXG4gICAgICB0cmlhbERheXM6ICEhdmFsaWRhdGVkRGF0YS50cmlhbERheXMgPyAxNCA6IG51bGwsXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgdmFsdWU6IHVwZGF0ZWRQcmljZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtpbnN0cnVjdGlvbnNDbGllbnRdIEVycm9yIHVwZGF0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBtZXRhIHByaWNlIGRhdGE6YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdHZW5lcmFsLmVycm9ycy51bmV4cGVjdGVkRXJyb3InLCB2YWx1ZTogbnVsbCB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBc3Npc3RhbnQoaWQ6IHN0cmluZykge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuO1xuXG4gICAgYXdhaXQgZGVsZXRlVXNlckFzc2lzdGFudCh1c2VySWQsIGlkKTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2Fzc2lzdGFudENsaWVudF0gRXJyb3IgcmVtb3ZpbmcgdXNlciAke3VzZXJJZH0gYXNzaXN0YW50ICR7aWR9OmAsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrU0FnTXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
const baseStyles = 'inline-flex border border-transparent items-center justify-center gap-x-2 rounded-lg py-2 px-5 font-medium text-base disabled:opacty-30 disabled:pointer-events-none';
const variantStyles = {
    solid: {
        primary: 'bg-dark-aquamarine text-white hover:bg-transparent hover:text-dark-aquamarine hover:border-dark-aquamarine',
        gray: 'bg-white/[8%] border-background-border/[16%] text-light-gray hover:border-main hover:text-main',
        aquamarine: 'bg-white/[8%] border-background-border/[18%] text-dark-aquamarine hover:bg-dark-aquamarine hover:text-main',
        dark: 'bg-background text-main hover:bg-main hover:text-background ',
        light: 'bg-main text-background hover:bg-storm-gray hover:border-main hover:text-main'
    },
    outline: {
        darkGray: 'border-dark-gray text-light-gray hover:text-main hover:border-storm-gray',
        red: 'border-salmon text-salmon hover:text-main hover:border-main'
    },
    dashed: {
        gray: 'border border-dashed border-storm-gray text-light-gray hover:border-main hover:text-main'
    }
};
function Button({ className, variant, color, ...props }) {
    const variantConfig = variant ? variantStyles[variant] : undefined;
    className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(baseStyles, variantConfig && color && variantConfig[color], className);
    return typeof props.href === 'undefined' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('disabled:cursor-not-allowed disabled:opacity-75', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/Button.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefetch: false,
        className: className,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/Button.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/CollapsiblePanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CollapsiblePanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/disclosure/disclosure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CollapsiblePanel({ title, subTitle, subTitleClass, toggleText, toggleClass, iconClass, children, className, titleClass, contentClassName, togglerRef, additionalToggler }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 min-w-0 shrink flex-col",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Disclosure"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisclosureButton"], {
                    ref: togglerRef,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('group z-10 flex min-w-0 items-center justify-between gap-x-1 rounded-xl border border-storm-gray px-3 py-2.5 text-base font-medium text-light-gray', 'data-[open]:rounded-b-none data-[open]:border-b-0 data-[open]:border-light-gray data-[open]:bg-background', className),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex min-w-0 gap-x-2'),
                            children: [
                                iconClass && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(iconClass)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex min-w-0 flex-col gap-y-1 text-start', !title && 'justify-center'),
                                    children: [
                                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('m-0 p-0', titleClass),
                                            children: [
                                                " ",
                                                title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                            lineNumber: 49,
                                            columnNumber: 25
                                        }, this),
                                        subTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('', subTitleClass),
                                            children: subTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                            lineNumber: 50,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-x-4",
                            children: [
                                additionalToggler,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-x-2",
                                    children: [
                                        toggleText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden group-data-[open]:block",
                                                    children: [
                                                        " ",
                                                        t('General.closeButton')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block group-data-[open]:hidden",
                                                    children: t('General.openButton')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-arrow-down rotate-0 group-data-[open]:rotate-180', toggleClass)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$disclosure$2f$disclosure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DisclosurePanel"], {
                    transition: true,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('origin-top border border-light-gray bg-background px-5 py-10 text-main transition duration-200 ease-in-out', 'data-[closed]:-translate-y-0 data-[closed]:opacity-0', 'data-[open]:rounded-b-xl data-[open]:border-t-0 data-[open]:pt-7', contentClassName),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/shared/CollapsiblePanel.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/CollapsiblePanel.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/CollapsiblePanel.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(CollapsiblePanel, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = CollapsiblePanel;
var _c;
__turbopack_context__.k.register(_c, "CollapsiblePanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/models/analytic.models.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeapTrackEvent": (()=>HeapTrackEvent)
});
var HeapTrackEvent = /*#__PURE__*/ function(HeapTrackEvent) {
    HeapTrackEvent["create_new_chat"] = "create_new_chat";
    HeapTrackEvent["save_main_instruction"] = "save_main_instruction";
    HeapTrackEvent["save_main_onboarding"] = "save_main_onboarding";
    HeapTrackEvent["save_stage"] = "save_stage";
    HeapTrackEvent["save_moderation"] = "save_moderation";
    HeapTrackEvent["save_style"] = "save_style";
    return HeapTrackEvent;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/file.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateAssistantFile": (()=>generateAssistantFile),
    "generateChatFile": (()=>generateChatFile),
    "handleFileDownload": (()=>handleFileDownload)
});
const handleFileDownload = (fileName, fileUrl, downloadLink)=>{
    if (!fileUrl || !downloadLink) return;
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.click();
};
const generateAssistantFile = ({ name }, config)=>{
    const { stages, instructions, onboarding } = config || {};
    const adjustMarkdownHeaders = (content)=>content?.replace(/#{1,5} /gm, (match)=>`##${match}`);
    const stagesInstructions = stages?.map(({ name, instructions, analyzer })=>`### ${name}\n\n #### Instructions:\n\n${adjustMarkdownHeaders(instructions)}\n\n #### Analyzer:\n\n${adjustMarkdownHeaders(analyzer)}\n\n`);
    const onboardingInstructions = onboarding ? `\n\n ## Onboarding Instructions:\n\n ${adjustMarkdownHeaders(onboarding)}` : '';
    const content = `# ${name}\n\n ## Main Instructions:\n\n ${adjustMarkdownHeaders(instructions)}${onboardingInstructions}\n\n ## Stages:\n\n ${stagesInstructions?.join('\n\n')}`;
    const blob = new Blob([
        content
    ], {
        type: 'text/markdown'
    });
    return URL.createObjectURL(blob);
};
const generateChatFile = (messages)=>{
    const content = messages.reduce((text, { role, content })=>text + `**[${role}]:** ${content}\n\n`, '# Chat Transcription:\n\n');
    const blob = new Blob([
        content
    ], {
        type: 'text/markdown'
    });
    return URL.createObjectURL(blob);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:d761a1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"6046d8b5cb687c98387129f0a27c6dc38e3cdcbd6a":"getAssistantConfiguration"},"src/server/actions/assistantActions.ts",""] */ __turbopack_context__.s({
    "getAssistantConfiguration": (()=>getAssistantConfiguration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAssistantConfiguration = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6046d8b5cb687c98387129f0a27c6dc38e3cdcbd6a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAssistantConfiguration"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXNzaXN0YW50QWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IFByaWNlQ29uZmlndXJhdGlvbiB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuaW1wb3J0IHsgQXNzaXN0YW50LCBBc3Npc3RhbnRDb25maWd1cmF0aW9uLCBBc3Npc3RhbnRFZGl0YWJsZSwgQXNzaXN0YW50TWV0YSB9IGZyb20gJ0AvbGliL21vZGVscy9hc3Npc3RhbnQubW9kZWxzJztcbmltcG9ydCB7IFN0YXRlLCBUZW1wbGF0ZSB9IGZyb20gJ0AvbGliL21vZGVscy9jb21tb24ubW9kZWxzJztcbmltcG9ydCB7IGFzc2lzdGFudFByaWNlU2NoZW1hLCBhc3Npc3RhbnRTY2hlbWEsIG1hcFJlbGF0aW9uQ29uZmlnIH0gZnJvbSAnQC9saWIvdXRpbHMvZGIudXRpbHMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlckFzc2lzdGFudCxcbiAgZGVsZXRlVXNlckFzc2lzdGFudCxcbiAgZHVwbGljYXRlQXNzaXN0YW50LFxuICBnZXRBbGxUZW1wbGF0ZXMsXG4gIGdldFVzZXJBc3NpdGFudHMsXG4gIHVwZGF0ZUFzc2lzdGFudE1ldGEsXG4gIHVwZGF0ZVVzZXJBc3Npc3RhbnQsXG4gIHVwc2VydEFzc2lzdGFudFByaWNlLFxufSBmcm9tICcuLi9kYi9hc3Npc3RhbnRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0RnVsbENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9kYi9jb25maWd1cmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IGdldFNlc3Npb25Vc2VyLCB2ZXJpZnlTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uQWN0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50QXNzaXN0YW50KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBhc3Npc3RhbnRJZCB9ID0gKGF3YWl0IHZlcmlmeVNlc3Npb24oKSkgfHwge307XG5cbiAgICByZXR1cm4gYXNzaXN0YW50SWQgfHwgJyc7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2F1dGhBY3Rpb25zXSBFcnJvciBmZXRjaGluZyBjdXJyZW50IGFzc2lzdGFudGAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKCk6IFByb21pc2U8VGVtcGxhdGVbXT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRlbXBsYXRlczogYW55W10gPSBhd2FpdCBnZXRBbGxUZW1wbGF0ZXMoKTtcblxuICAgIHJldHVybiB0ZW1wbGF0ZXMubWFwKG1hcFJlbGF0aW9uQ29uZmlnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIHRlbXBsYXRlczpgLCBlKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFzc2lzdGFudHMoaW5jbHVkZT86IGFueSk6IFByb21pc2U8QXNzaXN0YW50W10+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IGFzc2lzdGFudHMgPSBhd2FpdCBnZXRVc2VyQXNzaXRhbnRzKHVzZXJJZCwgaW5jbHVkZSk7XG5cbiAgICByZXR1cm4gYXNzaXN0YW50cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yIGZldGNoaW5nIGFzc2lzdGFudHMgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBzZXJ0QXNzaXN0YW50KFxuICB7IHRlbXBsYXRlLCAuLi5hc3Npc3RhbnREYXRhIH06IEFzc2lzdGFudEVkaXRhYmxlLFxuICBpZD86IHN0cmluZ1xuKTogUHJvbWlzZTxTdGF0ZTxBc3Npc3RhbnQgfCBudWxsPj4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG4gICAgbGV0IGFzc2lzdGFudDtcblxuICAgIGlmICghdXNlcklkKSByZXR1cm4geyB2YWx1ZTogbnVsbCB9O1xuXG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGFzc2lzdGFudFNjaGVtYS5zYWZlUGFyc2UoeyB0ZW1wbGF0ZSwgLi4uYXNzaXN0YW50RGF0YSB9KTtcblxuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBlcnJvcnM6IHBhcnNlZERhdGEuZXJyb3IuZXJyb3JzLm1hcCgoeyBtZXNzYWdlLCBwYXRoIH0pID0+ICh7IG5hbWU6IHBhdGguam9pbignLicpLCBtZXNzYWdlIH0pKSB9O1xuICAgIH1cblxuICAgIGlmICghIWlkKSB7XG4gICAgICBhc3Npc3RhbnQgPSBhd2FpdCB1cGRhdGVVc2VyQXNzaXN0YW50KHVzZXJJZCwgaWQsIHtcbiAgICAgICAgbmFtZTogYXNzaXN0YW50RGF0YS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogYXNzaXN0YW50RGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgbW9kZTogYXNzaXN0YW50RGF0YS5tb2RlLFxuICAgICAgICBzdGF0dXM6IGFzc2lzdGFudERhdGEuc3RhdHVzLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lzdGFudCA9IGF3YWl0IGNyZWF0ZVVzZXJBc3Npc3RhbnQodXNlcklkLCBhc3Npc3RhbnREYXRhLCB0ZW1wbGF0ZSBhcyBhbnkpO1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVUYWcoJ2Fzc2lzdGFudHMnKTtcblxuICAgIHJldHVybiB7IHZhbHVlOiBhc3Npc3RhbnQgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoYFthc3Npc3RhbnRDbGllbnRdIEVycm9yICR7ISFpZCA/ICd1cGRhdGluZycgOiAnY3JlYXRpbmcnfSBhc3Npc3RhbnQgZm9yIHVzZXIgJHt1c2VySWR9OmAsIGUpO1xuICAgIHJldHVybiB7IHZhbHVlOiBudWxsLCBlcnJvcjogJycgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXNzaXN0YW50Q29uZmlndXJhdGlvbihcbiAgaWQ/OiBzdHJpbmcsXG4gIGZ1bGw6IGJvb2xlYW4gPSB0cnVlXG4pOiBQcm9taXNlPEFzc2lzdGFudENvbmZpZ3VyYXRpb24gfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoYXdhaXQgZ2V0RnVsbENvbmZpZ3VyYXRpb24oYXNzaXN0YW50SWQgfHwgJycsIGZ1bGwpKSBhcyBhbnk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0NsaWVudF0gRXJyb3IgZ2V0dGluZyBhc3Npc3RhbnQgJHthc3Npc3RhbnRJZH0gZGF0YTpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ29weUFzc2lzdGFudChhc3Npc3RhbnQ6IEFzc2lzdGFudCk6IFByb21pc2U8QXNzaXN0YW50IHwgbnVsbD4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIWFzc2lzdGFudCB8fCAhdXNlcklkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Fzc2lzdGFudCBub3QgcGFzc2VkIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjb3B5ID0gYXdhaXQgZHVwbGljYXRlQXNzaXN0YW50KHVzZXJJZCwgYXNzaXN0YW50KTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG5cbiAgICByZXR1cm4gY29weTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBjcmVhdGluZyBjb3B5IG9mIGFzc2lzdGFudCAke2Fzc2lzdGFudC5pZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFzc2lzdGFudE1ldGFEYXRhKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8QXNzaXN0YW50TWV0YT4pOiBQcm9taXNlPEFzc2lzdGFudE1ldGEgfCBudWxsPiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRNZXRhID0gYXdhaXQgdXBkYXRlQXNzaXN0YW50TWV0YShhc3Npc3RhbnRJZCwgZGF0YSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB1cGRhdGVkTWV0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciBnZXR0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBkYXRhOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBc3Npc3RhbnRNZXRhUHJpY2UoXG4gIGFzc2lzdGFudDogQXNzaXN0YW50LFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8U3RhdGU8UHJpY2VDb25maWd1cmF0aW9uIHwgbnVsbD4+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gYXNzaXN0YW50LmlkIHx8IChhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCkpO1xuXG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiB7IGVycm9yOiAnR2VuZXJhbC5lcnJvcnMudW5leHBlY3RlZEVycm9yJywgdmFsdWU6IG51bGwgfTtcbiAgICB9XG4gICAgY29uc3QgcHJpY2UgPSBbLi4uZm9ybURhdGFdLnJlZHVjZSgoZGF0YTogYW55LCBba2V5LCB2YWx1ZV06IGFueSkgPT4gKHsgLi4uZGF0YSwgW2tleV06IHZhbHVlIH0pLCB7fSk7XG4gICAgY29uc3QgdmFsaWRhdGVkRGF0YSA9IGFzc2lzdGFudFByaWNlU2NoZW1hLnBhcnNlKHByaWNlKTtcblxuICAgIGlmICh2YWxpZGF0ZWREYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiB2YWxpZGF0ZWREYXRhLm1lc3NhZ2UgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBhd2FpdCB1cHNlcnRBc3Npc3RhbnRQcmljZShhc3Npc3RhbnQubWV0YT8uaWQgfHwgJycsIHtcbiAgICAgIC4uLnZhbGlkYXRlZERhdGEsXG4gICAgICB0cmlhbERheXM6ICEhdmFsaWRhdGVkRGF0YS50cmlhbERheXMgPyAxNCA6IG51bGwsXG4gICAgfSBhcyBhbnkpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZygnYXNzaXN0YW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgdmFsdWU6IHVwZGF0ZWRQcmljZSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtpbnN0cnVjdGlvbnNDbGllbnRdIEVycm9yIHVwZGF0aW5nIGFzc2lzdGFudCAke2Fzc2lzdGFudElkfSBtZXRhIHByaWNlIGRhdGE6YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdHZW5lcmFsLmVycm9ycy51bmV4cGVjdGVkRXJyb3InLCB2YWx1ZTogbnVsbCB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBc3Npc3RhbnQoaWQ6IHN0cmluZykge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIXVzZXJJZCkgcmV0dXJuO1xuXG4gICAgYXdhaXQgZGVsZXRlVXNlckFzc2lzdGFudCh1c2VySWQsIGlkKTtcbiAgICByZXZhbGlkYXRlVGFnKCdhc3Npc3RhbnRzJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2Fzc2lzdGFudENsaWVudF0gRXJyb3IgcmVtb3ZpbmcgdXNlciAke3VzZXJJZH0gYXNzaXN0YW50ICR7aWR9OmAsIGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5VEFpR3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:fa3a24 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4070d78f346fa39de08469d427f476fea48c088df6":"getChat"},"src/server/actions/chatActions.ts",""] */ __turbopack_context__.s({
    "getChat": (()=>getChat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getChat = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4070d78f346fa39de08469d427f476fea48c088df6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getChat"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2hhdEFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlVGFnIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmltcG9ydCB7IEFuYWx5emVTdGFnZURhdGEgfSBmcm9tICdAL2xpYi9tb2RlbHMvYXBpLm1vZGVscyc7XG5pbXBvcnQgeyBDaGF0LCBDaGF0SW5mbywgTWVzc2FnZSB9IGZyb20gJ0AvbGliL21vZGVscy9jaGF0Lm1vZGVscyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVNlc3Npb25OYW1lIH0gZnJvbSAnQC9saWIvdXRpbHMvY2hhdC51dGlscyc7XG5pbXBvcnQge1xuICBjcmVhdGVDaGF0LFxuICBnZXRVc2VyQ2hhdCxcbiAgZ2V0VXNlckNoYXRzLFxuICByZW1vdmVDaGF0LFxuICB1cGRhdGVMYXN0TWVzc2FnZUluQ2hhdCxcbiAgdXBkYXRlVXNlckNoYXQsXG59IGZyb20gJy4uL2RiL2NoYXRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0Rmlyc3RTdGFnZSB9IGZyb20gJy4vaW5zdHJ1Y3Rpb25zQWN0aW9ucyc7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXNBY3Rpb24nO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIsIHZlcmlmeVNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb25BY3Rpb25zJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN0YWdlQW5hbHlzaXMoY2hhdElkOiBzdHJpbmcsIHN0YWdlQW5hbHlzaXM6IEFuYWx5emVTdGFnZURhdGEgfCBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgaWYgKCFzdGFnZUFuYWx5c2lzKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHRyYW5zaXRpb25fcmVxdWlyZWQsIGN1cnJlbnRfc3RhZ2UsIG5leHRfc3RhZ2UgfSA9IHN0YWdlQW5hbHlzaXM7XG5cbiAgICBjb25zdCBbY2hhdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB1cGRhdGVVc2VyQ2hhdChjaGF0SWQsIHtcbiAgICAgICAgc3RhZ2VBbmFseXNpcyxcbiAgICAgICAgY3VycmVudFN0YWdlOiB0cmFuc2l0aW9uX3JlcXVpcmVkID8gbmV4dF9zdGFnZSA6IGN1cnJlbnRfc3RhZ2UsXG4gICAgICB9KSxcbiAgICAgIHVwZGF0ZUxhc3RNZXNzYWdlSW5DaGF0KGNoYXRJZCwgeyBzdGFnZUFuYWx5c2lzOiBKU09OLnN0cmluZ2lmeShzdGFnZUFuYWx5c2lzKSB9KSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGV2ZW50RW1pdHRlciA9IChhd2FpdCBpbXBvcnQoJ0AvbGliL2V2ZW50RW1pdHRlcicpKS5kZWZhdWx0O1xuICAgIGV2ZW50RW1pdHRlci5lbWl0KGBtZXNzYWdlOiR7Y2hhdC51c2VySWR9YCwge1xuICAgICAgdXNlcl9pZDogY2hhdC51c2VySWQsXG4gICAgICBldmVudDogJ2NoYXQtdXBkYXRlJyxcbiAgICAgIGRhdGE6IHsgY2hhdElkOiBjaGF0LmlkLCB0eXBlOiAnc3RhZ2UtYW5hbHlzaXMnIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2NoYXRBY3Rpb25zXSBlcnJvciBkdXJpbmcgc2F2aW5nIGNoYXQgJHtjaGF0SWR9IHN0YWdlIGFuYWx5c2lzYCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGF0cygpOiBQcm9taXNlPGFueT4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICByZXR1cm4gdXNlcklkID8gYXdhaXQgZ2V0VXNlckNoYXRzKHVzZXJJZCkgOiBbXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBjaGF0czpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXQoaWQ6IHN0cmluZyk6IFByb21pc2U8Q2hhdCB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hhdCA9IGF3YWl0IGdldFVzZXJDaGF0KGlkLCB1c2VySWQpO1xuXG4gICAgcmV0dXJuIGNoYXQgYXMgYW55O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtjaGF0c0FjdGlvbnNdIEVycm9yIGZldGNoaW5nIHVzZXIgJHt1c2VySWR9IGNoYXRzOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGF0KGNoYXRJZDogc3RyaW5nKSB7XG4gIGxldCB1c2VyX2lkO1xuICB0cnkge1xuICAgIHVzZXJfaWQgPSAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSkgfHwgJyc7XG4gICAgYXdhaXQgcmVtb3ZlQ2hhdCh1c2VyX2lkLCBjaGF0SWQpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZyhgY2hhdHNgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBkdXJpbmcgZGVsZXRpbmcgdXNlcnIgJHt1c2VyX2lkfSBjaGF0ICR7Y2hhdElkfTogYCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdDaGF0KHVzZXJJZDogc3RyaW5nLCBhc3Npc3RhbnRJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaXJzdFN0YWdlID0gYXdhaXQgZ2V0Rmlyc3RTdGFnZSgpO1xuICAgIGNvbnN0IG5ld0NoYXQgPSBhd2FpdCBjcmVhdGVDaGF0KHVzZXJJZCwge1xuICAgICAgY3VycmVudFN0YWdlOiBmaXJzdFN0YWdlPy5uYW1lLFxuICAgICAgbmFtZTogZ2VuZXJhdGVTZXNzaW9uTmFtZSgpLFxuICAgICAgYXNzaXN0YW50SWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Q2hhdC5pZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBjcmVhdGluZyBuZXcgY2hhdCBmb3IgdXNlciAke3VzZXJJZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGF0KFxuICBjdXJyZW50Q2hhdElkOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gIGNoYXRJbmZvOiBDaGF0SW5mb1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IHVzZXJfaWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIGFzc2lzdGFudElkIH0gPSAoYXdhaXQgdmVyaWZ5U2Vzc2lvbigpKSB8fCB7fTtcbiAgICB1c2VyX2lkID0gdXNlcklkO1xuXG4gICAgaWYgKCF1c2VySWQgfHwgIWFzc2lzdGFudElkKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBbbmV3TWVzc2FnZSwgLi4ucHJldk1lc3NhZ2VzXSA9IG1lc3NhZ2VzO1xuICAgIGNvbnN0IGNoYXRfaWQgPSBjdXJyZW50Q2hhdElkIHx8IChhd2FpdCBjcmVhdGVOZXdDaGF0KHVzZXJJZCwgYXNzaXN0YW50SWQpKTtcbiAgICBhd2FpdCBzZW5kTWVzc2FnZSh7IHVzZXJJZCwgYXNzaXN0YW50SWQsIG5ld01lc3NhZ2UsIHByZXZNZXNzYWdlcywgY2hhdF9pZCwgY2hhdEluZm8gfSk7XG5cbiAgICAhY3VycmVudENoYXRJZCAmJiByZXZhbGlkYXRlVGFnKGBjaGF0c2ApO1xuICAgIC8vIFRPRE86IGluc3RlYWQgcmV2YWxpZGF0ZSB0cnkgdG8gcmV0dXJuIGFzc2lzdGFudCBtZXNzYWdlIGRpcmVjdGx5XG4gICAgcmV0dXJuIGNoYXRfaWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2NoYXRzQWN0aW9uc10gRXJyb3IgZmV0Y2hpbmcgdXNlciAke3VzZXJfaWR9IGNoYXRzOmAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrU0F5RHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Tooltip.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tooltip)
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
function Tooltip({ initialShow, iconClass, tooltipClassName, tooltipLabelClassName, tooltipLabel, className, children }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialShow ?? false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex flex-col items-center justify-center', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                tabIndex: 0,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cursor-pointer text-lg text-dark-aquamarine', iconClass),
                onClick: ()=>setShowTooltip(true),
                onMouseEnter: ()=>setShowTooltip(true),
                onMouseLeave: ()=>setShowTooltip(initialShow ?? false)
            }, void 0, false, {
                fileName: "[project]/src/shared/Tooltip.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('absolute bottom-full left-1/3 z-20 flex flex-grow -translate-x-1/2 items-center justify-end', showTooltip ? 'h-auto w-96' : 'h-0 w-0', tooltipClassName),
                children: showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('text-nowrap rounded-xl bg-main px-2.5 py-1.5 text-xs text-background', tooltipLabelClassName),
                    children: [
                        tooltipLabel && t(tooltipLabel),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/Tooltip.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/Tooltip.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/Tooltip.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Tooltip, "zJY2cC6ZzzeogOyDhgO2eb6dufs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = Tooltip;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/FunctionalButtons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountToggleButton": (()=>AccountToggleButton),
    "AsideToggleButton": (()=>AsideToggleButton),
    "CopyToClipboardButton": (()=>CopyToClipboardButton),
    "ExportAssistantButton": (()=>ExportAssistantButton),
    "ExportChatButton": (()=>ExportChatButton),
    "NewAssistantButton": (()=>NewAssistantButton),
    "NewChatButton": (()=>NewChatButton),
    "default": (()=>RedirectBack)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AsideContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$analytic$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/analytic.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/HeapAnalytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/date.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$file$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/file.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$d761a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:d761a1 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$fa3a24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:fa3a24 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
function AsideToggleButton({ className, label, closedLabel, open, iconClassName, id }) {
    _s();
    const { toggleAside, isAsideOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsideContext"])();
    if (open && isAsideOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        id: id,
        variant: "solid",
        color: "gray",
        onClick: toggleAside,
        className: `z-10 w-max px-3.5 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: `${!isAsideOpen ? 'cbi-arrow-right' : 'cbi-arrow-left'} text-lg ${iconClassName}`
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            closedLabel && !isAsideOpen ? closedLabel : label
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/FunctionalButtons.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(AsideToggleButton, "il3wOB1/czt1ep6SkF2RfaoiFzQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsideContext"]
    ];
});
_c = AsideToggleButton;
function NewChatButton() {
    _s1();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [showNotification, setShowNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleShowNotification = async ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heapAnalytics"].trackEvent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$analytic$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeapTrackEvent"].create_new_chat);
        setShowNotification(true);
        setTimeout(()=>setShowNotification(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-y-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "cbi-tick-circle-fill !text-6xl text-main"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/FunctionalButtons.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex flex-col gap-y-1 text-center text-main",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base",
                                children: t('Chat.newChatTitle')
                            }, void 0, false, {
                                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: t('Chat.newChatSubtitle')
                            }, void 0, false, {
                                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/FunctionalButtons.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                href: "/",
                variant: "solid",
                color: "aquamarine",
                className: "inline-flex items-center justify-center px-6 py-3 text-lg",
                onClick: handleShowNotification,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "cbi-edit"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/FunctionalButtons.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    t('Chat.newChatButton')
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(NewChatButton, "uoLv9bWiTSMpfVncb3ZewN3i34Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c1 = NewChatButton;
function NewAssistantButton({ user, assistants, className, labelKey, iconClassName, onClick }) {
    _s2();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const isCreationAllowed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewAssistantButton.useMemo[isCreationAllowed]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAssistantCreationAllowed"])(user, assistants)
    }["NewAssistantButton.useMemo[isCreationAllowed]"], [
        user?.subscription,
        assistants.length
    ]);
    return isCreationAllowed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            id: "assistant-manage",
            variant: "solid",
            color: "primary",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('w-full text-nowrap rounded-xl p-3 text-base font-semibold text-main hover:z-20 hover:bg-background', className),
            href: `/create-agent`,
            onClick: ()=>onClick?.(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: `cbi-add-square ${iconClassName}`
                }, void 0, false, {
                    fileName: "[project]/src/shared/FunctionalButtons.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                t(labelKey || 'Assistants.createButton')
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/FunctionalButtons.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false) : null;
}
_s2(NewAssistantButton, "y7aYKzYXujVk3c+Tt7snog+LutU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c2 = NewAssistantButton;
function CopyToClipboardButton({ searchParams, titileKey, tooltipKey, icon, variant, color, className, disabled }) {
    _s3();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sharableLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SHARE_LINK || 'https://coachbot.ai/chat';
    const copyToClipboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CopyToClipboardButton.useCallback[copyToClipboard]": async ()=>{
            try {
                await navigator.clipboard.writeText(`${sharableLink}?${searchParams}`);
                setShowTooltip(true);
                setTimeout({
                    "CopyToClipboardButton.useCallback[copyToClipboard]": ()=>{
                        setShowTooltip(false);
                    }
                }["CopyToClipboardButton.useCallback[copyToClipboard]"], 1500);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }
    }["CopyToClipboardButton.useCallback[copyToClipboard]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                ...variant && {
                    variant
                },
                ...color && {
                    color
                },
                disabled: disabled,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(className || 'm-0 items-center text-nowrap p-0 text-sm text-storm-gray hover:text-main'),
                onClick: copyToClipboard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `text-lg leading-3 ${icon ?? 'cbi-export'}`
                    }, void 0, false, {
                        fileName: "[project]/src/shared/FunctionalButtons.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    t(titileKey)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                tooltipClassName: "-left-full w-fit -translate-y-2/3 -translate-x-[85%]",
                tooltipLabelClassName: "py-0.5",
                initialShow: true,
                iconClass: '',
                tooltipLabel: tooltipKey
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/FunctionalButtons.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s3(CopyToClipboardButton, "nVUxg3u4PZXnoYl/T5m056N1FHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c3 = CopyToClipboardButton;
function ExportAssistantButton({ assistant, callback, className, iconClassName }) {
    _s4();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const downloadLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleExport = async ()=>{
        try {
            setLoading(true);
            const assistantConfig = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$d761a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAssistantConfiguration"])(assistant.id);
            const fileUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$file$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateAssistantFile"])(assistant, assistantConfig);
            const fileName = `${assistant.name.split(' ').join('_')}-instructions.md`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$file$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleFileDownload"])(fileName, fileUrl, downloadLinkRef.current);
        } catch (error) {
            console.error('Error exporting assistant file:', error);
        } finally{
            setLoading(false);
            callback?.();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('m-0 items-center text-nowrap rounded-none border-0 p-0 text-sm text-storm-gray hover:text-main', loading && 'pointer-events-none animate-pulse', className),
                onClick: handleExport,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `cbi-document-download text-xl ${iconClassName}`
                    }, void 0, false, {
                        fileName: "[project]/src/shared/FunctionalButtons.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    t('Assistants.downloadButton')
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "hidden",
                ref: downloadLinkRef,
                href: ""
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(ExportAssistantButton, "h4vEwH6Np6qC9PlclKPPUbh2WyU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c4 = ExportAssistantButton;
function ExportChatButton({ chat, className }) {
    _s5();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const downloadLinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFomatedDate"])(chat.created_at, locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    const handleExport = async ()=>{
        try {
            setLoading(true);
            const fullChat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$fa3a24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getChat"])(chat.id);
            if (!fullChat?.Messages?.length) return;
            const fileUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$file$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateChatFile"])(fullChat.Messages.reverse() || []);
            const fileName = `chat-transcription-${date.replace(',', '').replace(/\s+/g, '-')}.md`;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$file$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleFileDownload"])(fileName, fileUrl, downloadLinkRef.current);
        } catch (error) {
            console.error('Error exporting chat file:', error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-import m-0 items-center text-nowrap rounded-none border-0 p-0 text-xl text-storm-gray hover:text-main', loading && 'pointer-events-none animate-pulse', className),
                onClick: handleExport
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "hidden",
                ref: downloadLinkRef,
                href: ""
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s5(ExportChatButton, "h8OstAj/XksRHaEcBaFEWcufUVg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c5 = ExportChatButton;
function RedirectBack() {
    _s6();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RedirectBack.useEffect": ()=>{
            router.back();
        }
    }["RedirectBack.useEffect"], [
        router
    ]);
    return null;
}
_s6(RedirectBack, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c6 = RedirectBack;
function AccountToggleButton({ className }) {
    _s7();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const isAccountPath = pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].account;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        color: "darkGray",
        href: isAccountPath ? '/' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].account,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "cbi-close-circle text-lg"
            }, void 0, false, {
                fileName: "[project]/src/shared/FunctionalButtons.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            t(isAccountPath ? 'General.Header.accountButton' : 'General.Header.backToAccountButton')
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/FunctionalButtons.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s7(AccountToggleButton, "ubWVzN2Z0wcQh3unbvhqt4fw9Wc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c7 = AccountToggleButton;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "AsideToggleButton");
__turbopack_context__.k.register(_c1, "NewChatButton");
__turbopack_context__.k.register(_c2, "NewAssistantButton");
__turbopack_context__.k.register(_c3, "CopyToClipboardButton");
__turbopack_context__.k.register(_c4, "ExportAssistantButton");
__turbopack_context__.k.register(_c5, "ExportChatButton");
__turbopack_context__.k.register(_c6, "RedirectBack");
__turbopack_context__.k.register(_c7, "AccountToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Logo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
const Logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function Logo({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        prefetch: false,
        className: `relative z-10 flex h-6 items-center sm:h-7 xl:h-8 ${className}`,
        href: "/",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: '/images/StudioAiCoachLogo.svg',
            alt: "CoachBot logo",
            className: 'h-full w-auto',
            priority: true,
            width: 100,
            height: 20
        }, void 0, false, {
            fileName: "[project]/src/shared/Logo.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/Logo.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
});
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "Logo$memo");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Loaders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FullScreenLoader": (()=>FullScreenLoader),
    "Spinner": (()=>Spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Logo.tsx [app-client] (ecmascript)");
;
;
;
;
const Spinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function Spinner({ className, withText, text, textClassName, icon = 'cbi-Loader' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex items-center gap-x-3 text-xl', className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('gradient-loader inline-flex animate-spin text-xl', icon)
                }, void 0, false, {
                    fileName: "[project]/src/shared/Loaders.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                withText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('text-sm text-light-gray', textClassName),
                    children: text ?? 'Loading...'
                }, void 0, false, {
                    fileName: "[project]/src/shared/Loaders.tsx",
                    lineNumber: 23,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/Loaders.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
});
_c = Spinner;
const FullScreenLoader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c1 = function FullScreenLoader({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex h-svh w-svw flex-col items-center justify-center', className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-y-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                        className: "h-8 sm:h-10 xl:h-12"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/Loaders.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                        withText: true,
                        className: "text-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/Loaders.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/Loaders.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/Loaders.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false);
});
_c2 = FullScreenLoader;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "FullScreenLoader$memo");
__turbopack_context__.k.register(_c2, "FullScreenLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Modal": (()=>Modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Loaders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Loaders.tsx [app-client] (ecmascript)");
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
const variants = {
    gray: 'border border-storm-gray text-main',
    aquamarine: 'border border-dark-aquamarine text-dark-aquamarine',
    red: 'border border-salmon text-salmon'
};
function Modal({ children, isOpen, closeModal, titleKey, titleIcon, buttonTitleKey, cancelButtonTitleKey, confirmButtonClass, titleClass, buttonIcon, disabled, className, confirm, variant, showButtons = true }) {
    _s();
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClose = ()=>{
        closeModal ? closeModal() : router.back();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!isOpen) {
                setShowLoader(false);
            }
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        as: "div",
        open: isOpen,
        className: "relative z-[100]",
        onClose: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-violet-950/75",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-10 mx-auto w-fit min-w-96",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogPanel"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex max-h-[90vh] w-full min-w-96 transform flex-col gap-y-5 overflow-y-auto rounded-2xl bg-gunmetal p-5 text-left shadow-xl transition-all sm:p-7', variants[variant]),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                onClick: handleClose,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-close-circle absolute right-0 top-0 p-3 text-light-gray', 'cursor-pointer bg-inherit outline-none hover:bg-inherit hover:text-main active:bg-inherit')
                            }, void 0, false, {
                                fileName: "[project]/src/shared/Modal.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex items-start'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full flex-col gap-8 text-left', className),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                            as: "h3",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex items-center gap-x-2 text-lg font-medium uppercase', titleClass),
                                            children: [
                                                titleIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: titleIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/Modal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 35
                                                }, this),
                                                t(titleKey)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/Modal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 19
                                        }, this),
                                        children
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/Modal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/Modal.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this),
                            showButtons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-1/3 flex-row justify-end gap-x-1 self-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "outline",
                                        color: "darkGray",
                                        disabled: showLoader,
                                        onClick: handleClose,
                                        className: "flex-grow px-10",
                                        children: t(cancelButtonTitleKey || 'General.cancelButton')
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/Modal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "solid",
                                        color: "gray",
                                        disabled: disabled || showLoader,
                                        onClick: ()=>{
                                            setShowLoader(true);
                                            if (confirm) confirm();
                                        },
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex flex-grow items-center text-nowrap px-7 py-3 text-lg disabled:opacity-30', showLoader && 'animate-pulse', confirmButtonClass),
                                        children: [
                                            showLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Loaders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                                                fileName: "[project]/src/shared/Modal.tsx",
                                                lineNumber: 130,
                                                columnNumber: 35
                                            }, this) : buttonIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: buttonIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/Modal.tsx",
                                                lineNumber: 130,
                                                columnNumber: 63
                                            }, this),
                                            buttonTitleKey && t(buttonTitleKey)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/Modal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/Modal.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/Modal.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/Modal.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/Modal.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/Modal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/Modal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Modal, "h6HZ0tGdEcSlmw/G+tEZ64+7c9M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/assistant/AssistantSelect.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AssistantSelectBase": (()=>AssistantSelectBase),
    "default": (()=>AssistantSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$1a6f44__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:1a6f44 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CollapsiblePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/CollapsiblePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Modal.tsx [app-client] (ecmascript)");
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
;
;
;
function AssistantSelectBase({ assistants, user, selectedAssistant, className, light, updateSelectedAssistant }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assistant, setAssistant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    const toggleButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AssistantSelectBase.useCallback[handleDelete]": async ()=>{
            if (assistant) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$1a6f44__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteAssistant"])(assistant?.id);
                setModalOpen(false);
            }
        }
    }["AssistantSelectBase.useCallback[handleDelete]"], [
        assistant
    ]);
    if (pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].dashboard)) return null;
    if (!assistants?.length) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewAssistantButton"], {
            user: user,
            assistants: assistants,
            className: "absolute right-1 top-1 z-10 flex w-1/3 max-w-96"
        }, void 0, false, {
            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "assistant-manage",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('absolute right-1 top-1 z-20 flex max-h-[calc(100%-0.5rem)] w-1/3 min-w-[21rem] max-w-lg flex-grow flex-col', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CollapsiblePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: !light ? t('Assistants.selectTitle') : '',
                subTitle: isClient ? selectedAssistant?.name : '',
                className: `group border-graphic/[6%] ${light ? 'bg-graphic/[14%] hover:border-main' : 'bg-gunmetal hover:border-dark-aquamarine hover:bg-background'} p-2 data-[open]:border-dark-aquamarine`,
                toggleClass: `${light ? 'text-light-gray group-hover:text-main' : 'text-dark-aquamarine'}`,
                iconClass: `cbi-cpu size-8 aspect-square border ${light ? 'border-graphic/[14%] text-light-gray' : 'border-dark-aquamarine text-dark-aquamarine'} rounded-lg self-center`,
                titleClass: `text-[.65rem] text-light-gray leading-3 font-semibold -ms-0.5`,
                subTitleClass: `${light ? 'text-light-gray group-hover:text-main' : 'text-dark-aquamarine'} text-base font-semibold leading-5 line-clamp-2 break-words`,
                contentClassName: "p-2.5 data-[open]:pt-2.5 border-dark-aquamarine min-h-0 flex flex-col",
                togglerRef: toggleButtonRef,
                additionalToggler: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: `cbi-setting-2 m-0 p-0 text-[1.2rem] leading-5 ${light ? 'text-light-gray' : 'text-storm-gray'} hover:text-main`,
                    href: '/instructions'
                }, void 0, false, {
                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, void 0),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-h-0 flex-col justify-between gap-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-y-1 overflow-y-auto overflow-x-hidden",
                            children: assistants.map((assistant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex flex-col gap-y-1 rounded-xl p-3.5 hover:bg-dark-aquamarine/[22%]', selectedAssistant?.id === assistant.id ? 'bg-dark-aquamarine/[22%]' : 'bg-dark-aquamarine/[11%]'),
                                    onClick: async ()=>{
                                        await updateSelectedAssistant(assistant);
                                        toggleButtonRef.current?.click();
                                    },
                                    children: [
                                        selectedAssistant?.id === assistant.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cbi-tick-circle absolute right-3 top-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                            lineNumber: 101,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "break-words text-lg font-medium text-main",
                                            children: assistant.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "line-clamp-4 break-words text-sm text-light-gray",
                                            children: assistant.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-x-1 pt-2",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 gap-x-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CopyToClipboardButton"], {
                                                            searchParams: `cbsas=${assistant.id}`,
                                                            tooltipKey: 'General.shareLinkSuccess',
                                                            titileKey: "Assistants.shareTitle"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportAssistantButton"], {
                                                            assistant: assistant,
                                                            className: "before:ms-1 before:h-2/3 before:border-l before:border-storm-gray"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex min-w-0 items-center justify-around gap-x-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "cbi-edit-2 m-0 p-0 text-storm-gray hover:text-main",
                                                            href: `/create-agent?id=${assistant.id}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "cbi-trash m-0 p-0 text-lg leading-3 text-storm-gray hover:text-main",
                                                            onClick: async ()=>{
                                                                setAssistant(assistant);
                                                                setModalOpen(true);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, assistant.id, true, {
                                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NewAssistantButton"], {
                            user: user,
                            assistants: assistants,
                            onClick: ()=>toggleButtonRef.current?.click()
                        }, void 0, false, {
                            fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                buttonTitleKey: 'Assistants.deleteModal.deleteButton',
                buttonIcon: "cbi-trash",
                titleIcon: "cbi-send",
                titleKey: `Assistants.deleteModal.title`,
                variant: "red",
                isOpen: modalOpen,
                closeModal: ()=>setModalOpen(false),
                confirm: handleDelete,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-y-5 text-main",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t(`Assistants.deleteModal.content`, {
                            name: assistant?.name || ''
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(AssistantSelectBase, "q7WHMidIRlcOXEhu8JYnQyy766M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AssistantSelectBase;
function AssistantSelect() {
    _s1();
    const { assistants, updateSelectedAssistant, selectedAssistant, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AssistantSelectBase, {
        assistants: assistants,
        selectedAssistant: selectedAssistant,
        updateSelectedAssistant: updateSelectedAssistant,
        user: user
    }, void 0, false, {
        fileName: "[project]/src/shared/assistant/AssistantSelect.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s1(AssistantSelect, "Zo9G6w6x7E7yXgmVynhp8+wsfFk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"]
    ];
});
_c1 = AssistantSelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "AssistantSelectBase");
__turbopack_context__.k.register(_c1, "AssistantSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/ThemeToggler.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggler": (()=>ThemeToggler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const classNames = {
    root: 'theme-toggler flex items-center gap-1',
    label: 'inline-flex items-center cursor-pointer',
    input: 'sr-only peer',
    switch: 'relative w-[52px] h-[30px] bg-graphic/[16%] border border-background-border/[26%] rounded-full',
    switchCircle: "peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-main  peer-checked:after:bg-yellow after:rounded-full after:h-[22px] after:w-[22px] after:transition-all",
    moonIcon: 'cbi-moon text-main !text-xl',
    sunIcon: 'cbi-sun text-yellow !text-xl'
};
function ThemeToggler({ className }) {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const checked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeToggler.useMemo[checked]": ()=>theme === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT
    }["ThemeToggler.useMemo[checked]"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(classNames.root, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: classNames.moonIcon
            }, void 0, false, {
                fileName: "[project]/src/shared/ThemeToggler.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: classNames.label,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        value: "",
                        className: classNames.input,
                        checked: checked,
                        onChange: toggleTheme
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ThemeToggler.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(classNames.switch, classNames.switchCircle)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ThemeToggler.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ThemeToggler.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: classNames.sunIcon
            }, void 0, false, {
                fileName: "[project]/src/shared/ThemeToggler.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ThemeToggler.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ThemeToggler, "JALFVk0oSi92riMpIcDtYmjMkPA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggler;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/layout/TopNavigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TopNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const variantStyles = {
    main: {
        nav: 'max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl bg-graphic/[14%] border border-white/[2%]',
        option: 'basis-1/4 text-light-gray hover:bg-main hover:text-background',
        selected: 'bg-main text-background'
    },
    secondary: {
        nav: 'max-w-2xl gap-1',
        option: 'text-light-gray text-sm bg-white/[8%] border border-background-border/[18%] hover:border-main hover:text-main px-16 font-medium',
        selected: 'bg-storm-gray text-main hover:border-background-border/[18%]'
    }
};
function TopNavigation({ variant = 'main', strictEqual, navigationOptions, className, optionClassName, optionClickHandler }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getIsActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TopNavigation.useCallback[getIsActive]": ({ href })=>strictEqual ? pathname === href : pathname.startsWith(href)
    }["TopNavigation.useCallback[getIsActive]"], [
        strictEqual,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('isolate flex flex-grow flex-wrap rounded-lg p-1', variantStyles[variant].nav, className),
        children: navigationOptions.map((option, id)=>!option.hidden && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                id: option.id,
                href: option.href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex-1 text-nowrap rounded-lg px-3 py-1.5', optionClassName, variantStyles[variant].option, getIsActive(option) && variantStyles[variant].selected),
                onClick: ()=>optionClickHandler?.(option),
                children: [
                    option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `${option.icon} text-lg`
                    }, void 0, false, {
                        fileName: "[project]/src/shared/layout/TopNavigation.tsx",
                        lineNumber: 73,
                        columnNumber: 31
                    }, this),
                    t(option.label)
                ]
            }, id, true, {
                fileName: "[project]/src/shared/layout/TopNavigation.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/shared/layout/TopNavigation.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(TopNavigation, "Tw2zJvAywIpX1+Up1Wcwmgvn9xQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TopNavigation;
var _c;
__turbopack_context__.k.register(_c, "TopNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AsideContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/FunctionalButtons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Sidebar({ titleKey, titleClassName, className, contentClassName, children, showOpen, openButtonLabel, openClassName }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { isAsideOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsideContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('group relative z-10 flex min-w-0 max-w-xl shrink-0 flex-col gap-y-5 overflow-hidden rounded-lg bg-white-opacity backdrop-blur-md transition-[width]', className, isAsideOpen ? `me-3 w-1/4 p-2.5 ${openClassName}` : 'w-0'),
                children: isAsideOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideToggleButton"], {
                            className: "absolute right-2.5 top-2.5 group-[.hide-toggle]:hidden",
                            open: false,
                            id: "sidebar-toggle"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/Sidebar.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        titleKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('text-nowrap py-2.5 ps-2 text-[1.25rem] uppercase text-main', titleClassName),
                            children: t(titleKey)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/Sidebar.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex min-h-0 flex-grow flex-col gap-y-5 pt-3', contentClassName),
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/shared/Sidebar.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/shared/Sidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            showOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0.5 flex items-center gap-x-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$FunctionalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideToggleButton"], {
                        open: true
                    }, void 0, false, {
                        fileName: "[project]/src/shared/Sidebar.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-storm-gray",
                        children: [
                            openButtonLabel && t(openButtonLabel),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/Sidebar.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/Sidebar.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "7rNCHQL2byD3DDKu6Pi/VXMqVjY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AsideContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsideContext"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9e4722ef._.js.map