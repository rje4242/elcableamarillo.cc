import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Footer from '@/components/Layout/Footer.vue'
import Vuetify from 'vuetify'

describe('Footer', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
