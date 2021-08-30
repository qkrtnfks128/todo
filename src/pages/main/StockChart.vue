<template>
    <div id="wrapper">
        <h2>apexchart</h2>
        <div id="chart-line2">
            <apexchart
                type="line"
                height="230"
                :options="primaryOptions"
                :series="primarySeries"
            ></apexchart>
        </div>
        <div id="chart-line">
            <apexchart
                type="line"
                height="100"
                :options="mapOptions"
                :series="mapSeries"
            ></apexchart>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestGraph",
    data: function () {
        // var colors=['red','blue','green']
        // var colors1=Object.assing([],colors);
        let data = [
            [new Date('2021-07-01T03:00').getTime(), 90],
            [new Date('2021-07-02T03:00').getTime(), 100],
            [new Date('2021-07-03T03:00').getTime(), 120],
            [new Date('2021-07-04T03:00').getTime(), 150],
            [new Date('2021-07-05T03:00').getTime(), 165],
            [new Date('2021-07-06T03:00').getTime(), 150],
            [new Date('2021-07-07T03:00').getTime(), 189],
            [new Date('2021-07-08T03:00').getTime(), 145],
            [new Date('2021-07-09T03:00').getTime(), 100],
            [new Date('2021-07-10T03:00').getTime(), 90],
            [new Date('2021-07-11T03:00').getTime(), 60],
            [new Date('2021-07-12T03:00').getTime(), 90],
            [new Date('2021-07-13T03:00').getTime(), 55],
            [new Date('2021-07-14T03:00').getTime(), 100],
            [new Date('2021-07-15T03:00').getTime(), 121],
            [new Date('2021-07-16T03:00').getTime(), 150],
            [new Date('2021-07-17T03:00').getTime(), 200],
            [new Date('2021-07-18T03:00').getTime(), 145],
            [new Date('2021-07-19T03:00').getTime(), 100],
            [new Date('2021-07-20T03:00').getTime(), 90],
            [new Date('2021-07-21T03:00').getTime(), 70],
            [new Date('2021-07-22T03:00').getTime(), 90],
            [new Date('2021-07-23T03:00').getTime(), 100],
            [new Date('2021-07-24T03:00').getTime(), 81],
            [new Date('2021-07-25T03:00').getTime(), 61],
            [new Date('2021-07-26T03:00').getTime(), 111],
            [new Date('2021-07-27T03:00').getTime(), 40],
            [new Date('2021-07-28T03:00').getTime(), 180],
            [new Date('2021-07-29T03:00').getTime(), 250],
            [new Date('2021-08-01T03:00').getTime(), 280],
            [new Date('2021-08-02T03:00').getTime(), 100],
            [new Date('2021-08-03T03:00').getTime(), 120],
            [new Date('2021-08-04T03:00').getTime(), 150],
            [new Date('2021-08-05T03:00').getTime(), 165],
            [new Date('2021-08-06T03:00').getTime(), 150],
            [new Date('2021-08-07T03:00').getTime(), 200],
            [new Date('2021-08-08T03:00').getTime(), 145],
            [new Date('2021-08-09T03:00').getTime(), 100],
            [new Date('2021-08-10T03:00').getTime(), 90],
            [new Date('2021-08-11T03:00').getTime(), 70],
            [new Date('2021-08-12T03:00').getTime(), 60],
            [new Date('2021-08-13T03:00').getTime(), 50],
            [new Date('2021-08-14T03:00').getTime(), 45],
            [new Date('2021-08-15T03:00').getTime(), 71],
            [new Date('2021-08-16T03:00').getTime(), 100],
            [new Date('2021-08-17T03:00').getTime(), 150],
            [new Date('2021-08-18T03:00').getTime(), 145],
            [new Date('2021-08-19T03:00').getTime(), 100],
            [new Date('2021-08-20T03:00').getTime(), 90],
            [new Date('2021-08-21T03:00').getTime(), 70],
            [new Date('2021-08-22T03:00').getTime(), 90],
            [new Date('2021-08-23T03:00').getTime(), 40],
            [new Date('2021-08-24T03:00').getTime(), 45],
            [new Date('2021-08-25T03:00').getTime(), 49],
            [new Date('2021-08-26T03:00').getTime(), 111],
            [new Date('2021-08-27T03:00').getTime(), 140],
            [new Date('2021-08-28T03:00').getTime(), 180],
            [new Date('2021-08-28T06:00').getTime(), 200],
            [new Date('2021-08-28T09:00').getTime(), 210],
            [new Date('2021-08-28T12:00').getTime(), 260],
            [new Date('2021-08-28T15:00').getTime(), 220],
            [new Date('2021-08-28T18:00').getTime(), 180],
            [new Date('2021-08-28T21:00').getTime(), 120],
            [new Date('2021-08-29T03:00').getTime(), 100],
            [new Date('2021-08-29T06:00').getTime(), 80],
            [new Date('2021-08-29T09:00').getTime(), 85],
            [new Date('2021-08-29T12:00').getTime(), 90],
            [new Date('2021-08-29T15:00').getTime(), 75],

            // -9시 시차가있음
        ];

        return {
            primaryOptions: {
                chart: {
                    id: "chart2",
                    type: "line",
                    height: 230,
                    toolbar: {
                        autoSelected: "pan",
                        show: true,
                        tools:{
                            zoom:true,
                            download:false,
                            zoomin: true,
                            zoomout: true,
                            pan:true,
                            selection:true,
                        },
                    },
                    zoom:{
                        enabled:true,
                        type:'x',
                        autoScaleYaxis:true
                    },
                },
                colors: ["#546E7A"],
                stroke:{
                    width:0,
                    colors:["#7080FF"],
                    lineCap:'round'
                },
                markers: {
                    size: 2,
                    // strokeColors:function({series, seriesIndex, dataPointIndex, w}){
                    //     var value = series[seriesIndex][dataPointIndex]
                    //     if(value<50) return 'red'
                    //     if(50<value<150) return 'green'
                    //     if(value>150) return 'yellow'
                    // },
                    strokeWidth:0,
                    colors:'blue',
                    // colors:function(){
                    //조건부로 점 색깔 넣기
                    //     if(data.value<50) {return 'red'}
                    //     if(50<data.value<150) {return 'blue'}
                    //     if(data.value>150) {return 'yellow'}
                    // },
                    hover: {
                        size: undefined,
                        sizeOffset: 1
                    },
                },
                tooltip:{
                    style:{
                        fontSize:'12px'
                    },
                    // formatter:'MM.dd',
                    custom:
                        function({series, seriesIndex, dataPointIndex, w}){
                            return '<div class="arrow_box">' +
                            series[seriesIndex][dataPointIndex] + '<span class="arrow_box__span">mg/dl</span>' +
                            '</div>'
                        },
                },
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    opacity: 1,
                },

                xaxis: {
                    enabled:true,
                    type: "datetime",
                    labels: {
                        datetimeFormatter: {
                            year: "yyyy.MM.dd",
                            month: "MM.dd",
                            day: "MM.dd",
                            hour: "MM.dd hh:mm",
                        },
                        // format:'MM.dd',
                        style:{
                            fontSize:'1rem'
                        }
                    },
                    tooltip: {
                        // format:'dd hh:mm',
                        
                    }
                },
                yaxis:{
                    tickAmount:1,
                    labels: {
                        show:false
                    }
                },
                title: {
                    align: "center",
                },
                annotations:{
                    yaxis: [
                    {
                        y: 150,
                        borderColor: 'gold',
                        label: {
                            borderColor: 'transparent',
                            style: {
                                color: '#333',
                                fontSize:'.8rem',
                                background: 'transparent',
                            },
                            text: '150',
                            position: 'left',
                        }
                    }, 
                    {
                        y: 0,
                        y2: 50,
                        borderColor: 'red',
                        fillColor: 'red',
                        opacity: 0.2,
                        label: {
                            borderColor: 'transparent',
                            style: {
                                fontSize: '.8rem',
                                color: '#333',
                                background: 'transparent',
                            },
                            text: '50',
                            position: 'left',
                            offsetY: 0,
                        }
                    }],
                }
            },
            // end primary options
            mapOptions: {
                chart: {
                    id: "chart1",
                    brush: {
                        target: "chart2",
                        enabled: true,
                    },
                    selection: {
                        enabled: true,
                        xaxis: {
                            min: new Date("2021 08 21").getTime(),
                            max: new Date('2021 08 30').getTime(),
                            //data중 제일 마지막 날짜
                        },
                        
                    },
                },
                stroke: {
                    width:2,
                    curve:'smooth'
                },
                colors: ["red"],
                fill:{
                    type: "gradient",
                    gradient: {
                        type:'vertical',
                        gradientToColors: [ 'yellow','blue'],
                        stops: [50, 0, 100, 100],
                        opacityFrom: 1,
                        opacityTo: 1,
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        enabled: false,
                    },
                    labels:{
                        show:false,
                        format:'MM.dd'
                    }
                },
                yaxis: {
                    tickAmount: 1,
                    min:0,
                    // max:500,
                    labels: {
                        show:false,
                    }
                },
            },
            primarySeries: [
                {
                    data: data,
                },
            ],
            mapSeries: [
                {
                    data: data,
                },
            ],
        };
    },
};
</script>

<style lang="scss">
#wrapper .apexcharts-xaxistooltip.apexcharts-active{
    background-color:transparent;
    border: none;
    top:70% !important;
    font-size:18px;
}
#wrapper .apexcharts-xaxistooltip-bottom:before {
    display:none;
}
#wrapper .apexcharts-xaxistooltip.apexcharts-active:after{
    display:none;
}
.arrow_box{
    padding:6px;
    background-color:rgba(0,0,0,0.5);
    color:white;
    position:relative;
    &__span{
        font-size:10px;
    }
}
.arrow_box::after{
    content: '';
    position:absolute;
    top:100%;
    left:50%;
    border-width:5px;
    margin-left:-5px;
    border-style:solid;
    border-color:black transparent transparent transparent; 
    }
</style>