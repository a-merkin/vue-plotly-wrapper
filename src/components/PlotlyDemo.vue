<template>
  <div>
    <h2>Демонстрация PlotlyWrapper</h2>
    <PlotlyWrapper
      :data="chartData"
      :layout="chartLayout"
      @plotly-click="handleClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlotlyWrapper from './VuePlotly.vue'; // Убедитесь, что путь к компоненту указан правильно

const chartData = ref([
  {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 22],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'blue' },
  },
]);

const chartLayout = ref({
  title: 'Пример графика',
  xaxis: { title: 'X-ось' },
  yaxis: { title: 'Y-ось' },
});

const handleClick = (event: any) => {
  console.log('Точка нажата:', event);
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
