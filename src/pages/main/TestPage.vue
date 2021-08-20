<template>
    <div>
        
        <StarRating
            :increment="0.5"
            :clearable="true"
            :star-size="40"
            :rounded-corners="true"
            :animate="true"
            :inline="true"
        >
        </StarRating>
        <h2>Read Only Stars</h2>
        <StarRating 
            :rating="this.thisRating" 
            :read-only="true" 
            :increment="0.01"
            :show-rating="false"
            >
        </StarRating>
        <h2>Capture Rating</h2>
        <StarRating
            @rating-selected="setRating"
            :increment="0.5"
            :show-rating="false"
            :glow="10"
        >
        </StarRating>
        {{rating}}
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
        <chart-bar
            :chart-data="chartBarData"
            :options="chartBarData.options"
            :styles="chartBarStyles"
        />
    </div>  
</template>

<script>
import Bar from './component/Bar.vue';
import StarRating from 'vue-star-rating'
//npm install vue-star-rating
import Barchart from "./component/Barchart";


export default {
    components:{
        Bar,
        StarRating,
        Barchart

    },
    data(){
        return{
            chartBarData: {
                labels: [
                    "2020-12-01",
                    "2020-12-02",
                    "2020-12-03",
                    "2020-12-04",
                    "2020-12-05",
                ],
                datasets: [
                    {
                    label: "Container 1",
                    borderColor: "#e57373",
                    pointBackgroundColor: "black",
                    borderWidth: 1,
                    pointBorderColor: "black",
                    backgroundColor: "#e57373",
                    data: [19, 31, 3, 5, 2],
                    },
                    {
                    label: "Container 2",
                    borderColor: "#81c784",
                    pointBackgroundColor: "black",
                    borderWidth: 1,
                    pointBorderColor: "black",
                    backgroundColor: "#81c784",
                    data: [13, 8, 21, 3, 4],
                    },
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                    display: true,
                    },
                    scales: {
                    xAxes: [
                        {
                        display: true,
                        ticks: {
                            beginAtZero: true,
                        },
                        },
                    ],
                    yAxes: [
                        {
                        id: "yAxis",
                        display: true,
                        ticks: {
                            beginAtZero: true,
                        },
                        },
                    ],
                    },
                    annotation: {
                    drawTime: "afterDatasetsDraw",
                    annotations: [
                        {
                        id: "maxLine",
                        type: "line",
                        mode: "horizontal",
                        scaleID: "yAxis",
                        value: "23",
                        borderColor: "#ff00ff",
                        borderWidth: 5,
                        label: {
                            enabled: true,
                            position: "center",
                            content: "23",
                        },
                        },
                    ],
                    },
                },
            },
                chartBarStyles: {
                height: "300px",
                position: "relative",
            },
                //
            maxValue:155,
            minValue:90,
            label1:'최고',
            label2:'최저',
            labelValue1:130,
            labelValue2:90,
            labelValuePlus:10,

            //star-rating
            rating: "선택한 별이 없습니다",
            thisRating:3
            //
            
        }
    },
    methods: {
        setRating :function(rating) {
            this.rating = "제 점수는 " + rating + "점입니다";
        }
    },
}
</script>

<style>
.vue-star-rating-star{
    margin-right: 10px;
    /* 별 사이 간격 */
}

</style>