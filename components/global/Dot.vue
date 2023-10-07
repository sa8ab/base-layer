<template>
  <span :class="{ disabled }"> • </span>
</template>

<script setup lang="ts">
defineProps<{
  disabled?: boolean;
}>();
</script>

<style scoped lang="scss">
.disabled {
  color: color(disabled);
}
</style>
