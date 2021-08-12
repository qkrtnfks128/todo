<template>
<div class="test">
    <datepicker 
    :inline="true"
    :language="ko"
    :bootstrap-styling="true"
    class="form-control"
    name="uniquename"
    :highlighted="highlighted"
    >
    </datepicker>
</div>
    
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {ko} from 'vuejs-datepicker/dist/locale'

export default {
    components: {
        Datepicker,

    },
    data() {
        return {
            ko:ko,
            selectedDate:'',
            bootstrapStyling: true,
            openDate: new Date(),
            highlighted: {
                //to: new Date(2021, 7, 5), //Highlight all dates up to specific date
                //from: new Date(2021, 7, 26), // Highlight all dates after specific date
                // days: [6, 0], // Highlight Saturday's and Sunday's
                daysOfMonth: [], // Highlight 15th, 20th and 31st of each month
                dates: [ // Highlight an array of dates
                    new Date(2021, 6, 9),
                    new Date(2021, 6, 12),
                    // 월-1해야 해당 월이 나옴
                ],
                
                customPredictor: function(date) {
                // highlights the date if it is a multiple of 4
                if(date.getDate() % 4 == 0){
                    return false
                }
                },
                includeDisabled: true,// Highlight disabled dates
            },

        }
    },
}

</script>

<style lang="scss">
    .vdp-datepicker__calendar .cell.selected{
        border-radius:50%;
    }
    .test .vdp-datepicker__calendar .cell{
        line-height:37px;
        position:relative;
    }
    .test .vdp-datepicker__calendar header .prev:after{
        border: none;
        width: 100%;
        height: 100%;
        background-image:url('/src/assets/icon/prev.png');
        background-repeat: no-repeat;
        background-position: 18px;
        background-size:10px;
    }
    .test .vdp-datepicker__calendar header .next:after{
        border: none;
        width: 100%;
        height: 100%;
        background-image:url('/src/assets/icon/next.png');
        background-repeat: no-repeat;
        background-position: 13px;
        background-size:10px;
    }
    .test .vdp-datepicker__calendar .highlighted::after{
        content: '';
        width:5px;
        height:5px;
        border-radius:50%;
        bottom:2px;
        left:50%;
        transform: translateX(-50%);
        position: absolute;
        background-color:yellow;
    }
    .position-box {
        position: fixed;
        top: 40px;
        left: 0;
        right: 0;
        bottom: 0;
    }
  
</style>