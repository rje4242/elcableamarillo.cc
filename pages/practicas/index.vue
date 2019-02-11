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
  </v-container>
</template>

<script>
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'

export default {
  components: {
    Metas,
    PageTitle
  },
  asyncData({ params, store }) {
    const data = {
      metas: seo.practicas
    }
    return data
  }
}
</script>

<style lang="scss" scope>
</style>
