<template>
  <div id="app">
    <Header v-show="showHeader" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header.vue';

export default {
  name: 'app',

  components: {
    Header,
  },

  computed: {
    showHeader() {
      const hideHeaderRouters = ['Timer', 'Alarm'];

      return !hideHeaderRouters.includes(this.$route.name);
    },
  },
};
</script>
