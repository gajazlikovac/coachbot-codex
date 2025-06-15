(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/server/actions/data:0ae729 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40f893ccb0638b828a20025d89e6a398dc0f8db092":"updateConfigInstructions"},"src/server/actions/instructionsActions.ts",""] */ __turbopack_context__.s({
    "updateConfigInstructions": (()=>updateConfigInstructions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateConfigInstructions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40f893ccb0638b828a20025d89e6a398dc0f8db092", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateConfigInstructions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vaW5zdHJ1Y3Rpb25zQWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVUYWcgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5pbXBvcnQgeyBBc3Npc3RhbnRTdGF0ZSB9IGZyb20gJ0AvYXBwLyhtYWluKS9pbnN0cnVjdGlvbnMvX2NvbXBvbmVudHMvU3lzdGVtSW5zdHJ1Y3Rpb25zJztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnQC9saWIvbW9kZWxzL2NvbW1vbi5tb2RlbHMnO1xuaW1wb3J0IHsgTW9kZXJhdGlvblJ1bGUsIE1vZGVyYXRpb25UZW1wbGF0ZSwgU3RhZ2UsIFN0eWxlIH0gZnJvbSAnQC9saWIvbW9kZWxzL2luc3RydWN0aW9uLm1vZGVscyc7XG5pbXBvcnQge1xuICBjYXRlZ29yeVNjaGVtYSxcbiAgZGVmYXVsdE1vZGVyYXRpb25SdWxlLFxuICBkZWZhdWx0U3R5bGVEYXRhLFxuICBpbnN0cnVjdGlvblNjaGVtYSxcbiAgbWFwTW9kZXJhdGlvblJ1bGUsXG4gIG1hcFByaXNtYU1vZGVyYXRpb25EYXRhLFxuICBtYXBTdHlsZURhdGEsXG4gIG1vZGVyYXRpb25SdWxlU2NoZW1hLFxuICBuYW1lU2NoZW1hLFxuICBzdGFnZVNjaGVtYSxcbiAgc3R5bGVTY2hlbWEsXG59IGZyb20gJ0AvbGliL3V0aWxzL2RiLnV0aWxzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUFzc2lzdGFudE1vZGVyYXRpb25SdWxlLFxuICBjcmVhdGVBc3Npc3RhbnRNb2RlcmF0aW9uVGVtcGxhdGUsXG4gIGNyZWF0ZUFzc2lzdGFudFN0YWdlLFxuICBjcmVhdGVBc3Npc3RhbnRTdHlsZSxcbiAgZGVsZXRlQXNzaXN0YW50TW9kZXJhdGlvblJ1bGUsXG4gIGRlbGV0ZUFzc2lzdGFudE1vZGVyYXRpb25UZW1wbGF0ZSxcbiAgZGVsZXRlQXNzaXN0YW50U3RhZ2UsXG4gIGRlbGV0ZUFzc2lzdGFudFN0eWxlLFxuICBnZXRBc3Npc3RhbnRGaXJzdFN0YWdlLFxuICBnZXRBc3Npc3RhbnRNb2RlcmF0aW9uUnVsZXMsXG4gIGdldEFzc2lzdGFudFN0YWdlcyxcbiAgZ2V0QXNzaXN0YW50U3R5bGVzLFxuICB1cGRhdGVBc3Npc3RhbnRNb2RlcmF0aW9uUnVsZSxcbiAgdXBkYXRlQXNzaXN0YW50TW9kZXJhdGlvblRlbXBsYXRlLFxuICB1cGRhdGVBc3Npc3RhbnRTdGFnZSxcbiAgdXBkYXRlQXNzaXN0YW50U3RhZ2VzT3JkZXIsXG4gIHVwZGF0ZUFzc2lzdGFudFN0eWxlLFxuICB1cGRhdGVDb25maWd1cmF0aW9uSW5zdHJ1Y3Rpb25zLFxufSBmcm9tICcuLi9kYi9jb25maWd1cmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IGdldEFzc2lzdGFudENvbmZpZ3VyYXRpb24sIGdldEN1cnJlbnRBc3Npc3RhbnQgfSBmcm9tICcuL2Fzc2lzdGFudEFjdGlvbnMnO1xuXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUFuZFVwZGF0ZUl0ZW08UywgVCBleHRlbmRzIHsgaWQ6IFMgfT4oXG4gIGRhdGE6IFQsXG4gIHNjaGVtYTogei5ab2RTY2hlbWE8UGFydGlhbDxUPj4sXG4gIHVwZGF0ZUZ1bmN0aW9uOiAoYXNzaXN0YW50SWQ6IHN0cmluZywgaWQ6IFMsIGRhdGE6IFBhcnRpYWw8VD4pID0+IFByb21pc2U8YW55PixcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyxcbiAgdGFnPzogc3RyaW5nXG4pOiBQcm9taXNlPFN0YXRlPFQ+PiB7XG4gIGxldCBhc3Npc3RhbnRJZDtcbiAgdHJ5IHtcbiAgICBhc3Npc3RhbnRJZCA9IGF3YWl0IGdldEN1cnJlbnRBc3Npc3RhbnQoKTtcblxuICAgIGlmICghYXNzaXN0YW50SWQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQXNzaXN0YW50IG5vdCBmb3VuZCBvciB1c2VyIG5vdCBhdXRoZW50aWNhdGVkJyk7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ0dlbmVyYWwuZXJyb3JzLm5vQXNzaXN0YW50RXhpc3QnLCB2YWx1ZTogbnVsbCB9O1xuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBzY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuXG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7IGVycm9yczogcGFyc2VkRGF0YS5lcnJvci5lcnJvcnMubWFwKCh7IG1lc3NhZ2UsIHBhdGggfSkgPT4gKHsgbmFtZTogcGF0aC5qb2luKCcuJyksIG1lc3NhZ2UgfSkpIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBhd2FpdCB1cGRhdGVGdW5jdGlvbihhc3Npc3RhbnRJZCwgZGF0YS5pZCwgcGFyc2VkRGF0YS5kYXRhKTtcblxuICAgIHRhZyAmJiByZXZhbGlkYXRlVGFnKHRhZyk7XG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2UsIHZhbHVlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0FjdGlvbnNdIEVycm9yIGR1cmluZyB1cGRhdGluZyAnJHtkYXRhLmlkfScgJHt0YWd9IGl0ZW0gOiBgLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3I6ICdJbnN0cnVjdGlvbnMuc3lzdGVtSW5zdHJ1Y3Rpb24uZXJyb3JzLnNhdmVGYWlsZWQnLCB2YWx1ZTogZGF0YSB9O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUl0ZW08VD4oXG4gIGRhdGE6IFQsXG4gIGNyZWF0ZUZ1bmN0aW9uOiAoYXNzaXN0YW50SWQ6IHN0cmluZywgZGF0YTogVCkgPT4gUHJvbWlzZTxUPixcbiAgc3VjY2Vzc01lc3NhZ2U6IHN0cmluZyxcbiAgdGFnczogc3RyaW5nW10gPSBbXVxuKTogUHJvbWlzZTxTdGF0ZTxUPj4ge1xuICBsZXQgYXNzaXN0YW50Q29uZmlnSWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgYXNzaXN0YW50Q29uZmlnID0gYXdhaXQgZ2V0QXNzaXN0YW50Q29uZmlndXJhdGlvbigpO1xuICAgIGFzc2lzdGFudENvbmZpZ0lkID0gYXNzaXN0YW50Q29uZmlnPy5pZDtcblxuICAgIGlmICghYXNzaXN0YW50Q29uZmlnSWQpIHtcbiAgICAgIGNvbnNvbGUud2FybignQXNzaXN0YW50IG5vdCBmb3VuZCBvciB1c2VyIG5vdCBhdXRoZW50aWNhdGVkJyk7XG4gICAgICByZXR1cm4geyBlcnJvcjogJ0dlbmVyYWwuZXJyb3JzLm5vQXNzaXN0YW50RXhpc3QnLCB2YWx1ZTogbnVsbCB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZWRJdGVtOiBhbnkgPSBhd2FpdCBjcmVhdGVGdW5jdGlvbihhc3Npc3RhbnRDb25maWdJZCwgZGF0YSBhcyBUKTtcbiAgICB0YWdzLmZvckVhY2gocmV2YWxpZGF0ZVRhZyk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzTWVzc2FnZSwgdmFsdWU6IGNyZWF0ZWRJdGVtIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0FjdGlvbnNdIEVycm9yIGR1cmluZyBjcmVhdGluZyAke3RhZ3M/LlswXX0gaXRlbWAsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0luc3RydWN0aW9ucy5zeXN0ZW1JbnN0cnVjdGlvbi5lcnJvcnMuc2F2ZUZhaWxlZCcgfTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRJdGVtczxUPihnZXRGdW5jdGlvbjogKGFzc2lzdGFudElkOiBzdHJpbmcpID0+IFByb21pc2U8VD4sIHRhZz86IHN0cmluZywgaWQ/OiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gaWQgfHwgKGF3YWl0IGdldEN1cnJlbnRBc3Npc3RhbnQoKSk7XG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBbXSBhcyBUO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRGdW5jdGlvbihhc3Npc3RhbnRJZCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0FjdGlvbnNdIEVycm9yIGR1cmluZyBnZXR0aW5nIGFzc2lzdGFudCAnJHthc3Npc3RhbnRJZH0nICAke3RhZ30gZGF0YWAsIGVycm9yKTtcbiAgICByZXR1cm4gW10gYXMgVDtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVJdGVtPFQ+KFxuICBpZDogVCxcbiAgZGVsZXRlRnVuY3Rpb246IChpZDogVCkgPT4gUHJvbWlzZTxhbnk+LFxuICBzdWNjZXNzTWVzc2FnZTogc3RyaW5nLFxuICB0YWdzOiBzdHJpbmdbXSA9IFtdXG4pOiBQcm9taXNlPFN0YXRlPG51bGw+PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZGVsZXRlRnVuY3Rpb24oaWQpO1xuICAgIHRhZ3MuZm9yRWFjaChyZXZhbGlkYXRlVGFnKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlLCB2YWx1ZTogbnVsbCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtpbnN0cnVjdGlvbnNBY3Rpb25zXSBFcnJvciBkdXJpbmcgZGVsZXRpbmcgJyR7aWR9JyAgJHt0YWdzWzBdfSBkYXRhLmAsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogJ0luc3RydWN0aW9ucy5zeXN0ZW1JbnN0cnVjdGlvbi5lcnJvcnMuc2F2ZUZhaWxlZCcgfTtcbiAgfVxufVxuXG4vLyBNQUlOIElOU1RSVUNUSU9OU1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNvbmZpZ0luc3RydWN0aW9ucyhmb3JtRGF0YTogYW55KTogUHJvbWlzZTxTdGF0ZTxBc3Npc3RhbnRTdGF0ZT4+IHtcbiAgbGV0IGFzc2lzdGFudElkO1xuICB0cnkge1xuICAgIGFzc2lzdGFudElkID0gKGF3YWl0IGdldEN1cnJlbnRBc3Npc3RhbnQoKSkgfHwgJyc7XG4gICAgY29uc3QgZm9ybUluc3RydWN0aW9ucyA9IGZvcm1EYXRhPy5nZXQoJ2luc3RydWN0aW9ucycpO1xuICAgIGNvbnN0IGZvcm1PbmJvYXJkaW5nID0gZm9ybURhdGE/LmdldCgnb25ib2FyZGluZycpO1xuICAgIGNvbnN0IHZhbGlkYXRlZERhdGEgPSBmb3JtSW5zdHJ1Y3Rpb25zICYmIGluc3RydWN0aW9uU2NoZW1hLnBhcnNlKHsgaW5zdHJ1Y3Rpb25zOiBmb3JtSW5zdHJ1Y3Rpb25zIH0pO1xuXG4gICAgaWYgKHZhbGlkYXRlZERhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IHZhbGlkYXRlZERhdGEubWVzc2FnZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgaW5zdHJ1Y3Rpb25zLCBvbmJvYXJkaW5nIH0gPSBhd2FpdCB1cGRhdGVDb25maWd1cmF0aW9uSW5zdHJ1Y3Rpb25zKGFzc2lzdGFudElkLCB7XG4gICAgICBpbnN0cnVjdGlvbnM6ICEhZm9ybUluc3RydWN0aW9ucyA/IGZvcm1JbnN0cnVjdGlvbnMgOiB1bmRlZmluZWQsXG4gICAgICBvbmJvYXJkaW5nOiAhIWZvcm1PbmJvYXJkaW5nID8gZm9ybU9uYm9hcmRpbmcgOiB1bmRlZmluZWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2Vzc01lc3NhZ2U6ICdJbnN0cnVjdGlvbnMuc3lzdGVtSW5zdHJ1Y3Rpb24uc3VjY2Vzc01lc3NhZ2VzJywgdmFsdWU6IHsgaW5zdHJ1Y3Rpb25zLCBvbmJvYXJkaW5nIH0gfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciB1cGRhdGluZyBhc3Npc3RhbnQgJHthc3Npc3RhbnRJZH0gaW5zdHJ1Y3Rpb25zOmAsIGVycm9yKTtcblxuICAgIHJldHVybiB7IGVycm9yOiAnSW5zdHJ1Y3Rpb25zLnN5c3RlbUluc3RydWN0aW9uLmVycm9ycy5zYXZlRmFpbGVkJyB9O1xuICB9XG59XG5cbi8vIFNUWUxFU1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0eWxlcygpOiBQcm9taXNlPFN0eWxlW10+IHtcbiAgY29uc3Qgc3R5bGVzID0gKGF3YWl0IGdldEl0ZW1zKGdldEFzc2lzdGFudFN0eWxlcywgJ3N0eWxlcycpKSB8fCBbXTtcblxuICByZXR1cm4gc3R5bGVzLm1hcChtYXBTdHlsZURhdGEpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlU3R5bGUoc3R5bGU6IFN0eWxlKTogUHJvbWlzZTxTdGF0ZTxTdHlsZSB8IG51bGw+PiB7XG4gIGNvbnN0IHN0eWxlRGF0YSA9IHtcbiAgICAuLi5zdHlsZSxcbiAgICBncmVldGluZ190ZW1wbGF0ZXM6IEpTT04uc3RyaW5naWZ5KHN0eWxlLmdyZWV0aW5nX3RlbXBsYXRlcy5zcGxpdCgnXFxuJykpLFxuICAgIHJlc3BvbnNlX3BhdHRlcm5zOiBKU09OLnN0cmluZ2lmeShzdHlsZS5yZXNwb25zZV9wYXR0ZXJucy5zcGxpdCgnXFxuJykpLFxuICAgIGNsb3NpbmdfdGVtcGxhdGVzOiBKU09OLnN0cmluZ2lmeShzdHlsZS5jbG9zaW5nX3RlbXBsYXRlcy5zcGxpdCgnXFxuJykpLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlQW5kVXBkYXRlSXRlbTxudW1iZXIsIFN0eWxlPihcbiAgICBzdHlsZURhdGEsXG4gICAgc3R5bGVTY2hlbWEsXG4gICAgdXBkYXRlQXNzaXN0YW50U3R5bGUsXG4gICAgJ0luc3RydWN0aW9ucy5TdHlsZXMuc3VjY2Vzc01lc3NhZ2UnLFxuICAgICdzdHlsZXMnXG4gICk7XG5cbiAgcmV0dXJuIHsgLi4ucmVzdWx0LCB2YWx1ZTogcmVzdWx0LnZhbHVlID8gbWFwU3R5bGVEYXRhKHJlc3VsdC52YWx1ZSkgOiByZXN1bHQudmFsdWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlVGl0bGUoaWQ6IG51bWJlciwgdGl0bGU6IHN0cmluZyk6IFByb21pc2U8U3RhdGU8U3R5bGUgfCBudWxsPj4ge1xuICBsZXQgYXNzaXN0YW50SWQ7XG4gIHRyeSB7XG4gICAgYXNzaXN0YW50SWQgPSAoYXdhaXQgZ2V0Q3VycmVudEFzc2lzdGFudCgpKSB8fCAnJztcbiAgICBjb25zdCB2YWx1ZTogYW55ID0gYXdhaXQgdXBkYXRlQXNzaXN0YW50U3R5bGUoYXNzaXN0YW50SWQgfHwgJycsIGlkLCB7IC4uLmRlZmF1bHRTdHlsZURhdGEsIHRpdGxlLCBhc3Npc3RhbnRJZCB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3NNZXNzYWdlOiAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgdmFsdWU6IG1hcFN0eWxlRGF0YSh2YWx1ZSkgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbaW5zdHJ1Y3Rpb25zQ2xpZW50XSBFcnJvciB1cGRhdGluZyBzdHlsZSAke2lkfSB0aXRsZTpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4geyBlcnJvcjogJ0dlbmVyYWwuZXJyb3JzLnVuZXhwZWN0ZWRFcnJvcicsIHZhbHVlOiBudWxsIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlKHRpdGxlOiBzdHJpbmcpOiBQcm9taXNlPFN0YXRlPFN0eWxlIHwgbnVsbD4+IHtcbiAgcmV0dXJuIGNyZWF0ZUl0ZW08YW55Pih7IC4uLmRlZmF1bHRTdHlsZURhdGEsIHRpdGxlIH0sIGNyZWF0ZUFzc2lzdGFudFN0eWxlLCAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgW1xuICAgICdzdHlsZXMnLFxuICBdKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVN0eWxlKGlkOiBudW1iZXIpOiBQcm9taXNlPFN0YXRlPG51bGw+PiB7XG4gIHJldHVybiBkZWxldGVJdGVtKGlkLCBkZWxldGVBc3Npc3RhbnRTdHlsZSwgJ0dlbmVyYWwuc3VjY2Vzc01lc3NhZ2VzLmRhdGFEZWxldGVkJywgWydzdHlsZXMnXSk7XG59XG5cbi8vIFNUQUdFU1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YWdlcyhpZD86IHN0cmluZyk6IFByb21pc2U8U3RhZ2VbXT4ge1xuICByZXR1cm4gZ2V0SXRlbXM8U3RhZ2VbXT4oZ2V0QXNzaXN0YW50U3RhZ2VzLCAnc3RhZ2VzJywgaWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rmlyc3RTdGFnZSgpOiBQcm9taXNlPFN0YWdlIHwgbnVsbD4ge1xuICByZXR1cm4gZ2V0SXRlbXM8U3RhZ2UgfCBudWxsPihnZXRBc3Npc3RhbnRGaXJzdFN0YWdlLCAnZmlyc3Qgc3RhZ2UnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVN0YWdlKHN0YWdlOiBTdGFnZSwgb25seU5hbWU/OiBib29sZWFuKTogUHJvbWlzZTxTdGF0ZTxTdGFnZT4+IHtcbiAgcmV0dXJuIHZhbGlkYXRlQW5kVXBkYXRlSXRlbTxzdHJpbmcsIFN0YWdlPihcbiAgICBzdGFnZSxcbiAgICBvbmx5TmFtZSA/IG5hbWVTY2hlbWEgOiBzdGFnZVNjaGVtYSxcbiAgICB1cGRhdGVBc3Npc3RhbnRTdGFnZSxcbiAgICAnSW5zdHJ1Y3Rpb25zLnN5c3RlbUluc3RydWN0aW9uLnN1Y2Nlc3NNZXNzYWdlcycsXG4gICAgJ3N0YWdlcydcbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTdGFnZU9yZGVyKHRhcmdldFN0YWdlOiBTdGFnZSwgY2hhbmdlZE9yZGVyOiBudW1iZXIsIHN0YWdlczogU3RhZ2VbXSk6IFByb21pc2U8U3RhZ2VbXT4ge1xuICBsZXQgYXNzaXN0YW50SWQ7XG4gIHRyeSB7XG4gICAgYXNzaXN0YW50SWQgPSBhd2FpdCBnZXRDdXJyZW50QXNzaXN0YW50KCk7XG4gICAgaWYgKCFhc3Npc3RhbnRJZCkge1xuICAgICAgY29uc29sZS53YXJuKCdBc3Npc3RhbnQgbm90IGZvdW5kIG9yIHVzZXIgbm90IGF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdPcmRlciA9IHRhcmdldFN0YWdlLm9yZGVyICsgY2hhbmdlZE9yZGVyO1xuXG4gICAgY29uc3QgdXBkYXRlZFN0YWdlcyA9IHN0YWdlcy5tYXAoKHN0YWdlOiBTdGFnZSkgPT4ge1xuICAgICAgaWYgKHN0YWdlLmlkID09PSB0YXJnZXRTdGFnZS5pZCkge1xuICAgICAgICByZXR1cm4geyAuLi50YXJnZXRTdGFnZSwgb3JkZXI6IG5ld09yZGVyIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFnZS5vcmRlciA9PT0gbmV3T3JkZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhZ2UsIG9yZGVyOiBzdGFnZS5vcmRlciAtIGNoYW5nZWRPcmRlciB8fCBzdGFnZS5vcmRlciArIGNoYW5nZWRPcmRlciB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhZ2U7XG4gICAgfSk7XG5cbiAgICBhd2FpdCB1cGRhdGVBc3Npc3RhbnRTdGFnZXNPcmRlcihhc3Npc3RhbnRJZCwgdXBkYXRlZFN0YWdlcyk7XG4gICAgWydzdGFnZXMnLCAnZmlyc3RTdGFnZSddLmZvckVhY2gocmV2YWxpZGF0ZVRhZyk7XG5cbiAgICByZXR1cm4gdXBkYXRlZFN0YWdlcy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2luc3RydWN0aW9uc0NsaWVudF0gRXJyb3IgdXBkYXRpbmcgYXNzaXN0YW50ICR7YXNzaXN0YW50SWR9IHN0YWdlcyBvcmRlcjpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVN0YWdlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8U3RhdGU8U3RhZ2UgfCBudWxsPj4ge1xuICByZXR1cm4gY3JlYXRlSXRlbTxTdGFnZT4oeyBuYW1lIH0gYXMgU3RhZ2UsIGNyZWF0ZUFzc2lzdGFudFN0YWdlLCAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJywgW1xuICAgICdzdGFnZXMnLFxuICAgICdmaXJzdFN0YWdlJyxcbiAgXSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTdGFnZShpZDogc3RyaW5nKTogUHJvbWlzZTxTdGF0ZTxudWxsPj4ge1xuICByZXR1cm4gZGVsZXRlSXRlbShpZCwgZGVsZXRlQXNzaXN0YW50U3RhZ2UsICdHZW5lcmFsLnN1Y2Nlc3NNZXNzYWdlcy5kYXRhRGVsZXRlZCcsIFsnc3RhZ2VzJywgJ2ZpcnN0U3RhZ2UnXSk7XG59XG5cbi8vIE1PREVSQVRJT04gUlVMRVMgJiBURU1QTEFURVNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNb2RlcmF0aW9uUnVsZXMoKTogUHJvbWlzZTxNb2RlcmF0aW9uUnVsZVtdPiB7XG4gIGNvbnN0IHJ1bGVzID0gYXdhaXQgZ2V0SXRlbXMoZ2V0QXNzaXN0YW50TW9kZXJhdGlvblJ1bGVzLCAnbW9kZXJhdGlvbiBydWxlcycpO1xuXG4gIHJldHVybiBydWxlcy5tYXAoKHJ1bGUpID0+IG1hcFByaXNtYU1vZGVyYXRpb25EYXRhKHJ1bGUpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1vZGVyYXRpb25SdWxlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8U3RhdGU8TW9kZXJhdGlvblJ1bGUgfCBudWxsPj4ge1xuICBjb25zdCBzdGF0ZSA9IGF3YWl0IGNyZWF0ZUl0ZW08YW55PihcbiAgICB7IC4uLmRlZmF1bHRNb2RlcmF0aW9uUnVsZSwgbmFtZSB9LFxuICAgIGNyZWF0ZUFzc2lzdGFudE1vZGVyYXRpb25SdWxlLFxuICAgICdHZW5lcmFsLnN1Y2Nlc3NNZXNzYWdlcy5kYXRhU2F2ZWQnLFxuICAgIFsnbW9kZXJhdGlvblJ1bGVzJ11cbiAgKTtcblxuICByZXR1cm4geyAuLi5zdGF0ZSwgdmFsdWU6IG1hcFByaXNtYU1vZGVyYXRpb25EYXRhKHN0YXRlLnZhbHVlKSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTW9kZXJhdGlvblJ1bGUoXG4gIHJ1bGU6IE1vZGVyYXRpb25SdWxlLFxuICBvbmx5TmFtZTogYm9vbGVhbiA9IGZhbHNlLFxuICBzZWxlY3RlZFRlbXBsYXRlczogTW9kZXJhdGlvblRlbXBsYXRlW10gPSBbXVxuKTogUHJvbWlzZTxTdGF0ZTxNb2RlcmF0aW9uUnVsZSB8IG51bGw+PiB7XG4gIGNvbnN0IHN0YXRlID0gYXdhaXQgdmFsaWRhdGVBbmRVcGRhdGVJdGVtPHN0cmluZywgTW9kZXJhdGlvblJ1bGU+KFxuICAgIG1hcE1vZGVyYXRpb25SdWxlKHJ1bGUsIHNlbGVjdGVkVGVtcGxhdGVzKSxcbiAgICBvbmx5TmFtZSA/IG5hbWVTY2hlbWEgOiBtb2RlcmF0aW9uUnVsZVNjaGVtYSxcbiAgICB1cGRhdGVBc3Npc3RhbnRNb2RlcmF0aW9uUnVsZSxcbiAgICAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YVNhdmVkJyxcbiAgICAnbW9kZXJhdGlvblJ1bGVzJ1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmFsdWU6IHN0YXRlLnZhbHVlID8gbWFwUHJpc21hTW9kZXJhdGlvbkRhdGEoc3RhdGUudmFsdWUgYXMgYW55LCBzZWxlY3RlZFRlbXBsYXRlcykgOiBzdGF0ZS52YWx1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZU1vZGVyYXRpb25SdWxlKGlkOiBzdHJpbmcpOiBQcm9taXNlPFN0YXRlPE1vZGVyYXRpb25SdWxlIHwgbnVsbD4+IHtcbiAgcmV0dXJuIGRlbGV0ZUl0ZW0oaWQsIGRlbGV0ZUFzc2lzdGFudE1vZGVyYXRpb25SdWxlLCAnR2VuZXJhbC5zdWNjZXNzTWVzc2FnZXMuZGF0YURlbGV0ZWQnLCBbJ21vZGVyYXRpb25SdWxlcyddKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1vZGVyYXRpb25UZW1wbGF0ZShcbiAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgcnVsZV9pZD86IHN0cmluZ1xuKTogUHJvbWlzZTxTdGF0ZTxNb2RlcmF0aW9uVGVtcGxhdGUgfCBudWxsPj4ge1xuICBpZiAoIXJ1bGVfaWQpIHJldHVybiB7IGVycm9yOiAnSW5zdHJ1Y3Rpb25zLk1vZGVyYXRpb25SdWxlcy5zZXR0aW5ncy5ub1J1bGVTZWxlY3RlZEVycm9yJywgdmFsdWU6IG51bGwgfTtcblxuICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IGNyZWF0ZUl0ZW08TW9kZXJhdGlvblRlbXBsYXRlPihcbiAgICB7IHJ1bGVfaWQsIGNhdGVnb3J5LCByZXNwb25zZV90ZW1wbGF0ZTogJycgfSBhcyBNb2RlcmF0aW9uVGVtcGxhdGUsXG4gICAgY3JlYXRlQXNzaXN0YW50TW9kZXJhdGlvblRlbXBsYXRlLFxuICAgICdHZW5lcmFsLnN1Y2Nlc3NNZXNzYWdlcy5kYXRhU2F2ZWQnXG4gICk7XG5cbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTW9kZXJhdGlvblRlbXBsYXRlKFxuICB0ZW1wbGF0ZTogTW9kZXJhdGlvblRlbXBsYXRlXG4pOiBQcm9taXNlPFN0YXRlPE1vZGVyYXRpb25UZW1wbGF0ZSB8IG51bGw+PiB7XG4gIGNvbnN0IHN0YXRlID0gYXdhaXQgdmFsaWRhdGVBbmRVcGRhdGVJdGVtPHN0cmluZywgTW9kZXJhdGlvblRlbXBsYXRlPihcbiAgICB0ZW1wbGF0ZSxcbiAgICBjYXRlZ29yeVNjaGVtYSxcbiAgICB1cGRhdGVBc3Npc3RhbnRNb2RlcmF0aW9uVGVtcGxhdGUsXG4gICAgJ0dlbmVyYWwuc3VjY2Vzc01lc3NhZ2VzLmRhdGFTYXZlZCdcbiAgKTtcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVNb2RlcmF0aW9uVGVtcGxhdGUoaWQ6IHN0cmluZyk6IFByb21pc2U8U3RhdGU8TW9kZXJhdGlvblRlbXBsYXRlIHwgbnVsbD4+IHtcbiAgcmV0dXJuIGRlbGV0ZUl0ZW0oaWQsIGRlbGV0ZUFzc2lzdGFudE1vZGVyYXRpb25UZW1wbGF0ZSwgJ0dlbmVyYWwuc3VjY2Vzc01lc3NhZ2VzLmRhdGFEZWxldGVkJyk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjJUQXVJc0IifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/InstructionInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InstructionInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function InstructionInput({ id, name, labelKey, tooltipKey, className, disabled, isLoading, initialValue, topControls = true, bottomControls = true, showSaveOnChanges = true, showSave = true, register, required, errors, onBlur }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InstructionInput.useEffect": ()=>{
            setValue(initialValue || '');
        }
    }["InstructionInput.useEffect"], [
        initialValue
    ]);
    const isSaveVisible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InstructionInput.useMemo[isSaveVisible]": ()=>{
            return showSaveOnChanges ? initialValue !== value : showSave;
        }
    }["InstructionInput.useMemo[isSaveVisible]"], [
        showSave,
        showSaveOnChanges,
        initialValue,
        value
    ]);
    const inputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InstructionInput.useMemo[inputProps]": ()=>{
            if (!register) {
                return {
                    required,
                    value,
                    onChange: ({
                        "InstructionInput.useMemo[inputProps]": (e)=>setValue(e.target.value)
                    })["InstructionInput.useMemo[inputProps]"],
                    onBlur: ({
                        "InstructionInput.useMemo[inputProps]": ()=>onBlur && onBlur(value)
                    })["InstructionInput.useMemo[inputProps]"]
                };
            }
            const registerProps = register(name, {
                required
            });
            return {
                ...registerProps,
                onChange: ({
                    "InstructionInput.useMemo[inputProps]": async (e)=>{
                        setValue(e.target.value);
                        await registerProps.onChange(e);
                    }
                })["InstructionInput.useMemo[inputProps]"],
                onBlur: ({
                    "InstructionInput.useMemo[inputProps]": async (e)=>{
                        onBlur && onBlur(value);
                        await registerProps.onBlur(e);
                    }
                })["InstructionInput.useMemo[inputProps]"]
            };
        }
    }["InstructionInput.useMemo[inputProps]"], [
        register,
        onBlur,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex flex-col gap-y-2.5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between ps-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "inline-flex items-center gap-x-2 text-sm text-storm-gray",
                        children: [
                            labelKey && t(labelKey),
                            tooltipKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                iconClass: "cbi-message-question",
                                tooltipLabel: tooltipKey
                            }, void 0, false, {
                                fileName: "[project]/src/shared/InstructionInput.tsx",
                                lineNumber: 83,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/InstructionInput.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    topControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-x-1"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/InstructionInput.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/InstructionInput.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('relative flex flex-grow flex-col justify-between gap-y-3 rounded-lg border border-light-gray bg-white/[18%] p-1 pt-2', (disabled || isLoading) && 'border-light-gray/80 bg-white/[6%]'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: id,
                        name: name,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('focus:no-outline mx-1.5 flex flex-grow resize-none overflow-y-auto bg-transparent pb-20 pe-3 pt-4 text-base text-main focus:ring-0', isLoading && 'pointer-events-none animate-pulse', disabled && 'pointer-events-none opacity-10'),
                        ...inputProps
                    }, void 0, false, {
                        fileName: "[project]/src/shared/InstructionInput.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    bottomControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1 right-1 flex gap-x-1",
                        children: isSaveVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            name: `${name}-submit`,
                            type: "submit",
                            variant: "solid",
                            color: "light",
                            className: `${isLoading && 'pointer-events-none animate-pulse'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "cbi-archive-tick"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/InstructionInput.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                t('General.Instruction.saveButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/InstructionInput.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/InstructionInput.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/InstructionInput.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            errors && errors[name] && t.has(errors[name].message) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-salmon",
                children: t(errors[name].message)
            }, void 0, false, {
                fileName: "[project]/src/shared/InstructionInput.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/InstructionInput.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(InstructionInput, "RVG9aXXWvuloEaRsW2V4MHclWrc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = InstructionInput;
var _c;
__turbopack_context__.k.register(_c, "InstructionInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SystemInstructions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$analytic$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/analytic.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/HeapAnalytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$0ae729__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:0ae729 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CollapsiblePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/CollapsiblePanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$InstructionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/InstructionInput.tsx [app-client] (ecmascript)");
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
function SystemInstructions({ className, assistantConfig$ }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { instructions = '', onboarding = '' } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(assistantConfig$) || {};
    const [initialValue, setInitialValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        instructions,
        onboarding
    });
    const { selectedAssistant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    const handleSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SystemInstructions.useCallback[handleSave]": async (formData)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$HeapAnalytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heapAnalytics"].trackEvent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$analytic$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeapTrackEvent"].save_main_instruction);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$0ae729__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateConfigInstructions"])(formData);
            result.value && setInitialValue(result.value);
            return result;
        }
    }["SystemInstructions.useCallback[handleSave]"], []);
    const handleAutoSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SystemInstructions.useCallback[handleAutoSave]": async (value, key)=>{
            const formData = new FormData();
            formData.append(key, value);
            await handleSave(formData);
        }
    }["SystemInstructions.useCallback[handleAutoSave]"], []);
    const [state, saveAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])({
        "SystemInstructions.useActionState": async (_, formData)=>handleSave(formData)
    }["SystemInstructions.useActionState"], {
        value: initialValue
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SystemInstructions.useEffect": ()=>setInitialValue({
                instructions,
                onboarding
            })
    }["SystemInstructions.useEffect"], [
        instructions,
        onboarding
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-grow flex-col', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                action: saveAction,
                className: "flex flex-grow flex-col gap-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CollapsiblePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: t('Instructions.systemInstruction.label'),
                        subTitle: t('Instructions.systemInstruction.tooltip'),
                        toggleText: true,
                        toggleClass: "bg-white/[50%] border border-white/[6%] rounded-xl p-3 rotate-0 group-data-[open]:rotate-180",
                        className: "border-0 bg-light-gray/[18%] py-4 ps-5 text-sm text-light-gray data-[open]:bg-white/[8%] data-[open]:text-main",
                        titleClass: "uppercase font-bold",
                        contentClassName: "border-0 bg-white/[8%] p-3 data-[open]:pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$InstructionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            disabled: !selectedAssistant?.id,
                            name: "instructions",
                            isLoading: isPending,
                            className: 'min-h-[45svh] shrink-0 flex-grow',
                            id: "system-instructions-input",
                            initialValue: initialValue.instructions || '',
                            onBlur: (value)=>handleAutoSave(value, 'instructions')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$CollapsiblePanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: t('Instructions.onboardingInstruction.label'),
                        subTitle: t('Instructions.onboardingInstruction.tooltip'),
                        toggleText: true,
                        toggleClass: "bg-white/[50%] border border-white/[6%] rounded-xl p-3 rotate-0 group-data-[open]:rotate-180",
                        className: "border-0 bg-light-gray/[18%] py-4 ps-5 text-sm text-light-gray data-[open]:bg-white/[8%] data-[open]:text-main",
                        titleClass: "uppercase font-bold",
                        contentClassName: "border-0 bg-white/[8%] p-3 data-[open]:pt-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$InstructionInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            disabled: !selectedAssistant?.id,
                            name: "onboarding",
                            isLoading: isPending,
                            className: 'min-h-[45svh] shrink-0 flex-grow',
                            id: "onboarding-instructions-input",
                            initialValue: initialValue.onboarding || '',
                            onBlur: (value)=>handleAutoSave(value, 'onboarding')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            state?.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-salmon",
                children: t(state.error)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                lineNumber: 97,
                columnNumber: 24
            }, this),
            state?.successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-green-600",
                children: t(state.successMessage)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
                lineNumber: 98,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/instructions/_components/SystemInstructions.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(SystemInstructions, "djS6ArSSxCVazhv+2zS/sW4Qxro=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = SystemInstructions;
var _c;
__turbopack_context__.k.register(_c, "SystemInstructions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f947f5da._.js.map