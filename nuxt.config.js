import projects from './static/projects.js'

const nodeExternals = require('webpack-node-externals')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const routerBase = {
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/' : '/'
  }
}

const seo = {
  title: 'El Cable Amarillo',
  description:
    'Proyecto educativo de código abierto para fomentar el uso de la programación y robótica en los centros educativos utilizando herramientas de software y hardware libre',
  keywords:
    'programación, robótica, arduino, educación, primaria, secundaria, murcia',
  image: '/default.png'
}
const github = {
  web: 'https://github.com/',
  raw: 'https://raw.githubusercontent.com',
  user: 'ElCableAmarillo',
  practicas: 'Practicas'
}

module.exports = {
  mode: 'universal',
  ...routerBase,
  env: {
    projects: projects,
    seo: {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
      image: seo.image
    },
    github: {
      web: `${github.web}/${github.user}/${github.practicas}`,
      raw: `${github.raw}/${github.user}/${github.practicas}/master`
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
        '/404'
      ]
      const p = await projects.primaria.map(p => {
        return '/practicas/primaria/' + p
      })
      const s = await projects.secundaria.map(p => {
        return '/practicas/secundaria/' + p
      })
      const b = await projects.bachillerato.map(p => {
        return '/practicas/bachillerato/' + p
      })
      return Promise.all([h, p, s, b]).then(values => {
        return [...values[0], ...values[1], ...values[2], ...values[3]]
      })
    }
  },
  modules: ['@nuxtjs/axios'],
  plugins: ['~/plugins/vuetify.js'],
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
