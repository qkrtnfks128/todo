<template>
    <ul class="graph">
        <li class="graph__li">
            <p>수축기</p>
            <div></div>
            <p>이완기</p>
        </li>
        <li class="graph__li">
            <p>120</p>
            <div></div>
            <p>80</p>
        </li>
        <li class="graph__li">
            <p>130</p>
            <div></div>
            <p>85</p>
        </li>
        <li class="graph__li">
            <p>140</p>
            <div></div>
            <p>90</p>
        </li>
        <li class="graph__li">
            <p>160</p>
            <div></div>
            <p>100</p>
        </li>
        <li class="graph__li">
            <p>180</p>
            <div></div>
            <p>110</p>
        </li>
        <!-- 최소,최대 값 -->
        <li class ="graph__dot" :style="{'left':minValue+'px'}">
        </li>
        <li class ="graph__dot" :style="{'border-color':this.dotColor, 'left':this.maxValue+'px'}">
        </li>
    </ul>

</template>

<script>
export default {
    props:{
        dotColor: String,
        minValue : Number,
        maxValue : Number,
    },
    mounted(){
        console.log('무야호');
        console.log(this.dotColor);
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
        &__li{
            width:calc(100% / 6);
            text-align: left;
            color:#aaa;
            font-size:0.875rem;
            div{
                height:10px;
                width: 100%;
                }
            &:first-child div{
                background-color: #01a965;
            }
            &:nth-child(2) div{
                background-color: #7BD456;
            }
            &:nth-child(3) div{
                background-color: #B8EE00;
            }
            &:nth-child(4) div{
                background-color: #FFCB03;
            }
            &:nth-child(5) div{
                background-color: #FF964D;
            }
            &:nth-child(6) div{
                background-color: #FE5B6E;
            }
        }
        &__dot{
            position:absolute;
            width: 12px;
            height: 12px;
            background-color: #fff;
            border:3px solid gray;
            border-radius: 50%;
            top:50%;
            transform:translateY(-50%);
            box-shadow:0 3px 6px rgba(0, 0, 0 ,.16);
        }
    }
</style>