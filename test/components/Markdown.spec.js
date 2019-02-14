import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Markdown from '@/components/Markdown.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const content = '# Lorem impsum\n\nDolor sit amet \n\n![](http://...image.png)'

describe('Markdown', () => {
  const wrapper = mount(Markdown, {
    propsData: {
      content: content
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props', () => {
    expect(wrapper.props().content).toBe(content)
  })
})
