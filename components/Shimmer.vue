<template>
  <div
    :class="['shimmer', { isText, circle }]"
    :style="{
      width,
      height,
      fontSize: renderFontSize,
    }"
  >
    {{ isText ? "&nbsp;" : "" }}
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    width?: string | number;
    height?: string | number;
    isText?: boolean;
    circle?: boolean;
    fontSize?: "large" | "xlarge" | "small" | "xsmall" | "default";
  }>(),
  {}
);

const renderFontSize = computed(() => {
  if (!props.fontSize) return undefined;
  if (props.fontSize === "default") return "1rem";
  return `var(--r-font-${props.fontSize})`;
});
</script>

<style scoped lang="scss">
.shimmer {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-radius);
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, transparent, color(hover, 0.4), transparent);
    animation: wave 1s infinite;
  }
  &.circle {
    border-radius: 50%;
  }
}
@keyframes wave {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
