import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/css/global.css'
  ],
  nitro: {
    prerender: {
      routes: ['/'],
    }
  }
})
