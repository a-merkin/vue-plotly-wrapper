<template>
  <div id="app">
    <PlotlyDemo />
  </div>
</template>

<script setup lang="ts">
import PlotlyDemo from './components/PlotlyDemo.vue'; // Убедитесь, что путь к компоненту указан правильно
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
