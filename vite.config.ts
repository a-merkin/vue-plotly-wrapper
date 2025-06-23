import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VuePlotlyWrapper",
      fileName: (format) => `vue-plotly-wrapper.${format}.js`
    },
    rollupOptions: {
      external: ["vue", "plotly.js-dist"],
      output: {
        globals: {
          vue: "Vue",
          "plotly.js-dist": "Plotly"
        }
      }
    }
  }
});
