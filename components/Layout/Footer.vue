<template>
  <v-footer 
    class="footer mt-5"
    height="auto"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-flex
        primary
        pt-3
        text-xs-center
        white--text
      >
        <p>
          Esta obra está bajo una licencia de
          <a
            target="_blank"
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.es_ES"
          >
            Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional
          </a>
          .
        </p>
        <p>
          Made with &hearts; by
          <a
            class="made"
            target="_blank"
            href="https://github.com/migueabellan"
          >
            @migueabellan
          </a>
        </p>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    date: new Date().getFullYear()
  })
}
</script>

<style lang="scss" scope>
.footer {
  a {
    color: #fff;
    text-decoration: none;
  }
  a.made {
    color: #ffee00;
    text-decoration: none;
  }
}
</style>
