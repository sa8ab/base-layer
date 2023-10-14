<template>
  <div :class="['card', { noPadding, hoverable }]">
    <div class="header" v-if="hasHeader">
      <div class="left">
        <slot name="header">
          <Icon
            :name="icon"
            v-if="icon"
            class="icon"
            :style="`--r-icon-color: ${iconColor}`"
            :size="iconSize || 'large'"
          />
          <slot name="icon" />
          <div class="title f500 flarge">{{ title }}</div>
        </slot>
      </div>
      <div class="right">
        <slot name="headerEnd" />
      </div>
    </div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useColor } from "sevue";

const props = defineProps<{
  noPadding?: boolean;
  title?: string;
  iconColor?: string;
  icon?: string;
  iconSize?: "default" | "large" | "xlarge" | "xxlarge";
  hoverable?: boolean;
  noHeader?: boolean;
}>();

const iconColor = useColor(toRef(props, "iconColor"));

const slots = useSlots();

const hasHeader = computed(
  () => props.title || slots.header || slots.headerEnd
);
</script>

<style scoped lang="scss">
.card {
  border-radius: var(--r-radius);
  background: color(b2);
  display: flex;
  flex-direction: column;
  padding: space(3);
}
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: space(1);
  padding-bottom: space(3);
  .left {
    display: flex;
    align-items: center;
    gap: space(1);
  }
  .icon {
    color: color(icon-color);
  }
}
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.noPadding {
  padding: 0;
  .header {
    padding: space(3);
  }
}
.hoverable {
  transition: background var(--r-duration);
  cursor: pointer;
  user-select: none;
  &:hover {
    background: color(hover, var(--r-hover-alpha));
  }
}
</style>
