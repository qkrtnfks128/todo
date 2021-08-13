<template>
    <Bar
        :minValue="minValue"
        :maxValue="maxValue"
        :label1="label1"
        :label2="label2"
        :labelValue1="labelValue1"
        :labelValue2="labelValue2"
        :labelValuePlus="labelValuePlus"
        >
    </Bar>
</template>

<script>
import Bar from './component/Bar.vue';

export default {
    components:{
        Bar
    },
    data(){
        return{
            maxValue:155,
            minValue:88,
            label1:'최고',
            label2:'최저',
            labelValue1:130,
            labelValue2:90,
            labelValuePlus:10,
        }
    }
}
</script>

<style>

</style>