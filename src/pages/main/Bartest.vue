<template>
    <div>
        <br>
        <Bar
            :minValue="minValue"
            :maxValue="maxValue"
            >
        </Bar>
        <Bar
            :minValue="85"
            :maxValue="130"
        ></Bar>
        
    </div>
</template>

<script>
import Bar from './component/Bar.vue';
export default {
    components:{
        Bar,
    },
    data(){
        return{
            maxValue:143,
            minValue:81,
        }
    },
}
</script>

<style>

</style>