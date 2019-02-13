import projects from '@/static/projects.js'
import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  raw: 'https://raw.githubusercontent.com/ElCableAmarillo/Practicas/master',
  item: {
    slug: '',
    link: '',
    rawLink: '',
    image: '',
    data: {},
    content: ''
  },
  list: []
})

export const mutations = {
  INIT: state => {
    state.item = {}
    state.list = []
  },
  SET_PROJECT: (state, project) => {
    state.item = project
  },
  ADD_PROJECT: (state, project) => {
    state.list.push(project)
  }
}

export const getters = {
  projectsByLevel: state => level => {
    return state.list.filter(project => project.data.level === level)
  },
  projectsByCategory: state => category => {
    return state.list.filter(project => project.data.category === category)
  },
  projectBySlug: state => slug => {
    return state.list.find(project => project.data.slug === slug)
  },
  projectsByTeacher: state => teacher => {
    const projects = []
    state.list.map(project => {
      return project.data.authors.map(author => {
        if (author.name === teacher) {
          projects.push(project)
        }
      })
    })
    return projects
  },
  teachers: state => {
    const teachers = []
    state.list.map(project => {
      return project.data.authors.map(author => {
        const resultado = teachers.find((teacher, index) => {
          if (teacher.name === author.name) {
            teachers[index].count++
          }
          return teacher.name === author.name
        })
        if (resultado === undefined) {
          author.count = 1
          teachers.push(author)
        }
      })
    })
    return teachers
  }
}

export const actions = {
  async setProject({ commit, state }, params) {
    commit('INIT')
    const project = {}
    project.slug = params.slug
    project.link = `/practicas/${params.category}/${params.slug}`
    project.rawLink = `${state.raw}/${params.slug}`
    project.image = `${state.raw}/${params.slug}/practica.gif`

    await axios.get(`${project.rawLink}/README.md`).then(res => {
      const doc = matter(res.data)
      project.data = doc.data
      project.data.category = params.category
      project.content = doc.content
        .split('![](')
        .join('![' + doc.data.title + '](' + project.rawLink + '/')

      commit('SET_PROJECT', project)
    })
  },
  async setProjects({ commit, state }, params) {
    commit('INIT')
    const promises = await projects[params.category].map(async slug => {
      const project = {}
      project.slug = slug
      project.link = `/practicas/${params.category}/${slug}`
      project.rawLink = `${state.raw}/${slug}`
      project.image = `${state.raw}/${slug}/practica.gif`

      await axios.get(`${project.rawLink}/README.md`).then(res => {
        const doc = matter(res.data)
        project.data = doc.data
        project.content = doc.content
        commit('ADD_PROJECT', project)
      })
    })
    await Promise.all(promises)
  }
}
