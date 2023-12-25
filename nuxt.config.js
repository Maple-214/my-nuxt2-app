export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    return {
      htmlAttrs: {
        lang: 'ja', // 设置默认语言为英语
      },
      title: '株式会社SEA-Biz・医療仲介・不動産仲介・旅行',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
          sizes: '64x64',
        },
        {
          rel: 'stylesheet',
          href: '/css/commom.css',
        },
      ],
      script: [
        // {
        //   src: '/js/toyo.js',
        //   type: 'text/javascript',
        //   charset: 'utf-8'
        // }
      ],
    };
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'bootstrap/dist/css/bootstrap.css',
    '~/assets/iconfont/iconfont.css',
    // 可以添加其他样式文件
    // '~/assets/stylus/reset.styl',
    // '~/assets/stylus/common.styl',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/jquery.js', ssr: false },
    '~/plugins/vee-validate.js',
    '~/plugins/fullWidthRowHandler.js',
    '~/plugins/initI18n',
    // '~/plugins/languageSwitcher.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n', '@nuxtjs/style-resources'],
  i18n: {
    locales: [
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh-CN.json',
        name: '中文',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.json',
        name: '日本語',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        name: 'English',
      },
    ],
    defaultLocale: 'ja',
    i18n_redirected: false,
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        zh: require('./locales/zh-CN.json'),
        ja: require('./locales/ja-JP.json'),
        en: require('./locales/en-US.json'),
      },
    },
  },
  router: {
    middleware: ['i18n', 'redirect'],
    extendRoutes(routes, resolve) {
      routes.forEach(r => {
      });

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    outDir: 'dist',
  },
};
