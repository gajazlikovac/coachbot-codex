(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/models/common.models.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FileStatus": (()=>FileStatus),
    "FileType": (()=>FileType),
    "Level": (()=>Level),
    "Period": (()=>Period)
});
var Period = /*#__PURE__*/ function(Period) {
    Period["allTime"] = "all time";
    Period["last7Days"] = "7";
    Period["last30Days"] = "30";
    return Period;
}({});
var FileStatus = /*#__PURE__*/ function(FileStatus) {
    FileStatus["error"] = "error";
    FileStatus["processing"] = "processing";
    FileStatus["complete"] = "complete";
    return FileStatus;
}({});
var FileType = /*#__PURE__*/ function(FileType) {
    FileType["knowledge"] = "knowledge";
    FileType["reference"] = "reference";
    return FileType;
}({});
var Level = /*#__PURE__*/ function(Level) {
    Level["low"] = "low";
    Level["medium"] = "medium";
    Level["high"] = "high";
    return Level;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:16940c [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"401841cd0463cae93e8f2ad28352aee7e0ca9b7de7":"deleteFile"},"src/server/actions/filesActions.ts",""] */ __turbopack_context__.s({
    "deleteFile": (()=>deleteFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("401841cd0463cae93e8f2ad28352aee7e0ca9b7de7", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXNBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBldmVudEVtaXR0ZXIgZnJvbSAnQC9saWIvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIEtub3dsZWRnZUZpbGUgfSBmcm9tICdAL2xpYi9tb2RlbHMvY29tbW9uLm1vZGVscyc7XG5pbXBvcnQgeyBkZWxldGVHY3BTdG9yYWdlRmlsZSwgZ2V0R2NwU3RvcmFnZVNpZ25lZFVybCwgZ2V0U2lnbmVkVXJsRm9yVXBsb2FkIH0gZnJvbSAnLi4vZGIvZ2NwQ2xpZW50JztcbmltcG9ydCB7IGRlbGV0ZVVzZXJGaWxlLCBlZGl0VXNlckZpbGUsIGdldFVzZXJGaWxlcywgdXBsb2FkVXNlckZpbGVzIH0gZnJvbSAnLi4vZGIvdXNlckNsaWVudCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gJy4vc2Vzc2lvbkFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZVRvR0NQID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXNlcklkfS8ke25hbWV9YDtcbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBhd2FpdCBnZXRTaWduZWRVcmxGb3JVcGxvYWQoZmlsZU5hbWUsIGZpbGUudHlwZSwgcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHsgLi4uZmllbGRzLCBmaWxlIH0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUgYXMgYW55KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGxvYWQgZmlsZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnfS8ke2ZpbGVOYW1lfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVBY3Rpb25zXSBFcnJvciB1cGxvYWRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSBcIiR7ZmlsZS5uYW1lfVwiOmAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKCk6IFByb21pc2U8S25vd2xlZGdlRmlsZVtdPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIHJldHVybiBnZXRVc2VyRmlsZXModXNlcklkIHx8ICcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBmaWxlc2AsIGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGlkLCBjb250ZW50IH06IHsgaWQ6IHN0cmluZzsgY29udGVudDogRmlsZSB9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGxldCB1c2VyX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgdXNlcl9pZCA9IChhd2FpdCBnZXRTZXNzaW9uVXNlcigpKSB8fCAnJztcblxuICAgIGlmICghdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB1cGxvYWRGaWxlVG9HQ1AodXNlcl9pZCB8fCAnJywgY29udGVudCwgZmlsZUlkKTtcbiAgICBjb25zdCB1cGxvYWRlZEZpbGUgPSBhd2FpdCB1cGxvYWRVc2VyRmlsZXMoe1xuICAgICAgaWQ6IGZpbGVJZCxcbiAgICAgIG5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICAgIHN0YXR1czogRmlsZVN0YXR1cy5wcm9jZXNzaW5nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB1c2VyX2lkLFxuICAgIH0pO1xuXG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoYG1lc3NhZ2U6JHt1c2VyX2lkfWAsIHsgdXNlcl9pZCwgZXZlbnQ6ICdmaWxlVXBsb2FkZWQnLCBkYXRhOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtmaWxlc0FjdGlvbnNdIEVycm9yIHVwZGF0aW5nIGFjY291bnQgZGF0YSBmb3IgdXNlciAke3VzZXJfaWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmFsaWRhdGVGaWxlc1RhZygpIHtcbiAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRGaWxlKFxuICBpZDogc3RyaW5nLFxuICBkYXRhOiBQYXJ0aWFsPEtub3dsZWRnZUZpbGU+LFxuICB1c2VyX2lkPzogc3RyaW5nXG4pOiBQcm9taXNlPEtub3dsZWRnZUZpbGUgfCBudWxsPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gdXNlcl9pZCB8fCAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGVkRmlsZSA9IGF3YWl0IGVkaXRVc2VyRmlsZSh1c2VySWQsIGlkLCBkYXRhKTtcbiAgICByZXZhbGlkYXRlVGFnKCdmaWxlcycpO1xuXG4gICAgcmV0dXJuIGVkaXRlZEZpbGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSAke2lkfWAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlOiBLbm93bGVkZ2VGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIEZpbGUgbmFtZSBvciBidWNrZXQgaXMgbm90IHNldCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIGF3YWl0IGRlbGV0ZUdjcFN0b3JhZ2VGaWxlKHByb2Nlc3MuZW52LkdDUF9LQl9CVUNLRVRfTkFNRSB8fCAnJywgZmlsZW5hbWUpO1xuICAgIGF3YWl0IGRlbGV0ZVVzZXJGaWxlKHVzZXJJZCwgZmlsZS5pZCk7XG4gICAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBkZWxldGluZyB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVMaW5rKGZpbGU6IEtub3dsZWRnZUZpbGUpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbiB8fCAhcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbZmlsZXNBY3Rpb25zXSBGaWxlIG5hbWUgb3IgYnVja2V0IGlzIG5vdCBzZXQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIHJldHVybiBnZXRHY3BTdG9yYWdlU2lnbmVkVXJsKGZpbGVuYW1lLCBwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUUgfHwgJycsIGZpbGUubmFtZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgZ2V0dGluZyBsaW5rIGZvciB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBd0dzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:88bd31 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7039ec30a074b283c0034c45099e78df314d8535db":"editFile"},"src/server/actions/filesActions.ts",""] */ __turbopack_context__.s({
    "editFile": (()=>editFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var editFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7039ec30a074b283c0034c45099e78df314d8535db", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "editFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXNBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBldmVudEVtaXR0ZXIgZnJvbSAnQC9saWIvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIEtub3dsZWRnZUZpbGUgfSBmcm9tICdAL2xpYi9tb2RlbHMvY29tbW9uLm1vZGVscyc7XG5pbXBvcnQgeyBkZWxldGVHY3BTdG9yYWdlRmlsZSwgZ2V0R2NwU3RvcmFnZVNpZ25lZFVybCwgZ2V0U2lnbmVkVXJsRm9yVXBsb2FkIH0gZnJvbSAnLi4vZGIvZ2NwQ2xpZW50JztcbmltcG9ydCB7IGRlbGV0ZVVzZXJGaWxlLCBlZGl0VXNlckZpbGUsIGdldFVzZXJGaWxlcywgdXBsb2FkVXNlckZpbGVzIH0gZnJvbSAnLi4vZGIvdXNlckNsaWVudCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gJy4vc2Vzc2lvbkFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZVRvR0NQID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXNlcklkfS8ke25hbWV9YDtcbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBhd2FpdCBnZXRTaWduZWRVcmxGb3JVcGxvYWQoZmlsZU5hbWUsIGZpbGUudHlwZSwgcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHsgLi4uZmllbGRzLCBmaWxlIH0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUgYXMgYW55KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGxvYWQgZmlsZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnfS8ke2ZpbGVOYW1lfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVBY3Rpb25zXSBFcnJvciB1cGxvYWRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSBcIiR7ZmlsZS5uYW1lfVwiOmAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKCk6IFByb21pc2U8S25vd2xlZGdlRmlsZVtdPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIHJldHVybiBnZXRVc2VyRmlsZXModXNlcklkIHx8ICcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBmaWxlc2AsIGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGlkLCBjb250ZW50IH06IHsgaWQ6IHN0cmluZzsgY29udGVudDogRmlsZSB9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGxldCB1c2VyX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgdXNlcl9pZCA9IChhd2FpdCBnZXRTZXNzaW9uVXNlcigpKSB8fCAnJztcblxuICAgIGlmICghdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB1cGxvYWRGaWxlVG9HQ1AodXNlcl9pZCB8fCAnJywgY29udGVudCwgZmlsZUlkKTtcbiAgICBjb25zdCB1cGxvYWRlZEZpbGUgPSBhd2FpdCB1cGxvYWRVc2VyRmlsZXMoe1xuICAgICAgaWQ6IGZpbGVJZCxcbiAgICAgIG5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICAgIHN0YXR1czogRmlsZVN0YXR1cy5wcm9jZXNzaW5nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB1c2VyX2lkLFxuICAgIH0pO1xuXG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoYG1lc3NhZ2U6JHt1c2VyX2lkfWAsIHsgdXNlcl9pZCwgZXZlbnQ6ICdmaWxlVXBsb2FkZWQnLCBkYXRhOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtmaWxlc0FjdGlvbnNdIEVycm9yIHVwZGF0aW5nIGFjY291bnQgZGF0YSBmb3IgdXNlciAke3VzZXJfaWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmFsaWRhdGVGaWxlc1RhZygpIHtcbiAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRGaWxlKFxuICBpZDogc3RyaW5nLFxuICBkYXRhOiBQYXJ0aWFsPEtub3dsZWRnZUZpbGU+LFxuICB1c2VyX2lkPzogc3RyaW5nXG4pOiBQcm9taXNlPEtub3dsZWRnZUZpbGUgfCBudWxsPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gdXNlcl9pZCB8fCAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGVkRmlsZSA9IGF3YWl0IGVkaXRVc2VyRmlsZSh1c2VySWQsIGlkLCBkYXRhKTtcbiAgICByZXZhbGlkYXRlVGFnKCdmaWxlcycpO1xuXG4gICAgcmV0dXJuIGVkaXRlZEZpbGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSAke2lkfWAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlOiBLbm93bGVkZ2VGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIEZpbGUgbmFtZSBvciBidWNrZXQgaXMgbm90IHNldCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIGF3YWl0IGRlbGV0ZUdjcFN0b3JhZ2VGaWxlKHByb2Nlc3MuZW52LkdDUF9LQl9CVUNLRVRfTkFNRSB8fCAnJywgZmlsZW5hbWUpO1xuICAgIGF3YWl0IGRlbGV0ZVVzZXJGaWxlKHVzZXJJZCwgZmlsZS5pZCk7XG4gICAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBkZWxldGluZyB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVMaW5rKGZpbGU6IEtub3dsZWRnZUZpbGUpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbiB8fCAhcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbZmlsZXNBY3Rpb25zXSBGaWxlIG5hbWUgb3IgYnVja2V0IGlzIG5vdCBzZXQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIHJldHVybiBnZXRHY3BTdG9yYWdlU2lnbmVkVXJsKGZpbGVuYW1lLCBwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUUgfHwgJycsIGZpbGUubmFtZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgZ2V0dGluZyBsaW5rIGZvciB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1NBZ0ZzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:3910f5 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"408d7c36bd13c3377f516408dacb4fda47ae34e8b2":"getFileLink"},"src/server/actions/filesActions.ts",""] */ __turbopack_context__.s({
    "getFileLink": (()=>getFileLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getFileLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408d7c36bd13c3377f516408dacb4fda47ae34e8b2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFileLink"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXNBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBldmVudEVtaXR0ZXIgZnJvbSAnQC9saWIvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIEtub3dsZWRnZUZpbGUgfSBmcm9tICdAL2xpYi9tb2RlbHMvY29tbW9uLm1vZGVscyc7XG5pbXBvcnQgeyBkZWxldGVHY3BTdG9yYWdlRmlsZSwgZ2V0R2NwU3RvcmFnZVNpZ25lZFVybCwgZ2V0U2lnbmVkVXJsRm9yVXBsb2FkIH0gZnJvbSAnLi4vZGIvZ2NwQ2xpZW50JztcbmltcG9ydCB7IGRlbGV0ZVVzZXJGaWxlLCBlZGl0VXNlckZpbGUsIGdldFVzZXJGaWxlcywgdXBsb2FkVXNlckZpbGVzIH0gZnJvbSAnLi4vZGIvdXNlckNsaWVudCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gJy4vc2Vzc2lvbkFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZVRvR0NQID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXNlcklkfS8ke25hbWV9YDtcbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBhd2FpdCBnZXRTaWduZWRVcmxGb3JVcGxvYWQoZmlsZU5hbWUsIGZpbGUudHlwZSwgcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHsgLi4uZmllbGRzLCBmaWxlIH0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUgYXMgYW55KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGxvYWQgZmlsZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnfS8ke2ZpbGVOYW1lfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVBY3Rpb25zXSBFcnJvciB1cGxvYWRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSBcIiR7ZmlsZS5uYW1lfVwiOmAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKCk6IFByb21pc2U8S25vd2xlZGdlRmlsZVtdPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIHJldHVybiBnZXRVc2VyRmlsZXModXNlcklkIHx8ICcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBmaWxlc2AsIGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGlkLCBjb250ZW50IH06IHsgaWQ6IHN0cmluZzsgY29udGVudDogRmlsZSB9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGxldCB1c2VyX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgdXNlcl9pZCA9IChhd2FpdCBnZXRTZXNzaW9uVXNlcigpKSB8fCAnJztcblxuICAgIGlmICghdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB1cGxvYWRGaWxlVG9HQ1AodXNlcl9pZCB8fCAnJywgY29udGVudCwgZmlsZUlkKTtcbiAgICBjb25zdCB1cGxvYWRlZEZpbGUgPSBhd2FpdCB1cGxvYWRVc2VyRmlsZXMoe1xuICAgICAgaWQ6IGZpbGVJZCxcbiAgICAgIG5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICAgIHN0YXR1czogRmlsZVN0YXR1cy5wcm9jZXNzaW5nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB1c2VyX2lkLFxuICAgIH0pO1xuXG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoYG1lc3NhZ2U6JHt1c2VyX2lkfWAsIHsgdXNlcl9pZCwgZXZlbnQ6ICdmaWxlVXBsb2FkZWQnLCBkYXRhOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtmaWxlc0FjdGlvbnNdIEVycm9yIHVwZGF0aW5nIGFjY291bnQgZGF0YSBmb3IgdXNlciAke3VzZXJfaWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmFsaWRhdGVGaWxlc1RhZygpIHtcbiAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRGaWxlKFxuICBpZDogc3RyaW5nLFxuICBkYXRhOiBQYXJ0aWFsPEtub3dsZWRnZUZpbGU+LFxuICB1c2VyX2lkPzogc3RyaW5nXG4pOiBQcm9taXNlPEtub3dsZWRnZUZpbGUgfCBudWxsPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gdXNlcl9pZCB8fCAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGVkRmlsZSA9IGF3YWl0IGVkaXRVc2VyRmlsZSh1c2VySWQsIGlkLCBkYXRhKTtcbiAgICByZXZhbGlkYXRlVGFnKCdmaWxlcycpO1xuXG4gICAgcmV0dXJuIGVkaXRlZEZpbGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSAke2lkfWAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlOiBLbm93bGVkZ2VGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIEZpbGUgbmFtZSBvciBidWNrZXQgaXMgbm90IHNldCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIGF3YWl0IGRlbGV0ZUdjcFN0b3JhZ2VGaWxlKHByb2Nlc3MuZW52LkdDUF9LQl9CVUNLRVRfTkFNRSB8fCAnJywgZmlsZW5hbWUpO1xuICAgIGF3YWl0IGRlbGV0ZVVzZXJGaWxlKHVzZXJJZCwgZmlsZS5pZCk7XG4gICAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBkZWxldGluZyB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVMaW5rKGZpbGU6IEtub3dsZWRnZUZpbGUpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbiB8fCAhcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbZmlsZXNBY3Rpb25zXSBGaWxlIG5hbWUgb3IgYnVja2V0IGlzIG5vdCBzZXQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIHJldHVybiBnZXRHY3BTdG9yYWdlU2lnbmVkVXJsKGZpbGVuYW1lLCBwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUUgfHwgJycsIGZpbGUubmFtZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgZ2V0dGluZyBsaW5rIGZvciB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVNBK0hzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Dropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dropdown),
    "getOption": (()=>getOption),
    "getOptions": (()=>getOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/listbox/listbox.js [app-client] (ecmascript)");
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
;
const getOption = function(value, labelKey) {
    const label = value[labelKey] || value.title || '';
    return {
        id: value.id,
        label: value.custom ? label : label.replaceAll('_', ' '),
        value,
        icon: value.custom ? 'cbi-send' : ''
    };
};
const getOptions = function(values, labelKey) {
    return values.map((value)=>getOption(value, labelKey));
};
function Dropdown({ children, optionClassName, listClassName, position, options, buttonIcon = 'cbi-arrow-down group-data-[open]:rotate-180', selectedOption, className, label, movableItems, onSelectedChange, onItemMoved }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(options[0] || null);
    const handleSelectedChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Dropdown.useCallback[handleSelectedChange]": (option)=>{
            setSelected(option);
            onSelectedChange(option);
            if (option.handler) {
                option.handler(option);
            }
        }
    }["Dropdown.useCallback[handleSelectedChange]"], [
        onSelectedChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dropdown.useEffect": ()=>{
            const foundOption = options.find({
                "Dropdown.useEffect.foundOption": (option)=>{
                    if (typeof option.value === 'string') {
                        return option.value === selectedOption;
                    }
                    return option.value.id === selectedOption?.id || JSON.stringify(option.value) === JSON.stringify(selectedOption);
                }
            }["Dropdown.useEffect.foundOption"]);
            setSelected(foundOption || options[0] || null);
        }
    }["Dropdown.useEffect"], [
        selectedOption,
        options
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Listbox"], {
        value: selected,
        onChange: handleSelectedChange,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxButton"], {
                disabled: !selected,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('leading-2 group flex items-center justify-between rounded-lg text-base font-medium text-light-gray', 'rounded-xl border border-storm-gray px-3 py-2.5', selected && 'capitalize', className),
                children: [
                    selected?.labelKey && t(selected.labelKey),
                    selected?.label,
                    !selected && !options.length && t('General.dropdownEmptyPlaceholder'),
                    !!options.length && (buttonIcon || selected?.icon) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: buttonIcon || selected?.icon
                    }, void 0, false, {
                        fileName: "[project]/src/shared/Dropdown.tsx",
                        lineNumber: 117,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/Dropdown.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxOptions"], {
                anchor: position || 'bottom',
                transition: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('z-20 flex w-[var(--button-width)] origin-top flex-col gap-y-5 rounded-lg border border-light-gray bg-background p-3.5 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0', listClassName),
                children: [
                    label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-storm-gray",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/shared/Dropdown.tsx",
                        lineNumber: 127,
                        columnNumber: 19
                    }, this),
                    children,
                    options.map((option, index, { length })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$listbox$2f$listbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListboxOption"], {
                            value: option,
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
                            children: ({ selected })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full cursor-pointer items-center text-base text-light-gray hover:text-main', optionClassName),
                                    children: option.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        prefetch: false,
                                        href: option.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('inline-flex w-full justify-between', option.className),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-x-2",
                                                children: [
                                                    option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: option.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 39
                                                    }, this),
                                                    option.label || option.labelKey && t(option.labelKey)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                lineNumber: 145,
                                                columnNumber: 21
                                            }, this),
                                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "cbi-tick-circle text-xs text-saffron"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                lineNumber: 149,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex w-full justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex gap-x-1.5",
                                                children: [
                                                    option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: option.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 39
                                                    }, this),
                                                    option.label || option.labelKey && t(option.labelKey)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-x-3",
                                                children: [
                                                    selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "cbi-tick-circle text-sm text-main"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 36
                                                    }, this),
                                                    movableItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center gap-y-0 text-xl",
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                title: "Move item up",
                                                                disabled: index === 0,
                                                                className: "cbi-arrow-up-bold p-0 text-lg leading-3 text-main hover:text-dark-aquamarine disabled:opacity-30",
                                                                onClick: ()=>onItemMoved?.(true, option)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                title: "Move item down",
                                                                disabled: index === length - 1,
                                                                className: "cbi-arrow-down-bold p-0 text-lg leading-3 text-main hover:text-dark-aquamarine disabled:opacity-30",
                                                                onClick: ()=>onItemMoved?.(false, option)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/Dropdown.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/Dropdown.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this)
                                }, option.id, false, {
                                    fileName: "[project]/src/shared/Dropdown.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                        }, `${option.id}` + index, false, {
                            fileName: "[project]/src/shared/Dropdown.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/Dropdown.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/Dropdown.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(Dropdown, "VGcf9x1TR53HuwYkhygNzKEkAZU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = Dropdown;
var _c;
__turbopack_context__.k.register(_c, "Dropdown");
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
"[project]/src/app/(main)/content/_components/FilesList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FilesList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSSE.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/common.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/date.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$16940c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:16940c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$88bd31__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:88bd31 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$3910f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:3910f5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Dropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Loaders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Loaders.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ModalButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tooltip.tsx [app-client] (ecmascript)");
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
;
;
;
;
const modalsConfig = {
    delete: {
        titleKey: 'KnowledgeBase.modals.delete.titleKey',
        buttonIcon: 'cbi-trash text-xl',
        buttonTitleKey: `KnowledgeBase.modals.delete.buttonTitleKey`,
        variant: 'red',
        contentKey: `KnowledgeBase.modals.delete.contentKey`
    },
    edit: {
        titleKey: 'KnowledgeBase.modals.edit.titleKey',
        buttonIcon: 'cbi-edit-2 text-xl',
        buttonTitleKey: `KnowledgeBase.modals.edit.buttonTitleKey`,
        variant: 'white',
        contentKey: `KnowledgeBase.modals.edit.contentKey`
    }
};
const fileTypeOptions = [
    {
        id: 0,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileType"].knowledge,
        labelKey: 'KnowledgeBase.fileTypesOptions.0'
    },
    {
        id: 1,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileType"].reference,
        labelKey: 'KnowledgeBase.fileTypesOptions.1'
    }
];
function FilesList({ files }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const fileTypesTooltips = Object.values(t.raw('KnowledgeBase.fileTypesTooltips'));
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(files);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"])({
        events: {
            fileUpdated: {
                "FilesList.useSSE": (updatedItem)=>updatedItem && setItems({
                        "FilesList.useSSE": (prev)=>prev.map({
                                "FilesList.useSSE": (item)=>item?.id === updatedItem?.id ? updatedItem : item
                            }["FilesList.useSSE"])
                    }["FilesList.useSSE"])
            }["FilesList.useSSE"],
            fileUploaded: {
                "FilesList.useSSE": (newItem)=>newItem && setItems({
                        "FilesList.useSSE": (prev)=>[
                                newItem,
                                ...prev
                            ]
                    }["FilesList.useSSE"])
            }["FilesList.useSSE"]
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesList.useEffect": ()=>{
            setItems(files);
        }
    }["FilesList.useEffect"], [
        files
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-grow flex-col",
        children: items.map((file, index, { length })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full items-center border-storm-gray py-1', index === length - 1 ? '' : 'border-b'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full items-center justify-between gap-x-5 rounded-xl px-4 py-2.5 hover:bg-white-opacity', file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].processing && 'border border-dark-aquamarine', file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].error && 'border border-salmon'),
                    children: [
                        file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].processing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Loaders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                            icon: "cbi-subtract",
                            textClassName: "text-dark-aquamarine text-xs xl:text-nowrap",
                            withText: true,
                            text: t('KnowledgeBase.processingText')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this),
                        file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "inline-flex items-center justify-start gap-x-1.5 text-xs text-salmon",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cbi-close-circle text-lg text-salmon"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                    lineNumber: 80,
                                    columnNumber: 17
                                }, this),
                                " ",
                                t('KnowledgeBase.errorText')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                            lineNumber: 79,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('line-clamp-3 shrink flex-grow basis-1/2 break-words text-sm', file.checked ? 'text-main' : 'text-light-gray'),
                            title: file.name,
                            children: file.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this),
                        file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].complete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-[15%] min-w-60 shrink-0 flex-grow items-start gap-x-1 text-sm', file.checked ? 'text-main' : 'text-light-gray'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Dropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    selectedOption: file.fileType || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileType"].knowledge,
                                    className: "w-full text-nowrap py-1.5 text-light-gray",
                                    options: fileTypeOptions,
                                    onSelectedChange: async ({ value })=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$88bd31__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["editFile"])(file.id, {
                                            fileType: value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    iconClass: "cbi-message-question text-light-gray hover:text-dark-aquamarine",
                                    tooltipClassName: "max-w-30",
                                    tooltipLabelClassName: "flex-col inline-flex gap-y-3 p-3 ",
                                    children: fileTypesTooltips.map(({ title, description }, id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xs font-semibold text-background",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-light text-background",
                                                    children: description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `tooltip-option-${id}`, true, {
                                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex shrink-0 items-center gap-x-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "min-w-28 text-right text-xs text-light-gray",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateWeekDay"])(file.uploaded_at),
                                        ", ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$date$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDateDay"])(file.uploaded_at)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-24 items-center justify-end gap-x-5",
                                    children: [
                                        file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].complete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    className: "cbi-document-download p-0 text-storm-gray hover:text-main",
                                                    onClick: async ()=>{
                                                        const link = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$3910f5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFileLink"])(file);
                                                        if (link) window.location.href = link;
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditModalButton"], {
                                                    className: "cbi-edit-2 p-0 text-storm-gray hover:text-main",
                                                    config: {
                                                        ...modalsConfig.edit,
                                                        confirm: async (value)=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$88bd31__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["editFile"])(file.id, {
                                                                name: value || file.name
                                                            })
                                                    },
                                                    initialValue: file.name,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-main",
                                                        children: t('KnowledgeBase.modals.edit.contentKey', {
                                                            fileName: file.name
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        file.status !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].processing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ModalButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteWithConfirmationButton"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-trash p-0 text-storm-gray hover:text-main', file.status === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileStatus"].error && 'text-salmon'),
                                            config: {
                                                ...modalsConfig.delete,
                                                confirm: async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$16940c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteFile"])(file)
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-main",
                                                children: t('KnowledgeBase.modals.delete.contentKey', {
                                                    fileName: file.name
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this)
            }, file.name + index, false, {
                fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/content/_components/FilesList.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(FilesList, "6S15WbSIkf/HO0bSu0DZ3Ru/oJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"]
    ];
});
_c = FilesList;
var _c;
__turbopack_context__.k.register(_c, "FilesList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/array.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "filterArray": (()=>filterArray),
    "getArraysDiff": (()=>getArraysDiff),
    "getArraysInterseptions": (()=>getArraysInterseptions),
    "getUniqueArray": (()=>getUniqueArray),
    "upsertArrayItem": (()=>upsertArrayItem)
});
function filterArray(values, targteId) {
    return values.filter(({ id })=>id !== targteId);
}
function upsertArrayItem(values, newValue) {
    const existingItem = values.map(({ id })=>id).includes(newValue.id);
    return existingItem ? values.map((value)=>value.id === newValue.id ? newValue : value) : [
        ...values,
        newValue
    ];
}
function getArraysInterseptions(values1, values2) {
    return values1.filter((value1)=>values2.some((value2)=>value2.id === value1.id));
}
function getArraysDiff(values1, values2) {
    return values1.filter((value1)=>!values2.some((value2)=>value2.id === value1.id));
}
function getUniqueArray(values) {
    const seen = new Set();
    return values.filter((value)=>{
        if (seen.has(value.id)) return false;
        seen.add(value.id);
        return true;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils/data.utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "deepEqual": (()=>deepEqual),
    "mapFiles": (()=>mapFiles),
    "toBoolean": (()=>toBoolean)
});
const deepEqual = (obj1, obj2)=>{
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();
    if (keys1.length !== keys2.length) return false;
    return keys1.every((key)=>deepEqual(obj1[key], obj2[key]));
};
const mapFiles = (files, status, message)=>{
    return files.map((file, index)=>({
            content: file,
            id: `${Date.now()}-${file.name}-${index}`,
            name: file.name,
            status,
            message
        }));
};
const toBoolean = (value)=>{
    if (typeof value === 'boolean') return value;
    return value ? value?.toLowerCase() === 'true' : false;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:b10542 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"001345e6f8ac496df185701b2f779f016fdd3d431c":"revalidateFilesTag"},"src/server/actions/filesActions.ts",""] */ __turbopack_context__.s({
    "revalidateFilesTag": (()=>revalidateFilesTag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var revalidateFilesTag = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("001345e6f8ac496df185701b2f779f016fdd3d431c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "revalidateFilesTag"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXNBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBldmVudEVtaXR0ZXIgZnJvbSAnQC9saWIvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIEtub3dsZWRnZUZpbGUgfSBmcm9tICdAL2xpYi9tb2RlbHMvY29tbW9uLm1vZGVscyc7XG5pbXBvcnQgeyBkZWxldGVHY3BTdG9yYWdlRmlsZSwgZ2V0R2NwU3RvcmFnZVNpZ25lZFVybCwgZ2V0U2lnbmVkVXJsRm9yVXBsb2FkIH0gZnJvbSAnLi4vZGIvZ2NwQ2xpZW50JztcbmltcG9ydCB7IGRlbGV0ZVVzZXJGaWxlLCBlZGl0VXNlckZpbGUsIGdldFVzZXJGaWxlcywgdXBsb2FkVXNlckZpbGVzIH0gZnJvbSAnLi4vZGIvdXNlckNsaWVudCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gJy4vc2Vzc2lvbkFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZVRvR0NQID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXNlcklkfS8ke25hbWV9YDtcbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBhd2FpdCBnZXRTaWduZWRVcmxGb3JVcGxvYWQoZmlsZU5hbWUsIGZpbGUudHlwZSwgcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHsgLi4uZmllbGRzLCBmaWxlIH0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUgYXMgYW55KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGxvYWQgZmlsZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnfS8ke2ZpbGVOYW1lfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVBY3Rpb25zXSBFcnJvciB1cGxvYWRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSBcIiR7ZmlsZS5uYW1lfVwiOmAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKCk6IFByb21pc2U8S25vd2xlZGdlRmlsZVtdPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIHJldHVybiBnZXRVc2VyRmlsZXModXNlcklkIHx8ICcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBmaWxlc2AsIGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGlkLCBjb250ZW50IH06IHsgaWQ6IHN0cmluZzsgY29udGVudDogRmlsZSB9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGxldCB1c2VyX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgdXNlcl9pZCA9IChhd2FpdCBnZXRTZXNzaW9uVXNlcigpKSB8fCAnJztcblxuICAgIGlmICghdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB1cGxvYWRGaWxlVG9HQ1AodXNlcl9pZCB8fCAnJywgY29udGVudCwgZmlsZUlkKTtcbiAgICBjb25zdCB1cGxvYWRlZEZpbGUgPSBhd2FpdCB1cGxvYWRVc2VyRmlsZXMoe1xuICAgICAgaWQ6IGZpbGVJZCxcbiAgICAgIG5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICAgIHN0YXR1czogRmlsZVN0YXR1cy5wcm9jZXNzaW5nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB1c2VyX2lkLFxuICAgIH0pO1xuXG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoYG1lc3NhZ2U6JHt1c2VyX2lkfWAsIHsgdXNlcl9pZCwgZXZlbnQ6ICdmaWxlVXBsb2FkZWQnLCBkYXRhOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtmaWxlc0FjdGlvbnNdIEVycm9yIHVwZGF0aW5nIGFjY291bnQgZGF0YSBmb3IgdXNlciAke3VzZXJfaWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmFsaWRhdGVGaWxlc1RhZygpIHtcbiAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRGaWxlKFxuICBpZDogc3RyaW5nLFxuICBkYXRhOiBQYXJ0aWFsPEtub3dsZWRnZUZpbGU+LFxuICB1c2VyX2lkPzogc3RyaW5nXG4pOiBQcm9taXNlPEtub3dsZWRnZUZpbGUgfCBudWxsPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gdXNlcl9pZCB8fCAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGVkRmlsZSA9IGF3YWl0IGVkaXRVc2VyRmlsZSh1c2VySWQsIGlkLCBkYXRhKTtcbiAgICByZXZhbGlkYXRlVGFnKCdmaWxlcycpO1xuXG4gICAgcmV0dXJuIGVkaXRlZEZpbGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSAke2lkfWAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlOiBLbm93bGVkZ2VGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIEZpbGUgbmFtZSBvciBidWNrZXQgaXMgbm90IHNldCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIGF3YWl0IGRlbGV0ZUdjcFN0b3JhZ2VGaWxlKHByb2Nlc3MuZW52LkdDUF9LQl9CVUNLRVRfTkFNRSB8fCAnJywgZmlsZW5hbWUpO1xuICAgIGF3YWl0IGRlbGV0ZVVzZXJGaWxlKHVzZXJJZCwgZmlsZS5pZCk7XG4gICAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBkZWxldGluZyB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVMaW5rKGZpbGU6IEtub3dsZWRnZUZpbGUpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbiB8fCAhcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbZmlsZXNBY3Rpb25zXSBGaWxlIG5hbWUgb3IgYnVja2V0IGlzIG5vdCBzZXQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIHJldHVybiBnZXRHY3BTdG9yYWdlU2lnbmVkVXJsKGZpbGVuYW1lLCBwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUUgfHwgJycsIGZpbGUubmFtZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgZ2V0dGluZyBsaW5rIGZvciB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBNEVzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/server/actions/data:4a7110 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402f164e357a2e1eb48aee8238b5c8cf92a5583b98":"uploadFile"},"src/server/actions/filesActions.ts",""] */ __turbopack_context__.s({
    "uploadFile": (()=>uploadFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var uploadFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402f164e357a2e1eb48aee8238b5c8cf92a5583b98", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "uploadFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlsZXNBY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgcmV2YWxpZGF0ZVRhZyB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBldmVudEVtaXR0ZXIgZnJvbSAnQC9saWIvZXZlbnRFbWl0dGVyJztcbmltcG9ydCB7IEZpbGVTdGF0dXMsIEtub3dsZWRnZUZpbGUgfSBmcm9tICdAL2xpYi9tb2RlbHMvY29tbW9uLm1vZGVscyc7XG5pbXBvcnQgeyBkZWxldGVHY3BTdG9yYWdlRmlsZSwgZ2V0R2NwU3RvcmFnZVNpZ25lZFVybCwgZ2V0U2lnbmVkVXJsRm9yVXBsb2FkIH0gZnJvbSAnLi4vZGIvZ2NwQ2xpZW50JztcbmltcG9ydCB7IGRlbGV0ZVVzZXJGaWxlLCBlZGl0VXNlckZpbGUsIGdldFVzZXJGaWxlcywgdXBsb2FkVXNlckZpbGVzIH0gZnJvbSAnLi4vZGIvdXNlckNsaWVudCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uVXNlciB9IGZyb20gJy4vc2Vzc2lvbkFjdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZVRvR0NQID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nLCBmaWxlOiBGaWxlLCBuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7dXNlcklkfS8ke25hbWV9YDtcbiAgICBjb25zdCB7IHVybCwgZmllbGRzIH0gPSBhd2FpdCBnZXRTaWduZWRVcmxGb3JVcGxvYWQoZmlsZU5hbWUsIGZpbGUudHlwZSwgcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHsgLi4uZmllbGRzLCBmaWxlIH0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUgYXMgYW55KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1ldGhvZDogJ1BPU1QnLCBib2R5OiBmb3JtRGF0YSB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byB1cGxvYWQgZmlsZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FIHx8ICcnfS8ke2ZpbGVOYW1lfWA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVBY3Rpb25zXSBFcnJvciB1cGxvYWRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSBcIiR7ZmlsZS5uYW1lfVwiOmAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVzKCk6IFByb21pc2U8S25vd2xlZGdlRmlsZVtdPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIHJldHVybiBnZXRVc2VyRmlsZXModXNlcklkIHx8ICcnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBmaWxlc2AsIGVycm9yKTtcblxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZSh7IGlkLCBjb250ZW50IH06IHsgaWQ6IHN0cmluZzsgY29udGVudDogRmlsZSB9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIGxldCB1c2VyX2lkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHRyeSB7XG4gICAgdXNlcl9pZCA9IChhd2FpdCBnZXRTZXNzaW9uVXNlcigpKSB8fCAnJztcblxuICAgIGlmICghdXNlcl9pZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUlkID0gdXVpZHY0KCk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCB1cGxvYWRGaWxlVG9HQ1AodXNlcl9pZCB8fCAnJywgY29udGVudCwgZmlsZUlkKTtcbiAgICBjb25zdCB1cGxvYWRlZEZpbGUgPSBhd2FpdCB1cGxvYWRVc2VyRmlsZXMoe1xuICAgICAgaWQ6IGZpbGVJZCxcbiAgICAgIG5hbWU6IGNvbnRlbnQubmFtZSxcbiAgICAgIHN0YXR1czogRmlsZVN0YXR1cy5wcm9jZXNzaW5nLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB1c2VyX2lkLFxuICAgIH0pO1xuXG4gICAgZXZlbnRFbWl0dGVyLmVtaXQoYG1lc3NhZ2U6JHt1c2VyX2lkfWAsIHsgdXNlcl9pZCwgZXZlbnQ6ICdmaWxlVXBsb2FkZWQnLCBkYXRhOiB1cGxvYWRlZEZpbGUgfSk7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtmaWxlc0FjdGlvbnNdIEVycm9yIHVwZGF0aW5nIGFjY291bnQgZGF0YSBmb3IgdXNlciAke3VzZXJfaWR9YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJldmFsaWRhdGVGaWxlc1RhZygpIHtcbiAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVkaXRGaWxlKFxuICBpZDogc3RyaW5nLFxuICBkYXRhOiBQYXJ0aWFsPEtub3dsZWRnZUZpbGU+LFxuICB1c2VyX2lkPzogc3RyaW5nXG4pOiBQcm9taXNlPEtub3dsZWRnZUZpbGUgfCBudWxsPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gdXNlcl9pZCB8fCAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSk7XG5cbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdGVkRmlsZSA9IGF3YWl0IGVkaXRVc2VyRmlsZSh1c2VySWQsIGlkLCBkYXRhKTtcbiAgICByZXZhbGlkYXRlVGFnKCdmaWxlcycpO1xuXG4gICAgcmV0dXJuIGVkaXRlZEZpbGU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgdXNlciAke3VzZXJJZH0gZmlsZSAke2lkfWAsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRmlsZShmaWxlOiBLbm93bGVkZ2VGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKTtcblxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2ZpbGVzQWN0aW9uc10gVXNlciBub3QgYXV0aGVudGljYXRlZCcpO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIEZpbGUgbmFtZSBvciBidWNrZXQgaXMgbm90IHNldCEnKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIGF3YWl0IGRlbGV0ZUdjcFN0b3JhZ2VGaWxlKHByb2Nlc3MuZW52LkdDUF9LQl9CVUNLRVRfTkFNRSB8fCAnJywgZmlsZW5hbWUpO1xuICAgIGF3YWl0IGRlbGV0ZVVzZXJGaWxlKHVzZXJJZCwgZmlsZS5pZCk7XG4gICAgcmV2YWxpZGF0ZVRhZygnZmlsZXMnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbZmlsZXNBY3Rpb25zXSBFcnJvciBkZWxldGluZyB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbGVMaW5rKGZpbGU6IEtub3dsZWRnZUZpbGUpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tmaWxlc0FjdGlvbnNdIFVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghZmlsZS5sb2NhdGlvbiB8fCAhcHJvY2Vzcy5lbnYuR0NQX0tCX0JVQ0tFVF9OQU1FKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbZmlsZXNBY3Rpb25zXSBGaWxlIG5hbWUgb3IgYnVja2V0IGlzIG5vdCBzZXQhJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IGZpbGUubG9jYXRpb24ucmVwbGFjZShgJHtwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUV9L2AgfHwgJycsICcnKTtcblxuICAgIHJldHVybiBnZXRHY3BTdG9yYWdlU2lnbmVkVXJsKGZpbGVuYW1lLCBwcm9jZXNzLmVudi5HQ1BfS0JfQlVDS0VUX05BTUUgfHwgJycsIGZpbGUubmFtZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2ZpbGVzQWN0aW9uc10gRXJyb3IgZ2V0dGluZyBsaW5rIGZvciB1c2VyICR7dXNlcklkfSBmaWxlICR7ZmlsZS5pZH1gLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1NBK0NzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/content/_components/FileUpload.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropZonePreview": (()=>DropZonePreview),
    "default": (()=>FileUpload)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-dropzone/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$array$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/array.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/data.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$b10542__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:b10542 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$4a7110__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:4a7110 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
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
;
var Status = /*#__PURE__*/ function(Status) {
    Status["uploading"] = "uploading";
    Status["error"] = "error";
    return Status;
}(Status || {});
const DropZonePreview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function MessageItem({ open, t, onlyText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('absolute inset-0 z-10 mx-auto flex flex-grow flex-col items-center justify-center rounded-xl'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-col items-center justify-center gap-y-3 rounded-xl px-9 py-3', onlyText ? '' : 'border border-dashed border-storm-gray'),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "cbi-document-upload text-6xl text-main"
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-bold text-main",
                            children: t('KnowledgeBase.dropzoneLabel')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase text-light-gray",
                            children: [
                                ...new Set(Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCEPTED_FILE_TYPES"]).flat())
                            ].join(', ')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                !onlyText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex w-full items-center gap-2 text-main before:flex-grow before:border-b before:border-storm-gray before:content-[''] after:flex-grow after:border-b after:border-storm-gray after:content-['']",
                            children: t('KnowledgeBase.dropzoneDivider')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "solid",
                            color: "dark",
                            onClick: open,
                            className: "hover:bg-main hover:text-background",
                            children: t('KnowledgeBase.browseButton')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
});
_c = DropZonePreview;
function FileUpload({ initialView, children, isUploadAvailable }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleFileUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUpload.useCallback[handleFileUpload]": async (file)=>{
            const uploadedFileId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$4a7110__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["uploadFile"])(file);
            setFiles({
                "FileUpload.useCallback[handleFileUpload]": (prev)=>uploadedFileId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$array$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterArray"])(prev, uploadedFileId) : prev.map({
                        "FileUpload.useCallback[handleFileUpload]": (f)=>f.id === file.id ? {
                                ...file,
                                status: "error"
                            } : f
                    }["FileUpload.useCallback[handleFileUpload]"])
            }["FileUpload.useCallback[handleFileUpload]"]);
        }
    }["FileUpload.useCallback[handleFileUpload]"], []);
    const onDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUpload.useCallback[onDrop]": async (acceptedFiles, rejectedFiled)=>{
            if (!isUploadAvailable) {
                return alert('This fuctional is not available yet.');
            }
            const newFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapFiles"])(acceptedFiles, "uploading");
            const unsuportedFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapFiles"])(rejectedFiled.map({
                "FileUpload.useCallback[onDrop].unsuportedFiles": ({ file })=>file
            }["FileUpload.useCallback[onDrop].unsuportedFiles"]), 'error', 'KnowledgeBase.errors.unsupportedFormat');
            setFiles({
                "FileUpload.useCallback[onDrop]": (prevFiles)=>[
                        ...prevFiles,
                        ...newFiles,
                        ...unsuportedFiles
                    ]
            }["FileUpload.useCallback[onDrop]"]);
            newFiles.forEach(handleFileUpload);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$b10542__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["revalidateFilesTag"])();
        }
    }["FileUpload.useCallback[onDrop]"], [
        isUploadAvailable
    ]);
    const { getRootProps, getInputProps, isDragActive, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"])({
        onDrop,
        accept: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCEPTED_FILE_TYPES"],
        multiple: true,
        noClick: true,
        noKeyboard: true
    });
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileUpload.useCallback[handleOpen]": ()=>{
            if (!isUploadAvailable) return alert('This functional is not available yet.');
            open();
        }
    }["FileUpload.useCallback[handleOpen]"], [
        isUploadAvailable
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative z-0 flex min-h-64 w-full shrink-0 flex-grow flex-col gap-y-2 rounded-xl bg-graphic/[14%] p-3', isDragActive && 'z-20 bg-dark-aquamarine/[10%]'),
            ...getRootProps(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ...getInputProps()
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                (isDragActive || initialView) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropZonePreview, {
                    t: t,
                    open: handleOpen,
                    onlyText: isDragActive
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                    lineNumber: 138,
                    columnNumber: 43
                }, this),
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky bottom-0 z-[11] ms-auto flex w-fit max-w-[40%] flex-col items-end justify-end gap-y-3",
                    children: [
                        !!files.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "absolute bottom-12 flex h-[60vh] w-max max-w-96 flex-grow flex-col-reverse gap-y-1 overflow-y-auto px-1 will-change-scroll",
                            children: files.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "relative flex min-w-64 shrink-0 items-center gap-x-3 rounded-2xl bg-storm-gray px-3 py-2.5",
                                    children: [
                                        file.status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cbi-close-circle absolute right-0 top-2 -translate-x-[22%] px-1 text-light-gray",
                                            onClick: ()=>setFiles((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$array$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterArray"])(prev, file.id))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                            lineNumber: 151,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative inline-flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])("size-12 rounded-[50%] p-1 after:inline-block after:size-full after:rounded-[50%] after:bg-storm-gray after:content-['']", file.status === "uploading" && 'animate-spin bg-yellow-spinner')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-document-upload absolute text-main', file.status === "error" && '!text-2xl text-salmon')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                            lineNumber: 156,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "line-clamp-3 break-words pe-3 text-base font-medium text-main",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, this),
                                                file.message && t.has(file.message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-salmon",
                                                    children: t(file.message)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, `${file.name}-${index}`, true, {
                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        !initialView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleOpen,
                            variant: "solid",
                            color: "dark",
                            className: "sticky ms-auto self-end hover:bg-main hover:text-background",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "cbi-paperclip"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                t('KnowledgeBase.addDocumentButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/content/_components/FileUpload.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(FileUpload, "Rxe8o6JulnvN9srB6sKtKkYN89M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$dropzone$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useDropzone"]
    ];
});
_c1 = FileUpload;
var _c, _c1;
__turbopack_context__.k.register(_c, "DropZonePreview");
__turbopack_context__.k.register(_c1, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d673e8f5._.js.map