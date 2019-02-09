<template>
  <v-container
    fill-height
  >
    <Metas :seo="metas"
    />
    <v-layout
      justify-center
      align-center
    >
      <v-flex 
        shrink
      >
        <div
          class="main"
        >
          <img
            src="~/static/elcableamarillo.png"
            title="Proyecto Educativo El Cable Amarillo"
          >
          <h1 
            class="display-1 font-weight-thin"
          >
            Proyecto educativo de código abierto para fomentar el uso de la 
            <strong 
              class="font-weight-black"
            >
              programación y robótica
            </strong>
            en los centros educativos utilizando herramientas de
            <strong
              class="font-weight-black"
            >
              software y hardware libre
            </strong>
            .
          </h1>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  data: () => ({
    // Default metas => nuxt.config
    metas: {}
  })
}
</script>

<style lang="scss" scope>
.main {
  text-align: center;
  img {
    display: inline-block;
    max-width: 100%;
    margin: 0 0 50px;
  }
}
</style>
