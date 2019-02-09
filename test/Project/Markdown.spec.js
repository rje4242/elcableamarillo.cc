import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Markdown from '@/components/Project/Markdown.vue'
import Vuetify from 'vuetify'

const project = {
  content: '# Lorem impsum\n\nDolor sit amet is dolor\n\n![](image.gif)',
  data: {
    title: 'title',
    url: 'url'
  }
}

describe('Markdown', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Markdown, {
      propsData: {
        project: project
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
