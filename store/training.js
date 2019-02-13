import trainings from '@/static/trainings.js'
import axios from 'axios'
import * as matter from 'gray-matter'

export const state = () => ({
  raw: 'https://raw.githubusercontent.com/ElCableAmarillo/Formacion/master',
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
  SET_TRAINING: (state, training) => {
    state.item = training
  },
  ADD_TRAINING: (state, training) => {
    state.list.push(training)
  }
}

export const actions = {
  async setTraining({ commit, state }, params) {
    commit('INIT')
    const training = {}
    training.slug = params.slug
    training.link = `/formacion/${params.slug}`
    training.rawLink = `${state.raw}/${params.slug}`
    training.image = `${state.raw}/${params.slug}/preview.png`

    await axios.get(`${training.rawLink}/README.md`).then(res => {
      const doc = matter(res.data)
      training.data = doc.data
      training.content = doc.content
        .split('![](')
        .join('![' + doc.data.title + '](' + training.rawLink + '/')

      commit('SET_TRAINING', training)
    })
  },
  async setTrainings({ commit, state }) {
    commit('INIT')
    const promises = await trainings.list.map(async slug => {
      const training = {}
      training.slug = slug
      training.link = `/formacion/${slug}`
      training.rawLink = `${state.raw}/${slug}`
      training.image = `${state.raw}/${slug}/preview.png`

      await axios.get(`${training.rawLink}/README.md`).then(res => {
        const doc = matter(res.data)
        training.data = doc.data
        training.content = doc.content
        commit('ADD_TRAINING', training)
      })
    })
    await Promise.all(promises)
  }
}
