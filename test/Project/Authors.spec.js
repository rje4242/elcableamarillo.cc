import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Authors from '@/components/Project/Authors.vue'
import Vuetify from 'vuetify'

const authors = [
  { name: 'Name 1', github: 'username-1' },
  { name: 'Name 2', github: '' }
]

describe('Authors', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Authors, {
      propsAuthors: {
        authors: authors
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
