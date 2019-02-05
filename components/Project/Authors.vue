<template>
  <div>
    <v-chip v-for="author in authors" :key="author.github">
      <v-avatar>
        <img v-bind:src="avatar(author)">
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
      type: Array
    }
  },
  methods: {
    avatar (author) {
      let username = (author.github ? author.github : 'ElCableAmarillo')
      return process.env.github.avatar + username
    }
  }
}
</script>

<style lang="scss" scope>

</style>
