<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
    >
      <Navigation />
    </v-navigation-drawer>
    <v-toolbar
      class="toolbar"
      app
      fixed
      dense
      color="primary"
    >
      <v-toolbar-side-icon
        dark
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title
        class="mr-5 align-center"
      >
        <router-link to="/">
          <span class="title" />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Navigation,
    Footer
  },
  head: () => ({
    title: 'El Cable Amarillo'
  }),
  data: () => ({
    drawer: true
  })
}
</script>

<style lang="scss" scope>
.toolbar {
  .title {
    color: #ffee00;
  }
}
</style>
