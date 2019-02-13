import trainings from '@/static/trainings.js'
import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  raw: 'https://raw.githubusercontent.com/ElCableAmarillo/Formacion/master/',
  training: {
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
  SET_TRAINING: (state, training) => {
    state.training = training
  },
  ADD_TRAINING: (state, training) => {
    state.list.push(training)
  }
}

export const getters = {
  projectsByLevel: state => level => {
    return state.list.filter(project => project.data.level === level)
  }
}

export const actions = {
  async setTraining({ commit, state }, params) {
    const training = {}
    training.slug = params.slug
    training.link = `/formacion/${params.slug}`
    training.rawLink = `${state.raw}/${params.slug}`
    training.image = `${state.raw}/preview.png`

    await axios.get(`${training.rawLink}/README.md`).then(res => {
      const doc = matter(res.data)
      training.data = doc.data
      training.content = doc.content
      commit('SET_TRAINING', training)
    })
  },
  async setTrainings({ commit, state }, params) {
    const promises = await trainings.list.map(async slug => {
      const rawLink = `${state.raw}/${slug}`
      await axios.get(`${rawLink}/README.md`).then(res => {
        const training = matter(res.data)
        training.link = `/formacion/${slug}`
        training.rawLink = rawLink
        training.data.slug = slug
        // training.data.image = `${rawLink}/practica.gif`
        commit('ADD_TRAINING', training)
      })
    })
    await Promise.all(promises)
  }
}
