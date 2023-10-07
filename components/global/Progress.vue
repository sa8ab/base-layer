<template>
  <div
    :class="[`progress`, { infinite }]"
    :style="{ height: `${height}px`, '--color': color }"
  >
    <div class="line" :style="{ width: `${percent ?? 40}%` }"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  infinite: {
    type: Boolean,
    default: false,
  },
  height: {
    type: [Number, String],
    default: 4,
  },
  percent: {
    type: Number,
  },
  color: {
    type: String,
    default: "var(--r-prm)",
  },
});
</script>

<style scoped lang="scss">
.progress {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 14px;
  background: color(hover, var(--hover-alpha));

  .line {
    background-color: rgba(var(--color), 1);
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: 14px;
    transition: width var(--r-duration);
  }
}
.infinite {
  .line {
    animation: infinite 1s ease infinite;
  }
}
@keyframes infinite {
  0% {
    width: 30%;
    left: -40%;
  }
  60% {
    left: 100%;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
</style>
