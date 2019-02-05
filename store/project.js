import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  item: {},
  category: '',
  list: []
})

export const mutations = {
  INIT: (state) => {
    state.list = []
  },
  SET_ITEM: (state, project) => {
    state.item = project
  },
  SET_CATEGORY: (state, name) => {
    state.category = name
  },
  ADD_PROJECT: (state, project) => {
    state.list.push(project)
  }
}

export const actions = {
  async getItem ({ commit }, params) {
    commit('SET_CATEGORY', params.category)

    let url = process.env.github.raw + params.slug
    await axios.get(url + '/README.md')
      .then((res) => {
        let json = matter(res.data)
        json.data.category = params.category
        json.data.url = process.env.github.raw + params.slug
        json.data.image = json.data.url + '/practica.gif'
        commit('SET_ITEM', json)
      })
      .catch(function (error) {
        console.log(error.response.status + ': ' + error.response.config.url)
      })
  },
  async getProjects ({ commit }, params) {
    commit('SET_CATEGORY', params.category)

    const primaria = process.env.projects.primaria
    const secundaria = process.env.projects.secundaria
    const bachillerato = process.env.projects.bachillerato
    let projects = []
    switch (params.category) {
      case 'primaria':
        projects = primaria
        break
      case 'secundaria':
        projects = secundaria
        break
      case 'bachillerato':
        projects = bachillerato
        break
      default:
        projects = primaria.concat(secundaria).concat(bachillerato)
    }

    commit('INIT')
    await Promise.all(projects.map(async name => {
      let url = process.env.github.raw + name + '/README.md'
      await axios.get(url)
        .then((res) => {
          let json = matter(res.data)
          json.data.category = params.category
          json.data.url = process.env.github.raw + name
          json.data.image = json.data.url + '/practica.gif'
          json.data.slug = name
          commit('ADD_PROJECT', json)
        })
        .catch(function (error) {
          console.log(error.response.status + ': ' + error.response.config.url)
        })
    }))
  },
  async nuxtServerInit ({ commit }, { route, params }) {
    if (process.server && params.name) {
      // ToDo
    }
    if (process.server && route.name === 'practicas') {
      // ToDo
    }
  }
}
