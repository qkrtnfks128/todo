<template>
    <div class="test">
        <div class="horizontal-container" ref="horizontal-container">
            <div class="scroll-wrapper" ref="scroll">
                <div class="scroll-content">
                    <div class="scroll-item" v-for="(item,index) in listItem" :key="item.i" >
                        목표달성카드{{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import BScroll from '@better-scroll/core'
import ScrollBar from '@better-scroll/scroll-bar'

// npm install @better-scroll/core --save

BScroll.use(ScrollBar)

export default {
    data(){
        return{ 
            listItem:['1','2','3','4','5']
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
            scrollX: true,
            probeType: 3 
            })
        }
    }
}
</script>

<style lang="scss">
.test{
    .horizontal-container{
        width: 100vw;
        
        .scroll-wrapper{
            position:relative;
            width: 90%;
            margin: 0 auto;
            white-space :nowrap;
            border: 3px solid #d8e0dd;
            border-radius :5px;
            overflow :hidden;
            
            .scroll-content{
                height: auto;
                display:inline-block;
                
                .scroll-item{
                    width: 100px;
                    height: 80px;
                    line-height: 80px;
                    font-size :14px;
                    display: inline-block;
                    text-align: center;
                    padding: 0 10px;
                    background-color:rgb(247, 218, 223);
                    margin: 5px 8px;
                    border-radius: .5rem;
                    
                    &:first-child{
                        background-color:rgb(218, 250, 191);
                    }
                    &:nth-child(2){
                        background-color:rgb(255, 238, 201);
                    }
                    &:nth-child(3){
                        background-color:rgb(215, 201, 253);
                    }
                    &:nth-child(4){
                        background-color:rgb(228, 186, 215);
                    }
                    
                }
            }
        }
    }
}
</style>