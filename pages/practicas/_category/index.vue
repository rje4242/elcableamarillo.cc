<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas :seo="metas" />
    <h1
      class="pb-3 display-1 font-weight-medium primary--text"
    >
      Prácticas {{ category }}
    </h1>
    <div class="pb-2 subheading">
      <p>
        Este repositorio de prácticas supone una aventura y una nueva forma de enfocar la programación y robótica en todas las etapas educativas.
      </p>
    </div>
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="project in projects"
        :key="project.data.slug"
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
import Metas from '@/components/Layout/Metas'
import Project from '@/components/Project'

export default {
  components: {
    Metas,
    Project
  },
  asyncData({ params }) {
    const category = params.category
    return {
      // Default metas => nuxt.config
      metas: {
        title: `Prácticas ${category}`,
        description: `Prácticas de programación y robótica para educación ${category}`,
        keywords: `prácticas, programación, robótica, educación, ${category}`
        // image: ''
      }
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('project/getProjects', params)
  },
  computed: {
    ...mapState({
      category: state => {
        return state.project.category
      },
      projects: state => {
        return state.project.list
      }
    })
  }
}
</script>
