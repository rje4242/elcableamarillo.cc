<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="project in projects" :key="project.data.sulg">
        <project :project="project"></project>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Project from '@/components/Project'

export default {
  components: {
    Project
  },
  head: () => ({
    title: 'Prácticas'
  }),
  data: () => ({
  }),
  async fetch ({ store, params }) {
    await store.dispatch('project/getProjects', params)
  },
  computed: {
    ...mapState({
      category: state => {
        return state.category
      },
      projects: state => {
        return state.project.list
      }
    })
  }
}
</script>
