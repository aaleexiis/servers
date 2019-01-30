import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.filter('lettersCount', function (value) {
   if (!value) {
     return;
   }

   value = value.toString();
   return `Test (${value.length})`
});

new Vue({
  el: '#app',
  render: h => h(App)
});
