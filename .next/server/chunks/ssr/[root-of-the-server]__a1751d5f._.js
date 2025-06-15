module.exports = {

"[project]/src/lib/constants.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/models/locale.models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Language": (()=>Language),
    "locales": (()=>locales)
});
const locales = [
    'en',
    'es',
    'de',
    'fr',
    'it',
    'uk',
    'pl'
];
var Language = /*#__PURE__*/ function(Language) {
    Language["en"] = "English";
    Language["de"] = "German";
    Language["fr"] = "French";
    Language["it"] = "Italian";
    Language["es"] = "Spanish";
    Language["pl"] = "Polish";
    Language["uk"] = "Ukrainian";
    return Language;
}({});
}}),
"[project]/src/lib/utils/encryption.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "decrypt": (()=>decrypt),
    "encrypt": (()=>encrypt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
;
;
async function encrypt(payload, secretKey, expirationTime = '7d') {
    if (!payload || !secretKey) return null;
    const encodedKey = new TextEncoder().encode(secretKey);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt().setExpirationTime(expirationTime).sign(encodedKey);
}
async function decrypt(encryptedData = '', secretKey) {
    try {
        if (!encryptedData || !secretKey) return null;
        const encodedKey = new TextEncoder().encode(secretKey);
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(encryptedData, encodedKey, {
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
"[project]/src/lib/utils/cookie.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "deleteCookie": (()=>deleteCookie),
    "getCookie": (()=>getCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [app-rsc] (ecmascript)");
;
;
const getCookie = async (name, encrypted, secretKey)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const value = cookieStore.get(name)?.value;
    return value && encrypted ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decrypt"])(value, secretKey) : value;
};
const deleteCookie = async (name)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete(name);
};
}}),
"[project]/src/lib/utils/locale.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserLocale": (()=>getUserLocale),
    "normalizeLocale": (()=>normalizeLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cookie.utils.ts [app-rsc] (ecmascript)");
;
;
function normalizeLocale(locale) {
    if (locale.includes('-')) {
        return locale.split('-')[0];
    }
    return locale;
}
async function getUserLocale() {
    const lanaguage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_COOKIE_NAME"]) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"];
    return normalizeLocale(lanaguage);
}
}}),
"[project]/src/i18n/request.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__IntlErrorCode$3e$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/initializeConfig-CRD6euuK.js [app-rsc] (ecmascript) <export a as IntlErrorCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$locale$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/locale.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$locale$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/locale.utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ()=>{
    let locale = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$locale$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserLocale"])();
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$locale$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].includes(locale)) {
        locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_LOCALE"];
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "../../i18n_messages/de.json": {
                id: ()=>"[project]/i18n_messages/de.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/de.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/en.json": {
                id: ()=>"[project]/i18n_messages/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/en.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/es.json": {
                id: ()=>"[project]/i18n_messages/es.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/es.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/fr.json": {
                id: ()=>"[project]/i18n_messages/fr.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/fr.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/it.json": {
                id: ()=>"[project]/i18n_messages/it.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/it.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/pl.json": {
                id: ()=>"[project]/i18n_messages/pl.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/pl.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../i18n_messages/uk.json": {
                id: ()=>"[project]/i18n_messages/uk.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/i18n_messages/uk.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../i18n_messages/${locale}.json`)).default,
        onError (error) {
            console.error('[i18nConfig] Error during setup iternationalization config: ', error);
        },
        getMessageFallback ({ namespace, key, error }) {
            const path = [
                namespace,
                key
            ].filter((part)=>part != null).join('.');
            if (error.code === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$initializeConfig$2d$CRD6euuK$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__IntlErrorCode$3e$__["IntlErrorCode"].MISSING_MESSAGE) {
                return path + ' is not yet translated';
            } else {
                return '[i18nConfig] fix this message: ' + path;
            }
        }
    };
});
}}),
"[project]/src/contexts/AccessProvider.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccessProvider": (()=>AccessProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AccessProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccessProvider() from the server but AccessProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/AccessProvider.tsx <module evaluation>", "AccessProvider");
}}),
"[project]/src/contexts/AccessProvider.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccessProvider": (()=>AccessProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AccessProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccessProvider() from the server but AccessProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/AccessProvider.tsx", "AccessProvider");
}}),
"[project]/src/contexts/AccessProvider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AccessProvider$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/contexts/AccessProvider.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AccessProvider$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/contexts/AccessProvider.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AccessProvider$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/contexts/ThemeContext.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "THEME_ID": (()=>THEME_ID),
    "Theme": (()=>Theme),
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const THEME_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call THEME_ID() from the server but THEME_ID is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx <module evaluation>", "THEME_ID");
const Theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Theme() from the server but Theme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx <module evaluation>", "Theme");
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx <module evaluation>", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx <module evaluation>", "useTheme");
}}),
"[project]/src/contexts/ThemeContext.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "THEME_ID": (()=>THEME_ID),
    "Theme": (()=>Theme),
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const THEME_ID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call THEME_ID() from the server but THEME_ID is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx", "THEME_ID");
const Theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Theme() from the server but Theme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx", "Theme");
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx", "ThemeProvider");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/contexts/ThemeContext.tsx", "useTheme");
}}),
"[project]/src/contexts/ThemeContext.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/lib/config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "firebaseConfig": (()=>firebaseConfig)
});
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
}}),
"[project]/src/lib/firebase.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "deleteFirebaseUser": (()=>deleteFirebaseUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-9f6d0d7e.js [app-rsc] (ecmascript) <export G as deleteUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__W__as__EmailAuthProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-9f6d0d7e.js [app-rsc] (ecmascript) <export W as EmailAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-9f6d0d7e.js [app-rsc] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-9f6d0d7e.js [app-rsc] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a2__as__signInWithCredential$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-9f6d0d7e.js [app-rsc] (ecmascript) <export a2 as signInWithCredential>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-rsc] (ecmascript)");
;
;
;
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["firebaseConfig"]);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(auth, (user)=>{
    if (user) {
        auth.updateCurrentUser(user);
    }
});
async function refetchAndDelete(email, password) {
    try {
        const credential = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__W__as__EmailAuthProvider$3e$__["EmailAuthProvider"].credential(email, password);
        const userCredentials = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a2__as__signInWithCredential$3e$__["signInWithCredential"])(auth, credential);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__["deleteUser"])(userCredentials.user);
    } catch (signInError) {
        console.error('Error signing in to delete user:', signInError);
        throw signInError;
    }
}
async function deleteFirebaseUser(email, password) {
    try {
        const user = auth.currentUser;
        if (!user) {
            await refetchAndDelete(email, password);
        } else {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$9f6d0d7e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__G__as__deleteUser$3e$__["deleteUser"])(user);
            console.log('User deleted successfully');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
}}),
"[project]/src/lib/models/checkout.models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/utils/common.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [app-rsc] (ecmascript)");
;
;
const withoutTrailingSlash = (url = '')=>{
    return url.endsWith('/') ? url.slice(0, -1) : url;
};
const getRedirectPath = (path, userId, accessAllowed, search)=>{
    const publicRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PublicRoutes"]);
    const isPublicRoute = publicRoutes.includes(path);
    let redirectTo = null;
    if (!isPublicRoute && !userId) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOGIN_ROUTE"]}${search}`;
    } else if (isPublicRoute && userId) {
        redirectTo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].chat;
    } else if (userId && !accessAllowed && path !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout) {
        redirectTo = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout}${search}`;
    }
    return redirectTo;
};
const isActiveSubscription = (subscription, currentPriceId)=>{
    if (!subscription || !subscription?.subscriptionId) return false;
    const isActiveStatus = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].active,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].trialing
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
"[project]/src/lib/models/common.models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/lib/models/instruction.models.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Severity": (()=>Severity),
    "Tone": (()=>Tone)
});
var Severity = /*#__PURE__*/ function(Severity) {
    Severity["low"] = "low";
    Severity["medium"] = "medium";
    Severity["high"] = "high";
    return Severity;
}({});
var Tone = /*#__PURE__*/ function(Tone) {
    Tone["friendly"] = "friendly";
    Tone["supportive"] = "supportive";
    Tone["professional"] = "professional";
    Tone["energetic"] = "energetic";
    return Tone;
}({});
}}),
"[project]/src/lib/utils/db.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "assistantPriceSchema": (()=>assistantPriceSchema),
    "assistantSchema": (()=>assistantSchema),
    "categorySchema": (()=>categorySchema),
    "defaultModerationRule": (()=>defaultModerationRule),
    "defaultStyleData": (()=>defaultStyleData),
    "generateUniqueIds": (()=>generateUniqueIds),
    "getRandomInt": (()=>getRandomInt),
    "instructionSchema": (()=>instructionSchema),
    "mapConversationHistory": (()=>mapConversationHistory),
    "mapModerationRule": (()=>mapModerationRule),
    "mapPrismaModelConfig": (()=>mapPrismaModelConfig),
    "mapPrismaModerationData": (()=>mapPrismaModerationData),
    "mapRelationConfig": (()=>mapRelationConfig),
    "mapStyleData": (()=>mapStyleData),
    "moderationRuleSchema": (()=>moderationRuleSchema),
    "moderationTemplateSchema": (()=>moderationTemplateSchema),
    "nameSchema": (()=>nameSchema),
    "orderSchema": (()=>orderSchema),
    "parseArrayToString": (()=>parseArrayToString),
    "parseJsonField": (()=>parseJsonField),
    "stageSchema": (()=>stageSchema),
    "styleSchema": (()=>styleSchema),
    "userAccountSchema": (()=>userAccountSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/esm/v3/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/common.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/instruction.models.ts [app-rsc] (ecmascript)");
;
;
;
;
const defaultStyleData = {
    title: '',
    tone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tone"].friendly,
    emoji_frequency: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Level"].low,
    language_complexity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Level"].low,
    greeting_templates: '',
    response_patterns: '',
    closing_templates: '',
    custom: true,
    assistantId: ''
};
const defaultModerationRule = {
    name: '',
    severity: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Severity"].low,
    instructions: {
        purpose: '',
        triggers: '',
        what_to_detect: '',
        when_to_use: ''
    },
    custom: true,
    assistantId: ''
};
const levelEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Level"].low,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Level"].medium,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$common$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Level"].high
]);
const toneEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tone"].professional,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tone"].energetic,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tone"].friendly,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tone"].supportive
]);
const severityEnum = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Severity"].high,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Severity"].low,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$instruction$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Severity"].medium
]);
const instructionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    instructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: 'General.errors.minLength10'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    })
});
const stageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    instructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: 'General.errors.minLength10'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    }),
    analyzer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, {
        message: 'General.errors.minLength10'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    }).optional()
});
const orderSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    order: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, {
        message: 'General.errors.emptyFiled'
    })
});
const nameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    })
});
const categorySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    })
});
const userAccountSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'Account.accountForm.errors.emptyName'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'Account.accountForm.errors.emptyEmail'
    }).email({
        message: 'Account.accountForm.errors.invalidEmail'
    })
});
const styleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    emoji_frequency: levelEnum,
    language_complexity: levelEnum,
    tone: toneEnum,
    greeting_templates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50, {
        message: 'General.errors.minLength50'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    }),
    response_patterns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50, {
        message: 'General.errors.minLength50'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    }),
    closing_templates: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50, {
        message: 'General.errors.minLength50'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    })
});
const moderationTemplateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    }),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    }),
    response_template: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const moderationRuleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, {
        message: 'General.errors.emptyFiled'
    }),
    severity: severityEnum,
    instructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        purpose: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, {
            message: 'General.errors.emptyFiled'
        }),
        triggers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val.split(',').map((s)=>s.trim()).filter((s)=>s !== '')).refine((val)=>val.length > 0, {
            message: 'General.errors.emptyFiled'
        }),
        when_to_use: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, {
            message: 'General.errors.emptyFiled'
        }),
        what_to_detect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(5, {
            message: 'General.errors.emptyFiled'
        })
    }),
    response_template: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(50, {
        message: 'General.errors.minLength50'
    }).max(10000, {
        message: 'General.errors.maxLength10000'
    }).optional(),
    ModerationTemplate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(moderationTemplateSchema).optional()
});
const assistantSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    template: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}).refine((val)=>val !== null && val !== undefined, {
        message: 'General.errors.templateSelection'
    }),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    }).max(200, {
        message: 'General.errors.maxLength200'
    }),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, {
        message: 'General.errors.emptyFiled'
    }).max(2000, {
        message: 'General.errors.maxLength2000'
    })
});
const assistantPriceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PriceCurrency"])),
    monthly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(1, {
        message: 'General.errors.emptyFiled'
    }),
    yearly: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    trialDays: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$esm$2f$v3$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateUniqueIds(count, min, max) {
    const ids = new Set();
    while(ids.size < count){
        ids.add(getRandomInt(min, max));
    }
    return Array.from(ids);
}
function mapConversationHistory(messages, stage_name, current_stage) {
    return messages.filter(({ stage })=>current_stage ? stage_name === stage : stage_name !== stage).map(({ content, role })=>({
            content,
            role
        }));
}
function parseJsonField(field) {
    if (typeof field === 'string') {
        try {
            return field.length > 0 ? JSON.parse(field) : field;
        } catch (error) {
            console.error('Failed to parse field:', error);
            return field;
        }
    }
    return field;
}
function parseArrayToString(data, keys) {
    return keys.reduce((finalData, key)=>{
        const parsedField = parseJsonField(data[key]);
        return {
            ...finalData,
            [key]: Array.isArray(parsedField) ? parsedField.join('\n') : parsedField
        };
    }, {});
}
const mapStyleData = (style)=>{
    return {
        ...style,
        ...parseArrayToString(style, [
            'greeting_templates',
            'response_patterns',
            'closing_templates'
        ])
    };
};
const mapPrismaModerationData = (rule, selectedTemplates = [])=>{
    const parserInstructions = parseJsonField(rule.instructions);
    const response_template = selectedTemplates.length ? selectedTemplates.reverse()[0]?.response_template : '';
    return {
        ...rule,
        instructions: {
            ...parserInstructions,
            triggers: Array.isArray(parserInstructions.triggers) ? parserInstructions.triggers.join(', ') : parserInstructions.triggers
        },
        response_template
    };
};
const mapModerationRule = (rule, selectedTemplates = [])=>{
    let ModerationTemplate = rule.ModerationTemplate;
    if (ModerationTemplate?.length) {
        ModerationTemplate = ModerationTemplate.filter(({ id })=>selectedTemplates.some((template)=>template.id === id)).map((template)=>({
                ...template,
                response_template: rule.response_template || ''
            }));
    }
    return {
        ...rule,
        ModerationTemplate
    };
};
const mapPrismaModelConfig = (config)=>{
    return {
        ...config,
        temperature: config.temperature?.toNumber(),
        presence_penalty: config.presence_penalty?.toNumber(),
        frequency_penalty: config.frequency_penalty?.toNumber(),
        top_p: config.top_p?.toNumber()
    };
};
const mapRelationConfig = (data)=>{
    return {
        ...data,
        modelConfigs: data.modelConfigs.length ? data.modelConfigs.map(mapPrismaModelConfig) : []
    };
};
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/child_process [external] (child_process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}}),
"[project]/src/server/db/stripeClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "stripeClient": (()=>stripeClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stripe/esm/stripe.esm.node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-rsc] (ecmascript)");
;
;
;
;
class StripeClient {
    static instance;
    _stripe = null;
    constructor(){}
    static getInstance() {
        if (!StripeClient.instance) {
            StripeClient.instance = new StripeClient();
        }
        return StripeClient.instance;
    }
    get stripe() {
        if (!this._stripe) {
            if (!process.env.STRIPE_SECRET_KEY) {
                throw new Error('STRIPE_SECRET_KEY is missing in environment variables.');
            }
            this._stripe = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stripe$2f$esm$2f$stripe$2e$esm$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](process.env.STRIPE_SECRET_KEY, {
                apiVersion: '2025-05-28.basil',
                typescript: true
            });
        }
        return this._stripe;
    }
    async getSubscriptionData(id) {
        try {
            if (!id) return null;
            const subscription = await this.stripe.subscriptions.retrieve(id, {
                expand: [
                    'items.data.price.product'
                ]
            });
            return subscription;
        } catch (error) {
            console.error(`[stripeClient] Error getting subscription ${id} data:`, error);
            return null;
        }
    }
    async getAllPrices() {
        try {
            return this.stripe.prices.list({
                active: true,
                expand: [
                    'data.product',
                    'data.currency_options'
                ],
                limit: 100
            });
        } catch (error) {
            console.error(`[stripeClient] Error getting price list:`, error);
            return {
                data: []
            };
        }
    }
    async getCustomerByEmail(email) {
        try {
            return this.stripe.customers.search({
                query: `email:'${email}'`,
                expand: [
                    'data.subscriptions'
                ]
            });
        } catch (error) {
            console.error(`[stripeClient] Error fetching customer by email ${email}:`, error);
            throw new Error('Could not fetch customer by email');
        }
    }
    async getStripeCustomer(email, name) {
        try {
            const { data } = await this.getCustomerByEmail(email);
            return data[0] || await this.stripe.customers.create({
                email,
                name
            });
        } catch (error) {
            console.error(`[stripeClient] Error creating customer for email ${email}:`, error);
            throw new Error('Could not create customer');
        }
    }
    async getStripeActiveSubscriptionByEmail(email) {
        try {
            const allSubscriptions = await this.getAllStripeSubscriptionByEmail(email);
            return allSubscriptions.find(({ status })=>[
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].active,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].trialing
                ].includes(status));
        } catch (error) {
            console.error(`[stripeClient] Error getting subscription by email ${email}:`, error);
            throw new Error('Could not get customer subscription');
        }
    }
    async createSubscription(customer, price, trial_period_days) {
        try {
            return this.stripe.subscriptions.create({
                customer,
                items: [
                    {
                        price
                    }
                ],
                trial_period_days,
                trial_settings: {
                    end_behavior: {
                        missing_payment_method: 'cancel'
                    }
                }
            });
        } catch (error) {
            console.error(`[stripeClient] Error during creating subscription with trial ${trial_period_days} for customer ${customer}:`, error);
            throw new Error('[stripeClient] Could not create subscription with trial');
        }
    }
    async getSubscriptionProduct(subscription) {
        try {
            return this.stripe.products.retrieve(subscription.plan.product);
        } catch (error) {
            console.error(`[stripeClient] Error fetching product ${subscription.plan.product}:`, error);
            throw new Error('Could not fetch subscription product');
        }
    }
    async getWebhook(payload, header) {
        try {
            if (!process.env.STRIPE_WEBHOOK_SECRET) throw new Error('STRIPE_WEBHOOK_SECRET is missing');
            return this.stripe.webhooks.constructEvent(payload, header, process.env.STRIPE_WEBHOOK_SECRET);
        } catch (error) {
            console.error(`[stripeClient] Error in constructing webhook event:`, error);
            throw new Error('Could not construct webhook event');
        }
    }
    async cancelSubscription(subscriptionId, comment) {
        try {
            return await this.stripe.subscriptions.cancel(subscriptionId, {
                cancellation_details: {
                    comment: comment || `[studio webhook] Canceled subscription (${subscriptionId}) as it is no longer active due to a new purchase.`
                }
            });
        } catch (error) {
            console.error(`[stripeClient] Error canceling subscription ${subscriptionId}:`, error);
            return null;
        }
    }
    async deleteCustomer(userId) {
        try {
            if (!userId) return;
            return await this.stripe.customers.del(userId);
        } catch (error) {
            console.error(`[stripeClient] Error deleting customer ${userId}:`, error);
            return null;
        }
    }
    async createCheckoutSession(priceId, currency = 'eur', subscription, trial_period_days) {
        try {
            const metadata = subscription && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActiveSubscription"])(subscription) ? {
                current_active: subscription.subscriptionId
            } : undefined;
            return this.stripe.checkout.sessions.create({
                currency: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActiveSubscription"])(subscription) ? undefined : currency,
                customer: subscription?.customerId,
                payment_method_types: [
                    'card'
                ],
                mode: 'subscription',
                line_items: [
                    {
                        price: priceId,
                        quantity: 1
                    }
                ],
                allow_promotion_codes: true,
                success_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])(process.env.APP_BASE_URL)}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].chat}?success=true`,
                cancel_url: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])(process.env.APP_BASE_URL)}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout}`,
                subscription_data: {
                    metadata,
                    trial_period_days
                },
                automatic_tax: {
                    enabled: true
                },
                tax_id_collection: {
                    enabled: true
                },
                customer_update: subscription?.customerId ? {
                    name: 'auto',
                    address: 'auto'
                } : undefined,
                consent_collection: {
                    terms_of_service: 'required'
                },
                custom_text: {
                    terms_of_service_acceptance: {
                        message: "I agree to the Coachbot AI GmbH's [Terms of Service](https://www.coachbot.ai/legal/terms-of-service)"
                    }
                }
            });
        } catch (error) {
            console.error(`[stripeClient] Error creating checkout session:`, error);
            throw new Error('Failed to create checkout session');
        }
    }
    async checkTrialSubscriptions({ email }) {
        const allSubscriptions = await this.getAllStripeSubscriptionByEmail(email);
        return allSubscriptions.some((subscription)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTrialSubscription"])(subscription, process.env.STRIPE_FREE_PRICE));
    }
    async getAllStripeSubscriptionByEmail(email) {
        try {
            const { data } = await this.getCustomerByEmail(email);
            if (!data?.length) return [];
            const subscriptions = await this.stripe.subscriptions.list({
                customer: data[0].id,
                status: 'all',
                limit: 100
            });
            return subscriptions.data;
        } catch (error) {
            console.error(`[stripeClient] Error getting all subscription by email ${email}:`, error);
            throw new Error('Could not get all customer subscriptions');
        }
    }
}
const stripeClient = StripeClient.getInstance();
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[externals]/@prisma/client/scripts/default-index.js [external] (@prisma/client/scripts/default-index.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client/scripts/default-index.js", () => require("@prisma/client/scripts/default-index.js"));

module.exports = mod;
}}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/extension-accelerate/dist/index.js [app-rsc] (ecmascript)");
;
;
const globalForPrisma = global;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]().$extends((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$extension$2d$accelerate$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withAccelerate"])());
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/src/server/db/userClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUser": (()=>createUser),
    "createUserSubscription": (()=>createUserSubscription),
    "deleteUserData": (()=>deleteUserData),
    "deleteUserFile": (()=>deleteUserFile),
    "deleteUserSubscription": (()=>deleteUserSubscription),
    "editUserFile": (()=>editUserFile),
    "getUserData": (()=>getUserData),
    "getUserFiles": (()=>getUserFiles),
    "getUserSubscription": (()=>getUserSubscription),
    "updateUser": (()=>updateUser),
    "updateUserSubscription": (()=>updateUserSubscription),
    "uploadUserFiles": (()=>uploadUserFiles),
    "upsertUser": (()=>upsertUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
async function getUserData(id) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id
            },
            include: {
                subscription: true
            }
        });
    } catch (error) {
        console.error(`[userClient] Error fetching user ${id}:`, error);
        return null;
    }
}
async function createUser(newUserData) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.create({
            data: {
                ...newUserData,
                id: newUserData.id
            }
        });
    } catch (error) {
        console.error(`[userClient] Error during creating user ${newUserData.id}:`, error);
        return null;
    }
}
async function updateUser(id, data) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.update({
            where: {
                id
            },
            data
        });
    } catch (error) {
        console.error(`[userClient] Error during updating user ${id}:`, error);
        return null;
    }
}
async function upsertUser(id, data) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.upsert({
            where: {
                id
            },
            update: {
                ...data
            },
            create: {
                ...data,
                id
            },
            include: {
                assistants: {
                    orderBy: {
                        created_at: 'asc'
                    }
                },
                subscription: true
            }
        });
        return user;
    } catch (error) {
        console.error(`[userClient] Error during upsert user ${id}:`, error);
        return null;
    }
}
async function deleteUserData(id) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.delete({
            where: {
                id
            }
        });
        return user;
    } catch (error) {
        console.error(`[userClient] Error during deleting user ${id}:`, error);
        return null;
    }
}
const getUserFiles = async (id)=>{
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
            where: {
                id
            },
            include: {
                KnowledgeFile: {
                    orderBy: {
                        uploaded_at: 'desc'
                    }
                }
            }
        });
        return user?.KnowledgeFile || [];
    } catch (error) {
        console.error(`[userClient] Error fetching user ${id}:`, error);
        return [];
    }
};
async function uploadUserFiles(data) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].knowledgeFile.create({
            data
        });
    } catch (error) {
        console.error(`[userClient] Error during uploading user files:`, error);
        return null;
    }
}
async function editUserFile(user_id, id, data) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].knowledgeFile.update({
            where: {
                user_id,
                id
            },
            data
        });
    } catch (error) {
        console.error(`[userClient] Error during editing user ${user_id} file ${id}:`, error);
        return null;
    }
}
async function deleteUserFile(user_id, id) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].knowledgeFile.delete({
            where: {
                user_id,
                id
            }
        });
    } catch (error) {
        console.error(`[userClient] Error during deleting user ${user_id} file ${id}:`, error);
        return null;
    }
}
async function getUserSubscription(customerId, subscriptionId) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subscription.findUnique({
            where: {
                customerId,
                subscriptionId
            }
        });
    } catch (error) {
        console.error(`[userClient] Error get subscription for customer ${customerId}:`, error);
        return null;
    }
}
async function createUserSubscription(userId, data) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subscription.create({
            data: {
                ...data,
                userId
            }
        });
    } catch (error) {
        console.error(`[userClient] Error during creating user ${userId} subscription:`, error);
        return null;
    }
}
async function updateUserSubscription(customerId, data) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subscription.update({
            where: {
                customerId
            },
            data
        });
    } catch (error) {
        console.error(`[userClient] Error during updating customer ${customerId} subscription:`, error);
        return null;
    }
}
async function deleteUserSubscription(customerId, subscriptionId) {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].subscription.delete({
            where: {
                customerId,
                subscriptionId
            }
        });
    } catch (error) {
        console.error(`[userClient] Error during deleting customer ${customerId} subscription:`, error);
        return null;
    }
}
}}),
"[project]/src/lib/eventEmitter.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/utils/data.utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
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
}}),
"[project]/src/server/actions/checkoutActions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"7f0243638d1fa053b2e125009415e7b77415e7f4e5":"getUserCurrentSubscription","7f08abd42661a1d1fc10ca23e45fa97939bd5771c6":"createUserCheckoutSession","7f113408b23342dd27bf91e0930201c3c5566814e0":"getUserCurrentPrice","7f38162c1e1ea25645b01b7fc46a9331f8c1f1aa8c":"cancelUserSubscription","7f6164fb8f7fd92f23914d018279d0565c333c0629":"updateSubscriptionData","7f701abfe2f6c437c5e0e355c09e5ca36a214ae4a5":"getPrices","7f9a3527417a97f0dbec6de5bb446d53c23c76c472":"createUserFreeSubscription","7fc8c3060d63dea28a0d23655d8caa453b2dd0fe13":"getCancelSubscriptionData","7fde1dc949db0e2923ce796360116e9428281d8fab":"getUpdatedSubscriptionData","7fe99dde7a8504d1c0b5ebc320c25fadce39c7bd02":"mapStripePrices"},"",""] */ __turbopack_context__.s({
    "cancelUserSubscription": (()=>cancelUserSubscription),
    "createUserCheckoutSession": (()=>createUserCheckoutSession),
    "createUserFreeSubscription": (()=>createUserFreeSubscription),
    "getCancelSubscriptionData": (()=>getCancelSubscriptionData),
    "getPrices": (()=>getPrices),
    "getUpdatedSubscriptionData": (()=>getUpdatedSubscriptionData),
    "getUserCurrentPrice": (()=>getUserCurrentPrice),
    "getUserCurrentSubscription": (()=>getUserCurrentSubscription),
    "mapStripePrices": (()=>mapStripePrices),
    "updateSubscriptionData": (()=>updateSubscriptionData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventEmitter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/eventEmitter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/checkout.models.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/data.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/stripeClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/userClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/userActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
const mapStripePrices = async (prices = [], activePrice)=>{
    return prices.map((price)=>{
        const { id, name, active, description, metadata, marketing_features } = price.product;
        const isStudioPrice = active && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$data$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toBoolean"])(metadata.forStudio);
        const isActive = activePrice?.id === price.id || activePrice?.productId === id && activePrice?.interval === price.recurring.interval;
        return isStudioPrice && {
            name,
            id: price.id,
            description,
            amount: price.unit_amount / 100,
            currency: price.currency,
            product: price.product,
            marketing_features,
            interval: price.recurring.interval,
            isActive,
            currency_options: price.currency_options
        };
    }).filter(Boolean).sort((a, b)=>Number(a.amount) - Number(b.amount));
};
const getUserCurrentPrice = async (currentUser)=>{
    try {
        const user = currentUser || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
        if (!user) return null;
        const subscription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActiveSubscription"])(user.subscription) ? await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].getSubscriptionData(user.subscription?.subscriptionId) : null;
        const { id = '', product = {}, recurring } = (subscription && subscription?.items?.data?.[0]?.price) ?? {};
        return {
            id,
            productId: product?.id,
            interval: recurring?.interval
        };
    } catch (error) {
        console.error('[checkoutActions] Error during get user current price:', error);
        return null;
    }
};
const getPrices = async ()=>{
    try {
        const [{ data }, activePrice] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].getAllPrices(),
            getUserCurrentPrice()
        ]);
        return mapStripePrices(data, activePrice);
    } catch (error) {
        console.error('[checkoutActions] Error during fetching prices:', error);
        return [];
    }
};
const getUserCurrentSubscription = async ({ id, subscription, email, name })=>{
    try {
        if (!!subscription?.customerId) return subscription;
        const customer = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].getStripeCustomer(email, name || '');
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserSubscription"])(id, {
            customerId: customer.id,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].incomplete
        });
    } catch (error) {
        console.error('[checkoutActions] Error during get used saved subscription:', error);
        return null;
    }
};
const createUserCheckoutSession = async (price, currency)=>{
    let userId;
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
        if (!user) return (await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].createCheckoutSession(price.id, currency))?.url;
        userId = user.id;
        const currentSubscription = await getUserCurrentSubscription(user);
        const { trialUsed } = currentSubscription || {};
        const withoutTrialPeriod = trialUsed != null ? trialUsed : await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].checkTrialSubscriptions(user);
        const trialDays = withoutTrialPeriod ? undefined : Number(price.product.metadata?.trialDays) || 14;
        const session = currentSubscription && await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].createCheckoutSession(price.id, currency, currentSubscription, trialDays);
        return session?.url || '';
    } catch (error) {
        console.error(`[checkoutActions] Error during creating checkout session for user ${userId}:`, error);
        throw new Error('[checkoutActions] Could not create session');
    }
};
const createUserFreeSubscription = async (user, trialDays)=>{
    try {
        const { customerId } = await getUserCurrentSubscription(user) || {};
        if (!customerId || !process.env.STRIPE_FREE_PRICE) return;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].createSubscription(customerId, process.env.STRIPE_FREE_PRICE, trialDays);
    } catch (error) {
        console.error(`[checkoutActions] Error during creating trial subscription for user ${user.id}:`, error);
        throw new Error('[checkoutActions] Could not create session');
    }
};
const cancelUserSubscription = async ()=>{
    let userId, subscription;
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])();
        if (!user) throw new Error('[checkoutActions] User not authenticated!');
        ({ id: userId, subscription } = user);
        if (user.subscription?.subscriptionId) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].cancelSubscription(user.subscription?.subscriptionId, `[user action] "${user.subscription?.subscriptionId}" subscription was cancelled by user.`);
        }
        return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])(process.env.APP_BASE_URL)}/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrivateRoutes"].checkout}`;
    } catch (error) {
        console.error(`[checkoutActions] Error during cancel subscription ${subscription?.subscriptionId} for user ${userId}:`, error);
        throw new Error('[checkoutActions] Could not create session');
    }
};
const getUpdatedSubscriptionData = async (subscription)=>{
    try {
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].getSubscriptionProduct(subscription);
        const { name, metadata } = product;
        const { coaches, trialDays, analytics, allowedIntegration } = metadata;
        const trialUsed = !process.env.STRIPE_FREE_PRICE || subscription.plan?.id !== process.env.STRIPE_FREE_PRICE;
        return {
            name,
            subscriptionId: subscription.id,
            customerId: subscription.customer,
            status: subscription.status,
            coaches,
            trialDays,
            analytics,
            allowedIntegration,
            canceledAt: subscription.trial_end ? new Date(subscription.trial_end * 1000) : null,
            trialUsed
        };
    } catch (error) {
        console.error(`[checkoutActions] Error during get data for  activesubscription ${subscription.id}:`, error);
        throw new Error('[checkoutActions] Could not get active subscription data');
    }
};
const getCancelSubscriptionData = async (eventData)=>{
    try {
        return {
            customerId: eventData.customer,
            status: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$checkout$2e$models$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SubscriptionStatus"].canceled,
            canceledAt: new Date(eventData.canceled_at * 1000)
        };
    } catch (error) {
        console.error(`[checkoutActions] Error during get data for cancelled subscription ${eventData.id}:`, error);
        throw new Error('[checkoutActions] Could not get canceled subscription data');
    }
};
const updateSubscriptionData = async (customerId, subscriptionData, isDeleted = false)=>{
    try {
        const subscription = isDeleted ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUserSubscription"])(customerId) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserSubscription"])(customerId, subscriptionData);
        if (subscription?.userId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$eventEmitter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].emit(`message:${subscription.userId}`, {
                user_id: subscription.userId,
                event: 'subscriptionUpdated'
            });
        }
    } catch (error) {
        console.error(`[checkoutActions] Error deleting subscription data for customer ${customerId}:`, error);
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    mapStripePrices,
    getUserCurrentPrice,
    getPrices,
    getUserCurrentSubscription,
    createUserCheckoutSession,
    createUserFreeSubscription,
    cancelUserSubscription,
    getUpdatedSubscriptionData,
    getCancelSubscriptionData,
    updateSubscriptionData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(mapStripePrices, "7fe99dde7a8504d1c0b5ebc320c25fadce39c7bd02", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserCurrentPrice, "7f113408b23342dd27bf91e0930201c3c5566814e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPrices, "7f701abfe2f6c437c5e0e355c09e5ca36a214ae4a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserCurrentSubscription, "7f0243638d1fa053b2e125009415e7b77415e7f4e5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUserCheckoutSession, "7f08abd42661a1d1fc10ca23e45fa97939bd5771c6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUserFreeSubscription, "7f9a3527417a97f0dbec6de5bb446d53c23c76c472", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(cancelUserSubscription, "7f38162c1e1ea25645b01b7fc46a9331f8c1f1aa8c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUpdatedSubscriptionData, "7fde1dc949db0e2923ce796360116e9428281d8fab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCancelSubscriptionData, "7fc8c3060d63dea28a0d23655d8caa453b2dd0fe13", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSubscriptionData, "7f6164fb8f7fd92f23914d018279d0565c333c0629", null);
}}),
"[project]/src/server/actions/sessionActions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cookie.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encrypt"])({
            userId,
            expiresAt,
            accessAllowed,
            assistantId
        }, secretKey) || '';
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
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
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], true, secretKey);
        return session;
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDynamicServerError"])(error)) {
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
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encrypt"])({
            ...payload,
            ...newData
        }, secretKey) || '';
        cookieStore.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"], session, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/'
        });
        tags && tags.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidateTag"]);
        paths && paths.forEach((path)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(path));
    } catch (error) {
        console.error('[sessionActions] Error updating session:', error);
    }
}
async function deleteSession() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SESSION_COOKIE_NAME"]);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSession,
    verifySession,
    getSessionUser,
    updateSession,
    deleteSession
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSession, "70e4de43e28aaa533b33b7452ebbfe624254ef9332", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(verifySession, "0069ba96f7d5387663470cd879b3d1c554f9078a61", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSessionUser, "006d0a7129916a3465564fabe7ab4818da32dc51a1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSession, "70425448e81a40aaef871c95f3f46f2a736857ca6f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSession, "003ced715dcb142a06df1c477a7bce1d57c1a0fb1e", null);
}}),
"[project]/src/server/actions/userActions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"00f493e29254b15d58fd88f4f4d1857033e824e6ed":"getUser","400fe5b7eae332f55d1570f77f67fb4880e1da66cc":"updateUserData","40617daf5d15e4fe06aa3748fbde57cacd4e5c5d76":"checkExistingSubscription","40a3be75c021cc8c57fca1bced4da32245d8a3953c":"deleteUserAccount","40a5355ded58ddab19047239cd1337c2b15c013a91":"checkSignupModeParam","40bf5ddfac312f9fe15288cb868c5f0f1a4e7e93ca":"checkUserAccessAllowed","40ef050ad81136482a8d47b0d661448d7bbda3e264":"checkUserSubscription","60ded4edc2884943f0f937f1dd06d3a3b355ee8d80":"updateUserAccount"},"",""] */ __turbopack_context__.s({
    "checkExistingSubscription": (()=>checkExistingSubscription),
    "checkSignupModeParam": (()=>checkSignupModeParam),
    "checkUserAccessAllowed": (()=>checkUserAccessAllowed),
    "checkUserSubscription": (()=>checkUserSubscription),
    "deleteUserAccount": (()=>deleteUserAccount),
    "getUser": (()=>getUser),
    "updateUserAccount": (()=>updateUserAccount),
    "updateUserData": (()=>updateUserData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/common.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/cookie.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$db$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/db.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/encryption.utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/stripeClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db/userClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$checkoutActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/checkoutActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/sessionActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
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
async function getUser() {
    let userId;
    try {
        userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])();
        if (!userId) throw new Error('[userActions] User not authenticated!');
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserData"])(userId || '');
        return user;
    } catch (error) {
        console.error(`[userActions] Error fetching user ${userId}`, error);
        return null;
    }
}
async function updateUserAccount(name, email) {
    let userId;
    try {
        userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])();
        const parsedData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$db$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["userAccountSchema"].safeParse({
            name,
            email
        });
        if (!parsedData.success) {
            return {
                errors: parsedData.error.errors.map(({ message, path })=>({
                        name: path[0],
                        message
                    }))
            };
        }
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUser"])(userId || '', {
            name,
            email
        });
        return {
            successMessage: 'Account.accountForm.successMessage',
            value: {
                name: user?.name || '',
                email: user?.email || ''
            }
        };
    } catch (error) {
        console.error(`[userActions] Error updating account data for user ${userId}`, error);
        return {
            error: 'General.errors.unexpectedError'
        };
    }
}
async function updateUserData(data) {
    let userId;
    try {
        userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSessionUser"])();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUser"])(userId || '', data);
        return user;
    } catch (error) {
        console.error(`[userActions] Error updating user ${userId} data: `, error);
        return {
            error: 'General.errors.unexpectedError'
        };
    }
}
async function deleteUserAccount({ email, password }) {
    let userId;
    try {
        const user = await getUser();
        if (!user) {
            throw new Error('User not authenticated');
        }
        userId = user.id;
        await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFirebaseUser"])(email, password),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].deleteCustomer(user.subscription?.customerId),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteUserData"])(user.id),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSession"])()
        ]);
        return {
            success: true
        };
    } catch (error) {
        console.error(`[userActions] Error deleting user account ${userId}:`, error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to delete account'
        };
    }
}
async function checkSignupModeParam(user) {
    const encryptedMode = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNUP_MODE_COOKIE_NAME"]);
    const isAllowedParam = !!encryptedMode && process.env.ALLOWED_SIGNUP_MODE_VALUES?.split(',').includes(encryptedMode);
    if (!isAllowedParam) return false;
    const modeData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$encryption$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decrypt"])(encryptedMode, process.env.ENCODE_SECRET_KEY);
    const freeTrialSub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$checkoutActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserFreeSubscription"])(user, modeData?.trialDays || 14);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNUP_MODE_COOKIE_NAME"]);
    return !!freeTrialSub;
}
async function checkExistingSubscription({ subscription, id, email }) {
    const currentPrice = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$checkoutActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserCurrentPrice"])({
        subscription
    });
    if (!!subscription && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActiveSubscription"])(subscription, currentPrice?.id)) return true;
    const stripeSubscription = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$stripeClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeClient"].getStripeActiveSubscriptionByEmail(email || '');
    if (!stripeSubscription || !id) return null;
    const subscriptionData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$checkoutActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUpdatedSubscriptionData"])(stripeSubscription);
    const updatedSubscription = subscription?.customerId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateUserSubscription"])(subscription.customerId, subscriptionData) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2f$userClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createUserSubscription"])(id, subscriptionData);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$common$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isActiveSubscription"])(updatedSubscription, stripeSubscription.plan.id);
}
async function checkUserSubscription(user) {
    try {
        const hasExistingSubscription = await checkExistingSubscription(user);
        if (hasExistingSubscription !== null) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$cookie$2e$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteCookie"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SIGNUP_MODE_COOKIE_NAME"]);
            return hasExistingSubscription;
        }
        return checkSignupModeParam(user);
    } catch (error) {
        console.error(`[userActions] Error checking user ${user.id} subscription:`, error);
        return false;
    }
}
async function checkUserAccessAllowed(currentUser) {
    try {
        const user = currentUser || await getUser();
        if (!user) return false;
        const accessAllowed = user.accessAllowed || await checkUserSubscription(user);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$sessionActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSession"])({
            accessAllowed
        });
        return accessAllowed;
    } catch (error) {
        console.error(`[userActions] Error checking user ${currentUser?.id} access allowed:`, error);
        return false;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getUser,
    updateUserAccount,
    updateUserData,
    deleteUserAccount,
    checkSignupModeParam,
    checkExistingSubscription,
    checkUserSubscription,
    checkUserAccessAllowed
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUser, "00f493e29254b15d58fd88f4f4d1857033e824e6ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserAccount, "60ded4edc2884943f0f937f1dd06d3a3b355ee8d80", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserData, "400fe5b7eae332f55d1570f77f67fb4880e1da66cc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteUserAccount, "40a3be75c021cc8c57fca1bced4da32245d8a3953c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkSignupModeParam, "40a5355ded58ddab19047239cd1337c2b15c013a91", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkExistingSubscription, "40617daf5d15e4fe06aa3748fbde57cacd4e5c5d76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkUserSubscription, "40ef050ad81136482a8d47b0d661448d7bbda3e264", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(checkUserAccessAllowed, "40bf5ddfac312f9fe15288cb868c5f0f1a4e7e93ca", null);
}}),
"[project]/src/shared/Analytics.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Analytics": (()=>Analytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Analytics.tsx <module evaluation>", "Analytics");
}}),
"[project]/src/shared/Analytics.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Analytics": (()=>Analytics)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/Analytics.tsx", "Analytics");
}}),
"[project]/src/shared/Analytics.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Analytics$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/Analytics.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Analytics$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/Analytics.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Analytics$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/styles/cbi_2cb9f026.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "cbi_2cb9f026-module__1EVGDW__className",
  "variable": "cbi_2cb9f026-module__1EVGDW__variable",
});
}}),
"[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/cbi_2cb9f026.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'cbi', 'cbi Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/styles/helveticanow_c21601ec.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "helveticanow_c21601ec-module__UrvVba__className",
  "variable": "helveticanow_c21601ec-module__UrvVba__variable",
});
}}),
"[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/styles/helveticanow_c21601ec.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'helveticaNow', 'helveticaNow Fallback'"
    }
};
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/styles/fonts.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript)");
;
;
;
;
}}),
"[project]/src/styles/fonts.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/styles/fonts.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript) <export default as cbi>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cbi": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript)");
}}),
"[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript) <export default as helveticaNow>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "helveticaNow": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript)");
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getLocale.js [app-rsc] (ecmascript) <export default as getLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getMessages.js [app-rsc] (ecmascript) <export default as getMessages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AccessProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/AccessProvider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/actions/userActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Analytics$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/Analytics.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$fonts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/styles/fonts.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__cbi$3e$__ = __turbopack_context__.i("[project]/src/styles/cbi_2cb9f026.js [app-rsc] (ecmascript) <export default as cbi>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__helveticaNow$3e$__ = __turbopack_context__.i("[project]/src/styles/helveticanow_c21601ec.js [app-rsc] (ecmascript) <export default as helveticaNow>");
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
const GradientBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/Background.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>mod.GradientBackground), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/Background.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
const metadata = {
    title: 'CoachBot Studio',
    description: 'Your 24/7 Growth Partner.'
};
async function RootLayout({ children, modal }) {
    const [locale, messages] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getLocale$3e$__["getLocale"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__["getMessages"])()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        className: 'size-full scroll-smooth bg-violet-950 antialiased',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        charSet: "UTF-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "apple-touch-icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$helveticanow_c21601ec$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__helveticaNow$3e$__["helveticaNow"].className} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$cbi_2cb9f026$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__cbi$3e$__["cbi"].className} antialiased`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$Analytics$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Analytics"], {
                        envUrl: process.env.APP_BASE_URL,
                        user$: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$actions$2f$userActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUser"])()
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                        messages: messages,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$AccessProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccessProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                                children: [
                                    children,
                                    modal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GradientBackground, {}, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a1751d5f._.js.map