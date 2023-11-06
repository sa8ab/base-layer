<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    queryKey?: string;
  }>(),
  {
    queryKey: "search",
  }
);

const route = useRoute();
const localeRoute = useLocaleRoute();

const emit = defineEmits<{
  search: [string | undefined];
  clear: [];
}>();

const search = ref<string>("");

const onSearch = () => {
  emit("search", search.value);

  return navigateTo(
    localeRoute({
      query: {
        ...route.query,
        page: undefined,
        [props.queryKey]: search.value,
      },
    })
  );
};

const onClear = () => {
  search.value = "";
  emit("clear");
  return navigateTo(
    localeRoute({
      query: {
        ...route.query,
        page: undefined,
        [props.queryKey]: undefined,
      },
    })
  );
};

const {} = useFilter({
  queryToData: () => {
    search.value = (route.query[props.queryKey] as string) || "";
  },
});
</script>

<template>
  <RInput :placeholder="$t('search')" v-model="search" @keyup.enter="onSearch">
    <template #after>
      <div class="after">
        <RButton
          variant="flat"
          customSize="32px"
          iconOnly
          round
          color="red"
          v-if="search"
          @click="onClear"
        >
          <Icon name="close" size="small" />
        </RButton>
        <RButton
          customSize="32px"
          variant="flat"
          iconOnly
          round
          @click="onSearch"
        >
          <Icon name="search" size="small" />
        </RButton>
      </div>
    </template>
  </RInput>
</template>

<style scoped lang="scss">
.after {
  padding: 0 2px;
  display: flex;
  align-items: center;
  gap: 2px;
}
</style>
