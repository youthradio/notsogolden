import dotenv from 'dotenv'
import ArticleData from './data/data.json'
import POSTCONFIG from './post.config'

dotenv.config()
process.env.DEBUG = 'nuxt:*'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    ArticleData
  },
  router: {
    base: POSTCONFIG.baseURL
  },
  head: {
    title: POSTCONFIG.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: POSTCONFIG.description },
      { property: 'og:title', content: POSTCONFIG.title },
      { property: 'og:site_name', content: POSTCONFIG.title },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: POSTCONFIG.url },
      { property: 'og:image', content: POSTCONFIG.featureImage },
      { property: 'og:description', content: POSTCONFIG.description },
      { property: 'og:image:alt', content: POSTCONFIG.featureImageDescription },
      { property: 'fb:app_id', content: POSTCONFIG.fbAppID },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: POSTCONFIG.twitterHandler },
      { name: 'twitter:site', content: POSTCONFIG.twitterHandler },
      { name: 'twitter:title', content: POSTCONFIG.title },
      { name: 'twitter:description', content: POSTCONFIG.description },
      { name: 'twitter:image', content: POSTCONFIG.featureImage },
      { name: 'twitter:image:alt', content: POSTCONFIG.featureImageDescription },
      { itemprop: 'description', content: POSTCONFIG.description },
      { itemprop: 'image', content: POSTCONFIG.featureImage },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'shortcut icon', href: 'favicon/favicon-32x32.png' },
      { rel: 'manifest', href: 'favicon/site.webmanifest' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Alfa+Slab+One|Lato&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~plugins/lazysizes.js',
      ssr: false
    },
    {
      src: '~plugins/vue-observable.js',
      ssr: false
    },
    {
      src: '~/plugins/vue-plyr.js',
      ssr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '~/modules/getdata',
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-156415156-1',
    config: {
      anonymize_ip: true, // anonymize IP
      page_title: POSTCONFIG.title,
      page_path: POSTCONFIG.baseURL
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: true // disable if you don't want to track each page route with router.afterEach(...).
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  },
  // list of all possible routes, nuxt will generate the static pages
  generate: {
    routes: [].concat(...ArticleData.content
      .themes.map(theme =>
        theme.topics.map(topic =>
          `/${theme.slug}/${topic.slug}`)))
  }
  // server: {
  //   https: {
  //     key: readFileSync(`${process.env.SSLKEY}`),
  //     cert: readFileSync(`${process.env.SSLCRT}`)
  //   }
  // }
}
