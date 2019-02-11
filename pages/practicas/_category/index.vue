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
        v-for="project in projectsByCategory(category)"
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
import { mapGetters } from 'vuex'
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
  asyncData({ params, store }) {
    const category = params.category
    const data = {
      metas: seo[category],
      category: category
    }
    return data
  },
  computed: {
    ...mapGetters({
      projectsByCategory: ['project/projectsByCategory']
    })
  }
}
</script>
