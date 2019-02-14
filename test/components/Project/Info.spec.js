import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Info from '@/components/Project/Info.vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const data = {
  level: 'Level',
  category: 'Category'
}

describe('Info', () => {
  const wrapper = mount(Info, {
    propsData: {
      data: data
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders props', () => {
    expect(wrapper.props().data.level).toBe('Level')
    expect(wrapper.props().data.category).toBe('Category')
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Info')
    expect(wrapper.html()).toContain('group</i>')
    expect(wrapper.html()).toContain('Level</div>')
    expect(wrapper.html()).toContain('school</i>')
    expect(wrapper.html()).toContain('Category</div>')
  })
})
