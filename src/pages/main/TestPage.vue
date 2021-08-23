<template>
    <div class="test">
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
        </Bar><br/>
        <!--Thumbnail image -->
        <input type="file" id="image" accept="image/*" @change="setThumbnail(this)"/>
        <div class="image_container">
            <img src="" alt="" id="preview">
        </div>
        <!-- apexchart -->
        <apexchart width="300" type="bar" :options="options" :series="series"></apexchart>
        <apexchart width="300" type="line" :options="options1" :series="series1"></apexchart>
    </div>  
</template>

<script>
import Bar from './component/Bar.vue';
import StarRating from 'vue-star-rating'
//npm install vue-star-rating

export default {
    components:{
        Bar,
        StarRating,
    },
    data(){
        return{
                //
            maxValue:155,
            minValue:91,
            label1:'최고',
            label2:'최저',
            labelValue1:140,
            labelValue2:90,
            labelValuePlus:10,

            //star-rating
            rating: "선택한 별이 없습니다",
            thisRating:3,

            //apexchart
            options: {
                chart: {
                id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                },
                
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            //
            options1: {
                chart: {
                    id: 'vuechart-example',
                    toolbar:{
                        show:false
                    }
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                    labels:{
                        style:{
                            colors:['#707070','#707070','#707070','#707070','#707070','#707070','#707070','#707070']
                        }
                    }
                },
                yaxis:{
                    max:70,
                    min:30,
                    tickAmount:4
                },
                markers: {
                    size: 3,
                    strokeColors:"#E91E63",
                    strokeWidth:3,
                    colors:"white",
                    hover: {
                        size: undefined,
                        sizeOffset: 1
                    },
                    onClick:function(){
                        document.querySelector(".arrow_box").style('display','block');
                    }
                },
                tooltip:{
                    style:{
                        fontSize:'12px'
                    },
                    custom:
                        function({series, seriesIndex, dataPointIndex, w}){
                            return '<div class="arrow_box">' +
                            series[seriesIndex][dataPointIndex] + 'kg' +
                            '</div>'
                        
                    },
                },
                toolbar:{
                    show:false
                },
                stroke:{
                    width:2,
                    colors:["#E91E63"]
                }
                
            },
            series1: [{
                data: [50, 48, 47, 50, 46, 55, 58, 60]
            }]
        }
    },
    methods: {
        setRating :function(rating) {
            this.rating = "제 점수는 " + rating + "점입니다";
        },
        setThumbnail(input) { 
                var reader = new FileReader();
                reader.onload = function(event) {  
                document.getElementById('preview').src = event.target.result;
            }; 
            reader.readAsDataURL(event.target.files[0]); 
        } 
    },
    mounted(){
        

    }
}
</script>

<style>
.vue-star-rating-star{
    margin-right: 10px;
    /* 별 사이 간격 */
}
.apexcharts-bar-series.apexcharts-plot-series  .apexcharts-series path {
    clip-path: inset(0% 0% 0% 0% round 10px);
}
/* 밑을 네모나게 하고 싶으면 inset(0% 0% -11% 0% round 65px); */
.image_container{
    width: 150px;
    height:150px;
}
.image_container img{
    width: 100%;
}
/* tooltip */
.arrow_box{
    padding:6px 9px;
    font-size:12px;
    border-radius: 3px;
    width:100%;
    height:100%;
    box-sizing: border-box;
    position: relative;
    left: 75%;
    top: -20px;
    background-color:white;
    box-shadow:0 3px 10px rgba(0,0, 0 ,.16);
}
.arrow_box::after{
    content: '';
    position:absolute;
    top:100%;
    left:50%;
    border-width:5px;
    margin-left:-5px;
    border-style:solid;
    border-color:white transparent transparent transparent; 
}
.test .apexcharts-tooltip {
    border:none;
    background:none;
    box-shadow: none;
    overflow:visible;
}
.test .apexcharts-xaxistooltip.apexcharts-active{ 
    display:none;
}
</style>