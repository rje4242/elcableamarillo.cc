import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar
} from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar
  },
  directives: {
    Ripple
  },
  theme: {
    primary: '#bf1733',
    secondary: '#ffee00',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
