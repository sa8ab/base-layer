<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    queryKey?: string;
  }>(),
  {
    queryKey: "search",
  }
);

const search = ref<string>("");
</script>

<template>
  <RInput :placeholder="$t('search')" v-model="search">
    <template #after>
      <div class="after">
        <RButton iconOnly flat round>
          <Icon name="search" size="small" />
        </RButton>
        <RButton iconOnly flat round color="red">
          <Icon name="close" size="small" />
        </RButton>
      </div>
    </template>
  </RInput>
</template>

<style scoped lang="scss">
.after {
  display: flex;
  align-items: center;
}
</style>
