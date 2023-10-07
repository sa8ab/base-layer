<template>
  <div :class="['spacer', size]" :style="{ height: `${custom}px` }"></div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    size?: "xlow" | "low" | "default" | "high" | "xhigh";
    custom?: string | number;
  }>(),
  {
    size: "default",
  }
);
</script>

<style scoped lang="scss">
.spacer {
  &.xlow {
    height: 4px;
  }
  &.low {
    height: 8px;
  }
  &.default {
    height: 14px;
  }
  &.high {
    height: 22px;
  }
  &.xhigh {
    height: 38px;
  }
}
</style>
