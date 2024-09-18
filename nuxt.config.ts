export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Grand Build',
        },
      ],
      link: [
        {
          id: 'theme-link',
          rel: 'stylesheet',
          href: '/themes/lara-dark-blue/theme.css',
        },
        { rel: 'icon', href: '/favicon.ico' },
      ],
      noscript: [
        { textContent: 'JavaScript is required' },
      ],
    },
  },

  devtools: { enabled: false },

  routeRules: {
    '/': { prerender: true },
    '/api/**': {
      cors: true,
      swr: false,
    },
    '/**': { ssr: false },
  },

  css: [
    'primeicons/primeicons.css',
  ],

  modules: [
    'nuxt-primevue',
    '@vueuse/nuxt',
  ],

  /** modules settings */
  primevue: {
    components: {
      prefix: 'Prime',
      include: [
        'Button',
        'Checkbox',
        'Dropdown',
        'InputText',
        'InputGroup',
        'InputGroupAddon',
        'Toast',
      ],
    },
  },

  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-custom-media': {},
    },
  },

  compatibilityDate: '2024-09-18',
})
