<template>
  <v-footer
    app
    absolute
    inset
    class="footer"
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title
        class="font-weight-thin caption primary"
      >
        <span>
          Esta obra está bajo una licencia de Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
        </span>
        <v-spacer />
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          target="_blank"
          class="mx-2 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="primary darken-3 justify-center">
        Made with &hearts; by&nbsp;
        <a
          class="yellow--text"
          target="_blank"
          href="https://github.com/migueabellan"
        >
          @migueabellan
        </a>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    date: new Date().getFullYear(),
    icons: [
      { icon: 'fab fa-github', link: 'https://github.com/ElCableAmarillo' },
      { icon: 'fab fa-twitter', link: 'https://twitter.com/ElCableAmarillo' }
    ]
  })
}
</script>

<style lang="scss" scope>
.footer {
  a {
    text-decoration: none;
  }
}
</style>
