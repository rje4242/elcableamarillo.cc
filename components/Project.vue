<template>
  <v-hover>
    <v-card 
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="card"
    >
      <router-link 
        :to="`/practicas/${project.nivel}/${project.alias}`"
      >
        <v-img
          :src="project.image"
          aspect-ratio="1.75"
        />
      </router-link>
      <v-card-title 
        primary-title
      >
        <h3
          class="title mb-3 font-weight-medium"
        >
          {{ project.title }}
        </h3>
        <div
          class="subheading font-weight-thin"
        >
          {{ project.description }}
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
      default: () => {}
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
