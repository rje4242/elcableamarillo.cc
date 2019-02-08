<template>
  <div>
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
  </div>
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
    avatar(author) {
      const username = author.github ? author.github : 'ElCableAmarillo'
      return `${process.env.github.avatar}/${username}`
    }
  }
}
</script>

<style lang="scss" scope>
</style>
