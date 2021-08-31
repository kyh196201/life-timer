<template>
  <section class="options-page">
    <h1 class="page-title">시간 설정</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-row" :class="{error: errors.endMinutes}">
        <label for="end-time" class="form-label">종료 시간</label>
        <input
          type="text"
          id="end-time"
          class="form-control"
          placeholder="-- min"
          autocomplete="off"
          :value="endMinutes"
          @input="updateTime"
        />
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
import {mapState, mapMutations} from 'vuex';

export default {
  name: 'options-page',

  data() {
    return {
      errors: {},
    };
  },

  computed: {
    ...mapState(['endMinutes']),
  },

  methods: {
    ...mapMutations(['setEndMinutes']),

    updateTime(e) {
      this.setEndMinutes(e.target.value.trim());
    },

    handleSubmit() {
      if (!this.validateForm()) return false;

      this.$router.push({
        name: 'timer',
      });
    },

    validateForm() {
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
  },
};
</script>

<style lang="scss">
.options-page {
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    width: 100%;
    margin-top: 5rem;
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
