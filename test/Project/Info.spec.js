import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Info from '@/components/Project/Info.vue'
import Vuetify from 'vuetify'

const data = {
  level: 'Level',
  category: 'Category'
}

describe('Info', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Info, { propsData: { data } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
