<template>
  <v-container
    fluid
    grid-list-md
  >
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
import Project from '@/components/Project'

export default {
  components: {
    Project
  },
  head() {
    const title = 'Prácticas ' + this.category
    const description =
      'Prácticas de programación y robótica para ' + this.category
    const tags =
      'prácticas, programación, robótica, educación, ' + this.category
    // const image = this.project.data.image
    const url = this.$route.path
    return {
      title: title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: tags },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        // { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description }
        // { name: 'twitter:image', content: image }
      ]
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
