import { App } from "vue";
import VuePlotly from "./components/VuePlotly.vue";

export { VuePlotly };

export default {
  install(app: App) {
    app.component("PlotlyChart", VuePlotly);
  }
};
