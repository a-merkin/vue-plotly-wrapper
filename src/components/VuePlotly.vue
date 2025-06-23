<template>
  <div ref="plotDiv" class="plotly-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, defineProps, defineEmits, shallowRef } from 'vue';
import Plotly, { Layout, Data, Config, PlotMouseEvent, PlotSelectionEvent } from 'plotly.js-dist-min';

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

const plotDiv = shallowRef<HTMLDivElement | null>(null);

const attachEventListeners = () => {
  if (!plotDiv.value) return;
  plotDiv.value.on('plotly_click', (event: PlotMouseEvent) => emit('plotly-click', event));
  plotDiv.value.on('plotly_hover', (event: PlotMouseEvent) => emit('plotly-hover', event));
  plotDiv.value.on('plotly_selected', (event: PlotSelectionEvent) => emit('plotly-selected', event));
};

const detachEventListeners = () => {
  if (!plotDiv.value) return;
  Plotly.purge(plotDiv.value);
};

onMounted(async () => {
  if (plotDiv.value) {
    await Plotly.newPlot(plotDiv.value, props.data, props.layout, props.config);
    attachEventListeners();
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
  detachEventListeners();
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
