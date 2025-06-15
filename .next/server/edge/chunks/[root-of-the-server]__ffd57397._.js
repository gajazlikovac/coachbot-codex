(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__ffd57397._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/lib/constants.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/utils/encryption.utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decrypt": (()=>decrypt),
    "encrypt": (()=>encrypt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [middleware-edge] (ecmascript)");
;
;
async function encrypt(payload, secretKey, expirationTime = '7d') {
    if (!payload || !secretKey) return null;
    const encodedKey = new TextEncoder().encode(secretKey);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(expirationTime).sign(encodedKey);
}
async function decrypt(encryptedData = '', secretKey) {
    try {
        if (!encryptedData || !secretKey) return null;
        const encodedKey = new TextEncoder().encode(secretKey);
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["jwtVerify"])(encryptedData, encodedKey, {
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
"[project]/src/lib/utils/cookie.utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteCookie": (()=>deleteCookie),
    "getCookie": (()=>getCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [middleware-edge] (ecmascript)");
;
;
const getCookie = async (name, encrypted, secretKey)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const value = cookieStore.get(name)?.value;
    return value && encrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["decrypt"])(value, secretKey) : value;
};
const deleteCookie = async (name)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(name);
};
}}),
"[project]/src/server/actions/sessionActions.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createSession": (()=>createSession),
    "deleteSession": (()=>deleteSession),
    "getSessionUser": (()=>getSessionUser),
    "updateSession": (()=>updateSession),
    "verifySession": (()=>verifySession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/hooks-server-context.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cookie.utils.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [middleware-edge] (ecmascript)");
'use server';
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encrypt"])({
            userId,
            expiresAt,
            accessAllowed,
            assistantId
        }, secretKey) || '';
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], true, secretKey);
        return session;
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error)) {
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
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["encrypt"])({
            ...payload,
            ...newData
        }, secretKey) || '';
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/'
        });
        tags && tags.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["revalidateTag"]);
        paths && paths.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    } catch (error) {
        console.error('[sessionActions] Error updating session:', error);
    }
}
async function deleteSession() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"]);
}
}}),
"[project]/src/lib/models/checkout.models.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/utils/common.utils.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [middleware-edge] (ecmascript)");
;
;
const withoutTrailingSlash = (url = '')=>{
    return url.endsWith('/') ? url.slice(0, -1) : url;
};
const getRedirectPath = (path, userId, accessAllowed, search)=>{
    const publicRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PublicRoutes"]);
    const isPublicRoute = publicRoutes.includes(path);
    let redirectTo = null;
    if (!isPublicRoute && !userId) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LOGIN_ROUTE"]}${search}`;
    } else if (isPublicRoute && userId) {
        redirectTo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrivateRoutes"].chat;
    } else if (userId && !accessAllowed && path !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout}${search}`;
    }
    return redirectTo;
};
const isActiveSubscription = (subscription, currentPriceId)=>{
    if (!subscription || !subscription?.subscriptionId) return false;
    const isActiveStatus = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SubscriptionStatus"].active,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SubscriptionStatus"].trialing
    ].includes(subscription.status);
    const isFreePlan = currentPriceId && process.env.STRIPE_FREE_PRICE && currentPriceId === process.env.STRIPE_FREE_PRICE;
    const isFreePriceTrialEnded = isFreePlan && !!subscription.canceledAt && new Date(subscription.canceledAt) < new Date();
    return isActiveStatus && !isFreePriceTrialEnded;
};
const isTrialSubscription = ({ plan, trial_start, trial_end }, freePriceId)=>{
    return (!freePriceId || plan.id !== freePriceId) && trial_start !== null && trial_end !== null;
};
const getIsAllowedUser = (userId)=>{
    return !!userId && !!process.env.ALLOWED_USER_IDS && !!process.env.ALLOWED_USER_IDS.split(',').includes(userId);
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
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/sessionActions.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [middleware-edge] (ecmascript)");
;
;
;
;
async function middleware(req) {
    const path = req.nextUrl.pathname;
    const { userId, accessAllowed } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["verifySession"])() || {};
    const url = new URL(req.url);
    const mode = url.searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SIGNUP_MODE_COOKIE_NAME"]);
    const redirectTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getRedirectPath"])(path, userId, accessAllowed, req.nextUrl.search);
    const response = redirectTo ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(redirectTo, req.nextUrl)) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    if (mode) {
        response.cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["SIGNUP_MODE_COOKIE_NAME"], mode, {
            path: '/',
            maxAge: 600
        });
    }
    return response;
}
const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|images|videos|checkout|$).*)'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ffd57397._.js.map