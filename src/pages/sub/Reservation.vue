<template>
    <div class="test">
        <select name="before" v-model="$store.state.clickTime1">
            <option value="">시간선택</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
        </select>
        <select name="after" v-model="$store.state.clickTime2">
            <option :value="item.value" v-for="item in time" :key="item.i" >{{item.name}}</option>
        </select>
        <select name="userCount" v-model="$store.state.userCount">
            <option value="" selected disabled>인원선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="addReservation()">추가</button>
        <div class="wrap">
            <div class="wrap__content" v-for="item in reservation" :key="item.i" v-show="item.show==true">
                <p class="wrap__content__text">{{item.time1}}~{{item.time2}} {{item.userNumber}}명
                    <span @click="removeTodo()">x</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            reservation:[
                    // {
                    //     time1:'',
                    //     time2:'',
                    //     userNumber: null,
                    //     show:false
                    // },
                    // { 
                    //     time1:'09:00',
                    //     time2:'10:30',
                    //     userNumber:2,
                    //     show:true
                    // },
                    // { 
                    //     time1:'09:00',
                    //     time2:'10:30',
                    //     userNumber:1,
                    //     show:true
                    // },
                    // { 
                    //     time1:'09:00',
                    //     time2:'10:30',
                    //     userNumber:1,
                    //     show:true
                    // },
                    // { 
                    //     time1:'09:00',
                    //     time2:'10:30',
                    //     userNumber:2,
                    //     show:true
                    // },
                    // { 
                    //     time1:'09:00',
                    //     time2:'10:30',
                    //     userNumber:2,
                    //     show:true
                    // },
                ],
            time:[
                {
                    value: '',
                    name: '시간선택'
                },
                {
                    value: '',
                    name: '09:00'
                },
                {
                    value: '',
                    name: '10:00'
                },
                {
                    value: '',
                    name: '12:00'
                },
            ]
        }
    },
    methods:{
        addReservation(){
            if(this.$store.state.clickTime1==''||this.$store.state.clickTime2==''){
                alert("작성을 완료해 주세요.")
            }
            else{ 
                this.reservation.push({
                time1:this.$store.state.clickTime1,
                time2:this.$store.state.clickTime2,
                userNumber:this.$store.state.userCount,
                userNumber:2,
                show:true
                })
            }
            
        },
        removeTodo(item) {
            //방법 1
            //this.items = this.items.filter(i => i == item);
            //방법 2
            this.reservation = this.reservation.filter(function(i) { 
                return i !== item
            })
            console.log(this.reservation)
        },
    }

}
</script>

<style lang="scss">
.test{
    .wrap{
        width: 301px;
        height: 170px;
        border: 1px solid #aaa;
        border-radius:2px;
        overflow: scroll;
        white-space :nowrap;
        
        &__content{
            border: 1px solid #FF9011;
            border-radius:18px;
            color:#FF9011;
            width: 260px;
            width: 87%;
            font-size:$fz18;
            margin:10px 28px 10px 13px;
            padding: 5px 23px;
            box-sizing: border-box;
            position: relative;
            
            &__text{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight:500;
                font-family: lato;
                span{ 
                    font-size:$fz14;
                }
            }
            
        }
    }
}

</style>