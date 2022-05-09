export default {
  // Target: https://go.nuxtjs.dev/config-target
  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'livewall-nuxt-boilerplate',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/normalize.css',
    '@/assets/scss/_defaults.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv', // https://github.com/nuxt-community/dotenv-module#readme
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@/assets/scss/_fonts.scss', '@/assets/scss/_variables.scss', '@/assets/scss/_mixins.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware
  serverMiddleware: [
    // Server-side security headers
    '~/middleware/security-headers.js'
  ]
  
}
