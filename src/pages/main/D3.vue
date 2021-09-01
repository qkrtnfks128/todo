<template>
    <div>
        <h3>d3</h3>
        <svg width="350" height="350" />
    </div>
</template>

<script>
import * as d3 from "d3";
export default {
    data() {
        return {
        data: [
            { value: 40, time: new Date("2020-07-01T03:00:00") },
            { value: 50, time: new Date("2020-07-01T03:05:00") },
            { value: 80, time: new Date("2020-07-01T03:10:00") },
            { value: 120, time: new Date("2020-07-01T03:15:00")},
            { value: 85, time: new Date("2020-07-01T03:20:00") },
            { value: 60, time: new Date("2020-07-01T03:25:00") }
        ]
        };
    },
    mounted() { //react에서는 componentDidmount 실행시 축을 생성해주면 된다.
        this.generateAxis();
    },
    methods: {
        generateAxis() {
            
            const xScale = d3
                .scaleTime()
                .domain([
                    new Date("2020-07-01T03:00:00"),
                    new Date("2020-07-01T03:25:00")
                ])
                .range([20, 330]);
                

            const yScale = d3
                .scaleLinear()
                .domain([0, 200])
                .range([330, 20]); // SVG 좌표상에서 y값이 높을수록 아래로 향하기 때문에 뒤집어서 330~20으로 설정.

            const xAxisSVG = d3.select("svg").append("g").attr("transform", "translate(0,330)"); //attr속성을 이용하면 선택한 태그들의 속성을 바꿀 수 있다.
            const yAxisSVG = d3.select("svg").append("g");

            //축을 만드는 함수를 만든다.
            const xAxis = d3
                .axisBottom(xScale)
                .tickSize(10)
                .ticks(10); // 여기서 tick은 축마다 달려있는 막대기를 말한다.
            const yAxis = d3
                .axisRight(yScale)
                .tickSize(10)
                .ticks(10);
            xAxis(xAxisSVG); //x축을 만드는 함수로 SVG > G 태그에 축을 생성한다.
            yAxis(yAxisSVG); //y축을 만드는 함수로 SVG > G 태그에 축을 생성한다.
            d3.select("svg").selectAll("circle")  	  // 1.SVG 태그 안에 있는 circle을 모두 찾는다.
                .data(this.data)                         // 2.찾은 요소에 데이터를 씌운다.
                .enter()                            // 3.찾은 요소에 개수보다 데이터가 더 많을경우..
                .append("circle")                   // 4.circle 을 추가한다.
                .attr("r", 5)                       //  - 반지름 5픽셀
                .attr("cx", d=>xScale(d.time))      //  - x 위치값 설정.
                .attr("cy", d=>yScale(d.value))     //  - y 위치값 설정. 
                
                .style("fill", "black")             //  - 검정색
                
                var newX = d3.transform.rescaleX(x);
                var newY = d3.transform.rescaleY(y);
                
                xAxis.call(d3.axisBottom(newX))
                yAxis.call(d3.axisLeft(newY))

            }

    }
};
</script>

<style>

</style>