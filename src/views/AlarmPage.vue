<template>
  <div class="alarm-page">
    <h1 class="alarm-message">성공!</h1>
    <p><span class="timer">0</span>초 뒤에 꺼집니다.</p>
  </div>
</template>
<script>
export default {
  name: 'alarm-page',
};
</script>

<style lang="scss">
.alarm-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  .alarm-message {
    margin-bottom: 2rem;
    font-size: 5rem;
    color: $main-color;
    font-weight: $font-bold;
  }

  p {
    color: $dark-gray;
    font-weight: $font-semi-bold;
    font-size: 2rem;

    .timer {
      font-size: 2.2rem;
    }
  }
}
</style>
