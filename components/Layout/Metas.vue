<template>
  <span 
    v-if="false"
  />
</template>

<script>
import seo from '@/static/seo.js'

export default {
  name: 'Metas',
  props: {
    seo: {
      type: Object,
      default: () => ({
        title: seo.default.title,
        description: seo.default.description,
        keywords: seo.default.keywords,
        image: seo.default.image
      })
    }
  },
  head() {
    const title = this.seo.title || seo.default.title
    const description = this.seo.description || seo.default.description
    const keywords = this.seo.keywords || seo.default.keywords
    const image = this.seo.image || seo.default.image
    const url = this.seo.path || this.$route.path
    return {
      title: title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
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
  }
}
</script>
