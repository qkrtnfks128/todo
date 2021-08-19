<template>
    <ul class="graph">
        <li class="graph__li" v-for="item in Pressure" :key="item.i">
            <p class="graph__li__txt">{{item.labelValue1}}</p>
            <div :style="{background : item.color}"></div>
            <p class="graph__li__txt">{{item.labelValue2}}</p>
        </li>
    <!-- 도트 -->
        <!-- 최대 값 -->
        <li class ="graph__dot dot1"
            :style="{'border-color':this.dotColor}"
            @click="tooltipClick1()">
            <span class="graph__dot__tooltip" v-show="tooltip1==true">{{label1}} {{maxValue}}</span>
        </li>
        <!-- 최소 값 -->
        <li class ="graph__dot dot2" 
        :style="{'border-color':this.dotColor}"
        @click="tooltipClick2()">
            <span class="graph__dot__tooltip" v-show="tooltip2==true">{{label2}} {{minValue}}</span>
        </li>
    </ul>

</template>

<script>
export default {
    props:{
        dotColor: String,
        minValue : Number,
        maxValue : Number,
        label1 :{
            type:String,
            default:'수축기'
        },
        label2 :{
            type:String,
            default:'이완기'
        },
        labelValue1 : {
            type:Number,
            default:120
            },
        labelValue2 : {
            type:Number,
            default:80
        },
        //구간의 간격값
        labelValuePlus:{
            type:Number,
            default:10
        },
        // 구간별 색상
        graphBGC1:{
            type:String,
            default:'#01a965'
        },
        graphBGC2:{
            type:String,
            default:'#7BD456'
        },
        graphBGC3:{
            type:String,
            default:'#B8EE00'
        },
        graphBGC4:{
            type:String,
            default:'#FFCB03'
        },
        graphBGC5:{
            type:String,
            default:'#FF964D'
        },
        graphBGC6:{
            type:String,
            default:'#FE5B6E'
        },
        
    },
    methods: {
        tooltipClick1() {
            this.tooltip1 = !this.tooltip1
            this.tooltip2 = false
            this.dotcolor()
        },
        tooltipClick2() {
            this.tooltip1 = false
            this.tooltip2 = !this.tooltip2
            this.dotcolor()
            console.log('무야호')
        },
        dotcolor(){
            var dot1percent = (this.maxValue-(this.labelValue1-this.labelValuePlus))/(this.labelValuePlus*6)*100
            var dot2percent = (this.minValue-(this.labelValue2-this.labelValuePlus))/(this.labelValuePlus*6)*100
            switch (true) {
                case (dot1percent < 16.5) :{
                    document.querySelector(".dot1").style.borderColor = this.graphBGC1;
                    break;
                }
                case (dot1percent < 33) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC2;
                    break;
                }
                case (dot1percent < 49.5) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC3;
                    break;
                }
                case (dot1percent < 66) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC4;
                    break;
                }
                case (dot1percent < 82.5) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC5;
                    break;
                }
                case (dot1percent < 100) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC6;
                    break;
                }
            }
            switch (true) {
                case (dot2percent < 16.5) :{
                    document.querySelector(".dot2").style.borderColor = this.graphBGC1;
                    break;
                }
                case (dot2percent < 33) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC2;
                    break;
                }
                case (dot2percent < 49.5) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC3;
                    break;
                }
                case (dot2percent < 66) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC4;
                    break;
                }
                case (dot2percent < 82.5) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC5;
                    break;
                }
                case (dot2percent < 100) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC6;
                    break;
                }
            }
        }
    },
        
    mounted(){
            document.querySelector(".dot1").animate(
                [
                    {left:'0%'},
                    {left:(this.maxValue-(this.labelValue1-this.labelValuePlus))/(this.labelValuePlus*6)*100+ '%'}
                ],
                {
                    duration:2000,
                    fill: "forwards",
                    easing:"ease"
                }
            );
            document.querySelector(".dot2").animate(
                [
                    {left:'0%'},
                    {left:(this.minValue-(this.labelValue2-this.labelValuePlus))/(this.labelValuePlus*6)*100+'%'}
                ],
                {
                    duration:2000,
                    fill: "forwards",
                    easing:"ease"
                }
            );
            
            var dot1percent = (this.maxValue-(this.labelValue1-this.labelValuePlus))/(this.labelValuePlus*6)*100
            var dot2percent = (this.minValue-(this.labelValue2-this.labelValuePlus))/(this.labelValuePlus*6)*100
            switch (true) {
                case (dot1percent < 16.5) :{
                    document.querySelector(".dot1").style.borderColor = this.graphBGC1;
                    break;
                }
                case (dot1percent < 33) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC2;
                    break;
                }
                case (dot1percent < 49.5) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC3;
                    break;
                }
                case (dot1percent < 66) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC4;
                    break;
                }
                case (dot1percent < 82.5) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC5;
                    break;
                }
                case (dot1percent < 100) :{
                    document.querySelector(".dot1").style.borderColor=this.graphBGC6;
                    break;
                }
            }
            switch (true) {
                case (dot2percent < 16.5) :{
                    document.querySelector(".dot2").style.borderColor = this.graphBGC1;
                    break;
                }
                case (dot2percent < 33) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC2;
                    break;
                }
                case (dot2percent < 49.5) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC3;
                    break;
                }
                case (dot2percent < 66) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC4;
                    break;
                }
                case (dot2percent < 82.5) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC5;
                    break;
                }
                case (dot2percent < 100) :{
                    document.querySelector(".dot2").style.borderColor=this.graphBGC6;
                    break;
                }
            }
        },
    data(){
        return{ 
            tooltip1:false,
            tooltip2:false,
            Pressure: [
                {
                    labelValue1: this.label1,
                    labelValue2: this.label2,
                    color: this.graphBGC1
                },
                {
                    labelValue1: this.labelValue1,
                    labelValue2: this.labelValue2,
                    color: this.graphBGC2
                },
                {
                    labelValue1: this.labelValue1+this.labelValuePlus,
                    labelValue2: this.labelValue2+this.labelValuePlus,
                    color: this.graphBGC3
                },
                {
                    labelValue1: this.labelValue1+this.labelValuePlus*2,
                    labelValue2: this.labelValue2+this.labelValuePlus*2,
                    color: this.graphBGC4
                },
                {
                    labelValue1: this.labelValue1+this.labelValuePlus*3,
                    labelValue2: this.labelValue2+this.labelValuePlus*3,
                    color: this.graphBGC5
                },
                {
                    labelValue1: this.labelValue1+this.labelValuePlus*4,
                    labelValue2: this.labelValue2+this.labelValuePlus*4,
                    color: this.graphBGC6
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .graph{
        display:flex;
        flex-wrap:nowrap;
        justify-content: center;
        align-items: center;
        position:relative;
        height:max-content;
        &__li{
            width:calc(100% / 6);
            text-align: left;
            color:#aaa;
            font-size:0.875rem;
            div{
                height:10px;
                width: 100%;
            }
            &__txt {
                display:inline-block;
                transform:translateX(-50%);
                width:auto;
            }
            &:first-child .graph__li__txt {
                transform:translateX(0);
            }
        }
        &__dot{
            position:absolute;
            width: 12px;
            height: 12px;
            background-color: #fff;
            border:3px solid #9c9c9c;
            border-radius: 50%;
            left:0;
            top:50%;
            transform:translate(-50%,-50%);
            box-shadow:0 3px 6px rgba(0, 0, 0 ,.16);
            cursor: pointer;
            &__tooltip{
                position: absolute;
                top: -20px;
                left: 6px;
                width: 60px;
                padding: 2px;
                border:2px solid #9c9c9c;
                background-color:white;
                transform: translate(-50%,-50%);
                text-align: center;
                box-sizing: border-box;
                border-radius: .5rem;
                font-size: 12px;
                color:gray;
                z-index: 2;
                transition: all .5s;
                &::after{
                    content: '';
                    position:absolute;
                    top:100%;
                    left:50%;
                    border-width:5px;
                    margin-left:-5px;
                    border-style:solid;
                    border-color:#9c9c9c transparent transparent transparent; 
                }
            }
        }
    }
</style>