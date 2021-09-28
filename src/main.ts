import Vue from 'vue';
import firebase from 'firebase/compat/app';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

const firebaseConfig = {
  apiKey: 'AIzaSyAMZ4nOp9a75nYV4ZsxpBPAF0bSzDRDMII',
  authDomain: 'kwiatkometr.firebaseapp.com',
  databaseURL: 'https://kwiatkometr-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kwiatkometr',
  storageBucket: 'kwiatkometr.appspot.com',
  messagingSenderId: '514991569271',
  appId: '1:514991569271:web:86059b948e6b7341e88972',
};

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  created() {
    firebase.initializeApp(firebaseConfig);
  },
  render: (h) => h(App),
}).$mount('#app');
