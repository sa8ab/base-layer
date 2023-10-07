<template>
  <div class="x">
    <div
      :class="['loading x']"
      :style="{ '--width': `${width}px`, '--border-width': `${borderWidth}px` }"
    >
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  width: {
    default: 48,
  },
  borderWidth: {
    default: 3,
  },
});
</script>

<style scoped lang="scss">
.x {
  background: transparent;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
}
.x .loading {
  position: relative;
  width: var(--width);
  height: var(--width);
  display: block;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: var(--border-width) solid transparent;
}
.effects {
  transition: all 0.3s ease;
}
.effect-1 {
  animation: rotate 1s ease infinite;
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--border-width) solid transparent;
  border-left: var(--border-width) solid color();
  /* border-left: var(--border-width) solid rgba(var(--vs-primary), 1); */
  border-radius: 50%;
  animation: rotate 1s ease 0.1s infinite;
}
.effect-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--border-width) solid transparent;
  border-left: var(--border-width) solid color();
  /* border-left: var(--border-width) solid rgba(var(--vs-primary), 1); */
  border-radius: 50%;
  animation: rotateOpacity 1s ease 0.1s infinite;
}
.effect-3 {
  position: absolute;
  width: 100%;
  height: 100%;
  border: var(--border-width) solid transparent;
  border-left: var(--border-width) solid color();
  /* border-left: var(--border-width) solid rgba(var(--vs-primary), 1); */
  animation: rotateOpacity 1s ease 0.2s infinite;
  border-radius: 50%;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
@keyframes rotateOpacity {
  0% {
    transform: rotate(0);
    opacity: 0.1;
  }
  100% {
    transform: rotate(1turn);
    opacity: 1;
  }
}
</style>
