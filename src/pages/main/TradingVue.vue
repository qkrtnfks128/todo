<template>
    <div>
        <h2>tradingvue</h2>
        <trading-vue 
            :data="this.$data"
            :toolbar="false"
            :colorBack="'white'"
            :type="'EMA'"
            :width="500"
            height="200">
        </trading-vue>
        
    </div>

    
</template>

<script>
import TradingVue from 'trading-vue-js'
//npm install trading-vue-js --save
export default {
    components: { TradingVue },
    props:{
        // titleTxt: {
        // type: String,
        // default: 'TradingVue.js'
        // },
        // id: {
        // type: String,
        // default: 'trading-vue-js'
        // },
        // width: {
        // type: Number,
        // default: 800
        // },
        // height: {
        // type: Number,
        // default: 421
        // },
        // colorTitle: {
        // type: String,
        // default: '#42b883'
        // },
        // colorBack: {
        // type: String,
        // default: '#121826'
        // },
        // colorGrid: {
        // type: String,
        // default: '#2f3240'
        // },
        // colorText: {
        // type: String,
        // default: '#dedddd'
        // },
        // colorTextHL: {
        // type: String,
        // default: '#fff'
        // },
        // colorScale: {
        // type: String,
        // default: '#838383'
        // },
        // colorCross: {
        // type: String,
        // default: '#8091a0'
        // },
        // colorCandleUp: {
        // type: String,
        // default: '#23a776'
        // },
        // colorCandleDw: {
        // type: String,
        // default: '#e54150'
        // },
        // colorWickUp: {
        // type: String,
        // default: '#23a77688'
        // },
        // colorWickDw: {
        // type: String,
        // default: '#e5415088'
        // },
        // colorWickSm: {
        // type: String,
        // default: '#bdbec0'
        // },
        // colorVolUp: {
        // type: String,
        // default: '#79999e42'
        // },
        // colorVolDw: {
        // type: String,
        // default: '#ef535042'
        // },
        // colorPanel: {
        // type: String,
        // default: '#565c68'
        // },
        // colorTbBack: {
        // type: String
        // },
        // colorTbBorder: {
        // type: String,
        // default: '#8282827d'
        // },
        // font: {
        // type: String,
        // default: Const.ChartConfig.FONT
        // },
        // toolbar: {
        // type: Boolean,
        // default: false
        // },
        // data: {
        // type: Object,
        // required: true
        // },
        // // Your overlay classes here
        // overlays: {
        // type: Array,
        // default: function () { return [] }
        // },
        // // Overwrites ChartConfig values,
        // // see constants.js
        // chartConfig: {
        // type: Object,
        // default: function () { return {} }
        // },
        // legendButtons: {
        // type: Array,
        // default: function () { return [] }
        // },
        // indexBased: {
        // type: Boolean,
        // default: false
        // }
    },
    data() {
        return {
            ohlcv: [
                // data here
                [ 1551128400000, 33,  37.1, 14,  30 ],
                [ 1551132000000, 13.7, 30, 6.6,  30 ],
                [ 1551135600000, 29.9, 33, 21.3, 21.8 ],
                [ 1551139200000, 21.7, 25.9, 18, 24 ],
                [ 1551142800000, 24.1, 24.1, 24, 24.1 ],
            
            ]
        }
    },
    methods:{ 
        init(){
            new TradingView.widget({
                "autosize":true,
                "symbol": "XBT",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "Dark",
                "style": "1",
                "locale": "ko", 
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "hide_side_toolbar": false,
                "allow_symbol_change": true,
                "referral_id": "ToddChristensen",
                "container_id": "chart"
            })
        }
    },
    mounted(){ 
        this.init()
    }
}
</script>

<style>

</style>