<template>
  <div class="time-picker">
    <div class="time-picker__input-wrapper">
      <input
        type="text"
        class="time-picker__input"
        readonly
        placeholder="--:--"
      />
    </div>
    <div class="time-picker__select-wrapper">
      <!-- Hour -->
      <div class="time-picker__select">
        <ul>
          <li
            role="button"
            tabindex="0"
            v-for="(hour, index) in hours"
            :key="`hour-${index}`"
          >
            {{ hour }}
          </li>
        </ul>
      </div>
      <!-- Min -->
      <div class="time-picker__select">
        <ul>
          <li
            role="button"
            tabindex="0"
            v-for="(min, index) in minutes"
            :key="`min-${index}`"
          >
            {{ min }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// Configs
import {MAX_MIN, MAX_HOUR} from '@/configs/constants';

// Utils
import {formatTime} from '@/utils/date';

const minutes = [];
const hours = [];

for (let i = 0; i <= MAX_MIN; i++) {
  minutes.push(formatTime(i));
}

for (let j = 0; j <= MAX_HOUR; j++) {
  hours.push(formatTime(j));
}

export default {
  name: 'time-picker',

  data() {
    return {
      minutes,
      hours,
    };
  },
};
</script>

<style lang="scss">
.time-picker {
  position: relative;
  width: 50%;

  &__input {
    &-wrapper {
      display: flex;
      align-items: center;
      height: $time-picker-height;
      padding: 0 $time-picker-padding;
      border: $time-picker-border;
      color: $time-picker-color;
      transition: border-color 0.15s ease-in-out;
      border-radius: $time-picker-border-radius;

      &:hover {
        border-color: $main-color;
      }
    }

    width: 100%;
    border: none;
    font-size: 2rem;
    color: inherit;

    &::placeholder {
      color: $time-picker-placeholder;
    }
  }

  &__select {
    &-wrapper {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: $time-picker-select-height;
    }

    overflow: hidden;
    width: 50%;
    height: 100%;
    padding: $time-picker-select-padding 0;
    border: $time-picker-border;
    border-top: 0;
    background-color: $white;

    li {
      padding: 1rem;
      color: $time-picker-color;
      text-align: center;

      &.selected {
        color: $main-color;
        font-weight: $font-semi-bold;
        background-color: rgba(126, 135, 219, 0.2);
      }
    }
  }
}
</style>
