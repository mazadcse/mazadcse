import { defineComponent, toRefs, computed, useSlots, useSSRContext, h } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/index.mjs';
import { u as useAsyncData } from './asyncData-9009f163.mjs';
import { j as useState, i as useRuntimeConfig, b as __nuxt_component_0$2 } from '../server.mjs';
import { hash } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ohash/dist/index.mjs';
import { q as queryContent, e as encodeQueryParams, j as jsonStringify } from './query-705223e6.mjs';
import { u as useContentDisabled, w as withContentBase, a as addPrerenderPath, s as shouldUseClientDB } from './utils-4f475860.mjs';
import { u as useContentPreview } from './preview-3335b799.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@iconify/vue/dist/iconify.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/scule/dist/index.mjs';
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
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/cookie-es/dist/index.mjs';

const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./client-db-106554f9.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContentDisabled();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0$2, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation-a45cda27.mjs.map
