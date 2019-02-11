import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  raw: 'https://raw.githubusercontent.com/ElCableAmarillo/Practicas/master/',
  project: {
    rawProject: '',
    data: {},
    content: ''
  },
  list: []
})

export const mutations = {
  ADD_PROJECT: (state, project) => {
    state.list.push(project)
  }
}

export const getters = {
  projectsByCategory: state => category => {
    return state.list.filter(project => project.data.category === category)
  }
}

export const actions = {
  async getProjects({ commit, state }, params) {
    const promises = await params.projects.map(async slug => {
      const rawProject = `${state.raw}/${slug}`
      await axios.get(`${rawProject}/README.md`).then(res => {
        const project = matter(res.data)
        project.rawProject = rawProject
        project.data.category = params.category
        project.data.slug = slug
        project.data.image = `${rawProject}/practica.gif`
        commit('ADD_PROJECT', project)
      })
      /*
      .catch(error => {
        error = `${error.response.status}: ${error.response.config.url}`
        // console.log(error)
      })
      */
    })
    await Promise.all(promises)
  }
}
