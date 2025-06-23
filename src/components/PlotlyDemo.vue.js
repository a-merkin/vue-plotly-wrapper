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
const handleClick = (event) => {
    console.log('Точка нажата:', event);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    /** @type { [typeof PlotlyWrapper, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(PlotlyWrapper, new PlotlyWrapper({
        ...{ 'onPlotlyClick': {} },
        data: ((__VLS_ctx.chartData)),
        layout: ((__VLS_ctx.chartLayout)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onPlotlyClick': {} },
        data: ((__VLS_ctx.chartData)),
        layout: ((__VLS_ctx.chartLayout)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onPlotlyClick: (__VLS_ctx.handleClick)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PlotlyWrapper: PlotlyWrapper,
            chartData: chartData,
            chartLayout: chartLayout,
            handleClick: handleClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
