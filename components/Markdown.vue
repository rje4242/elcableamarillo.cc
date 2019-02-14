<template>
  <vue-markdown
    :anchor-attributes="anchorAttrs"
    class="content headline font-weight-light"
  >
    {{ content }}
  </vue-markdown>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'

export default {
  name: 'Markdown',
  components: {
    VueMarkdown
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    }
  },
  mounted() {
    const targets = document.querySelectorAll('code')
    targets.forEach(target => {
      hljs.registerLanguage('arduino', cpp)
      hljs.highlightBlock(target)
    })
  }
}
</script>

<style lang="scss" scope>
// @import 'highlight.js/styles/default.css';
@import 'highlight.js/styles/androidstudio.css';

.content {
  margin-bottom: 50px;
  h1 {
    margin: 20px 0 40px;
  }
  h2,
  h3 {
    margin: 60px 0 20px;
    padding: 0 0 10px;
    border-bottom: 1px solid #f0f0f0;
    font-weight: normal;
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
