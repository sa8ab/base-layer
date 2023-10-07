<script setup lang="ts">
const props = defineProps<{
  expandable?: boolean;
  noTitle?: boolean;
}>();
const active = ref(true);
</script>

<template>
  <div class="filter-card">
    <div class="header">
      <div class="start">
        <!-- <Icon name="filter" /> -->
        <span class="title f500" v-if="!noTitle">{{ $t("filters") }}</span>
      </div>
      <div class="end">
        <RButton color="red">
          <Icon name="filter-remove" />
          {{ $t("clearFilters") }}
        </RButton>
        <RButton iconOnly @click="active = !active" v-if="expandable">
          <Icon name="chevron-down" />
        </RButton>
      </div>
    </div>
    <HeightTransition>
      <div class="content" v-if="expandable ? active : true">
        <div class="padding">
          <slot />
        </div>
      </div>
    </HeightTransition>
  </div>
</template>

<style scoped lang="scss">
.filter-card {
  padding: space(2);
  box-shadow: 0 0 0 1px color(border-color, var(--r-border-alpha));
  border-radius: var(--r-radius);
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .end {
    display: flex;
    align-items: center;

    gap: space(1);
  }
}
.start {
  display: flex;
  align-items: center;
  gap: space(1);
}
.padding {
  padding-top: space(1);
}
</style>
