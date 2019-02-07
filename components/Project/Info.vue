<template>
  <v-card>
    <v-card-title>
      <h3
        class="title"
      >
        {{ title() }}
      </h3>
    </v-card-title>
    <v-card-text
      class="pt-2 pl-0"
    >
      <v-list 
        class="pa-0"
      >
        <template 
          v-for="item in info()"
        >
          <v-list-tile
            :key="item.icon"
          >
            <v-list-tile-action>
              <v-icon v-text="item.icon" />
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.text" />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text>
    <v-divider />
    <v-card-title>
      <h3
        class="title"
      >
        Autor
      </h3>
    </v-card-title>
    <v-card-text>
      <Authors 
        :authors="authors()" 
      />
    </v-card-text>
    <v-divider />
    <v-card-title>
      <h3
        class="title"
      >
        Etiquetas
      </h3>
    </v-card-title>
    <v-card-text>
      <Tags 
        :tags="tags()"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Authors from '@/components/Project/Authors'
import Tags from '@/components/Project/Tags'

export default {
  name: 'Info',
  components: {
    Authors,
    Tags
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  methods: {
    title() {
      return this.project.title
    },
    authors() {
      return this.project.authors
    },
    tags() {
      return this.project.tags.split(',')
    },
    info() {
      return [{ icon: 'school', text: this.project.level }]
    }
  }
}
</script>

<style lang="scss" scope>
</style>
