<template>
  <HeightTransition>
    <div v-if="loading" class="loading" v-bind="$attrs">
      <div class="inner">
        <Progress infinite :height="height" />
      </div>
    </div>
  </HeightTransition>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: boolean | number | null | string;
    height?: string | number;
  }>(),
  {
    height: 4,
  }
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
.inner {
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
