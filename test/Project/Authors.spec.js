import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Authors from '@/components/Project/Authors.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const authors = [
  { name: 'Name 1', github: 'username-1' },
  { name: 'Name 2', github: '' }
]

describe('Authors', () => {
  const wrapper = mount(Authors, {
    propsData: {
      authors: authors
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props', () => {
    for (let i = 0; i < wrapper.props().authors; i++) {
      expect(wrapper.props().authors[0].name).toBe(authors[0].name)
      expect(wrapper.props().authors[0].github).toBe(authors[0].github)
    }
  })
})
