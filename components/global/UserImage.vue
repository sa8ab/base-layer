<template>
  <div class="user-image" :style="{ width, height: width }">
    <Image :src="src" v-if="src" />
    <span v-else-if="firstLetter">{{ firstLetter }}</span>
    <Icon name="user" v-else />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name?: string;
    width?: string;
    src?: string;
  }>(),
  {
    width: "32px",
  }
);

const firstLetter = computed(() => {
  return props.name?.split("")[0].toUpperCase();
});
</script>

<style scoped lang="scss">
.user-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background: color(alt, var(--r-light-alpha));
  color: color(alt);
  border-radius: 50%;
  overflow: hidden;
  text-decoration: none;
}
</style>
