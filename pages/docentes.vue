<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas :seo="metas" />
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
            <td>{{ props.item.count }}</td>
            <td>{{ props.item.name }}</td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            No se han encontrado resultados para "{{ search }}".
          </v-alert>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Metas from '@/components/Layout/Metas'

export default {
  components: {
    Metas
  },
  data() {
    return {
      // Default metas => nuxt.config
      metas: {
        title: 'Docentes',
        description:
          'Maestros y profesores colaboradores del proyecto educativo El Cable Amarillo',
        keywords: 'maestros, profesores, colabora, compartir, proyectos'
        // image: ''
      },
      search: '',
      headers: [
        { text: 'Prácticas', value: 'count', sortable: false, width: 10 },
        { text: 'Nombre', value: 'name', sortable: false }
      ],
      pagination: {
        sortBy: 'count',
        descending: true,
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
        state.project.list.map(project => {
          return project.data.authors.map(author => {
            const resultado = teachers.find((teacher, index) => {
              if (teacher.name === author.name) {
                teachers[index].count++
              }
              return teacher.name === author.name
            })
            if (resultado === undefined) {
              author.count = 1
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
