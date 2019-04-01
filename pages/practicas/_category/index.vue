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
        :key="project.alias"
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
import seo from '@/static/seo.js'
import projects from '@/static/projects.json'
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
    return {
      metas: seo[params.category],
      projects: projects.filter(p => {
        return p.nivel === params.category
      })
    }
  }
}
</script>
