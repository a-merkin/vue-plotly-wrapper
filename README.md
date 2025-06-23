# Vue Plotly Wrapper

Этот компонент является оберткой над [Plotly.js](https://plotly.com/javascript/) для удобного использования в Vue 3 с Composition API и TypeScript.

## Использование

```vue
<script setup lang="ts">
import { ref } from 'vue';
import PlotlyChart from '@/components/PlotlyChart.vue';

const data = ref([
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'red' },
  },
]);

const layout = ref({
  title: 'Пример графика',
});
</script>

<template>
  <PlotlyChart :data="data" :layout="layout" @plotly-click="handleClick" />
</template>
```

## Свойства (Props)

| Свойство    | Тип                    | Описание                                         | По умолчанию |
|------------|------------------------|------------------------------------------------|-------------|
| `data`     | `Data[]`                | Данные для графика.                             | **Обязательное** |
| `layout`   | `Partial<Layout>`       | Конфигурация отображения графика.               | `{}`        |
| `config`   | `Partial<Config>`       | Конфигурация Plotly.                            | `{}`        |
| `responsive` | `boolean`              | Автоматическое изменение размера.               | `false`     |

## События (Events)

| Событие           | Аргумент          | Описание                                        |
|------------------|------------------|------------------------------------------------|
| `plotly-click`   | `PlotMouseEvent`  | Вызывается при клике на график.                |
| `plotly-hover`   | `PlotMouseEvent`  | Вызывается при наведении на элемент графика.   |
| `plotly-selected` | `PlotSelectionEvent` | Вызывается при выделении области на графике. |

## Жизненный цикл

- При монтировании (`onMounted`) создается новый график с помощью `Plotly.newPlot`.
- При изменении `data`, `layout` или `config` вызывается `Plotly.react`, чтобы обновить график.
- При размонтировании (`onBeforeUnmount`) график очищается с помощью `Plotly.purge`.

## Структура проекта

```
components/
  ├── PlotlyChart.vue  # Компонент Plotly
```

