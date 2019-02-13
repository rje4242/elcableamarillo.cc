<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas
      :seo="metas"
    />
    <PageTitle 
      :page="metas"
    />
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="project in projects"
        :key="project.slug"
        xs12
        sm6
        md4
      >
        <project
          :project="project" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'
import Project from '@/components/Project'

export default {
  components: {
    Metas,
    PageTitle,
    Project
  },
  asyncData({ params }) {
    const data = {
      metas: seo[params.category]
    }
    return data
  },
  async fetch({ store, params }) {
    await store.dispatch('project/setProjects', params)
  },
  computed: {
    ...mapState({
      projects: state => {
        return state.project.list
      }
    })
  }
}
</script>
