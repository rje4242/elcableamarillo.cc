import trainings from './static/trainings.json'
import projects from './static/projects.json'

const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const canonical = 'http://www.elcableamarillo.cc'
const routerBase = {
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/' : '/'
  }
}

module.exports = {
  mode: 'universal',
  ...routerBase,
  env: {
    canonical: canonical
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'google-site-verification',
        content: 'FnPLcYRmmc9Yg3cHeG58mvrgjNWZe7T-xfPdrJg01sA'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  generate: {
    routes: async function() {
      const h = [
        '/',
        '/404',
        '/practicas/primaria',
        '/practicas/secundaria',
        '/practicas/bachillerato'
      ]
      const t = await trainings.map(t => {
        return `/formacion/${t.alias}`
      })
      const p = await projects.map(p => {
        return `/practicas/${p.nivel}/${p.alias}`
      })
      return Promise.all([t, h, p]).then(values => {
        return [...values[0], ...values[1], ...values[2]]
      })
    }
  },
  modules: ['@nuxtjs/axios'],
  plugins: [{ src: '~plugins/ga.js', ssr: false }, '~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  loading: {
    color: '#ffee00',
    height: '3px'
  },
  build: {
    transpile: [/^vuetify/],
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: true,
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
