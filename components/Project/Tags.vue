<template>
  <div>
    <v-chip v-for="tag in tags" :key="tag">
      {{ tag }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scope>

</style>
