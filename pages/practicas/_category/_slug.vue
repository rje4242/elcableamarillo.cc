<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas :seo="metas" />
    <v-layout
      row 
      wrap
    >
      <v-flex
        xs12
        sm12
        md3
        order-md9
      >
        <Info
          :data="project.data" 
        />
        <Authors 
          :authors="project.data.authors" 
        />
        <Tags 
          :tags="project.data.tags" 
        />
      </v-flex>
      <v-flex
        xs12
        sm12
        md9 
        order-md3
      >
        <Markdown 
          :project="project" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import * as matter from 'gray-matter'

import Metas from '@/components/Layout/Metas'
import Info from '@/components/Project/Info'
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'
import Markdown from '@/components/Project/Markdown'

export default {
  components: {
    Metas,
    Info,
    Authors,
    Tags,
    Markdown
  },
  async asyncData({ store, params }) {
    const data = {
      metas: {},
      project: {
        data: null,
        content: ''
      }
    }

    const path =
      'https://raw.githubusercontent.com/ElCableAmarillo/Practicas/master'
    await axios.get(`${path}/${params.slug}/README.md`).then(res => {
      res = matter(res.data)
      data.project.content = res.content
      data.project.data = res.data
      data.project.data.url = `${path}/${params.slug}`
      data.project.data.image = `${path}/${params.slug}/practica.gif`
      data.project.data.category = params.category
      data.project.data.slug = params.slug
    })

    data.metas.title = data.project.data.title
    data.metas.description = data.project.data.description
    data.metas.keywords = data.project.data.tags
    data.metas.image = data.project.data.image

    return data
  }
}
</script>

<style lang='scss' scope>
</style>
