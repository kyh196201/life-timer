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
        @click.stop="pause"
        v-if="!isPaused"
      >
        일시 정지
      </button>
      <button
        type="button"
        class="btn btn-point-bg btn-size--default"
        @click.stop="resume"
        v-if="isPaused"
      >
        재시작
      </button>
      <button
        type="button"
        class="btn btn-point-bg btn-size--default"
        @click.stop="handleExit"
      >
        나가기
      </button>
    </div>
  </section>
</template>

<script>
// Utils
import {formatTime} from '@/utils/date';

// Vuex
import {mapState, mapMutations, mapActions} from 'vuex';

// Web Worker
import TimerWorker from 'worker-loader!../scripts/worker.js';

export default {
  name: 'timer-page',

  data() {
    return {
      rafId: null,

      time: {
        start: 0,
        threshold: 500,
      },

      // completed, running, paused
      status: '',

      MINUS_PER_FRAME: 500,

      originTime: null,

      timerWorker: null,
    };
  },

  computed: {
    ...mapState(['endMinutes']),

    /**
     * @returns {string} '00' 분
     */
    minutes() {
      if (this.originTime <= 0) return '00';

      const minutes = Math.floor(this.originTime / 1000 / 60);

      return formatTime(minutes);
    },

    /**
     * @returns {string} '00' 초
     */
    seconds() {
      if (this.originTime <= 0) return '00';

      const seconds = Math.floor((this.originTime / 1000) % 60);

      return formatTime(seconds);
    },

    /**
     * @returns {boolean} timer 종료 여부
     */
    isTimerEnd() {
      return this.originTime <= 0;
    },

    /**
     * @returns {boolean} timer 일시 정지 여부
     */
    isPaused() {
      return !this.isTimerEnd && this.status === 'paused';
    },
  },

  created() {
    this.setOriginTime();
  },

  mounted() {
    this.initWebWorker();
  },

  methods: {
    ...mapActions(['clearOptions']),
    ...mapMutations(['setEndMinutes']),

    // 웹 워커 초기화
    initWebWorker() {
      if (!this.timerWorker) {
        this.timerWorker = new TimerWorker();
      }

      this.timerWorker.onmessage = event => {
        if (event.data === 'tick') {
          if (this.isPaused) {
            return;
          }

          const newTime = this.originTime - this.MINUS_PER_FRAME;

          this.originTime = Math.max(0, newTime);

          if (this.originTime > 0) {
            this.status = 'running';
            this.timerWorker.postMessage('start');
          } else {
            this.complete();
            this.status = 'completed';
            this.timerWorker.postMessage('stop');
          }
        }
      };

      setTimeout(() => {
        this.status = 'running';
        this.timerWorker.postMessage('start');
      }, this.MINUS_PER_FRAME);
    },

    // FIXME 삭제
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
      const routerInstance = this.$router.resolve({
        name: 'Alarm',
      });

      if (routerInstance.href) {
        window.open(routerInstance.href, '_blank');
      }
    },

    setOriginTime() {
      this.originTime = parseInt(this.endMinutes) * 60 * 1000;
    },

    // 재도전
    retry() {
      this.setOriginTime();

      this.$nextTick(() => {
        this.status = 'running';
        this.timerWorker.postMessage('start');
      });
    },

    // 나가기
    handleExit() {
      this.$router.push({
        name: 'Options',
      });

      this.timerWorker.terminate();
      this.clearOptions();
    },

    // 일시 정지
    pause() {
      this.timerWorker.postMessage('stop');
      this.status = 'paused';
    },

    // 재시작
    resume() {
      this.timerWorker.postMessage('start');
      this.status = 'running';
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
