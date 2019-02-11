<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas :seo="metas" />
  </v-container>
</template>

<script>
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
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
