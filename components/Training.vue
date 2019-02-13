<template>
  <v-hover>
    <v-card 
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      class="card"
    >
      <router-link 
        :to="training.link"
      >
        <v-img
          :src="training.image"
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
          {{ training.data.title }}
        </h3>
        <div
          class="subheading font-weight-thin"
        >
          {{ training.data.description }}
        </div>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'Training',
  props: {
    training: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scope>
</style>
