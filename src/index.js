import VuePlotly from "./components/VuePlotly.vue";
export { VuePlotly };
export default {
    install(app) {
        app.component("PlotlyChart", VuePlotly);
    }
};
