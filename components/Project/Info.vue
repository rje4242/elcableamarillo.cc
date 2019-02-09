<template>
  <v-card>
    <v-card-title>
      <h3 
        class="primary--text subheading font-weight-medium"
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
              <v-list-tile-title 
                class="text-capitalize"
                v-text="item.text" 
              />
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Info',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    title() {
      return 'Info'
    },
    info() {
      return [
        { icon: 'group', text: this.data.category },
        { icon: 'school', text: this.data.level }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
</style>
