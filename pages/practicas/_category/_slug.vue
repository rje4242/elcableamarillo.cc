<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas
      :seo="metas"
    />
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
        <Edit 
          :data="project.rawProject" 
        />
      </v-flex>
      <v-flex
        xs12
        sm12
        md9 
        order-md3
      >
        <Markdown 
          :content="project.content" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import Info from '@/components/Project/Info'
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'
import Edit from '@/components/Project/Edit'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    Info,
    Authors,
    Tags,
    Edit,
    Markdown
  },
  async asyncData({ store, params }) {
    await store.dispatch('project/setProject', params)

    const project = store.state.project.item

    return {
      project: project,
      metas: {
        title: project.data.title,
        description: project.data.description,
        keywords: project.data.tags,
        image: project.image
      }
    }
  }
}
</script>

<style lang='scss' scope>
</style>
