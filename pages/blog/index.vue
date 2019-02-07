<template>
  <div>
    <v-alert
      :value="true"
      type="warning"
    >
      En estos momentos no hay artículos en el blog
    </v-alert>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Blog'
    }
  }
}
</script>

<style lang="scss" scope>
</style>
