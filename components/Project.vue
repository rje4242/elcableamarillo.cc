<template>
  <v-hover>
    <v-card 
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="card"
    >
      <router-link 
        :to="project.link"
      >
        <v-img
          :src="project.data.image"
          lazy-src="~/static/loading.png"
          aspect-ratio="1.75"
        />
      </router-link>
      <v-card-title 
        primary-title
      >
        <h3
          class="title mb-3 font-weight-medium"
        >
          {{ project.data.title }}
        </h3>
        <div
          class="subheading font-weight-thin"
        >
          {{ project.data.description }}
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scope>
.card {
  .subheading {
    height: 50px;
    overflow: hidden;
  }
}
</style>
