<template>
  <v-container
    fluid
    grid-list-md
  >
    <h1
      class="pb-3 display-1 font-weight-medium primary--text"
    >
      Prácticas
    </h1>
    <div class="pb-5 subheading">
      <p>
        Este repositorio de prácticas supone una aventura y una nueva forma de enfocar la programación y robótica en todas las etapas educativas.
      </p>
    </div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="category in categories" 
        :key="category.title"
        xs12
        sm6
        md4
      >
        <!--
        <v-btn
          round
          color="primary"
          dark
          :to="category.link"
        >
          {{ category.title }}
        </v-btn>
        <v-card>
          <router-link 
            :to="category.link"
          >
            <v-img
              :src="category.image"
              :lazy-src="category.image"
              aspect-ratio="1.5"
            />
          </router-link>
          <v-card-title primary-title>
            <div>
              <h3>
                {{ category.title }}
              </h3>
            </div>
          </v-card-title>
        </v-card>
        -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head: () => ({
    title: 'Prácticas'
  }),
  data: () => ({
    categories: [
      {
        title: 'Educación Primaria',
        image:
          'http://www.elcableamarillo.cc/practicas/secundaria/detector-de-presencia/practica.gif',
        link: '/practicas/primaria'
      },
      {
        title: 'Educación Secundaria',
        image:
          'http://www.elcableamarillo.cc/practicas/secundaria/sensor-de-aparcamiento-led/practica.gif',
        link: '/practicas/secundaria'
      },
      {
        title: 'Bachillerato',
        image:
          'http://www.elcableamarillo.cc/practicas/secundaria/maquina-para-dibujar/practica.gif',
        link: '/practicas/bachillerato'
      }
    ]
  })
}
</script>

<style lang="scss" scope>
</style>
