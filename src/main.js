import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// Css
import '@/assets/scss/_common.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

const path = localStorage.getItem('path');

if (path) {
  localStorage.removeItem('path');
  router.push({
    path: path.replace('life-timer/', ''),
  });
}
