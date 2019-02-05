<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm12 md3 order-md9>
        <Info :project="project.data" />
      </v-flex>
      <v-flex xs12 sm12 md9 order-md3>
        <vue-markdown class="content">{{ content() }}</vue-markdown>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'
import Info from '@/components/Project/Info'

import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/androidstudio.css'
import cpp from 'highlight.js/lib/languages/cpp'
hljs.registerLanguage('arduino', cpp)

export default {
  components: {
    VueMarkdown,
    Info
  },
  head () {
    let title = this.project.data.title
    let description = this.project.data.description
    let tags = this.project.data.tags
    let image = this.project.data.image
    let url = this.$route.path
    return {
      title: title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: tags },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ]
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('project/getItem', params)
  },
  computed: {
    ...mapState({
      project: state => {
        return state.project.item
      }
    })
  },
  mounted () {
    let targets = document.querySelectorAll('code')
    targets.forEach((target) => {
      hljs.highlightBlock(target)
    })
  },
  methods: {
    content () {
      let data = this.project.data
      let content = this.project.content
      content = content.split('![](').join('![' + data.title + '](' + data.url + '/')
      return content
    }
  }
}
</script>

<style lang='scss' scope>
.content {
  font-size: 18px;
  h1{
    margin: 0 0 20px;
  }
  h2 {
    margin: 60px 0 20px;
    padding: 0 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  img {
    max-width: 640px;
    width: 100%
  }
  pre {
    margin: 10px 0 20px;
    background: #f0f0f0;
  }
  table {
    margin: 0 0 20px;
  }
  table, th, td {
    border: 1px solid #f0f0f0;
  }
  th, td {
    padding: 5px;
  }
}
</style>