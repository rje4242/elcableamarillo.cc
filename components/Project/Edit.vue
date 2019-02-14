<template>
  <v-card dark>
    <v-card-text
      class="pt-2"
    >
      ¿Has encontrado algún error?
      <br>
      <a
        target="_blank"
        :href="link"
        class="white--text"
      >
        Edita esta página en GitHub
      </a>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    title() {
      return 'Edita esta página'
    }
  }
}
</script>

<style lang="scss" scope>
</style>
