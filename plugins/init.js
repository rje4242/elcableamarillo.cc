export default function({ store }) {
  store.dispatch('project/getProjects', { category: 'primaria' })
  store.dispatch('project/getProjects', { category: 'secundaria' })
  store.dispatch('project/getProjects', { category: 'bachillerato' })
}
