<template>
  <div class="spacer" :style="{ width: `${w}px` }"></div>
</template>

<script lang="ts">
export default {
  props: {
    w: {
      type: String,
      default: "4",
    },
  },
};
</script>

<style scoped></style>
