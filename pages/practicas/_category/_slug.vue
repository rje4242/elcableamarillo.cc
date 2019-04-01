<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas
      :seo="project"
    />
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
          :data="data" 
        />
        <Authors 
          :authors="project.authors" 
        />
        <Tags 
          :tags="project.tags" 
        />
        <Edit 
          :link="editLink" 
        />
      </v-flex>
      <v-flex
        xs12
        sm12
        md9 
        order-md3
      >
        <Markdown 
          :content="content" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import projects from '@/static/projects.json'

import axios from 'axios'
import * as matter from 'gray-matter'

import Metas from '@/components/Layout/Metas'
import Info from '@/components/Project/Info'
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'
import Edit from '@/components/Project/Edit'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    Info,
    Authors,
    Tags,
    Edit,
    Markdown
  },
  async asyncData({ params }) {
    const API_EX = 'https://raw.githubusercontent.com/ElCableAmarillo/Practicas'
    const repo = `${API_EX}/master/${params.slug}`
    const raw = `${repo}/README.md`
    const doc = await axios.get(raw).then(res => {
      const doc = matter(res.data)
      doc.data.category = params.category
      return doc
    })

    return {
      project: projects.find(t => {
        return t.alias === params.slug
      }),
      data: doc.data,
      content: doc.content.split('![](').join('![](' + repo + '/'),
      editLink: `https://github.com/ElCableAmarillo/Practicas/tree/master/
${params.slug}`
    }
  }
}
</script>

<style lang='scss' scope>
</style>
