import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blog-post-layout"
declare module "C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}