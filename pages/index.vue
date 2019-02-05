<template>
  <v-container fill-height>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <div class="main">
          <img src="/elcableamarillo.png" title="Proyecto Educativo El Cable Amarillo" />
          <h1 class="display-1 font-weight-thin">Proyecto educativo de código abierto para fomentar el uso de la <strong class="font-weight-black">programación y robótica</strong> en los centros educativos utilizando herramientas de <strong class="font-weight-black">software y hardware libre</strong>.</h1>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: () => ({
    title: 'El Cable Amarillo'
  }),
  data: () => ({
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
