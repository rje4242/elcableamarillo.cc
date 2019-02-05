<template>
  <v-hover>
    <v-card class="card"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      >
      <router-link :to="to(project)">
        <v-img
          v-bind:src="project.data.image"
          lazy-src="/loading.png"
          aspect-ratio="1.5"
        />
      </router-link>
      <v-card-title primary-title>
        <h3 class="title mb-3 font-weight-bold">
          {{ project.data.title }}
        </h3>
        <div class="subheading font-weight-light">
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
  },
  data: () => ({
  }),
  methods: {
    to (project) {
      let category = project.data.category
      let slug = project.data.slug
      return category + '/' + slug
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
