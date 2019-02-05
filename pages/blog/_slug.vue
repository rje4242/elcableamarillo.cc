<template>
  <div>
    <v-alert :value="true" type="warning" >
      En estos momentos no hay artículos en el blog
    </v-alert>
  </div>
</template>

<script>
export default {
  components: {
  },
  head () {
    return {
      title: 'Blog: ' // + this.project.data.title
    }
  },
  data: () => ({
  })
}
</script>

<style lang="scss" scope>
/*
v-toolbar-title {
  color: #ffee00;
}
*/
.content {
  font-size: 18px;
  h1{
    margin: 0 0 20px;
  }
  h2 {
    margin: 60px 0 20px;
    padding: 0 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  img {
    max-width: 640px;
    width: 100%
  }
}
</style>