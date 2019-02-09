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
        <vue-markdown 
          class="content"
        >
          {{ content() }}
        </vue-markdown>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Metas from '@/components/Layout/Metas'
import Info from '@/components/Project/Info'
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'
import VueMarkdown from 'vue-markdown'

import hljs from 'highlight.js/lib/highlight'
import 'highlight.js/styles/androidstudio.css'
import cpp from 'highlight.js/lib/languages/cpp'
hljs.registerLanguage('arduino', cpp)

export default {
  components: {
    Metas,
    Info,
    Authors,
    Tags,
    VueMarkdown
  },
  async asyncData({ store, params }) {
    await store.dispatch('project/getItem', params)
    const data = store.state.project.item.data
    const title = data.title
    const description = data.description
    const keywords = data.tags
    const image = data.image
    return {
      // Default metas => nuxt.config
      metas: {
        title: title,
        description: description,
        keywords: keywords,
        image: image
      }
    }
  },
  /*
  async fetch({ store, params }) {
    await store.dispatch('project/getItem', params)
  },
  */
  computed: {
    ...mapState({
      project: state => {
        return state.project.item
      }
    })
  },
  mounted() {
    const targets = document.querySelectorAll('code')
    targets.forEach(target => {
      hljs.highlightBlock(target)
    })
  },
  methods: {
    content() {
      const data = this.project.data
      const content = this.project.content
      return content
        .split('![](')
        .join('![' + data.title + '](' + data.url + '/')
    }
  }
}
</script>

<style lang='scss' scope>
.content {
  font-size: 18px;
  h1 {
    margin: 0 0 20px;
  }
  h2 {
    margin: 60px 0 20px;
    padding: 0 0 10px;
    border-bottom: 1px solid #f0f0f0;
  }
  img {
    max-width: 640px;
    width: 100%;
  }
  pre {
    margin: 10px 0 20px;
    background: #f0f0f0;
  }
  table {
    margin: 0 0 20px;
  }
  table,
  th,
  td {
    border: 1px solid #f0f0f0;
  }
  th,
  td {
    padding: 5px;
  }
}
</style>
