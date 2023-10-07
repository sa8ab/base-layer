<template>
  <ClientOnly>
    <HeightTransition>
      <div v-if="loading" class="loading" v-bind="$attrs">
        <Progress infinite />
      </div>
    </HeightTransition>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps(["loading"]);
defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss">
.loading {
  transition: var(--r-duration);
}
</style>
