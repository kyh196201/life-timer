<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="link">홈</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  padding: 1rem 2rem;
  z-index: 10;

  &__nav {
    .link {
      font-size: 2rem;
      font-weight: $font-semi-bold;
      color: $dark-gray;

      &.router-link-exact-active {
        font-weight: $font-bold;
        color: $main-color;
      }
    }
  }
}
</style>
