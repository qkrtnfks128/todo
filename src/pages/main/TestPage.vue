<template>
    <div>
        <Bar
            :minValue="minValue"
            :maxValue="maxValue"
            :label1="label1"
            :label2="label2"
            :labelValue1="labelValue1"
            :labelValue2="labelValue2"
            :labelValuePlus="labelValuePlus"
            >
        </Bar>
        <StarRating
            :increment="0.5"
            :clearable="true"
            :star-size="40"
            :rounded-corners="true"
            :animate="true"
            :inline="true"
            :glow="10"
            
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
            maxValue:155,
            minValue:88,
            label1:'최고',
            label2:'최저',
            labelValue1:130,
            labelValue2:90,
            labelValuePlus:10,

            //star-rating
            rating: "선택한 별이 없습니다",
            thisRating:3
        }
    },
    methods: {
        setRating :function(rating) {
            this.rating = "제 점수는 " + rating + " stars 입니다";
        }
    },
}
</script>

<style>
.vue-star-rating-star{
    margin-right: 10px;
    /* 별 사이 간격 */
}

</style>