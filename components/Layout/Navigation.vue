<template>
  <div>

    <v-card class="logo" elevation="0">
      <router-link to="/">
        <img src="~/static/logo.png" />
      </router-link>
    </v-card>

    <v-divider></v-divider>

    <v-list>
      <template v-for="item in navigation">
        <v-list-tile :to="item.link" :key="item.link">
          <v-list-tile-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile>
        <v-list-tile v-for="subitem in item.items" :key="subitem.title" :to="subitem.link">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="subitem.title"></v-list-tile-title>
        </v-list-tile>
        <v-divider :key="item.title"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data: () => ({
    navigation: [
      { title: 'Proyecto',
        icon: 'dashboard',
        link: '/proyecto'
      },
      { title: 'Prácticas',
        icon: 'folder',
        link: '/practicas',
        items: [
          { title: 'Educación Primaria', link: '/practicas/primaria' },
          { title: 'Educación Secundaria', link: '/practicas/secundaria' },
          { title: 'Bachillerato', link: '/practicas/bachillerato' }
        ]
      },
      { title: 'Docentes',
        icon: 'group',
        link: '/docentes'
      }
      /*
      { title: 'Blog',
        icon: 'local_library',
        link: '/blog'
      }
      */
    ]
  })
}
</script>

<style lang="scss" scope>
.logo {
  padding: 5px;
  text-align: center;
  img {
    width: 150px;
  }
}
</style>
