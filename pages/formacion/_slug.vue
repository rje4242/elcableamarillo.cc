<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas
      :seo="training"
    />
    <Markdown 
      :content="content" 
    />
  </v-container>
</template>

<script>
import trainings from '@/static/trainings.json'

import axios from 'axios'
import * as matter from 'gray-matter'

import Metas from '@/components/Layout/Metas'
import Markdown from '@/components/Markdown'

export default {
  components: {
    Metas,
    Markdown
  },
  async asyncData({ params }) {
    const API_EX = 'https://raw.githubusercontent.com/ElCableAmarillo/Formacion'
    const repo = `${API_EX}/master/${params.slug}`
    const raw = `${repo}/README.md`
    const content = await axios.get(raw).then(res => {
      const doc = matter(res.data)
      return doc.content
    })

    return {
      training: trainings.find(t => {
        return t.alias === params.slug
      }),
      content: content.split('![](').join('![](' + repo + '')
    }
  }
}
</script>

<style lang='scss' scope>
</style>
