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
        v-for="tag in tags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: function() {}
    }
  },
  methods: {
    title() {
      return 'Etiquetas'
    }
  }
}
</script>

<style lang="scss" scope>
</style>
