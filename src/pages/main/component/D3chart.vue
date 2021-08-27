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

import LineChart from './Linechart.js'
export default {
    components:{
        LineChart
    },
    // data
    data () {
        return{
            datacollection: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
            datasets: [
                {
                    borderColor: '#c5264f',
                    borderWidth: 1,
                    pointBackgroundColor: '#c5264f',
                    backgroundColor: 'rgba(197,38,79,0.1)',
                    data: [5, 27,52, 24, 37, 65, 50],
                    tension: 0.1
                }
            ],
            options: {
                plugins: {
                    zoom: {
                    // Container for pan options
                        pan: {
                        // Boolean to enable panning
                            enabled: true,

                            // Panning directions. Remove the appropriate direction to disable
                            // Eg. 'y' would only allow panning in the y direction
                            mode: 'x'
                        },
                    // Container for zoom options
                        zoom: {
                        // Boolean to enable zooming
                            enabled: true,

                        // Zooming directions. Remove the appropriate direction to disable
                        // Eg. 'y' would only allow zooming in the y direction
                        },
                        pinch:{
                            enabled:true,
                        }
                    }
                },
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                        beginAtZero: true,
                    },
                    }],
                },
                responsive: true,
                maintainAspectRatio: false,
                ///툴팁 css
                tooltips: {
                    mode: "label",
                    xPadding: 15,
                    yPadding: 10,
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1,
                    bodyFontSize: 16,
                    cornerRadius: 2,
                    displayColors: false,
                    bodyFontStyle: "bold",
                    backgroundColor: "#fcfcfc",
                    titleFontColor: "#3a3938",
                    bodyFontColor: "#3a3938",
                    callbacks: {
                        // this adds the same suffix to all labels. I would like the same suffix of prefix value from the y-axis label
                        label: function(tooltipItems, data) {
                        return tooltipItems.yLabel;
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