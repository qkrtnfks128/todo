<template>
    <div>
        <h3>d3chart</h3>
        <div id="dataviz_basicZoom"></div>
        
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
    mounted(){
        this.create();
        this.linechart();
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
        },
        linechart(){
            



        }
    }
}
</script>

<style>
#dataviz_basicZoom>svg{
    background-color: #e2db99;
    cursor:move;
}
</style>