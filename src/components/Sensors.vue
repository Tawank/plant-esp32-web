<template>
  <v-container>
    <v-row>
      <v-col
        class="pb-0"
        cols="12"
      >
        <div class="text-center">{{ new Date(sensors.updated_at).toLocaleString() }}</div>
      </v-col>
      <v-col cols="12">
        <sensors-card
          imageSrc="/img/room.jpg"
          title="Pokój"
          :sensorsData="[
            {
              icon: 'mdi-thermometer',
              data: roundToTwo(sensors.temperature),
              unit: '°C'
            },
            {
              icon: 'mdi-water-percent',
              data: roundToTwo(sensors.humidity),
              unit: '%'
            }
          ]"
        />
      </v-col>
      <v-col cols="12">
        <sensors-card
          imageSrc="https://zielony-parapet.pl/7256-thickbox_default/philodendron-imperial-red.jpg"
          title="Imperial Red"
          :sensorsData="[
            {
              icon: 'mdi-water',
              data: sensors.soil_1,
              unit: '%'
            }
          ]"
        />
      </v-col>
      <v-col cols="12">
        <sensors-card
          imageSrc="https://zielony-parapet.pl/17780-thickbox_default/syngonium-podophyllum-albo-variegata-zroslicha.jpg"
          title="Syngonium"
          :sensorsData="[
            {
              icon: 'mdi-water',
              data: sensors.soil_2,
              unit: '%'
            }
          ]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import SensorsCard from './SensorsCard.vue';

export default Vue.extend({
  components: { SensorsCard },
  name: 'Sensors',
  data: () => ({
    sensors: {
      heatIndex: null,
      humidity: null,
      soil_1: null,
      temperature: null,
      updated_at: null,
    },
  }),
  created() {
    const database = firebase.database().ref('/sensors');

    database.on('value', (snapshot) => {
      const data = snapshot.val();
      this.sensors = data;
    });
  },
  methods: {
    roundToTwo(number: null | string | number) {
      return number && Number(number).toFixed(2);
    },
  },
});
</script>
