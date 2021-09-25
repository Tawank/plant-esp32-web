<template>
  <Sensors />
</template>

<script lang="ts">
import Vue from 'vue';
import Sensors from '../components/Sensors.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Sensors,
  },
});
</script>
