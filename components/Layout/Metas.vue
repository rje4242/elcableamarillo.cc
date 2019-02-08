<template>
  <span 
    v-if="false"
  />
</template>

<script>
export default {
  name: 'Metas',
  props: {
    seo: {
      type: Object,
      default: () => ({
        title: process.env.seo.title,
        description: process.env.seo.description,
        keywords: process.env.seo.keywords,
        image: process.env.seo.image
      })
    }
  },
  head() {
    const title = this.seo.title || process.env.seo.title
    const description = this.seo.description || process.env.seo.description
    const tags = this.seo.keywords || process.env.seo.keywords
    const image = this.seo.image || process.env.seo.image
    const url = this.seo.path || this.$route.path
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
  }
}
</script>
