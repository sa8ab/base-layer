export const useNavigateLocale = () => {
  const localeRoute = useLocaleRoute();

  const navigateLocale = (...x: Parameters<typeof localeRoute>) =>
    navigateTo(localeRoute(...x));

  return navigateLocale;
};
