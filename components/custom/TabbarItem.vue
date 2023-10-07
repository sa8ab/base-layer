<script lang="ts" setup></script>

<template>
  <NuxtLink class="tabbar-item r" v-bind="$attrs" v-ripple>
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.tabbar-item {
  display: flex;
  align-items: center;
  gap: space();
}
.router-link-exact-active {
  background: color() !important;
  color: white;
}
</style>
