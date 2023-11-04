<template>
  <HeightTransition>
    <div v-if="loading" class="loading" v-bind="$attrs">
      <div class="container" :style="{ height, maxWidth }">
        <Progress infinite />
      </div>
    </div>
  </HeightTransition>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean | number | null | string;
    maxWidth?: string;
    height?: string | number;
  }>(),
  {}
);
defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss">
.loading {
  transition: var(--r-duration);
  display: flex;
  justify-content: center;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
