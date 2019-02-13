<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas
      :seo="metas"
    />
    <PageTitle 
      :page="metas"
    />
    <v-layout
      row
      wrap
    >
      <v-flex
        v-for="training in trainings"
        :key="training.data.slug"
        xs12
        sm6
        md4
      >
        <Training
          :training="training" 
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'
import Training from '@/components/Training'

export default {
  components: {
    Metas,
    PageTitle,
    Training
  },
  asyncData({ params, store }) {
    const data = {
      metas: seo.formacion
    }
    return data
  },
  async fetch({ store }) {
    await store.dispatch('training/setTrainings')
  },
  computed: {
    ...mapState({
      trainings: state => {
        return state.training.list
      }
    })
  }
}
</script>
