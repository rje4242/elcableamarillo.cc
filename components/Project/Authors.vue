<template>
  <v-card>
    <v-card-title>
      <h3
        class="primary--text subheading font-weight-medium"
      >
        {{ title() }}
      </h3>
    </v-card-title>
    <v-card-text
      class="pt-2"
    >
      <v-chip
        v-for="author in authors"
        :key="author.github"
      >
        <v-avatar>
          <img 
            :src="avatar(author)"
          >
        </v-avatar>
        {{ author.name }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Authors',
  props: {
    authors: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    title() {
      return this.authors.length > 1 ? 'Autores' : 'Autor'
    },
    avatar(author) {
      const username = author.github ? author.github : 'ElCableAmarillo'
      return `https://avatars.githubusercontent.com/${username}`
    }
  }
}
</script>

<style lang="scss" scope>
</style>
