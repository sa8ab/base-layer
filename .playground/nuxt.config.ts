import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  extends: "..",
  vite: {
    plugins: [svgLoader()],
  },
});
