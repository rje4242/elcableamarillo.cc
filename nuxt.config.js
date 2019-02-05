const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

import projects from './static/projects.js'

const github = {
  user: 'ElCableAmarillo',
  practicas: 'Practicas'
}

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
} : {}

module.exports = {

  mode: 'universal',

  ...routerBase,
  
  env: {
    projects: projects,
    github: {
      web: 'https://github.com/'+github.user+'/'+github.practicas+'/',
      raw: 'https://raw.githubusercontent.com/'+github.user+'/'+github.practicas+'/master/',
      avatar: 'https://avatars.githubusercontent.com/'
    }
  },

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  generate: {
    routes: async function () {
      const primaria = projects.primaria
      const secundaria = projects.secundaria
      const bachillerato = projects.bachillerato
      
      let p = primaria.map(p => { return '/practicas/primaria/' + p })
      let s = secundaria.map(p => { return '/practicas/secundaria/' + p })
      let b = bachillerato.map(p => { return '/practicas/bachillerato/' + p })
      
      return Promise.all([p, s, b]).then(values => {
        return [...values[0], ...values[1], ...values[2]]
      })
    }
  },

  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/vuetify.js'],
  css: ['~/assets/style/app.styl'],
  loading: { color: '#bf1733' },

  build: {
    transpile: [/^vuetify/],
    plugins: [
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    extend (config, ctx) {
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
