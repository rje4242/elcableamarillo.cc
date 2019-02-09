<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas :seo="metas" />
    <v-layout
      row 
      wrap
    >
      <v-flex
        xs12
        sm12
        md3
        order-md9
      >
        <Info
          :data="project.data" 
        />
        <Authors 
          :authors="project.data.authors" 
        />
        <Tags 
          :tags="project.data.tags" 
        />
      </v-flex>
      <v-flex
        xs12
        sm12
        md9 
        order-md3
      >
        <Markdown 
          :project="project" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Metas from '@/components/Layout/Metas'
import Info from '@/components/Project/Info'
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'
import Markdown from '@/components/Project/Markdown'

export default {
  components: {
    Metas,
    Info,
    Authors,
    Tags,
    Markdown
  },
  async asyncData({ store, params }) {
    await store.dispatch('project/getItem', params)
    const data = store.state.project.item.data
    const title = data.title
    const description = data.description
    const keywords = data.tags
    const image = data.image
    return {
      // Default metas => nuxt.config
      metas: {
        title: title,
        description: description,
        keywords: keywords,
        image: image
      }
    }
  },
  /*
  async fetch({ store, params }) {
    await store.dispatch('project/getItem', params)
  },
  */
  computed: {
    ...mapState({
      project: state => {
        return state.project.item
      }
    })
  }
}
</script>

<style lang='scss' scope>
</style>
