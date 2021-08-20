<template>
    <div class="test">
        <ListItem></ListItem>
        <div class="test__chart">
            <chartjs-doughnut
                class="chart"
                :datasets="datasets1"
                :option="option"
            ></chartjs-doughnut>
            <div class="test__chart__chartData">
                <ul v-for="(item,index) in labels.length" :key="item.i"> 
                    <li :style="{backgroundColor : datasets1[0].backgroundColor[index]}"></li>
                    <li>{{labels[index]}}</li>
                    <li>{{datasets1[0].data[index]}}%</li>
                </ul>
            </div>
        </div>
        <div class='test__chart2'>
            <chartjs-line 
                :labels="days"
                :datasets="datasets2"
                :option="option"
            ></chartjs-line>
        </div>
    </div>
</template>

<script>
import ListItem from '../../components/Swiper.vue'
//21.8.19 chartjs-plugin-annotation
 import ChartJSAnnotation from 'chartjs-plugin-annotation'


export default {
    mounted() {
        this.addPlugin(ChartJSAnnotation);
        this.renderChart(this.chartData, this.chartOptions);
    },
    computed: {
        annotations() {
        return [
          // 라인 어노테이션
          this.lineAnnotationFactory({
            value: Number(this.averageAllUser),
            borderColor: "#989898",
          }),
          this.lineAnnotationFactory({
            value: Number(this.average),
            borderColor: this.color,
          }),

          // 박스 어노테이션
          ...this.data
            .filter((datum) => {
              return datum.highlighted;
            })
            .map((datum2) => {
              return this.boxAnnotationFactory({
                xMin: dayjs(datum2.timestamp)
                  .subtract(30, "minute")
                  .format("YYYY-MM-DD HH:mm:ss"),
                xMax: dayjs(datum2.timestamp)
                  .add(30, "minute")
                  .format("YYYY-MM-DD HH:mm:ss"),
                backgroundColor: `${this.color}${0x15}`,
              });
            }),
        ];
      },
    },
    components: {
        ListItem,
        
    },
    data() {
        return {
            labels:["apple","banana","grapes","kiwi"],
            days:['월','화','수','목','금','토'],
            datasets1: [
                {
                data:[20,20,50,10],
                backgroundColor:["Red","Yellow","Purple","green"],
                borderRadius:50,
                radius:'50%'
                },
            ],
            //line chart
            datasets2: [
                {
                fill:true,
                data:[30,50,40,60,40,40],
                backgroundColor:'rgba(255,220,220,.4)',
                borderColor:'red',
                borderWidth:1,
                pointRadius:5,
                pointColor:'transparent',
                pointBackgroundColor:'transparent',
                pointBorderColor:'transparent',
                // 포인트 점의 사이즈
                // spanGaps:true,
                pointHoverBackgroundColor:'red',
                pointHoverBorderWidth:1,
                borderCapStyle:'round'
                },
            ],
            option:{
                
                title:{
                    display:false,
                    // position:"buttom",
                },
                legend:false,
                // 툴팁
                tooltips:{
                    displayColors:false,
                    // 해당색 안보이게
                    backgroundColor: 'white',
                    borderColor: 'gray',
                    borderRadius: 10,
                    borderWidth: 1,
                    // borderDash: [2, 2],
                    bodyColor:'black',
                    // titleFontSize: 10,
                    // titleFontColor:'black',
                    bodyFontSize:16,
                    bodyFontColor:'black',
                    xPadding:10,
                    yPadding:10,
                    callbacks:{
                        title: function(tooltipItem, data) {
                                return data['datasets'][0]['data'][tooltipItem['index']];
                        },
                        label: function(tooltipItem, data) {
                                return data['datasets'][0]['data'][tooltipItem['index']];
                        },
                    },
                },
            },
            
        }
    }
    
}
</script>

<style lang="scss">
.test {
    width: 100vw;
    &__chart{
        padding: 0 1rem;
        display: flex;
        align-items: center;
        &__chartData{
        display:inline-block;
        width: 29%;
        height: auto;
            ul{
                display:flex;
                align-items: center;
                justify-content:space-between;
                padding: 8px 0;
                li{ 
                    display:flex;
                    font-size:$fz12;
                    &:first-child{
                        border-radius:50%;
                        width: 20px;
                        height: 20px;
                        
                    }

                }
            }
                

        }
    }
    &__chart2{
        width: 100%;
        display:flex;
        justify-content: center;
        
        >div{
            width:100%;
        }
    }
}
.chart {
    width:70%;
    height:auto;
}

</style>