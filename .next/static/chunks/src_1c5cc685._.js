(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/server/actions/data:5bc2a1 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"701fd9cb63179bad9d91d2752458c2f3d0fcd2ab80":"updateChat"},"src/server/actions/chatActions.ts",""] */ __turbopack_context__.s({
    "updateChat": (()=>updateChat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateChat = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("701fd9cb63179bad9d91d2752458c2f3d0fcd2ab80", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateChat"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY2hhdEFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlVGFnIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmltcG9ydCB7IEFuYWx5emVTdGFnZURhdGEgfSBmcm9tICdAL2xpYi9tb2RlbHMvYXBpLm1vZGVscyc7XG5pbXBvcnQgeyBDaGF0LCBDaGF0SW5mbywgTWVzc2FnZSB9IGZyb20gJ0AvbGliL21vZGVscy9jaGF0Lm1vZGVscyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVNlc3Npb25OYW1lIH0gZnJvbSAnQC9saWIvdXRpbHMvY2hhdC51dGlscyc7XG5pbXBvcnQge1xuICBjcmVhdGVDaGF0LFxuICBnZXRVc2VyQ2hhdCxcbiAgZ2V0VXNlckNoYXRzLFxuICByZW1vdmVDaGF0LFxuICB1cGRhdGVMYXN0TWVzc2FnZUluQ2hhdCxcbiAgdXBkYXRlVXNlckNoYXQsXG59IGZyb20gJy4uL2RiL2NoYXRDbGllbnQnO1xuaW1wb3J0IHsgZ2V0Rmlyc3RTdGFnZSB9IGZyb20gJy4vaW5zdHJ1Y3Rpb25zQWN0aW9ucyc7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXNBY3Rpb24nO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvblVzZXIsIHZlcmlmeVNlc3Npb24gfSBmcm9tICcuL3Nlc3Npb25BY3Rpb25zJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN0YWdlQW5hbHlzaXMoY2hhdElkOiBzdHJpbmcsIHN0YWdlQW5hbHlzaXM6IEFuYWx5emVTdGFnZURhdGEgfCBudWxsKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgaWYgKCFzdGFnZUFuYWx5c2lzKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHRyYW5zaXRpb25fcmVxdWlyZWQsIGN1cnJlbnRfc3RhZ2UsIG5leHRfc3RhZ2UgfSA9IHN0YWdlQW5hbHlzaXM7XG5cbiAgICBjb25zdCBbY2hhdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB1cGRhdGVVc2VyQ2hhdChjaGF0SWQsIHtcbiAgICAgICAgc3RhZ2VBbmFseXNpcyxcbiAgICAgICAgY3VycmVudFN0YWdlOiB0cmFuc2l0aW9uX3JlcXVpcmVkID8gbmV4dF9zdGFnZSA6IGN1cnJlbnRfc3RhZ2UsXG4gICAgICB9KSxcbiAgICAgIHVwZGF0ZUxhc3RNZXNzYWdlSW5DaGF0KGNoYXRJZCwgeyBzdGFnZUFuYWx5c2lzOiBKU09OLnN0cmluZ2lmeShzdGFnZUFuYWx5c2lzKSB9KSxcbiAgICBdKTtcblxuICAgIGNvbnN0IGV2ZW50RW1pdHRlciA9IChhd2FpdCBpbXBvcnQoJ0AvbGliL2V2ZW50RW1pdHRlcicpKS5kZWZhdWx0O1xuICAgIGV2ZW50RW1pdHRlci5lbWl0KGBtZXNzYWdlOiR7Y2hhdC51c2VySWR9YCwge1xuICAgICAgdXNlcl9pZDogY2hhdC51c2VySWQsXG4gICAgICBldmVudDogJ2NoYXQtdXBkYXRlJyxcbiAgICAgIGRhdGE6IHsgY2hhdElkOiBjaGF0LmlkLCB0eXBlOiAnc3RhZ2UtYW5hbHlzaXMnIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2NoYXRBY3Rpb25zXSBlcnJvciBkdXJpbmcgc2F2aW5nIGNoYXQgJHtjaGF0SWR9IHN0YWdlIGFuYWx5c2lzYCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGF0cygpOiBQcm9taXNlPGFueT4ge1xuICBsZXQgdXNlcklkO1xuICB0cnkge1xuICAgIHVzZXJJZCA9IGF3YWl0IGdldFNlc3Npb25Vc2VyKCk7XG5cbiAgICByZXR1cm4gdXNlcklkID8gYXdhaXQgZ2V0VXNlckNoYXRzKHVzZXJJZCkgOiBbXTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBmZXRjaGluZyB1c2VyICR7dXNlcklkfSBjaGF0czpgLCBlcnJvcik7XG5cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENoYXQoaWQ6IHN0cmluZyk6IFByb21pc2U8Q2hhdCB8IG51bGw+IHtcbiAgbGV0IHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBhd2FpdCBnZXRTZXNzaW9uVXNlcigpO1xuXG4gICAgaWYgKCF1c2VySWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hhdCA9IGF3YWl0IGdldFVzZXJDaGF0KGlkLCB1c2VySWQpO1xuXG4gICAgcmV0dXJuIGNoYXQgYXMgYW55O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFtjaGF0c0FjdGlvbnNdIEVycm9yIGZldGNoaW5nIHVzZXIgJHt1c2VySWR9IGNoYXRzOmAsIGVycm9yKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGF0KGNoYXRJZDogc3RyaW5nKSB7XG4gIGxldCB1c2VyX2lkO1xuICB0cnkge1xuICAgIHVzZXJfaWQgPSAoYXdhaXQgZ2V0U2Vzc2lvblVzZXIoKSkgfHwgJyc7XG4gICAgYXdhaXQgcmVtb3ZlQ2hhdCh1c2VyX2lkLCBjaGF0SWQpO1xuXG4gICAgcmV2YWxpZGF0ZVRhZyhgY2hhdHNgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBkdXJpbmcgZGVsZXRpbmcgdXNlcnIgJHt1c2VyX2lkfSBjaGF0ICR7Y2hhdElkfTogYCwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVOZXdDaGF0KHVzZXJJZDogc3RyaW5nLCBhc3Npc3RhbnRJZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBmaXJzdFN0YWdlID0gYXdhaXQgZ2V0Rmlyc3RTdGFnZSgpO1xuICAgIGNvbnN0IG5ld0NoYXQgPSBhd2FpdCBjcmVhdGVDaGF0KHVzZXJJZCwge1xuICAgICAgY3VycmVudFN0YWdlOiBmaXJzdFN0YWdlPy5uYW1lLFxuICAgICAgbmFtZTogZ2VuZXJhdGVTZXNzaW9uTmFtZSgpLFxuICAgICAgYXNzaXN0YW50SWQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Q2hhdC5pZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbY2hhdHNBY3Rpb25zXSBFcnJvciBjcmVhdGluZyBuZXcgY2hhdCBmb3IgdXNlciAke3VzZXJJZH06YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGF0KFxuICBjdXJyZW50Q2hhdElkOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW10sXG4gIGNoYXRJbmZvOiBDaGF0SW5mb1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IHVzZXJfaWQ7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VySWQsIGFzc2lzdGFudElkIH0gPSAoYXdhaXQgdmVyaWZ5U2Vzc2lvbigpKSB8fCB7fTtcbiAgICB1c2VyX2lkID0gdXNlcklkO1xuXG4gICAgaWYgKCF1c2VySWQgfHwgIWFzc2lzdGFudElkKSByZXR1cm4gJyc7XG5cbiAgICBjb25zdCBbbmV3TWVzc2FnZSwgLi4ucHJldk1lc3NhZ2VzXSA9IG1lc3NhZ2VzO1xuICAgIGNvbnN0IGNoYXRfaWQgPSBjdXJyZW50Q2hhdElkIHx8IChhd2FpdCBjcmVhdGVOZXdDaGF0KHVzZXJJZCwgYXNzaXN0YW50SWQpKTtcbiAgICBhd2FpdCBzZW5kTWVzc2FnZSh7IHVzZXJJZCwgYXNzaXN0YW50SWQsIG5ld01lc3NhZ2UsIHByZXZNZXNzYWdlcywgY2hhdF9pZCwgY2hhdEluZm8gfSk7XG5cbiAgICAhY3VycmVudENoYXRJZCAmJiByZXZhbGlkYXRlVGFnKGBjaGF0c2ApO1xuICAgIC8vIFRPRE86IGluc3RlYWQgcmV2YWxpZGF0ZSB0cnkgdG8gcmV0dXJuIGFzc2lzdGFudCBtZXNzYWdlIGRpcmVjdGx5XG4gICAgcmV0dXJuIGNoYXRfaWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihgW2NoYXRzQWN0aW9uc10gRXJyb3IgZmV0Y2hpbmcgdXNlciAke3VzZXJfaWR9IGNoYXRzOmAsIGVycm9yKTtcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0F1R3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/chat/_components/Chat.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Chat)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/chat.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$chat$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/chat.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$5bc2a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:5bc2a1 [app-client] (ecmascript) <text/javascript>");
;
;
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
const Messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/(main)/chat/_components/Messages.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/(main)/chat/_components/Messages.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = Messages;
const ControlPanel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/(main)/chat/_components/ControlPanel.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/(main)/chat/_components/ControlPanel.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = ControlPanel;
function Chat({ chat$ }) {
    _s();
    const chat = chat$ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(chat$) : {};
    const [allMessages, setAllMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { chatInfo, setSelectedChat, selectedAssistant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            setSelectedChat(chat);
            setAllMessages(chat?.Messages || []);
        }
    }["Chat.useEffect"], [
        chat?.Messages?.length
    ]);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[navigate]": async (id)=>{
            if (!chat?.id || chat?.id !== id) {
                router.push(`/chat/${id}`);
            }
        }
    }["Chat.useCallback[navigate]"], [
        chat?.id,
        router
    ]);
    const handleMessageSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[handleMessageSend]": async (message)=>{
            const newMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$chat$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMessage"])(message, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageRole"].user, chatInfo);
            if (!selectedAssistant?.id) {
                setAllMessages([
                    {
                        id: `${allMessages.length + 2}`,
                        content: '',
                        role: 'noAssistant'
                    },
                    newMessage,
                    ...allMessages
                ]);
                return;
            }
            setAllMessages([
                {
                    ...newMessage,
                    isLoading: true
                },
                ...allMessages
            ]);
            const chatId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$5bc2a1__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateChat"])(chat?.id, [
                newMessage,
                ...allMessages
            ], chatInfo);
            chatId ? navigate(chatId) : setAllMessages({
                "Chat.useCallback[handleMessageSend]": (prev)=>prev.map({
                        "Chat.useCallback[handleMessageSend]": (message)=>message.id === newMessage.id ? {
                                ...message,
                                error: true,
                                isLoading: false
                            } : {
                                ...message,
                                isLoading: false
                            }
                    }["Chat.useCallback[handleMessageSend]"])
            }["Chat.useCallback[handleMessageSend]"]);
        }
    }["Chat.useCallback[handleMessageSend]"], [
        chat,
        chatInfo,
        allMessages,
        selectedAssistant?.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "z-0 flex min-h-0 flex-grow flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Messages, {
                className: "",
                messages: allMessages
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/chat/_components/Chat.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ControlPanel, {
                onSendMessage: handleMessageSend
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/chat/_components/Chat.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/chat/_components/Chat.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(Chat, "8TKsi1FiR5VognWKK2YWfgjsQ3c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = Chat;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Messages");
__turbopack_context__.k.register(_c1, "ControlPanel");
__turbopack_context__.k.register(_c2, "Chat");
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
"[project]/src/shared/RadioGroup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RadioGroup": (()=>RadioGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$radio$2d$group$2f$radio$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@headlessui/react/dist/components/radio-group/radio-group.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const variants = {
    white: 'bg-white-opacity text-light-gray border border-transparent hover:border-main hover:text-main data-[checked]:bg-storm-gray data-[checked]:border-storm-gray data-[checked]:text-main',
    graphic: 'bg-graphic/[14%] border border-white-opacity text-light-gray hover:border-main hover:text-main data-[checked]:bg-background data-[checked]:text-main',
    bordered: 'bg-white-opacity text-light-gray border border-transparent hover:border-main hover:text-main data-[checked]:border-main data-[checked]:text-main data-[checked]:bg-storm-gray',
    transparent: 'bg-transparent text-light-gray hover:bg-white-opacity hover:text-main data-[checked]:bg-background data-[checked]:text-main',
    aquamarine: 'bg-transparent text-light-gray hover:bg-white-opacity hover:text-main data-[checked]:bg-dark-aquamarine data-[checked]:text-main rounded-md'
};
const RadioGroup = ({ id, name, className, optionClassName, iconClassName, selected, options, variant, disabled, setSelected })=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$radio$2d$group$2f$radio$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        id: id,
        name: name,
        disabled: disabled,
        value: selected,
        onChange: setSelected,
        "aria-label": "radio group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex flex-row', disabled && 'pointer-events-none', className),
        children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$radio$2d$group$2f$radio$2d$group$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Radio"], {
                disabled: option.disabled,
                value: option.value || option,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('group relative flex flex-1 cursor-pointer items-center justify-center gap-x-3 text-nowrap rounded-xl p-1.5 transition focus:outline-none', variant && variants[variant], option.disabled && 'cursor-not-allowed opacity-70', optionClassName, option.className),
                "data-activity-radio": option.value,
                title: option.titleKey && t(option.titleKey),
                children: [
                    option.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])(option.icon, iconClassName)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/RadioGroup.tsx",
                        lineNumber: 82,
                        columnNumber: 27
                    }, this),
                    option.labelKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "inline-flex gap-x-2",
                        children: [
                            t(option.labelKey),
                            option.displayValue != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: option.displayValue
                            }, void 0, false, {
                                fileName: "[project]/src/shared/RadioGroup.tsx",
                                lineNumber: 86,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/RadioGroup.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                ]
            }, option.id || index, true, {
                fileName: "[project]/src/shared/RadioGroup.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/shared/RadioGroup.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(RadioGroup, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = RadioGroup;
var _c;
__turbopack_context__.k.register(_c, "RadioGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/chat/_components/ChatModeSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ChatModeSwitcher),
    "modeOptions": (()=>modeOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/chat.models.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/RadioGroup.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const modeOptions = [
    {
        id: 0,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMode"].new,
        icon: 'cbi-plant-growth',
        className: 'relative after:content-["or"] after:text-storm-gray after:absolute after:-right-7',
        titleKey: 'Chat.ChatMode.newUserTitle'
    },
    {
        id: 1,
        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$chat$2e$models$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatMode"].recurring,
        icon: 'cbi-refresh-empty',
        titleKey: 'Chat.ChatMode.recurringUserTitle'
    }
];
function ChatModeSwitcher() {
    _s();
    const { chatInfo, setChatInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$RadioGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        options: modeOptions,
        selected: chatInfo.mode,
        setSelected: (mode)=>setChatInfo((prevInfo)=>({
                    ...prevInfo,
                    mode
                })),
        optionClassName: "rounded-full w-max acpect-square p-3.5 h-full border border-white-opacity data-[checked]:bg-main data-[checked]:text-background",
        className: "gap-x-10 rounded-full bg-graphic/[14%] p-1 backdrop-blur-sm",
        variant: "white"
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/chat/_components/ChatModeSwitcher.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ChatModeSwitcher, "xIC5MQmchdnxwma2/3vPw3nA1Oo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"]
    ];
});
_c = ChatModeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ChatModeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useSubmitOnEnter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useSubmitOnEnter": (()=>useSubmitOnEnter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useSubmitOnEnter(onSubmit, isSubmitting) {
    _s();
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubmitOnEnter.useCallback[handleKeyDown]": (event)=>{
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                if (!isSubmitting) {
                    onSubmit();
                }
            }
        }
    }["useSubmitOnEnter.useCallback[handleKeyDown]"], [
        onSubmit,
        isSubmitting
    ]);
    return handleKeyDown;
}
_s(useSubmitOnEnter, "CB3ayeubcl1nF8VyhKP0Msxdd2Q=");
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
"[project]/src/app/(main)/chat/_components/ControlPanel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ControlPanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSubmitOnEnter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSubmitOnEnter.ts [app-client] (ecmascript)");
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
;
function ControlPanel({ onSendMessage }) {
    _s();
    const { setValue, register, handleSubmit, watch, formState: { errors, isLoading, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])();
    const formValues = watch();
    const isDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ControlPanel.useMemo[isDisabled]": ()=>!!errors.message || isLoading || isSubmitting
    }["ControlPanel.useMemo[isDisabled]"], [
        errors,
        isLoading,
        isSubmitting
    ]);
    const onSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ControlPanel.useCallback[onSubmit]": async ({ message })=>{
            setValue('message', '');
            onSendMessage && await onSendMessage(message);
        }
    }["ControlPanel.useCallback[onSubmit]"], [
        onSendMessage
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSubmitOnEnter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmitOnEnter"])({
        "ControlPanel.useSubmitOnEnter[handleKeyDown]": ()=>handleSubmit(onSubmit)()
    }["ControlPanel.useSubmitOnEnter[handleKeyDown]"], isSubmitting);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "z-10 flex shrink-0 gap-x-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "flex flex-grow flex-row items-end gap-x-2 py-0.5",
            onKeyDown: handleKeyDown,
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "chat-input",
                    type: "textarea",
                    isSubmitting: isSubmitting,
                    initialValue: formValues.message,
                    placeholderKey: "Chat.inputPlaceholder",
                    disablePalaceholderKey: "Chat.loadingInputPlaceholder",
                    className: "textarea flex-grow overflow-hidden rounded-lg",
                    inputClassName: "h-full resize-none overflow-y-auto max-h-[3.6em] line-height-[1.2em]",
                    ...register('message')
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/chat/_components/ControlPanel.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "solid",
                    color: "primary",
                    type: "submit",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('cbi-send h-max px-4 py-2.5 text-2xl'),
                    disabled: isDisabled
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/chat/_components/ControlPanel.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(main)/chat/_components/ControlPanel.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(main)/chat/_components/ControlPanel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ControlPanel, "sqNMD9xDTKLPfrm66NvYe0umC8E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSubmitOnEnter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSubmitOnEnter"]
    ];
});
_c = ControlPanel;
var _c;
__turbopack_context__.k.register(_c, "ControlPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/Markdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Markdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$sanitize$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rehype-sanitize/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/remark-gfm/lib/index.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function Markdown({ content, isEditMode, onChange }) {
    return isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        value: content,
        preview: "edit",
        height: "auto",
        hideToolbar: true,
        previewOptions: {
            rehypePlugins: [
                [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$sanitize$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                ]
            ]
        },
        onChange: (text)=>onChange?.(text || ''),
        className: "md-editor-custom !bg-transparent !text-main !shadow-none"
    }, void 0, false, {
        fileName: "[project]/src/shared/Markdown.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].Markdown, {
        remarkPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ],
        rehypePlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rehype$2d$sanitize$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ],
        source: content,
        className: "whitespace-pre-wrap !bg-transparent !text-main"
    }, void 0, false, {
        fileName: "[project]/src/shared/Markdown.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = Markdown;
var _c;
__turbopack_context__.k.register(_c, "Markdown");
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
"[project]/src/server/actions/data:3043b5 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60a989f5bfb001cb47a31faa4961849f9d9427a889":"editMessage"},"src/server/actions/messagesAction.ts",""] */ __turbopack_context__.s({
    "editMessage": (()=>editMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var editMessage = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60a989f5bfb001cb47a31faa4961849f9d9427a889", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "editMessage"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbWVzc2FnZXNBY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gJ25leHQvY2FjaGUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlU2VuZFBheWxvYWQgfSBmcm9tICdAL2xpYi9tb2RlbHMvYXBpLm1vZGVscyc7XG5pbXBvcnQgeyBNZXNzYWdlLCBNZXNzYWdlUm9sZSB9IGZyb20gJ0AvbGliL21vZGVscy9jaGF0Lm1vZGVscyc7XG5pbXBvcnQgeyBnZXRNZXNzYWdlIH0gZnJvbSAnQC9saWIvdXRpbHMvY2hhdC51dGlscyc7XG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tICcuLi9kYi9hcGlDbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlQ2hhdE1lc3NhZ2UsIHVwZGF0ZU1lc3NhZ2UgfSBmcm9tICcuLi9kYi9jaGF0Q2xpZW50JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoYXRNZXNzYWdlcyh1c2VySWQ6IHN0cmluZywgbWVzc2FnZXM6IE1lc3NhZ2VbXSwgY2hhdElkPzogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIG1lc3NhZ2VzLm1hcChcbiAgICAgICAgYXN5bmMgKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IGF3YWl0IGNyZWF0ZUNoYXRNZXNzYWdlKGNoYXRJZCB8fCAnJywgeyAuLi5tZXNzYWdlLCByZWN1cnJpbmc6IHVuZGVmaW5lZCB9KVxuICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gY2hhdElkIHx8ICcnO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFttZXNzYWdlc0FjdGlvbnNdIEVycm9yIGR1cmluZyB1cGRhdGluZyBjaGF0ICR7Y2hhdElkfSB3aXRoIG1lc3NhZ2VzIGZvciB1c2VyICR7dXNlcklkfSA6YCwgZXJyb3IpO1xuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZSh7XG4gIHVzZXJJZCxcbiAgYXNzaXN0YW50SWQsXG4gIG5ld01lc3NhZ2UsXG4gIHByZXZNZXNzYWdlcyxcbiAgY2hhdF9pZCxcbiAgY2hhdEluZm8sXG59OiBNZXNzYWdlU2VuZFBheWxvYWQpOiBQcm9taXNlPHN0cmluZz4ge1xuICB0cnkge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBhc3Npc3RhbnRfaWQ6IGFzc2lzdGFudElkLFxuICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgY2hhdF9pZCxcbiAgICAgIGN1cnJlbnRfc3RhZ2U6IGNoYXRJbmZvLnN0YWdlLFxuICAgICAgaGlzdG9yeTogWy4uLnByZXZNZXNzYWdlcy5yZXZlcnNlKCldLFxuICAgICAgbmV3TWVzc2FnZSxcbiAgICAgIGFwcDogJ3N0dWRpbycsXG4gICAgfTtcblxuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGF3YWl0IGFwaUNsaWVudC5zZW5kTWVzc2FnZShwYXlsb2FkKTtcbiAgICBjb25zdCBhc3Npc3RhbnRNZXNzYWdlID0ge1xuICAgICAgLi4uZ2V0TWVzc2FnZShyZXNwb25zZSwgTWVzc2FnZVJvbGUuYXNzaXN0YW50LCBjaGF0SW5mbyksXG4gICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgfTtcblxuICAgIGNvbnN0IGNoYXRJZCA9IGF3YWl0IGNyZWF0ZUNoYXRNZXNzYWdlcyh1c2VySWQsIFtuZXdNZXNzYWdlLCBhc3Npc3RhbnRNZXNzYWdlXSwgY2hhdF9pZCk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChgL2NoYXQvJHtjaGF0SWR9YCk7XG5cbiAgICByZXR1cm4gY2hhdElkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYFttZXNzYWdlc0FjdGlvbnNdIEVycm9yIHNlbmRpbmcgdXNlciAke3VzZXJJZH0gbWVzc2FnZTogYCwgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZWRpdE1lc3NhZ2UoaWQ6IHN0cmluZywgbWVzc2FnZTogUGFydGlhbDxNZXNzYWdlPik6IFByb21pc2U8TWVzc2FnZSB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgdXBkYXRlTWVzc2FnZShpZCwgbWVzc2FnZSBhcyBhbnkpO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihgW21lc3NhZ2VzQWN0aW9uc10gRXJyb3IgdXBkYXRpbmcgbWVzc2FnZSAke2lkfSBkYXRhOiBgLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoieVNBOERzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/chat/_components/EditableMessage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EditableMessage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/data.utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$3043b5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:3043b5 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Markdown.tsx [app-client] (ecmascript)");
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
function EditableMessage({ message }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updatedContent, setUpdatedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(message.content);
    const handleSaveMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EditableMessage.useCallback[handleSaveMessage]": async (reset)=>{
            const { id, content, originalContent } = message;
            const payload = reset ? {
                content: originalContent || content,
                originalContent: null
            } : {
                content: updatedContent,
                originalContent: originalContent || content
            };
            const updatedMessage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$3043b5__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["editMessage"])(id, payload);
            updatedMessage?.content && setUpdatedContent(updatedMessage.content);
            setIsEditMode(false);
        }
    }["EditableMessage.useCallback[handleSaveMessage]"], [
        updatedContent,
        message
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('group relative mb-5 flex flex-col', isEditMode && 'gap-y-1'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('flex w-full items-center gap-x-4 self-start p-5 text-main', isEditMode && 'rounded-xl border border-dashed border-storm-gray bg-white-opacity'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cbi-cpu shrink-0 text-xl text-main"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col break-words text-base font-normal outline-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Markdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            content: updatedContent,
                            isEditMode: isEditMode,
                            onChange: setUpdatedContent
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toBoolean"])(("TURBOPACK compile-time value", "true")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])('justify-end gap-x-2', isEditMode ? 'flex' : 'hidden group-hover:flex'),
                children: isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "solid",
                            color: "dark",
                            className: 'py-1.5 font-medium disabled:opacity-60',
                            onClick: ()=>handleSaveMessage(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "cbi-arrow-left"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                t('General.resetToOriginButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                            lineNumber: 49,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            color: "darkGray",
                            className: 'py-1.5 font-medium',
                            onClick: ()=>setIsEditMode(false),
                            children: t('General.cancelButton')
                        }, void 0, false, {
                            fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                            lineNumber: 58,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "solid",
                            color: "primary",
                            className: 'py-1.5 font-medium',
                            onClick: ()=>handleSaveMessage(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "cbi-tick-circle"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                t('General.saveButton')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: 'cbi-edit-2 absolute -bottom-1.5 right-5 aspect-square w-7 rounded-full border border-background-border/[18%] bg-graphic/[10%] p-0 !text-sm text-light-gray hover:border-background-border group-hover:text-main',
                    onClick: ()=>setIsEditMode(true)
                }, void 0, false, {
                    fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(main)/chat/_components/EditableMessage.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(EditableMessage, "ucD0kqrCFpM6KbE36MGUGYVeD2g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = EditableMessage;
var _c;
__turbopack_context__.k.register(_c, "EditableMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(main)/chat/_components/StageAnalysisRefresher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>StageAnalysisRefresher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/RootContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSSE.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$fa3a24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/server/actions/data:fa3a24 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function StageAnalysisRefresher() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { setSelectedChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"])();
    const chatId = params.id;
    const isRefreshing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refreshChatData = async ()=>{
        if (isRefreshing.current) return;
        try {
            isRefreshing.current = true;
            const updatedChat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$data$3a$fa3a24__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getChat"])(chatId);
            if (updatedChat) {
                setSelectedChat(updatedChat);
            }
        } catch (error) {
            console.error('Error refreshing chat data:', error);
        } finally{
            isRefreshing.current = false;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"])({
        events: {
            'chat-update': {
                "StageAnalysisRefresher.useSSE": (data)=>{
                    if (data?.chatId === chatId) {
                        refreshChatData();
                    }
                }
            }["StageAnalysisRefresher.useSSE"]
        }
    });
    return null;
}
_s(StageAnalysisRefresher, "u8nrX2w9HNsl7TOncNXLDoa/vN8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$RootContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRootContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSSE$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSE"]
    ];
});
_c = StageAnalysisRefresher;
var _c;
__turbopack_context__.k.register(_c, "StageAnalysisRefresher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_1c5cc685._.js.map