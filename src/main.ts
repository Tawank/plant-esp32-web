import Vue from 'vue';
import firebase from 'firebase/compat/app';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

const firebaseConfig = {
  apiKey: 'AIzaSyAFJH6HgJmgPD8CWNt2s3qUYZpOeNvfe0k',
  authDomain: 'plant-esp32.firebaseapp.com',
  databaseURL: 'https://plant-esp32-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'plant-esp32',
  storageBucket: 'plant-esp32.appspot.com',
  messagingSenderId: '392703252195',
  appId: '1:392703252195:web:627345c229517eb1f7d7d6',
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
