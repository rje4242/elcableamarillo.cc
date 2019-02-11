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
                <v-list
                  v-for="practica in projectsByTeacher(props.item.name)"
                  :key="practica.slug"
                  dense
                >
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>
                        <router-link 
                          :to="practica.link"
                        >
                          {{ practica.data.title }}
                        </router-link>
                      </v-list-tile-title>
                      <v-spacer />
                      <v-list-tile-sub-title>
                        {{ practica.data.description }}
                      </v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-text>
            </v-card>
          </template>
        </v-data-table>

        <!--
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
            <v-card flat>
              <v-card-text>Peek-a-boo!</v-card-text>
            </v-card>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            No se han encontrado resultados para "{{ search }}".
          </v-alert>
        </v-data-table>
        -->
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import seo from '@/static/seo.js'
import Metas from '@/components/Layout/Metas'
import PageTitle from '@/components/Layout/PageTitle'

export default {
  components: {
    Metas,
    PageTitle
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
