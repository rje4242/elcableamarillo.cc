<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-flex 
      xs12
    >
      <v-card>
        <v-card-title>
          Docentes
          <v-spacer />
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Buscar"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="teachers"
          :search="search"
          :pagination.sync="pagination"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.github }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
      <!--
      <h3 
        class="display-1 mb-3 font-weight-medium"
      >
        Docentes
      </h3>
      <v-list>
        <v-list-tile
          v-for="(teacher, index) in teachers"
          :key="index"
        >
          <v-list-tile-title 
            v-text="teacher.name" 
          />
        </v-list-tile>
      </v-list>
      -->
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head: () => ({
    title: 'Docentes'
  }),
  data() {
    return {
      search: '',
      headers: [
        { text: 'Nombre', value: 'name' },
        { text: 'Github', value: 'github' }
      ],
      pagination: {
        rowsPerPage: 10
      }
    }
  },
  async fetch({ store }) {
    const params = {
      name: 'all'
    }
    await store.dispatch('project/getProjects', params)
  },
  computed: {
    ...mapState({
      teachers: state => {
        const teachers = []
        state.project.list.map(p => {
          return p.data.authors.map(author => {
            const resultado = teachers.find(t => t.name === author.name)
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
