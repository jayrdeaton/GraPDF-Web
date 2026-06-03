import type {} from './.nuxt/nuxt.node.d.ts'
export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  srcDir: 'src',
  serverDir: 'src/server',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: ''
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  css: ['~/assets/css/main.css'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    vercel: {
      functions: {
        maxDuration: 300
      }
    }
  }
})
