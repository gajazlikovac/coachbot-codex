(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/useSSE.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSSE": (()=>useSSE)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useSSE({ url = '/api/sse', events }) {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSSE.useEffect": ()=>{
            const eventSource = new EventSource(url);
            eventSource.onopen = ({
                "useSSE.useEffect": ()=>setIsConnected(true)
            })["useSSE.useEffect"];
            eventSource.onerror = ({
                "useSSE.useEffect": (error)=>{
                    console.warn('[useSSE] Error:', error, new Date().toISOString());
                    setIsConnected(false);
                }
            })["useSSE.useEffect"];
            Object.entries(events).forEach({
                "useSSE.useEffect": ([eventName, callback])=>{
                    eventSource.addEventListener(eventName, {
                        "useSSE.useEffect": (event)=>{
                            try {
                                const data = event?.data != null ? JSON.parse(event.data) : null;
                                callback(data);
                            } catch (error) {
                                console.error(`[useSSE] Error parsing SSE event [${eventName}]:`, error);
                            }
                        }
                    }["useSSE.useEffect"]);
                }
            }["useSSE.useEffect"]);
            return ({
                "useSSE.useEffect": ()=>eventSource.close()
            })["useSSE.useEffect"];
        }
    }["useSSE.useEffect"], [
        url,
        JSON.stringify(Object.keys(events))
    ]);
    return {
        isConnected
    };
}
_s(useSSE, "X8xpX3k6aXdyWkMXjkSdizyzA6Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ACCEPTED_FILE_TYPES": (()=>ACCEPTED_FILE_TYPES),
    "DEFAULT_LOCALE": (()=>DEFAULT_LOCALE),
    "HOME_ROUTE": (()=>HOME_ROUTE),
    "LOCALE_COOKIE_NAME": (()=>LOCALE_COOKIE_NAME),
    "LOGIN_ROUTE": (()=>LOGIN_ROUTE),
    "MAX_CATEGORIES_COUNT": (()=>MAX_CATEGORIES_COUNT),
    "MIN_CATEGORIES_COUNT": (()=>MIN_CATEGORIES_COUNT),
    "PrivateRoutes": (()=>PrivateRoutes),
    "PublicRoutes": (()=>PublicRoutes),
    "SESSION_COOKIE_NAME": (()=>SESSION_COOKIE_NAME),
    "SIGNUP_MODE_COOKIE_NAME": (()=>SIGNUP_MODE_COOKIE_NAME)
});
const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';
const SIGNUP_MODE_COOKIE_NAME = 'mode';
const DEFAULT_LOCALE = 'en';
const HOME_ROUTE = '/chat';
const LOGIN_ROUTE = '/login';
const SESSION_COOKIE_NAME = 'cbs_ses';
const MIN_CATEGORIES_COUNT = 3;
const MAX_CATEGORIES_COUNT = 10;
const ACCEPTED_FILE_TYPES = {
    'application/pdf': [
        '.pdf'
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
        '.docx',
        '.dotx',
        '.docm',
        '.dotm'
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
        '.docx',
        '.dotx',
        '.docm',
        '.dotm'
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
        '.xls'
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': [
        '.pptx',
        '.potx',
        '.ppsx',
        '.pptm',
        '.potm',
        '.ppsm'
    ],
    'application/json': [
        '.json'
    ],
    'application/xml': [
        '.xml'
    ],
    'text/markdown': [
        '.md'
    ],
    'text/x-markdown': [
        '.md'
    ],
    'text/plain': [
        '.txt'
    ],
    'text/x-asciidoc': [
        '.adoc'
    ],
    'text/html': [
        '.html',
        '.xhtml'
    ],
    'text/csv': [
        '.csv'
    ],
    'image/png': [
        '.png'
    ],
    'image/jpeg': [
        '.jpg',
        '.jpeg'
    ],
    'image/tiff': [
        '.tiff'
    ],
    'image/bmp': [
        '.bmp'
    ]
};
var PublicRoutes = /*#__PURE__*/ function(PublicRoutes) {
    PublicRoutes["login"] = "/login";
    PublicRoutes["signup"] = "/signup";
    PublicRoutes["forgotPassword"] = "/forgot-password";
    PublicRoutes["verification"] = "/verification";
    return PublicRoutes;
}({});
var PrivateRoutes = /*#__PURE__*/ function(PrivateRoutes) {
    PrivateRoutes["chat"] = "/chat";
    PrivateRoutes["dashboard"] = "/dashboard";
    PrivateRoutes["checkout"] = "/checkout";
    PrivateRoutes["feedback"] = "/account/feedback";
    PrivateRoutes["stageInstructions"] = "/instructions/stages";
    PrivateRoutes["moderationInstructions"] = "/instructions/moderation";
    PrivateRoutes["instructions"] = "/instructions";
    PrivateRoutes["account"] = "/account";
    PrivateRoutes["content"] = "/content";
    PrivateRoutes["configuration"] = "/configuration";
    PrivateRoutes["coach"] = "/coach";
    return PrivateRoutes;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:cf15b6 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40bf5ddfac312f9fe15288cb868c5f0f1a4e7e93ca":"checkUserAccessAllowed"},"src/server/actions/userActions.ts",""] */ __turbopack_context__.s({
    "checkUserAccessAllowed": (()=>checkUserAccessAllowed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var checkUserAccessAllowed = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40bf5ddfac312f9fe15288cb868c5f0f1a4e7e93ca", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "checkUserAccessAllowed"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vdXNlckFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBTSUdOVVBfTU9ERV9DT09LSUVfTkFNRSB9IGZyb20gJ0AvbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBkZWxldGVGaXJlYmFzZVVzZXIgfSBmcm9tICdAL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQC9saWIvbW9kZWxzL2NvbW1vbi5tb2RlbHMnO1xuaW1wb3J0IHsgaXNBY3RpdmVTdWJzY3JpcHRpb24gfSBmcm9tICdAL2xpYi91dGlscy9jb21tb24udXRpbHMnO1xuaW1wb3J0IHsgZGVsZXRlQ29va2llLCBnZXRDb29raWUgfSBmcm9tICdAL2xpYi91dGlscy9jb29raWUudXRpbHMnO1xuaW1wb3J0IHsgdXNlckFjY291bnRTY2hlbWEgfSBmcm9tICdAL2xpYi91dGlscy9kYi51dGlscyc7XG5pbXBvcnQgeyBkZWNyeXB0IH0gZnJvbSAnQC9saWIvdXRpbHMvZW5jcnlwdGlvbi51dGlscyc7XG5pbXBvcnQgeyBzdHJpcGVDbGllbnQgfSBmcm9tICcuLi9kYi9zdHJpcGVDbGllbnQnO1xuaW1wb3J0IHtcbiAgY3JlYXRlVXNlclN1YnNjcmlwdGlvbixcbiAgZGVsZXRlVXNlckRhdGEsXG4gIGdldFVzZXJEYXRhLFxuICB1cGRhdGVVc2VyLFxuICB1cGRhdGVVc2VyU3Vic2NyaXB0aW9uLFxufSBmcm9tICcuLi9kYi91c2VyQ2xpZW50JztcbmltcG9ydCB7IGNyZWF0ZVVzZXJGcmVlU3Vic2NyaXB0aW9uLCBnZXRVcGRhdGVkU3Vic2NyaXB0aW9uRGF0YSwgZ2V0VXNlckN1cnJlbnRQcmljZSB9IGZyb20gJy4vY2hlY2tvdXRBY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZVNlc3Npb24sIGdldFNlc3Npb25Vc2VyLCB1cGRhdGVTZXNzaW9uIH0gZnJvbSAnLi9zZXNzaW9uQWN0aW9ucyc7XG5cbmludGVyZmFjZSBEZWxldGVBY2NvdW50UGFyYW1zIHtcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICBpZiAoIXVzZXJJZCkgdGhyb3cgbmV3IEVycm9yKCdbdXNlckFjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQhJyk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckRhdGEodXNlcklkIHx8ICcnKTtcblxuICAgIHJldHVybiB1c2VyIGFzIFVzZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW3VzZXJBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfWAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyQWNjb3VudChuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IHVzZXJBY2NvdW50U2NoZW1hLnNhZmVQYXJzZSh7IG5hbWUsIGVtYWlsIH0pO1xuXG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7IGVycm9yczogcGFyc2VkRGF0YS5lcnJvci5lcnJvcnMubWFwKCh7IG1lc3NhZ2UsIHBhdGggfSkgPT4gKHsgbmFtZTogcGF0aFswXSwgbWVzc2FnZSB9KSkgfTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdXBkYXRlVXNlcih1c2VySWQgfHwgJycsIHsgbmFtZSwgZW1haWwgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdBY2NvdW50LmFjY291bnRGb3JtLnN1Y2Nlc3NNZXNzYWdlJyxcbiAgICAgIHZhbHVlOiB7IG5hbWU6IHVzZXI/Lm5hbWUgfHwgJycsIGVtYWlsOiB1c2VyPy5lbWFpbCB8fCAnJyB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW3VzZXJBY3Rpb25zXSBFcnJvciB1cGRhdGluZyBhY2NvdW50IGRhdGEgZm9yIHVzZXIgJHt1c2VySWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHsgZXJyb3I6ICdHZW5lcmFsLmVycm9ycy51bmV4cGVjdGVkRXJyb3InIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXJEYXRhKGRhdGE6IFBpY2s8VXNlciwgJ29uYm9hcmRpbmdQYXNzZWQnPik6IFByb21pc2U8YW55PiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1cGRhdGVVc2VyKHVzZXJJZCB8fCAnJywgZGF0YSk7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbdXNlckFjdGlvbnNdIEVycm9yIHVwZGF0aW5nIHVzZXIgJHt1c2VySWR9IGRhdGE6IGAsIGVycm9yKTtcblxuICAgIHJldHVybiB7IGVycm9yOiAnR2VuZXJhbC5lcnJvcnMudW5leHBlY3RlZEVycm9yJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyQWNjb3VudCh7XG4gIGVtYWlsLFxuICBwYXNzd29yZCxcbn06IERlbGV0ZUFjY291bnRQYXJhbXMpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbjsgZXJyb3I/OiBzdHJpbmcgfT4ge1xuICBsZXQgdXNlcklkO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIoKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VyIG5vdCBhdXRoZW50aWNhdGVkJyk7XG4gICAgfVxuICAgIHVzZXJJZCA9IHVzZXIuaWQ7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBkZWxldGVGaXJlYmFzZVVzZXIoZW1haWwsIHBhc3N3b3JkKSxcbiAgICAgIHN0cmlwZUNsaWVudC5kZWxldGVDdXN0b21lcih1c2VyLnN1YnNjcmlwdGlvbj8uY3VzdG9tZXJJZCksXG4gICAgICBkZWxldGVVc2VyRGF0YSh1c2VyLmlkKSxcbiAgICAgIGRlbGV0ZVNlc3Npb24oKSxcbiAgICBdKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbdXNlckFjdGlvbnNdIEVycm9yIGRlbGV0aW5nIHVzZXIgYWNjb3VudCAke3VzZXJJZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgYWNjb3VudCcsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tTaWdudXBNb2RlUGFyYW0odXNlcjogVXNlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCBlbmNyeXB0ZWRNb2RlID0gYXdhaXQgZ2V0Q29va2llPHN0cmluZz4oU0lHTlVQX01PREVfQ09PS0lFX05BTUUpO1xuICBjb25zdCBpc0FsbG93ZWRQYXJhbSA9ICEhZW5jcnlwdGVkTW9kZSAmJiBwcm9jZXNzLmVudi5BTExPV0VEX1NJR05VUF9NT0RFX1ZBTFVFUz8uc3BsaXQoJywnKS5pbmNsdWRlcyhlbmNyeXB0ZWRNb2RlKTtcblxuICBpZiAoIWlzQWxsb3dlZFBhcmFtKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgbW9kZURhdGEgPSBhd2FpdCBkZWNyeXB0PHsgdHJpYWxEYXlzOiBudW1iZXIgfT4oZW5jcnlwdGVkTW9kZSwgcHJvY2Vzcy5lbnYuRU5DT0RFX1NFQ1JFVF9LRVkpO1xuICBjb25zdCBmcmVlVHJpYWxTdWIgPSBhd2FpdCBjcmVhdGVVc2VyRnJlZVN1YnNjcmlwdGlvbih1c2VyLCBtb2RlRGF0YT8udHJpYWxEYXlzIHx8IDE0KTtcbiAgYXdhaXQgZGVsZXRlQ29va2llKFNJR05VUF9NT0RFX0NPT0tJRV9OQU1FKTtcblxuICByZXR1cm4gISFmcmVlVHJpYWxTdWI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0V4aXN0aW5nU3Vic2NyaXB0aW9uKHsgc3Vic2NyaXB0aW9uLCBpZCwgZW1haWwgfTogVXNlcik6IFByb21pc2U8Ym9vbGVhbiB8IG51bGw+IHtcbiAgY29uc3QgY3VycmVudFByaWNlID0gYXdhaXQgZ2V0VXNlckN1cnJlbnRQcmljZSh7IHN1YnNjcmlwdGlvbiB9IGFzIFVzZXIpO1xuXG4gIGlmICghIXN1YnNjcmlwdGlvbiAmJiBpc0FjdGl2ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24sIGN1cnJlbnRQcmljZT8uaWQpKSByZXR1cm4gdHJ1ZTtcblxuICBjb25zdCBzdHJpcGVTdWJzY3JpcHRpb24gPSBhd2FpdCBzdHJpcGVDbGllbnQuZ2V0U3RyaXBlQWN0aXZlU3Vic2NyaXB0aW9uQnlFbWFpbChlbWFpbCB8fCAnJyk7XG5cbiAgaWYgKCFzdHJpcGVTdWJzY3JpcHRpb24gfHwgIWlkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzdWJzY3JpcHRpb25EYXRhID0gYXdhaXQgZ2V0VXBkYXRlZFN1YnNjcmlwdGlvbkRhdGEoc3RyaXBlU3Vic2NyaXB0aW9uKTtcbiAgY29uc3QgdXBkYXRlZFN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvbj8uY3VzdG9tZXJJZFxuICAgID8gYXdhaXQgdXBkYXRlVXNlclN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24uY3VzdG9tZXJJZCwgc3Vic2NyaXB0aW9uRGF0YSlcbiAgICA6IGF3YWl0IGNyZWF0ZVVzZXJTdWJzY3JpcHRpb24oaWQsIHN1YnNjcmlwdGlvbkRhdGEpO1xuXG4gIHJldHVybiBpc0FjdGl2ZVN1YnNjcmlwdGlvbih1cGRhdGVkU3Vic2NyaXB0aW9uLCAoc3RyaXBlU3Vic2NyaXB0aW9uIGFzIGFueSkucGxhbi5pZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJTdWJzY3JpcHRpb24odXNlcjogVXNlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICB0cnkge1xuICAgIGNvbnN0IGhhc0V4aXN0aW5nU3Vic2NyaXB0aW9uID0gYXdhaXQgY2hlY2tFeGlzdGluZ1N1YnNjcmlwdGlvbih1c2VyKTtcblxuICAgIGlmIChoYXNFeGlzdGluZ1N1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgYXdhaXQgZGVsZXRlQ29va2llKFNJR05VUF9NT0RFX0NPT0tJRV9OQU1FKTtcbiAgICAgIHJldHVybiBoYXNFeGlzdGluZ1N1YnNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hlY2tTaWdudXBNb2RlUGFyYW0odXNlcik7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbdXNlckFjdGlvbnNdIEVycm9yIGNoZWNraW5nIHVzZXIgJHt1c2VyLmlkfSBzdWJzY3JpcHRpb246YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1VzZXJBY2Nlc3NBbGxvd2VkKGN1cnJlbnRVc2VyPzogVXNlciB8IG51bGwpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gY3VycmVudFVzZXIgfHwgKGF3YWl0IGdldFVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGFjY2Vzc0FsbG93ZWQgPSB1c2VyLmFjY2Vzc0FsbG93ZWQgfHwgKGF3YWl0IGNoZWNrVXNlclN1YnNjcmlwdGlvbih1c2VyKSk7XG5cbiAgICBhd2FpdCB1cGRhdGVTZXNzaW9uKHsgYWNjZXNzQWxsb3dlZCB9KTtcblxuICAgIHJldHVybiBhY2Nlc3NBbGxvd2VkO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihgW3VzZXJBY3Rpb25zXSBFcnJvciBjaGVja2luZyB1c2VyICR7Y3VycmVudFVzZXI/LmlkfSBhY2Nlc3MgYWxsb3dlZDpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiaVRBK0pzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/AccessProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccessProvider": (()=>AccessProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSSE.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$cf15b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:cf15b6 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const AccessContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AccessProvider({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const checkAccess = async ()=>{
        const accessAllowed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$cf15b6__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["checkUserAccessAllowed"])();
        if (accessAllowed && !!searchParams.get('success') && pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout) {
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].chat);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"])({
        events: {
            subscriptionUpdated: checkAccess
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccessProvider.useEffect": ()=>{
            if (!isMounted.current) {
                checkAccess();
                isMounted.current = true;
            }
        }
    }["AccessProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccessContext.Provider, {
        value: undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AccessProvider.tsx",
        lineNumber: 39,
        columnNumber: 10
    }, this);
}
_s(AccessProvider, "v2u1OOEtVTF106m7ftZQ8fgt39c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"]
    ];
});
_c = AccessProvider;
var _c;
__turbopack_context__.k.register(_c, "AccessProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "THEME_ID": (()=>THEME_ID),
    "Theme": (()=>Theme),
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const THEME_ID = 'theme';
var Theme = /*#__PURE__*/ function(Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
    return Theme;
}({});
const { LIGHT, DARK } = Theme;
const getStoredTheme = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return window.localStorage.getItem(THEME_ID);
};
const initialContext = {
    theme: getStoredTheme() || DARK,
    toggleTheme: ()=>{},
    setTheme: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(initialContext);
// const getSystemTheme = (): Theme => (window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT);
const getSavedTheme = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return getStoredTheme() || DARK;
    }
    "TURBOPACK unreachable";
};
const ThemeProvider = ({ children })=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getSavedTheme);
    const toggleTheme = ()=>setTheme((prevTheme)=>prevTheme === DARK ? LIGHT : DARK);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            window?.localStorage.setItem(THEME_ID, theme);
            if (theme === DARK) {
                document.documentElement.classList.add(DARK);
            } else {
                document.documentElement.classList.remove(DARK);
            }
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = {
                "ThemeProvider.useEffect.handleChange": (e)=>{
                    setTheme(e.matches ? DARK : LIGHT);
                }
            }["ThemeProvider.useEffect.handleChange"];
            mediaQuery.addEventListener('change', handleChange);
            return ({
                "ThemeProvider.useEffect": ()=>mediaQuery.removeEventListener('change', handleChange)
            })["ThemeProvider.useEffect"];
        }
    }["ThemeProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ThemeContext.tsx",
        lineNumber: 75,
        columnNumber: 10
    }, this);
};
_s(ThemeProvider, "M2M4PI2LpMWWHY/9Akl71WlhNn8=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/models/checkout.models.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PriceCurrency": (()=>PriceCurrency),
    "PriceInterval": (()=>PriceInterval),
    "SubscriptionStatus": (()=>SubscriptionStatus)
});
var PriceInterval = /*#__PURE__*/ function(PriceInterval) {
    PriceInterval["Month"] = "month";
    PriceInterval["Year"] = "year";
    return PriceInterval;
}({});
var SubscriptionStatus = /*#__PURE__*/ function(SubscriptionStatus) {
    SubscriptionStatus["active"] = "active";
    SubscriptionStatus["trialing"] = "trialing";
    SubscriptionStatus["canceled"] = "canceled";
    SubscriptionStatus["paused"] = "paused";
    SubscriptionStatus["unpaid"] = "unpaid";
    SubscriptionStatus["past_due"] = "past_due";
    SubscriptionStatus["incomplete"] = "incomplete";
    SubscriptionStatus["incomplete_expired"] = "incomplete_expired";
    return SubscriptionStatus;
}({});
var PriceCurrency = /*#__PURE__*/ function(PriceCurrency) {
    PriceCurrency["usd"] = "usd";
    PriceCurrency["eur"] = "eur";
    PriceCurrency["gbp"] = "gbp";
    PriceCurrency["aud"] = "aud";
    PriceCurrency["cad"] = "cad";
    return PriceCurrency;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/common.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getIsAllowedUser": (()=>getIsAllowedUser),
    "getRedirectPath": (()=>getRedirectPath),
    "isActiveSubscription": (()=>isActiveSubscription),
    "isAssistantCreationAllowed": (()=>isAssistantCreationAllowed),
    "isLowerEnv": (()=>isLowerEnv),
    "isTrialSubscription": (()=>isTrialSubscription),
    "withoutTrailingSlash": (()=>withoutTrailingSlash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [app-client] (ecmascript)");
;
;
const withoutTrailingSlash = (url = '')=>{
    return url.endsWith('/') ? url.slice(0, -1) : url;
};
const getRedirectPath = (path, userId, accessAllowed, search)=>{
    const publicRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicRoutes"]);
    const isPublicRoute = publicRoutes.includes(path);
    let redirectTo = null;
    if (!isPublicRoute && !userId) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGIN_ROUTE"]}${search}`;
    } else if (isPublicRoute && userId) {
        redirectTo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].chat;
    } else if (userId && !accessAllowed && path !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout}${search}`;
    }
    return redirectTo;
};
const isActiveSubscription = (subscription, currentPriceId)=>{
    if (!subscription || !subscription?.subscriptionId) return false;
    const isActiveStatus = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionStatus"].active,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionStatus"].trialing
    ].includes(subscription.status);
    const isFreePlan = currentPriceId && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STRIPE_FREE_PRICE && currentPriceId === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.STRIPE_FREE_PRICE;
    const isFreePriceTrialEnded = isFreePlan && !!subscription.canceledAt && new Date(subscription.canceledAt) < new Date();
    return isActiveStatus && !isFreePriceTrialEnded;
};
const isTrialSubscription = ({ plan, trial_start, trial_end }, freePriceId)=>{
    return (!freePriceId || plan.id !== freePriceId) && trial_start !== null && trial_end !== null;
};
const getIsAllowedUser = (userId)=>{
    return !!userId && !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ALLOWED_USER_IDS && !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ALLOWED_USER_IDS.split(',').includes(userId);
};
const isAssistantCreationAllowed = (user, assistants)=>{
    // TODO: Check if user is allowed to create assistants based on their subscription
    if (user?.accessAllowed) return true;
    if (!user?.subscription?.coaches) return false;
    const allowedAssistants = Number(user.subscription?.coaches);
    return isNaN(allowedAssistants) ? true : assistants.length < allowedAssistants;
};
const isLowerEnv = (envUrl)=>[
        'stage',
        'localhost'
    ].some((env)=>envUrl.includes(env));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/date.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/services/HeapAnalytics.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeapAnalytics": (()=>HeapAnalytics),
    "heapAnalytics": (()=>heapAnalytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/date.utils.ts [app-client] (ecmascript)");
;
;
class HeapAnalytics {
    static instance;
    initialized = false;
    // TODO: add envId value
    envId = '';
    constructor(){}
    static getInstance() {
        if (!HeapAnalytics.instance) {
            HeapAnalytics.instance = new HeapAnalytics();
        }
        return HeapAnalytics.instance;
    }
    init(envUrl) {
        const isNotProd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLowerEnv"])(envUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_URL || '');
        if (this.initialized || "object" === 'undefined' || isNotProd) return;
        try {
            this.initializeHeapScript();
            this.initialized = true;
        } catch (error) {
            console.error('[HeapAnalytics] Initialization error:', error);
        }
    }
    identifyUser(userId, userData) {
        if (!this.initialized) return;
        try {
            window.heap.identify(userId);
            if (Object.keys(userData).length > 0) {
                window.heap.addUserProperties(this.sanitizeProperties(userData));
            }
        } catch (error) {
            console.error('[HeapAnalytics] User identification error:', error);
        }
    }
    addUserProperties(properties) {
        if (!this.initialized) return;
        try {
            window.heap.addUserProperties(this.sanitizeProperties(properties));
        } catch (error) {
            console.error('[HeapAnalytics] Add user properties error:', error);
        }
    }
    trackEventSpendTime(eventName, startTime, properties) {
        if (!this.initialized) return;
        try {
            this.trackEvent(eventName, {
                ...properties,
                timeTakenInSeconds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPassedTime"])(startTime)
            });
        } catch (error) {
            console.error('[HeapAnalytics] Event spent time tracking error:', error);
        }
    }
    trackEvent(eventName, properties) {
        if (!this.initialized) return;
        try {
            window.heap.track(eventName, this.sanitizeProperties(properties || {}));
        } catch (error) {
            console.error('[HeapAnalytics] Event tracking error:', error);
        }
    }
    initializeHeapScript() {
        const scriptId = 'heap-analytics';
        const script = document.getElementById(scriptId);
        if (!script) {
            window.heapReadyCb = window.heapReadyCb || [];
            window.heap = window.heap || [];
            window.heap.load = (envId, config)=>{
                window.heap.envId = envId;
                window.heap.clientConfig = config = config || {};
                window.heap.clientConfig.shouldFetchServerConfig = false;
                const script = document.createElement('script');
                script.id = 'heap-analytics';
                script.type = 'text/javascript';
                script.async = true;
                script.src = `https://cdn.us.heap-api.com/config/${envId}/heap_config.js`;
                const firstScript = document.getElementsByTagName('script')[0];
                firstScript?.parentNode?.insertBefore(script, firstScript);
            };
            this.setupHeapMethods();
            window.heap.load(this.envId);
        }
    }
    setupHeapMethods() {
        const heapMethods = [
            'init',
            'startTracking',
            'stopTracking',
            'track',
            'resetIdentity',
            'identify',
            'getSessionId',
            'getUserId',
            'getIdentity',
            'addUserProperties',
            'addEventProperties',
            'removeEventProperty',
            'clearEventProperties',
            'addAccountProperties',
            'addAdapter',
            'addTransformer',
            'addTransformerFn',
            'onReady',
            'addPageviewProperties',
            'removePageviewProperty',
            'clearPageviewProperties',
            'trackPageview'
        ];
        heapMethods.forEach((method)=>{
            window.heap[method] = (...args)=>{
                window.heapReadyCb.push({
                    name: method,
                    // eslint-disable-next-line prefer-spread
                    fn: ()=>window.heap[method]?.apply(window.heap, args)
                });
            };
        });
    }
    sanitizeProperties(properties) {
        return Object.entries(properties).reduce((acc, [key, value])=>{
            if (value !== undefined && value !== null) {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
}
const heapAnalytics = HeapAnalytics.getInstance();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Analytics.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Analytics": (()=>Analytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/HeapAnalytics.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Analytics = ({ user$, envUrl })=>{
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(user$);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heapAnalytics"].init(envUrl || '');
            }
        }
    }["Analytics.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Analytics.useEffect": ()=>{
            const identifyUser = {
                "Analytics.useEffect.identifyUser": async ()=>{
                    if (user) {
                        const { email, name, subscription } = user;
                        try {
                            const userData = {
                                email,
                                username: name || '',
                                stripeId: subscription?.customerId || '',
                                subscriptionId: subscription?.subscriptionId || '',
                                coachLimit: subscription?.coaches
                            };
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heapAnalytics"].identifyUser(email, userData);
                        } catch (error) {
                            console.error('[analitycs] Error identifying user in Heap:', error);
                        }
                    }
                }
            }["Analytics.useEffect.identifyUser"];
            identifyUser();
        }
    }["Analytics.useEffect"], [
        user
    ]);
    return null;
};
_s(Analytics, "3ubReDTFssvu4DHeldAg55cW/CI=");
_c = Analytics;
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useIsClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsClient": (()=>useIsClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useIsClient() {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsClient.useEffect": ()=>{
            setIsClient(true);
        }
    }["useIsClient.useEffect"], []);
    return isClient;
}
_s(useIsClient, "k460N28PNzD7zo1YW47Q9UigQis=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GradientBackground": (()=>GradientBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useIsClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const BG_IMAGES = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT]: '/images/background_light.svg',
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK]: '/images/background.svg'
};
const GradientBackground = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function GradientBackground({ className, imgClass, fillImage = true }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('fixed inset-0 -z-50', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            alt: "background",
            src: isClient ? BG_IMAGES[theme] : BG_IMAGES[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK],
            quality: 100,
            ...fillImage && {
                fill: true
            },
            priority: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('opacity-70] object-cover object-[0%_0%]', imgClass)
        }, void 0, false, {
            fileName: "[project]/src/shared/Background.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/Background.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}, "eXe1SpN2/UDQPM2EdY77gw5tqhs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"]
    ];
})), "eXe1SpN2/UDQPM2EdY77gw5tqhs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useIsClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsClient"]
    ];
});
_c1 = GradientBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "GradientBackground$memo");
__turbopack_context__.k.register(_c1, "GradientBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_07a8d62e._.js.map