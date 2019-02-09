import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Tags from '@/components/Project/Tags.vue'
import Vuetify from 'vuetify'

const tags = {
  tags: 'tag-1, tag-2, tag-3'
}

describe('Tags', () => {
  beforeEach(() => {
    Vue.use(Vuetify)
  })
  test('is a Vue instance', () => {
    const wrapper = mount(Tags, { propsTags: { tags } })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
