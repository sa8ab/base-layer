<template>
  <img :src="src || noImage" v-bind="$attrs" />
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string;
}>();

const noImage = useAsset("/images/placeholder.png");
</script>
