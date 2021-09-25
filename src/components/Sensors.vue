<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="/img/room.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            Pokój
          </v-card-title>
          <v-card-text>
            <v-list dense class="transparent">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-thermometer</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>
                  <span style="font-size: 1.5em;">
                    {{ roundToTwo(sensors.temperature) || '?' }} °C
                  </span>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-water-percent</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>
                  <span style="font-size: 1.5em;">
                    {{ roundToTwo(sensors.humidity) || '?' }} %
                  </span>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="https://zielony-parapet.pl/7256-thickbox_default/philodendron-imperial-red.jpg"
            height="200px"
          ></v-img>
          <v-card-title>
            Imperial Red
          </v-card-title>
          <v-card-text>
            <v-list dense class="transparent">
              <v-list-item dense>
                <v-list-item-icon>
                  <v-icon>mdi-water</v-icon>
                </v-list-item-icon>
                <v-list-item-subtitle>
                  <span style="font-size: 1.5em;">{{sensors.soil_1 || '?'}} %</span>
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default Vue.extend({
  name: 'Sensors',

  data: () => ({
    sensors: {
      heatIndex: null,
      humidity: null,
      soil_1: null,
      temperature: null,
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
