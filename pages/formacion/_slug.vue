<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas
      :seo="metas"
    />
    <PageTitle 
      :page="metas"
    />
    <Markdown 
      :content="training.content" 
    />
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    PageTitle,
    Markdown
  },
  async asyncData({ store, params }) {
    await store.dispatch('training/setTraining', params)

    const training = store.state.training.item

    return {
      training: training,
      metas: {
        title: training.data.title,
        description: training.data.description,
        keywords: training.data.tags,
        image: training.image
      }
    }
  }
}
</script>

<style lang='scss' scope>
</style>
