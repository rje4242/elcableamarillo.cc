<template>
  <div
    class="mb-4 pb-4 pt-content" 
  >
    <h1
      class="pb-4 display-1 font-weight-light primary--text"
    >
      {{ page.title }}
    </h1>
    <blockquote
      class="title font-weight-light font-italic grey--text text--darken-2"
    >
      {{ page.description }}
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    page: {
      type: Object,
      default: () => ({
        title: '',
        description: ''
      })
    }
  }
}
</script>

<style lang="scss" scope>
.pt-content {
  border-bottom: 1px solid #f0f0f0;
}
</style>
