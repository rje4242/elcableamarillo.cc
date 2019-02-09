# elcableamarillo.cc

> Página web de código abierto del proyecto educativo "El Cable Amarillo".

[![Build Status](https://travis-ci.org/ElCableAmarillo/elcableamarillo.cc.svg?branch=master)](https://travis-ci.org/ElCableAmarillo/elcableamarillo.cc)

### Framework

Esta web está desarrollada utilizando [Nuxt.js][Nuxt], un **framework de javascript** que permite crear aplicaciones universales utilizando [Vue.js][Vue]. Este framework combina muchas de las tecnologías más utilizadas para el desarrollo web, como *Node.js*, *Webpack* y *Babel*.

Como plantilla se ha utilizado [Vuetify.js][Vuetify], un framework progresivo de componentes para *Vue.js* sobre *Material Design*.

### Hosting

Esta web está alojada en este **repositorio público de GitHub**. En la rama *master* se encuentra el código de la aplicación mientras que en la rama *gh-pages* se almacena todo el código estático (html, js, css, etc.) generado por *Nuxt.js*.

### Integración continua

El código sobre la rama master es testeado utilizando [Travis-CI][Travis]. Travis CI es un servicio de **integración continua** distribuido y alojado que se utiliza para crear y probar proyectos de software alojados en GitHub.

### Despliegue continuo

Una vez testeado el código de la rama master se procede al **despliegue contínuo** o automático en [GitHub Pages][gh-pages]. GitHub Pages es un servicio de alojamiento web ofrecido por GitHub para alojar páginas web estáticas para usuarios de GitHub.


[Nuxt]: https://nuxtjs.org
[Vue]: https://vuejs.org
[Vuetify]: https://vuetifyjs.com
[gh-pages]: https://pages.github.com
[travis]: https://travis-ci.org