<script lang="ts" setup>
const props = defineProps<{
  error?: any;
  pending?: boolean | null;
}>();
</script>

<template>
  <Loading :loading="pending" />
  <ErrorView :error="error" v-if="error" />
  <slot v-else />
</template>

<style scoped lang="scss"></style>
