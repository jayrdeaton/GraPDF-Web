import { readFileSync } from 'node:fs'

import tailwindcss from '@tailwindcss/vite'

import type {} from './.nuxt/nuxt.node.d.ts'
const pkg: { displayName: string; description: string } = JSON.parse(readFileSync('./package.json', 'utf-8'))
export default defineNuxtConfig({
  compatibilityDate: '2025-11-01',
  srcDir: 'src',
  serverDir: 'src/server',
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', '@vite-pwa/nuxt'],
  vite: {
    plugins: [tailwindcss()]
  },
  colorMode: {
    classSuffix: ''
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: pkg.displayName,
      short_name: pkg.displayName,
      description: pkg.description,
      theme_color: '#09090b',
      background_color: '#09090b',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        { src: '/icon-180.png', sizes: '180x180', type: 'image/png' },
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,ico,woff2}']
    }
  },
  app: {
    head: {
      title: pkg.displayName,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: pkg.displayName },
        { name: 'description', content: pkg.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: pkg.displayName },
        { property: 'og:title', content: pkg.displayName },
        { property: 'og:description', content: pkg.description },
        { property: 'og:url', content: 'https://grapdf.infinitetoken.com' },
        { property: 'og:image', content: 'https://grapdf.infinitetoken.com/og.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '627' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pkg.displayName },
        { name: 'twitter:description', content: pkg.description },
        { name: 'twitter:image', content: 'https://grapdf.infinitetoken.com/og.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/icon-180.png' }
      ]
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
