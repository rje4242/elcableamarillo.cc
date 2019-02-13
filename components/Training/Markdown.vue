<template>
  <div>
    <vue-markdown 
      class="content"
      :anchor-attributes="anchorAttrs"
    >
      {{ training.content }}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
// import hljs from 'highlight.js/lib/highlight'
// import cpp from 'highlight.js/lib/languages/cpp'

export default {
  name: 'Markdown',
  components: {
    VueMarkdown
  },
  props: {
    training: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    }
  }
  /*
  mounted() {
    const targets = document.querySelectorAll('code')
    targets.forEach(target => {
      hljs.registerLanguage('bash', cpp)
      hljs.highlightBlock(target)
    })
  },
  methods: {
    content() {
      const data = this.training.data
      const content = this.training.content
      return content
        .split('![](')
        .join('![' + data.title + '](' + data.url + '/')
    }
  }
  */
}
</script>

<style lang="scss" scope>
@import 'highlight.js/styles/default.css';
// @import 'highlight.js/styles/androidstudio.css';

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
