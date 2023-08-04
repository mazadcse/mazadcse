import { _ as _export_sfc, b as __nuxt_component_0$2, a as __nuxt_component_1$2, f as __nuxt_component_1$1 } from '../server.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createCommentVNode, toDisplayString, Fragment, renderList, useSSRContext } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'file://C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "AppProjectCard",
  __ssrInlineRender: true,
  props: {
    projectTitle: {
      type: String,
      default: ""
    },
    projectDescription: {
      type: String,
      default: ""
    },
    projectUrl: {
      type: String,
      default: "#"
    },
    imgUrl: {
      type: String,
      default: "https://fakeimg.pl/500x300"
    },
    hideImage: {
      type: Boolean,
      default: false
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_nuxt_img = __nuxt_component_1$2;
      const _component_Icon = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.projectUrl,
        target: "_blank",
        class: "card-style focused-link w-full min-h-[7rem] md:min-h-[8rem] h-auto p-0 overflow-hidden flex justify-between border-none mb-5 [&_img]:hover:scale-105"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!__props.hideImage) {
              _push2(`<div class="card-style w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-1 rounded-lg" data-v-b217725f${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                format: "webp",
                loading: "lazy",
                src: __props.imgUrl,
                alt: "Cover Image",
                class: "h-full object-cover bg-cover origin-center"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="${ssrRenderClass([{
              "lg:w-full": __props.hideImage,
              "lg:w-[calc(66%-.25rem)]": !__props.hideImage
            }, "card-style relative flex flex-col justify-evenly py-2 pb-3 px-4 flex-shrink-0 w-full overflow-hidden"])}" data-v-b217725f${_scopeId}><h3 class="font-bold mb-2" data-v-b217725f${_scopeId}>${ssrInterpolate(__props.projectTitle)}</h3><p class="mb-4" data-v-b217725f${_scopeId}>${ssrInterpolate(__props.projectDescription)}</p><div data-v-b217725f${_scopeId}><!--[-->`);
            ssrRenderList(__props.tags, (tag, index) => {
              _push2(`<span class="px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100" data-v-b217725f${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "heroicons:arrow-up-right-20-solid",
              size: "1.25rem",
              class: "ml-auto absolute right-0 top-0 text-green-500 bg-slate-100 dark:bg-slate-600 border-l border-b border-slate-300 dark:border-slate-700 rounded-bl-lg p-1 w-7 h-7"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              !__props.hideImage ? (openBlock(), createBlock("div", {
                key: 0,
                class: "card-style w-0 lg:w-1/3 hidden lg:inline-block flex-shrink-0 min-h-full overflow-hidden mr-1 rounded-lg"
              }, [
                createVNode(_component_nuxt_img, {
                  format: "webp",
                  loading: "lazy",
                  src: __props.imgUrl,
                  alt: "Cover Image",
                  class: "h-full object-cover bg-cover origin-center"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true),
              createVNode("div", {
                class: ["card-style relative flex flex-col justify-evenly py-2 pb-3 px-4 flex-shrink-0 w-full overflow-hidden", {
                  "lg:w-full": __props.hideImage,
                  "lg:w-[calc(66%-.25rem)]": !__props.hideImage
                }]
              }, [
                createVNode("h3", { class: "font-bold mb-2" }, toDisplayString(__props.projectTitle), 1),
                createVNode("p", { class: "mb-4" }, toDisplayString(__props.projectDescription), 1),
                createVNode("div", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tags, (tag, index) => {
                    return openBlock(), createBlock("span", {
                      class: "px-3 py-[.1rem] inline-block rounded-full font-semibold font-mono text-xs mr-1 border border-slate-300 dark:border-slate-500 bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-100",
                      key: index
                    }, toDisplayString(tag), 1);
                  }), 128))
                ]),
                createVNode(_component_Icon, {
                  name: "heroicons:arrow-up-right-20-solid",
                  size: "1.25rem",
                  class: "ml-auto absolute right-0 top-0 text-green-500 bg-slate-100 dark:bg-slate-600 border-l border-b border-slate-300 dark:border-slate-700 rounded-bl-lg p-1 w-7 h-7"
                })
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/cards/AppProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b217725f"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=AppProjectCard-6d126a01.mjs.map
