<template>
    <div>
        <h3>d3chart / countup</h3>
        <div id="dataviz_basicZoom"></div>
        <ICountUp
            class="countup"
            :delay="delay"
            :endVal="endVal"
            :options="options"
            />
    </div>
</template>

<script>
//countUP
//npm install --save countup.js vue-countup-v2
import ICountUp from 'vue-countup-v2';
import * as d3 from "d3";
export default {
    components:{
        ICountUp
    },
    data(){
        return{
            delay:500,
            //시작지연시간
            endVal:300,
            //~까지
            options:{
                useEasing:true,
                useGrouping:true,
                separator:',',
                decimal:'.',
                prefix:'',
                suffix:''
            }
        }
    },
    mounted(){
        this.create();
    },
    methods:{
        create(){
            var svg = d3.select("#dataviz_basicZoom")
            .append("svg")
            .attr("width",  300)
            .attr("height",  300)
            .call(d3.zoom().on("zoom", function({transform}) {
                svg.attr("transform", transform)
            }))
            .append("g")

            svg
            .append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 40)
            .style("fill", "white")
            
            svg
            .append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 30)
            .style("fill", "black")

            svg
            .append("circle")
            .attr("cx", 115)
            .attr("cy", 90)
            .attr("r", 4)
            .style("fill", "white")

            svg
            .append("circle")
            .attr("cx", 200)
            .attr("cy", 100)
            .attr("r", 40)
            .style("fill", "white")

            svg
            .append("circle")
            .attr("cx", 200)
            .attr("cy", 100)
            .attr("r", 30)
            .style("fill", "black")

            svg
            .append("circle")
            .attr("cx", 215)
            .attr("cy", 90)
            .attr("r", 4)
            .style("fill", "white")

            svg
            .append("circle")
            .attr("cx", 150)
            .attr("cy", 150)
            .attr("r", 30)
            .style("fill", "brown")

            svg
            .append('line')
            .attr('x1', 100)
            .attr('y1', 190)
            .attr('x2',200)
            .attr('y2',190)
            .attr("stroke",'red')
            .attr('stroke-width','2px')

            
        },
        // onReady:function(instance, CountUp){
        //     const that =this;
        //     instance.update(that.endVal + 100);
        // }
    }
}
</script>

<style>
#dataviz_basicZoom>svg{
    background-color: #e2db99;
    cursor:move;
}
.countup{
    font-size:20px;
    font-weight:bold;
}
</style>