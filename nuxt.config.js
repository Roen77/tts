module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'libraryapp',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'library App' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'library App' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'library App' },
      { hid: 'og:description', property: 'og:description', content: '나만의 책을 정리하고 기록할 수 있는 라이브러리 사이트입니다.' },
      { hid: 'og:url', property: 'og:url', content: 'https://vue.roen.pe.kr/' },
      { hid: 'og:image', property: 'og:image', content: 'https://vue.roen.pe.kr/images/sample_book.jpg' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'library App' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'https://vue.roen.pe.kr' },
      { hid: 'twitter:description', name: 'twitter:description', content: '나만의 책을 정리하고 기록할 수 있는 라이브러리 사이트입니다.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://vue.roen.pe.kr/images/sample_book.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/common.css' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/0c7f47858a.js' }
      // { src: 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/common.css',
    '@/static/css/style.css'
  ],
  // loading: '~/components/LoadingBar.vue',
  loading: {
    color: '#5C6BC0',
    height: '5px'
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins' },
    { src: '~/plugins/axios' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment'
  ],
  moment: {
    defaultLocale: 'ko',
    locales: ['ko']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true, // Or `bvCSS: false`
    components: ['BPagination'],
    componentPlugins: [
      'FormDatepickerPlugin'
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://api.roen.pe.kr/' : 'http://localhost:5000/',
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.roen.pe.kr/' : 'http://localhost:5000/',
    // baseURL: 'http://localhost:5000/',
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Library App',
      lang: 'ko'
    }
  },
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
    // server: {
    //   port: 3000
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  // }
  server: {
    port: process.env.PORT || 3000
  }
}
