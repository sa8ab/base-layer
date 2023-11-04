<template>
  <div class="no-items" v-if="canShow">
    <slot name="icon">
      <Icon :name="icon" v-if="icon" class="icon" size="xxlarge" />
    </slot>
    <slot> {{ $t("noItems") }} </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  loading?: boolean;
  length?: number | boolean;
  icon?: string;
  custom?: boolean;
}>();

const canShow = computed(() => {
  if (props.custom) return true;
  if (!props.loading && !props.length) return true;
  return false;
});
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
