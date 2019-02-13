<template>
  <v-container
    fluid 
    grid-list-md
  >
    <Metas
      :seo="metas"
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
          :data="project.data" 
        />
        <Authors 
          :authors="project.data.authors" 
        />
        <Tags 
          :tags="project.data.tags" 
        />
        <Edit 
          :data="project.rawProject" 
        />
      </v-flex>
      <v-flex
        xs12
        sm12
        md9 
        order-md3
      >
        <Markdown 
          :content="project.content" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
  async asyncData({ store, params }) {
    await store.dispatch('project/setProject', params)

    const project = store.state.project.item

    return {
      project: project,
      metas: {
        title: project.data.title,
        description: project.data.description,
        keywords: project.data.tags,
        image: project.image
      }
    }
  }
  /*
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
    const web = 'https://github.com/ElCableAmarillo/Practicas/blob/master'
    await axios.get(`${path}/${params.slug}/README.md`).then(res => {
      res = matter(res.data)
      data.project.rawProject = `${web}/${params.slug}/README.md`
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
  */
}
</script>

<style lang='scss' scope>
</style>
