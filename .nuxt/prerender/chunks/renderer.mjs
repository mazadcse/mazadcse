import { createRenderer } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { eventHandler, setResponseStatus, getQuery, createError } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/h3/dist/index.mjs';
import { stringify, uneval } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/devalue/index.js';
import { renderToString } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/server-renderer/index.mjs';
import { a as useNitroApp, u as useRuntimeConfig, g as getRouteRules } from './nitro/nitro-prerenderer.mjs';
import { joinURL } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unified/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/micromark/lib/preprocess.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/micromark/lib/postprocess.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-emoji/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/rehype-slug/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-squeeze-paragraphs/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-gfm/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/rehype-raw/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-parse/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/remark-rehype/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/mdast-util-to-hast/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/detab/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unist-builder/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/mdurl/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/slugify/slugify.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unist-util-position/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unist-util-visit/index.js';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ipx/dist/index.mjs';

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.node.req.url.endsWith("/favicon.ico")) {
      if (!event.handled) {
        event.node.res.setHeader("Content-Type", "image/x-icon");
        event.node.res.end(
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.handled) {
        event.node.res.statusCode = event.node.res.statusCode === 200 ? 500 : event.node.res.statusCode;
        event.node.res.end(
          "No response returned from render handler: " + event.node.req.url
        );
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.node.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.node.res.setHeader(header, response.headers[header]);
      }
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const appRootId = "app";

const appRootTag = "body";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('./app/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getEntryIds = () => getClientManifest().then((r) => Object.values(r).filter(
  (r2) => (
    // @ts-expect-error internal key set by CSS inlining configuration
    r2._globalCSS
  )
).map((r2) => r2.src));
const getStaticRenderedHead = () => import('./rollup/_virtual_head-static.mjs').then((r) => r.default || r);
const getServerEntry = () => import('./app/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => import('./app/styles.mjs').then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await import('./rollup/_virtual_spa-template.mjs').then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}">${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_CACHE = null;
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
    if (PAYLOAD_CACHE.has(url)) {
      return PAYLOAD_CACHE.get(url);
    }
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false || (PRERENDER_NO_SSR_ROUTES.has(url) ),
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  {
    ssrContext.payload.prerenderedAt = Date.now();
  }
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    {
      PAYLOAD_CACHE.set(url, response2);
    }
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  {
    const source = ssrContext.modules ?? ssrContext._registeredComponents;
    if (source) {
      for (const id of await getEntryIds()) {
        source.add(id);
      }
    }
  }
  const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) ;
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null ,
      NO_SCRIPTS ? null : _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [_rendered.html],
    bodyAppend: normalizeChunks([
      NO_SCRIPTS ? void 0 : renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) ,
      routeOptions.experimentalNoScripts ? void 0 : _rendered.renderScripts(),
      // Note: bodyScripts may contain tags other than <script>
      renderedMeta.bodyScripts
    ])
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(`<style>${style}</style>`);
      }
    }
  }
  return Array.from(inlinedStyles).join("");
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const attrs = [
    'type="application/json"',
    `id="${opts.id}"`,
    `data-ssr="${!(opts.ssrContext.noSSR)}"`,
    opts.src ? `data-src="${opts.src}"` : ""
  ].filter(Boolean);
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  return `<script ${attrs.join(" ")}>${contents}<\/script><script>window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}<\/script>`;
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

export { renderer as default };
//# sourceMappingURL=renderer.mjs.map
