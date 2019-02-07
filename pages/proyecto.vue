<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-flex
      xs12
      sm12
      md10
      offset-md1
    >
      <div
        class="timeline"
      >
        <h3
          class="display-1 mb-5 font-weight-medium"
        >
          Historia
        </h3>
        <v-timeline>
          <v-timeline-item
            v-for="(edition, i) in editions"
            :key="i"
          >
            <span
              slot="opposite"
              class="headline font-weight-bold date"
              v-text="edition.year" 
            />
            <div>
              <h2
                class="title mb-3 font-weight-medium"
              >
                {{ edition.title }}
              </h2>
              <div 
                class="subheading font-weight-light"
              >
                {{ edition.text }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-flex>

    <v-flex
      xs12
      sm12
      md10
      offset-md1
    >
      <div class="colabora">
        <h3
          class="display-1 mb-5 font-weight-medium"
        >
          Colabora
        </h3>
        <img 
          width="250px"
          src="~/static/programoergosum.svg"
          title="Asociación Programo Ergo Sum"
        >
        <img
          width="250px"
          src="~/static/cprmurcia.png"
          title="CPR Murcia"
        >
      </div>
    </v-flex>

    <v-flex
      xs12
      sm12
      md10
      offset-md1
    >
      <div
        class="licencia"
      >
        <h3 
          class="display-1 mb-5 font-weight-medium"
        >
          Licencia
        </h3>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="subheading">
              Esta obra está bajo una licencia de Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional.
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile class="mt-3">
            <v-list-tile-title class="title font-weight-bold">
              Usted es libre:
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>share</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="font-weight-light">
              Compartir y redistribuir el material en cualquier medio o formato.
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="font-weight-light">
              Remezclar, transformar y crear a partir del material para cualquier finalidad, incluso comercial.
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile class="mt-3">
            <v-list-tile-title class="title font-weight-bold">
              Bajo las siguientes condiciones:
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>accessibility</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="font-weight-light">
              Debe reconocer adecuadamente la autoría, proporcionar un enlace a la licencia e indicar si se han realizado cambios.
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>device_hub</v-icon>
            </v-list-tile-action>
            <v-list-tile-content class="font-weight-light">
              Si remezcla, transforma o crea a partir del material, deberá difundir sus contribuciones bajo la misma licencia que el original.
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  head: () => ({
    title: 'Proyecto El Cable Amarillo'
  }),
  data: () => ({
    editions: [
      {
        year: '2019',
        title: '3ª Edición',
        text:
          'Realización de la página web e incorporación de nuevas prácticas sobre la 2ª edición realizadas por docentes a través del curso de Robótica en Secundaria impartido a través del Centro de Profesorado y Recursos de la Región de Murcia.'
      },
      {
        year: '2018',
        title: '2ª Edición',
        text:
          'Nuevas prácticas incorporadas al repositorio de la 1ª edición realizadas por docentes a través del curso de Robótica en Secundaria impartido a través del Centro de Profesorado y Recursos de la Región de Murcia.'
      },
      {
        year: '2017',
        title: '1ª Edición',
        text:
          'Proyecto financiado por el Fondo Europeo de Desarrollo Regional de la Región de Murcia. Realización de cursos de formación a profesores en Murcia, Cartagena y Lorca a través del Centro de Profesorado y Recursos de la Región de Murcia.'
      }
    ]
  })
}
</script>

<style lang="scss" scope>
.timeline {
  margin: 0 0 150px;
  text-align: center;
  .v-timeline-item__dot {
    background: #ffee00 !important;
  }
  .date {
    color: #bf1733;
  }
}
.colabora {
  margin: 0 0 150px;
  text-align: center;
  img {
    display: inline-block;
    margin: 0 20px;
  }
}
.licencia {
  margin: 0 0 50px;
  h3 {
    text-align: center;
  }
}
</style>
