<template>
    <div class="chart">
        <h1>chart test</h1>
        <LineChart
			:chart-data="datacollection"
			:styles="myStyles"
			:options="datacollection.options"></LineChart>
    </div>
</template>

<script>
//npm i hammerjs
//npm install chartjs-plugin-zoom
import LineChart from './Linechart.js'
export default {
    components:{
        LineChart
    },
    // data
    data () {
        return{
            datacollection: {
            labels: [
                '2021-05-10','2021-05-11','2021-05-12','2021-05-13','2021-05-14','2021-05-15','2021-05-16','2021-05-17','2021-05-18','2021-05-19','2021-05-20',
                ],
            datasets: [
                {
                    borderColor: '#7080FF',
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    backgroundColor: 'transparent',
                    data: [50, 45, 48, 52, 53, 51, 50, 55, 51, 48, 43],
                    tension: 0.1,
                    
                }
            ],
            options: {
                plugins: {
                    zoom: {
                    // Container for pan options
                        pan: {
                        // Boolean to enable panning
                            enabled: true,
                            mode: 'x',
                            overScaleMode:'x',
                            // Panning directions. Remove the appropriate direction to disable
                            // Eg. 'y' would only allow panning in the y direction
                        },
                        limits:{

                        },
                    // Container for zoom options
                        zoom: {
                        // Boolean to enable zooming
                            enabled: true,
                            mode: 'x',
                            overScaleMode:'x',
                            limits:{
                                x:{min:-5, max:5}
                            }
                        // Zooming directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow zooming in the y direction
                        },
                        pinch:{
                            enabled:true,
                            mode: 'x',
                            overScaleMode:'x',
                        },
                        scroll:{
                            enabled:true,
                            mode: 'x',
                            overScaleMode:'x',
                        }
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        display:true,
                        offset:true,
                        suggestedMin: 40,
                        suggestedMax: 70,
                        ticks: {
                            beginAtZero: false,
                        },
                    }],
                    xAxes: [{
                        type:'time',
                        time:{
                            unit:'day',
                            //stepSize: 3, // I'm using 3 day intervals here
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
                ///툴팁 css
                tooltips: {
                    
                    mode: "label",
                    xPadding: 6,
                    yPadding: 10,
                    borderColor: 'transparent',
                    borderWidth: 1,
                    bodyFontSize: 18,
                    //boxShadow:'0 3px 10px rgba(0, 0, 0 ,.16)',
                    cornerRadius: 10,
                    displayColors: false,
                    backgroundColor: "white",
                    titleFontColor: "#3a3938",
                    bodyFontColor: "#7080FF",
                    // position:'absolute',
                    // transform:'translate(-50%,0)',
                    callbacks: {
                        // this adds the same suffix to all labels. I would like the same suffix of prefix value from the y-axis label
                        label: function(tooltipItems, data) {
                        return tooltipItems.yLabel +'kg';
                        },
                        title: function() {
                        return false;
                        },
                    }
                }
                }
            }
        }
    },
    mounted(){
        
    },
    computed: {
		myStyles () {
            return {
                width: '100%',
                height: `250px`,
                position: 'relative',
                marginTop: '4%'
            }
        }
    },
}

</script>

<style lang="scss">
.chart {
    &__line{
        width:300px;
    }
}

</style>