import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}