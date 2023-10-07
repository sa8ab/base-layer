<template>
  <div class="r-badge">
    <slot />
    <div class="r-badge-content" v-if="active || content">{{ content }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content?: string | number;
  active?: boolean;
}>();
</script>

<style scoped lang="scss">
.r-badge {
  position: relative;
  &-content {
    position: absolute;
    top: -6px;
    border: 1px solid color(b2);
    border-radius: var(--r-radius);
    background: color(red);
    color: white;
    padding: 2px 4px;
    font-size: var(--r-font-xsmall);
    left: calc(100% - 12px);
  }
}
</style>
