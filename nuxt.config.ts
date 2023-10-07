// https://v3.nuxtjs.org/api/configuration/nuxt.config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],

  vite: {
    plugins: [svgLoader()],
  },
});
