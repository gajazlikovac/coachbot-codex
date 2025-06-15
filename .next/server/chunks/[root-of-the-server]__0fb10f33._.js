module.exports = {

"[project]/.next-internal/server/app/api/sse/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/eventEmitter.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
const eventEmitter = global._eventEmitter || new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"]();
global._eventEmitter = eventEmitter;
const __TURBOPACK__default__export__ = eventEmitter;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/constants.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/utils/encryption.utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decrypt": (()=>decrypt),
    "encrypt": (()=>encrypt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
;
;
async function encrypt(payload, secretKey, expirationTime = '7d') {
    if (!payload || !secretKey) return null;
    const encodedKey = new TextEncoder().encode(secretKey);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(expirationTime).sign(encodedKey);
}
async function decrypt(encryptedData = '', secretKey) {
    try {
        if (!encryptedData || !secretKey) return null;
        const encodedKey = new TextEncoder().encode(secretKey);
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(encryptedData, encodedKey, {
            algorithms: [
                'HS256'
            ]
        });
        return payload;
    } catch (error) {
        console.error('[encryptionUtils] Failed to decrypt data:', error);
        return null;
    }
}
}}),
"[project]/src/lib/utils/cookie.utils.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteCookie": (()=>deleteCookie),
    "getCookie": (()=>getCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [app-route] (ecmascript)");
;
;
const getCookie = async (name, encrypted, secretKey)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const value = cookieStore.get(name)?.value;
    return value && encrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"])(value, secretKey) : value;
};
const deleteCookie = async (name)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(name);
};
}}),
"[project]/src/server/actions/sessionActions.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"003ced715dcb142a06df1c477a7bce1d57c1a0fb1e":"deleteSession","0069ba96f7d5387663470cd879b3d1c554f9078a61":"verifySession","006d0a7129916a3465564fabe7ab4818da32dc51a1":"getSessionUser","70425448e81a40aaef871c95f3f46f2a736857ca6f":"updateSession","70e4de43e28aaa533b33b7452ebbfe624254ef9332":"createSession"},"",""] */ __turbopack_context__.s({
    "createSession": (()=>createSession),
    "deleteSession": (()=>deleteSession),
    "getSessionUser": (()=>getSessionUser),
    "updateSession": (()=>updateSession),
    "verifySession": (()=>verifySession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cookie.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const secretKey = process.env.SESSION_JWT_KEY;
async function createSession(userId, accessAllowed, assistantId) {
    try {
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])({
            userId,
            expiresAt,
            accessAllowed,
            assistantId
        }, secretKey) || '';
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
            sameSite: 'lax',
            path: '/'
        });
    } catch (error) {
        console.error('[sessionActions] Error creating session:', error);
        throw new Error('[session] Session creation error');
    }
}
async function verifySession() {
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], true, secretKey);
        return session;
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error)) {
            return null;
        }
        console.error('[sessionActions] Error verifying session:', error);
        return null;
    }
}
async function getSessionUser() {
    try {
        const session = await verifySession();
        return session?.userId;
    } catch (error) {
        console.error('[sessionActions] Error getting session user:', error);
        return;
    }
}
async function updateSession(newData, tags, paths) {
    try {
        const payload = await verifySession();
        if (!payload) return;
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"])({
            ...payload,
            ...newData
        }, secretKey) || '';
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/'
        });
        tags && tags.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidateTag"]);
        paths && paths.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    } catch (error) {
        console.error('[sessionActions] Error updating session:', error);
    }
}
async function deleteSession() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"]);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSession,
    verifySession,
    getSessionUser,
    updateSession,
    deleteSession
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(createSession, "70e4de43e28aaa533b33b7452ebbfe624254ef9332", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(verifySession, "0069ba96f7d5387663470cd879b3d1c554f9078a61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "006d0a7129916a3465564fabe7ab4818da32dc51a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSession, "70425448e81a40aaef871c95f3f46f2a736857ca6f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSession, "003ced715dcb142a06df1c477a7bce1d57c1a0fb1e", null);
}}),
"[project]/src/app/api/sse/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventEmitter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventEmitter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/sessionActions.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSessionUser"])();
    if (!userId) {
        return new Response('Unauthorized', {
            status: 401
        });
    }
    const stream = new ReadableStream({
        start (controller) {
            const encoder = new TextEncoder();
            const intervalId = setInterval(()=>{
                controller.enqueue(encoder.encode(': keep-alive\n\n'));
            }, 30000);
            const sendEvent = ({ user_id, event, data })=>{
                if (user_id === userId) {
                    controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
                }
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventEmitter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].on(`message:${userId}`, sendEvent);
            req.signal.addEventListener('abort', ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventEmitter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].off(`message:${userId}`, sendEvent);
                controller.close();
                clearInterval(intervalId);
            });
        }
    });
    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            Connection: 'keep-alive'
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0fb10f33._.js.map