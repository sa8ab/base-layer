<template>
  <div class="gradient-border" :style="{ '--radius': radius, '--border-width': borderWidth }">
    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    radius?: string | number;
    borderWidth?: string | number;
  }>(),
  {
    radius: "var(--r-radius)",
    borderWidth: "2px",
  }
);
</script>

<style scoped lang="scss">
@property --gradient-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 160deg;
}
.gradient-border {
  --gradient-angle: 160deg;
  // border width
  padding: var(--border-width);
  border-radius: var(--radius);

  background: linear-gradient(
    var(--gradient-angle),
    color(prm, 0.6),
    color(prm, 0.4),
    color(accent, 0.1),
    color(accent, 0.4),
    color(accent, 0.6)
  );
  &.animate {
    animation: rotate 6s linear 0s infinite reverse;
  }
}
.slot {
  border-radius: var(--radius);
  overflow: hidden;
}

@keyframes rotate {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}
</style>
