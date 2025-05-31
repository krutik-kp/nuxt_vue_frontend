export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || 'http://localhost:5000/api'
    }
  },

  app: {
    head: {
      title: 'Nuxt Auth App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A Nuxt 3 app with auth' }
      ]
    }
  }
})
