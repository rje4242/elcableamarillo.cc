import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  category: '',
  list: []
})

export const mutations = {
  INIT: state => {
    state.list = []
  },
  SET_CATEGORY: (state, name) => {
    state.category = name
  },
  ADD_PROJECT: (state, project) => {
    state.list.push(project)
  }
}

export const actions = {
  async getProjects({ commit }, params) {
    commit('INIT')
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

    const promises = await projects.map(async slug => {
      await axios
        .get(`${process.env.github.raw}/${slug}/README.md`)
        .then(res => {
          const project = matter(res.data)
          project.data.category = params.category
          project.data.url = `${process.env.github.raw}/${slug}`
          project.data.image = `${process.env.github.raw}/${slug}/practica.gif`
          project.data.slug = slug
          commit('ADD_PROJECT', project)
        })
        .catch(error => {
          error = `${error.response.status}: ${error.response.config.url}`
          // console.log(error)
        })
    })
    await Promise.all(promises)
  }
}
