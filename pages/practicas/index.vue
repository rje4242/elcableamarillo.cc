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
    <div class="headline font-weight-light">
      <p class="mb-5">
        Todas las prácticas de esta web están alojadas en el repositorio público en GitHub de 
        <a target="_blank" href="https://github.com/ElCableAmarillo/Practicas">
          El Cable Amarillo
        </a>
        &nbsp;y se encuentran bajo una licencia de <b>Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional</b>.
      </p>
      <p class="mb-4">
        Puedes contribuir de varias formas:
      </p>
      <ol class="ml-2">
        <li class="mb-2">
          Elaborando nuevas prácticas educativas de programación y robótica para cualquier etapa educativa.
        </li>
        <li class="mb-2">
          Ayudando en la posible corrección o mejora de las prácticas ya creadas por otras personas.
        </li>
        <li class="mb-2">
          Cualquier idea que creas interesante... 
        </li>
      </ol>
    </div>
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
