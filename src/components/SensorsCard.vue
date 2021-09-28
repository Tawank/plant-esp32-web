<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="imageSrc"
      height="200px"
    ></v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      <v-list dense class="transparent">
        <v-list-item
          v-for="(sensorData, sensorDataIndex) in sensorsData"
          :key="sensorDataIndex"
        >
          <v-list-item-icon>
            <v-icon>{{ sensorData.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>
            <span style="font-size: 1.5em;">
              {{ sensorData.data || '?' }} {{ sensorData.unit }}
            </span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SensorsCard',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sensorsData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>

</style>
