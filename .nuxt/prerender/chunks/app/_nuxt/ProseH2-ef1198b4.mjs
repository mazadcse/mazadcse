import { i as useRuntimeConfig } from '../server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/server-renderer/index.mjs';
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
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@iconify/vue/dist/offline.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/@iconify/vue/dist/iconify.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/scule/dist/index.mjs';
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

const heading = 2;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH2",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const { anchorLinks } = useRuntimeConfig().public.content;
    const generate = (anchorLinks == null ? void 0 : anchorLinks.depth) >= heading && !(anchorLinks == null ? void 0 : anchorLinks.exclude.includes(heading));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))}>`);
      if (_ctx.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${_ctx.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h2>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH2-ef1198b4.mjs.map
