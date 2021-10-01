import Vue from 'vue';
import VueRouter from 'vue-router';

// Store
import store from '@/store';

console.log('store', store);

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import('@/views/OptionsPage.vue'),
  },
  {
    path: '/timer',
    name: 'Timer',
    component: () => import('@/views/TimerPage.vue'),
    beforeEnter: (to, from, next) => {
      const isEndMinutes = !!store.getters.getEndMinutes;

      if (isEndMinutes) {
        next();
      } else {
        next({
          name: 'Home',
        });
      }
    },
  },
  {
    path: '/alarm',
    name: 'Alarm',
    component: () => import('@/views/AlarmPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
