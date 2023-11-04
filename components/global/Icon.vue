<template>
  <Component :is="icon" :width="renderSize" :height="renderSize" class="icon" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type { AsyncComponentLoader } from "nuxt/dist/app/compat/capi";

const props = withDefaults(
  defineProps<{
    name: string;
    width?: string;
    size?: "default" | "large" | "xlarge" | "xxlarge" | "small";
  }>(),
  {}
);

const renderSize = computed(() => {
  if (props.width) {
    return props.width;
  } else if (props.size) {
    if (props.size === "default") return "20px";
    if (props.size === "large") return "24px";
    if (props.size === "xlarge") return "32px";
    if (props.size === "xxlarge") return "38px";
    if (props.size === "small") return "16px";
  } else {
    return "20px";
  }
});

const icons: Record<string, AsyncComponentLoader> = import.meta.glob(
  "@/assets/icons/*.svg"
);

// const icon = defineAsyncComponent(icons[`/assets/icons/${props.name}.svg`]);
const icon = defineAsyncComponent({
  loader: icons[`/assets/icons/${props.name}.svg`],
});
</script>
