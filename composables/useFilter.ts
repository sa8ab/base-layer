export interface UseFilterParams {
  initialPage?: number;
  queryToData?: () => any;
  getAll?: () => any;
  onQueryChange?: () => any;
}
export default ({
  initialPage = 1,
  queryToData,
  getAll,
  onQueryChange,
}: UseFilterParams = {}) => {
  const localeRoute = useLocaleRoute();
  const route = useRoute();
  const page = ref<number | undefined>(initialPage);

  onMounted(() => {
    queryToData?.();
    page.value = parseInt(route.query.page as string) || undefined;
  });

  watch(
    () => route.query,
    () => {
      getAll?.();
      queryToData?.();
      onQueryChange?.();
      page.value = parseInt(route.query.page as string) || undefined;
    }
  );

  watch(page, (page) => {
    if (parseInt(route.query.page as string) == page) return;
    navigateTo(
      localeRoute({
        query: {
          ...route.query,
          page,
        },
      })
    );
  });

  const clearFilters = () => {
    navigateTo(
      localeRoute({
        query: {},
      })
    );
  };

  const hasFilters = computed(() => Object.values(route.query).some((v) => v));

  return {
    page,
    clearFilters,
    hasFilters,
  };
};
