<template>
    <div class="chart">
        <h1>chart test</h1>
        <LineChart
			:chart-data="datacollection"
			:styles="myStyles"
			:options="datacollection.options">
        </LineChart>
        <apexchart
                type="line"
                height="100"
                width="350"
                :options="mapOptions"
                :series="mapSeries"
            ></apexchart>
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
                
                ],
            datasets: [
                {
                    borderColor: '#7080FF',
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    backgroundColor: 'transparent',
                    data: [
                    {t:new Date('2021-07-01T03:00').getTime(), y:90},
                    {t:new Date('2021-07-02T03:00').getTime(), y:100},
                    {t:new Date('2021-07-03T03:00').getTime(), y:120},
                    {t:new Date('2021-07-04T03:00').getTime(), y:150},
                    {t:new Date('2021-07-05T03:00').getTime(), y:165},
                    {t:new Date('2021-07-06T03:00').getTime(), y:150},
                    {t:new Date('2021-07-07T03:00').getTime(), y:189},
                    {t:new Date('2021-07-08T03:00').getTime(), y:145},
                    {t:new Date('2021-07-09T03:00').getTime(), y:100},
                    {t:new Date('2021-07-10T03:00').getTime(), y:90},
                    {t:new Date('2021-07-11T03:00').getTime(), y:60},
                    {t:new Date('2021-07-12T03:00').getTime(), y:90},
                    {t:new Date('2021-07-13T03:00').getTime(), y:55},
                    {t:new Date('2021-07-14T03:00').getTime(), y:100},
                    {t:new Date('2021-07-15T03:00').getTime(), y:121},
                    {t:new Date('2021-07-16T03:00').getTime(), y:150},
                    {t:new Date('2021-07-17T03:00').getTime(), y:200},
                    {t:new Date('2021-07-18T03:00').getTime(), y:145},
                    {t:new Date('2021-07-19T03:00').getTime(), y:100},
                    {t:new Date('2021-07-20T03:00').getTime(), y:90},
                    {t:new Date('2021-07-21T03:00').getTime(), y:70},
                    {t:new Date('2021-07-22T03:00').getTime(), y:90},
                    {t:new Date('2021-07-23T03:00').getTime(), y:100},
                    {t:new Date('2021-07-24T03:00').getTime(), y:81},
                    {t:new Date('2021-07-25T03:00').getTime(), y:61},
                    {t:new Date('2021-07-26T03:00').getTime(), y:111},
                    {t:new Date('2021-07-27T03:00').getTime(), y:40},
                    {t:new Date('2021-07-28T03:00').getTime(), y:180},
                    {t:new Date('2021-07-29T03:00').getTime(), y:250},
                    {t:new Date('2021-08-01T03:00').getTime(), y:280},
                    {t:new Date('2021-08-02T03:00').getTime(), y:100},
                    {t:new Date('2021-08-03T03:00').getTime(), y:120},
                    {t:new Date('2021-08-04T03:00').getTime(), y:150},
                    {t:new Date('2021-08-05T03:00').getTime(), y:165},
                    {t:new Date('2021-08-06T03:00').getTime(), y:150},
                    {t:new Date('2021-08-07T03:00').getTime(), y:200},
                    {t:new Date('2021-08-08T03:00').getTime(), y:145},
                    {t:new Date('2021-08-09T03:00').getTime(), y:100},
                    {t:new Date('2021-08-10T03:00').getTime(), y:90},
                    {t:new Date('2021-08-11T03:00').getTime(), y:70},
                    {t:new Date('2021-08-12T03:00').getTime(), y:60},
                    {t:new Date('2021-08-13T03:00').getTime(), y:50},
                    {t:new Date('2021-08-14T03:00').getTime(), y:45},
                    {t:new Date('2021-08-15T03:00').getTime(), y:71},
                    {t:new Date('2021-08-16T03:00').getTime(), y:100},
                    {t:new Date('2021-08-17T03:00').getTime(), y:150},
                    {t:new Date('2021-08-18T03:00').getTime(), y:145},
                    {t:new Date('2021-08-19T03:00').getTime(), y:100},
                    {t:new Date('2021-08-20T03:00').getTime(), y:90},
                    {t:new Date('2021-08-21T03:00').getTime(), y:70},
                    {t:new Date('2021-08-22T03:00').getTime(), y:90},
                    {t:new Date('2021-08-23T03:00').getTime(), y:40},
                    {t:new Date('2021-08-24T03:00').getTime(), y:45},
                    {t:new Date('2021-08-25T03:00').getTime(), y:49},
                    {t:new Date('2021-08-26T03:00').getTime(), y:111},
                    {t:new Date('2021-08-27T03:00').getTime(), y:140},
                    {t:new Date('2021-08-28T03:00').getTime(), y:180},
                    {t:new Date('2021-08-28T06:00').getTime(), y:200},
                    {t:new Date('2021-08-28T09:00').getTime(), y:210},
                    {t:new Date('2021-08-28T12:00').getTime(), y:260},
                    {t:new Date('2021-08-28T15:00').getTime(), y:220},
                    {t:new Date('2021-08-28T18:00').getTime(), y:180},
                    {t:new Date('2021-08-28T21:00').getTime(), y:120},
                    {t:new Date('2021-08-29T03:00').getTime(), y:100},
                    {t:new Date('2021-08-29T06:00').getTime(), y:80},
                    {t:new Date('2021-08-29T09:00').getTime(), y:85},
                    {t:new Date('2021-08-29T12:00').getTime(), y:90},
                    {t:new Date('2021-08-29T15:00').getTime(), y:75},
                    ],
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
                        
                        
                        ticks: {
                            beginAtZero: false,
                        },
                    }],
                    xAxes: [{
                        type:'time',
                        max:new Date().getTime(),
                        time:{
                            // unit:'day',
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