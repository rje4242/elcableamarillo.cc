import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Metas from '@/components/Layout/Metas.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const seo = {
  title: 'Title',
  description: 'Description',
  keywords: 'keywords',
  image: 'image.png'
}

describe('Metas', () => {
  const wrapper = mount(Metas, {
    propsData: {
      seo: seo
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props', () => {
    expect(wrapper.props().seo.title).toBe(seo.title)
    expect(wrapper.props().seo.description).toBe(seo.description)
    expect(wrapper.props().seo.keywords).toBe(seo.keywords)
    expect(wrapper.props().seo.image).toBe(seo.image)
  })
})
