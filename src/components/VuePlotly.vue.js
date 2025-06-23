import { onMounted, onBeforeUnmount, watch, defineProps, defineEmits, shallowRef } from 'vue';
import Plotly from 'plotly.js-dist-min';
const props = defineProps();
const emit = defineEmits();
const plotDiv = shallowRef(null);
const attachEventListeners = () => {
    if (!plotDiv.value)
        return;
    plotDiv.value.on('plotly_click', (event) => emit('plotly-click', event));
    plotDiv.value.on('plotly_hover', (event) => emit('plotly-hover', event));
    plotDiv.value.on('plotly_selected', (event) => emit('plotly-selected', event));
};
const detachEventListeners = () => {
    if (!plotDiv.value)
        return;
    Plotly.purge(plotDiv.value);
};
onMounted(async () => {
    if (plotDiv.value) {
        await Plotly.newPlot(plotDiv.value, props.data, props.layout, props.config);
        attachEventListeners();
    }
});
watch(() => [props.data, props.layout, props.config], async () => {
    if (plotDiv.value) {
        await Plotly.react(plotDiv.value, props.data, props.layout, props.config);
    }
}, { deep: true });
onBeforeUnmount(() => {
    detachEventListeners();
    if (plotDiv.value) {
        Plotly.purge(plotDiv.value);
    }
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ref: ("plotDiv"),
        ...{ class: ("plotly-container") },
    });
    // @ts-ignore navigation for `const plotDiv = ref()`
    /** @type { typeof __VLS_ctx.plotDiv } */ ;
    ['plotly-container',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'plotDiv': __VLS_nativeElements['div'],
    };
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
            plotDiv: plotDiv,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
