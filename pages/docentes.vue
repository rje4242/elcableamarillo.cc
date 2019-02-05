<template>
  <v-container fluid grid-list-md>

    <v-flex xs12>
      <h3 class="display-1 mb-3 font-weight-medium">Docentes</h3>
      <v-list>
        <v-list-tile v-for="(teacher, index) in teachers" :key="index">
          <v-list-tile-title v-text="teacher.name"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-flex>
    
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: () => ({
    title: 'Docentes'
  }),
  async fetch ({ store }) {
    let params = {
      name: 'all'
    }
    await store.dispatch('project/getProjects', params)
  },
  computed: {
    ...mapState({
      teachers: state => {
        let teachers = []
        state.project.list.map(p => {
          return p.data.authors.map(author => {
            let resultado = teachers.find(t => t.name === author.name)
            if (resultado === undefined) {
              teachers.push(author)
            }
          })
        })
        return teachers
      }
    })
  }
}
</script>

<style lang="scss" scope>

</style>

