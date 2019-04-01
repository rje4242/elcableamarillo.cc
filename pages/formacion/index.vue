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
        :key="training.alias"
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
import seo from '@/static/seo.js'
import trainings from '@/static/trainings.json'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'
import Training from '@/components/Training'

export default {
  components: {
    Metas,
    PageTitle,
    Training
  },
  asyncData() {
    return {
      metas: seo.formacion,
      trainings: trainings
    }
  }
}
</script>
