<template>
  <section class="options-page">
    <h1 class="page-title">시간 설정</h1>
    <div class="tab">
      <div
        class="tab-item tab-item-size--default tab-item-point"
        :class="{active: tab.value === mode}"
        :key="index"
        @click.stop="handleChangeTab(tab.value)"
        v-for="(tab, index) in tabs"
      >
        <span class="tab-item__title">
          {{ tab.title }}
        </span>
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <div
        class="form-row"
        :class="{error: errors.endMinutes}"
        v-if="mode === 'minute'"
      >
        <label for="end-time" class="form-label">타이머 설정</label>
        <input
          type="text"
          id="end-time"
          class="form-control"
          placeholder="--분"
          autocomplete="off"
          :value="endMinutes"
          @input="updateTime"
        />
        <p class="form-error" v-if="errors.endMinutes">
          {{ errors.endMinutes }}
        </p>
      </div>
      <div class="form-row" :class="{error: errors.endMinutes}" v-else>
        <label for="end-time" class="form-label">종료 시간 설정</label>
        <TimePicker />
        <p class="form-error" v-if="errors.endMinutes">
          {{ errors.endMinutes }}
        </p>
      </div>
      <div class="form-row">
        <button
          type="submit"
          id="complete-btn"
          class="btn btn-light-gray btn-size--large"
        >
          설정 완료
        </button>
        <router-link to="/" class="btn btn-point-bg btn-size--large">
          뒤로 가기
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
// Config
import {MINUTE_MODE, DATE_MODE} from '@/configs/constants';

// Vuex
import {mapState, mapMutations} from 'vuex';

// Component
import TimePicker from '@/components/TimePicker.vue';

export default {
  name: 'options-page',

  components: {
    TimePicker,
  },

  data() {
    return {
      errors: {},

      tabs: [
        {
          value: MINUTE_MODE,
          title: '타이머',
        },
        {
          value: DATE_MODE,
          title: '종료 시간',
        },
      ],
    };
  },

  computed: {
    ...mapState(['endMinutes', 'mode']),
  },

  methods: {
    ...mapMutations(['setEndMinutes', 'setMode']),

    updateTime(e) {
      this.setEndMinutes(e.target.value.trim());
    },

    handleSubmit() {
      if (!this.validateForm()) return false;

      this.$router.push({
        name: 'Timer',
      });
    },

    handleChangeTab(tab) {
      if (this.mode === tab) return;

      this.setMode(tab);
    },

    validateMinutes() {
      let valid = true;

      const endMinutes = this.endMinutes;

      if (!endMinutes.trim()) {
        this.$set(this.errors, 'endMinutes', '시간을 입력해주세요.');

        valid = false;
      } else if (isNaN(endMinutes)) {
        this.$set(this.errors, 'endMinutes', '숫자를 입력해주세요.');
        valid = false;
      }

      if (valid) {
        this.errors = {};
      }

      return valid;
    },

    validateDate() {
      return true;
    },

    validateForm() {
      return this.mode === MINUTE_MODE
        ? this.validateMinutes()
        : this.validateDate();
    },
  },
};
</script>

<style lang="scss">
.options-page {
  display: flex;
  flex-direction: column;
  width: 100%;

  .tab {
    margin-top: 3rem;
  }

  form {
    width: 100%;
    margin-top: 3rem;
  }

  .form-row {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  .btn {
    &#complete-btn {
      margin-right: 1rem;
    }

    font-weight: $font-semi-bold;
    transition: border 0.15s ease-in-out;

    &:active,
    &:focus {
      border-color: $main-color;
    }
  }
}
</style>
