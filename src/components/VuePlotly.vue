<template>
  <div ref="plotDiv" class="plotly-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, defineProps, defineEmits, shallowRef } from 'vue';
import Plotly, { Layout, Data, Config, PlotMouseEvent, PlotSelectionEvent } from 'plotly.js-dist-min';
import locale from 'plotly.js-locales/ru'

Plotly.register(locale);
Plotly.setPlotConfig({ locale: 'ru' });

const props = defineProps<{
  data: Data[];
  layout?: Partial<Layout>;
  config?: Partial<Config>;
  responsive?: boolean;
}>();

const emit = defineEmits<{
  (e: 'plotly-click', event: PlotMouseEvent): void;
  (e: 'plotly-hover', event: PlotMouseEvent): void;
  (e: 'plotly-selected', event: PlotSelectionEvent): void;
}>();

const plotDiv = shallowRef<HTMLDivElement | undefined>();

const attachEventListeners = (plot: Plotly.PlotlyHTMLElement) => {
  plot.on('plotly_click', (event: PlotMouseEvent) => emit('plotly-click', event));
  plot.on('plotly_hover', (event: PlotMouseEvent) => emit('plotly-hover', event));
  plot.on('plotly_selected', (event: PlotSelectionEvent) => emit('plotly-selected', event));
};

onMounted(async () => {
  if (plotDiv.value) {
    const plot = await Plotly.newPlot(plotDiv.value, props.data, props.layout, props.config);
    attachEventListeners(plot);
  }
});

watch(
  () => [props.data, props.layout, props.config],
  async () => {
    if (plotDiv.value) {
      await Plotly.react(plotDiv.value, props.data, props.layout, props.config);
    }
  },
  { deep: true }
);

onBeforeUnmount(() => {
  if (plotDiv.value) {
    Plotly.purge(plotDiv.value);
  }
});
</script>

<style scoped>
.plotly-container {
  width: 100%;
  height: 100%;
}
</style>
