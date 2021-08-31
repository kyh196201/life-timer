import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/options',
    name: 'options',
    component: () => import('@/views/OptionsPage.vue'),
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('@/views/TimerPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
