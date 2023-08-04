import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["partytown"]?: typeof import("@nuxtjs/partytown").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/partytown", Exclude<NuxtConfig["partytown"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["C:/Users/mazad/OneDrive/Desktop/mazadcse/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   githubToken: string,

   raindropTestToken: string,

   raindropCollectionId: string,

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: string,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         toc: {
            depth: number,

            searchDepth: number,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   "nuxt-simple-robots": {
      credits: boolean,

      groups: Array<{

      }>,

      sitemap: Array<any>,

      robotsEnabledValue: string,

      robotsDisabledValue: string,
   },
  }
  interface PublicRuntimeConfig {
   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: number,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: string,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   site: {
      _context: {
         defaultLocale: string,

         trailingSlash: string,

         titleSeparator: string,

         name: string,

         indexable: string,

         debug: string,
      },

      defaultLocale: string,

      trailingSlash: boolean,

      titleSeparator: string,

      name: string,

      indexable: boolean,

      debug: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }