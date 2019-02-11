import projects from '@/static/projects.js'

export default function({ store }) {
  store.dispatch('project/getProjects', {
    category: 'primaria',
    projects: projects.primaria
  })
  store.dispatch('project/getProjects', {
    category: 'secundaria',
    projects: projects.secundaria
  })
  store.dispatch('project/getProjects', {
    category: 'bachillerato',
    projects: projects.bachillerato
  })
}
