export const usePopup = <T = any, P extends string = any>(
  popupName: P,
  init?: () => void
) => {
  const state = () =>
    useState<{
      active: boolean;
      context?: T;
    }>(popupName, () => ({
      active: false,
      context: undefined,
    }));

  const popup = state();

  const open = (context: T) => {
    popup.value.context = context;
    popup.value.active = true;
  };

  const close = () => {
    popup.value.active = false;
    popup.value.context = undefined;
  };

  if (init) {
    watch(
      () => popup.value.active,
      (active) => {
        active && init?.();
      }
    );
  }

  const context = computed(() => popup.value.context);

  return { popup, open, close, context };
};
