<template>
  <v-container
    fluid
    grid-list-md
  >
    <Metas :seo="metas" />
    <PageTitle 
      :page="metas"
    />
    <v-flex 
      xs12
    >
      <v-card>
        <v-card-title>
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
          :expand="expand"
          :search="search"
          hide-actions
          :pagination.sync="pagination"
          item-key="name"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>
                {{ props.item.count }}
              </td>
              <td>
                {{ props.item.name }}
              </td>
            </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card>
              <v-card-text>
                <v-layout
                  row
                  wrap
                >
                  <v-flex
                    v-for="project in projectsByTeacher(props.item.name)"
                    :key="project.data.slug"
                    xs6
                    sm4
                    md3
                  >
                    <project
                      :project="project" 
                    />
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
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
import { mapGetters } from 'vuex'
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'
import Project from '@/components/Project'

export default {
  components: {
    Metas,
    PageTitle,
    Project
  },
  asyncData({ params, store }) {
    const data = {
      metas: seo.docentes
    }
    return data
  },
  data() {
    return {
      expand: false,
      search: '',
      headers: [
        { text: 'Prácticas', value: 'count', sortable: false, width: 20 },
        { text: 'Nombre', value: 'name', sortable: false }
      ],
      pagination: {
        sortBy: 'count',
        descending: true,
        rowsPerPage: -1
      }
    }
  },
  computed: {
    ...mapGetters({
      teachers: ['project/teachers'],
      projectsByTeacher: ['project/projectsByTeacher']
    })
  }
}
</script>

<style lang="scss" scope>
</style>
