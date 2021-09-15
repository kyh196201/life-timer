<template>
  <section class="home">
    <div class="home__btns">
      <router-link to="/options" class="btn btn-size--default btn-point-bg"
        >타이머 시작하기</router-link
      >
      <router-link to="/" class="btn btn-size--default btn-point-bg"
        >스탑 워치</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  width: 100%;

  &__btns {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .btn {
      font-weight: $font-medium;

      &:first-child {
        margin-right: 1rem;
      }
    }
  }
}
</style>
