<template>
  <section class="timer-page">
    <h2 class="page-title">다음 쉬는 시간까지</h2>
    <div class="timer">
      <span class="minute">{{ minutes }}분</span>
      <span class="second">{{ seconds }}초</span>
    </div>
    <div class="timer-page__btns">
      <button
        type="button"
        class="btn btn-point-bg btn-size--default"
        :disabled="!isTimerEnd"
        @click.stop="retry"
      >
        재도전
      </button>
      <button
        type="button"
        class="btn btn-point-bg btn-size--default"
        :disabled="!isTimerEnd"
        @click.stop="exit"
      >
        나가기
      </button>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'timer-page',

  data() {
    return {
      rafId: null,

      time: {
        start: 0,
        threshold: 500,
      },

      originTime: null,
    };
  },

  computed: {
    ...mapState(['endMinutes']),

    minutes() {
      if (this.originTime <= 0) return '00';

      const minutes = Math.floor(this.originTime / 1000 / 60);

      return this.formatTime(minutes);
    },

    seconds() {
      if (this.originTime <= 0) return '00';

      const seconds = Math.floor((this.originTime / 1000) % 60);

      return this.formatTime(seconds);
    },

    isTimerEnd() {
      return this.rafId && this.originTime <= 0;
    },
  },

  created() {
    this.setOriginTime();
  },

  mounted() {
    setTimeout(() => {
      this.rafId = window.requestAnimationFrame(this.animateTime);
    }, 500);
  },

  methods: {
    ...mapActions(['clearOptions']),
    ...mapMutations(['setEndMinutes']),

    formatTime(value) {
      return value < 10 ? `0${value}` : '' + value;
    },

    animateTime(now = 0) {
      const {start, threshold} = this.time;

      if (!start) {
        this.time.start = now;
      }

      const elapsed = now - this.time.start;

      if (elapsed >= threshold) {
        const newTime = this.originTime - threshold;

        this.originTime = Math.max(0, newTime);
        this.time.start = now;
      }

      if (this.originTime > 0) {
        window.requestAnimationFrame(this.animateTime);
      } else {
        window.cancelAnimationFrame(this.rafId);
        this.complete();
      }
    },

    complete() {
      alert('성공 !!!');
    },

    setOriginTime() {
      this.originTime = parseInt(this.endMinutes) * 60 * 1000;
    },

    retry() {
      this.setOriginTime();

      this.$nextTick(() => {
        this.rafId = window.requestAnimationFrame(this.animateTime);
      });
    },

    async exit() {
      this.$router.push({
        name: 'Home',
      });

      this.clearOptions();
    },
  },
};
</script>

<style lang="scss">
.timer-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .page-title {
    margin-bottom: 50px;
    text-align: center;
  }

  .timer {
    margin-bottom: 4rem;
    color: $dark-gray;
    font-size: 4.25rem;
    font-weight: $font-semi-bold;
    text-align: center;
  }

  .minute {
    margin-right: 0.5rem;
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      font-size: 2rem;

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
