<template>
    <Bar
        :dotColor="dotColor"
        :minValue="minValue"
        :maxValue="maxValue">
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
            dotColor:'red',
            minValue:83,
            maxValue:105
        }
    }
}
</script>

<style>

</style>