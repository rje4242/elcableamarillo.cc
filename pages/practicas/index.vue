<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas :seo="metas" />
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  data() {
    return {
      // Default metas => nuxt.config
      metas: {
        title: 'Prácticas'
        // description: ''
        // keywords: 'maestros, profesores, colabora, compartir, proyectos'
        // image: ''
      }
    }
  }
}
</script>

<style lang="scss" scope>
</style>
