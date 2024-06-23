<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    error?: any;
    defaultMessage?: string;
  }>(),
  {
    defaultMessage: "Something went wrong!",
  }
);
const renderMessage = computed(() => {
  const message = getErrorMessage(props.error);
  return message || props.defaultMessage;
});
</script>

<template>
  <div class="error">
    <div class="message">{{ renderMessage }}</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
