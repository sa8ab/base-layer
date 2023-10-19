<template>
  <div class="no-items" v-if="!loading && !length">
    <slot name="icon">
      <Icon :name="icon" v-if="icon" class="icon" size="xxlarge" />
    </slot>
    <slot> {{ $t("noItems") }} </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean;
  length?: number;
  icon?: string;
}>();
</script>

<style scoped lang="scss">
.no-items {
  color: color(disabled);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--r-space-2);
  padding: var(--r-space-2);
  flex: 1;
}
</style>
