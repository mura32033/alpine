export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      titleTemplate: '%s | むらのブログ',
    }
  },
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools'
  ],

  nitro: {
    prerender: {
      failOnError: false
    }
  }
})
