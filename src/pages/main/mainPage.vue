<template>
    <div class="wrap">
        <Layout></Layout>
        <button class="plusBtn"
            @click="modalCheck = !modalCheck"> + </button>
            <!-- <div v-html="modal" v-show="modalCheck==true"></div> -->
        <h3 class="title">오늘의 할 일</h3>
        <ul class="user">
            <Custom
                v-for="(item,index) in todayTodo"
                :key='item.i'
                :index="index+1"
                :work="item.work"
                :day="item.day"
                :check="item.check"
                @removeTodo="removeTodo(item)"
                @doneCheck="item.check=!item.check"
                @edit="edit(index)"
                :class="{'on' : item.clickOn}"
                v-show="item.check==false">
            </Custom>
        </ul>
        <hr>
        <h3 class="title">다 해치운 일</h3>
        <ul class="user">
            <Custom
                v-for="(item,index) in todayTodo"
                :key='item.i'
                :index="index+1"
                :work="item.work"
                :day="item.day"
                :check="item.check"
                @removeTodo="removeTodo(item)"
                @doneCheck="item.check=!item.check "
                @edit="edit(index)"
                :class="{'on' : item.clickOn}"
                v-show="item.check==true">
            </Custom>
        </ul>
        <!-- 할일추가 모달 -->
        <transition name="fade">
        <Modal
            v-show="modalCheck==true"
            :modalCheck="modalCheck"
            @AddLIst="AddLIst()"
            @modalCheck="modalCheck =!modalCheck"
        >
        <template #commit>할일 추가</template>
        </Modal>
        </transition>
        <!-- 수정모달 -->
        <transition name="fade">
        <Modal
            v-show="editModal==true"
            :modalCheck="editModal"
            @editCheck="editCheck()"
            @modalCheck="editModal =!editModal, reset()"
        >
        <template #commit>수정하기</template>
        </Modal>
        </transition>
        <button class="router"><router-link to="/SubPage">스와이퍼페이지</router-link></button>
        <button class="router"><router-link to="/Datepicker">달력페이지</router-link></button>
        <button class="router"><router-link to="/BetterScroll">가로스크롤페이지</router-link></button>
        <button class="router"><router-link to="/Reservation">예약</router-link></button>
        <button class="router"><router-link to="/TestPage">테스트페이지</router-link></button>
        <br/>
    </div>
</template>

<script>

import Custom from './component/Custom.vue';
import Modal from './component/Modal.vue';

export default {
    components:{
        Custom,
        Modal,
    },
    data() {
        return {
            ListPlus:false,
            modalCheck:false,
            editModal:false,
            modal:'',
            choice:null,
            editWork:'',
            todayTodo: [
                {
                    clickOn:false,
                    check:false,
                    // check가 true가 되면 체크되어 완료목록으로
                    work:'강아지 밥 주기',
                    day:'2020-02-05',
                },
                {
                    clickOn:false,
                    check:false,
                    work:'교회 다녀오기',
                    day:'2020-02-08',
                }
            ],
        }
    },
    methods: {
        AddLIst() {
            if(this.$store.state.UserWork==''||this.$store.state.UserDay==''){
                //  하나라도 안되면 아무것도 일어나지 않는다
                alert("작성을 완료해 주세요.")

            }else{
                // 둘다 기입이 되면
                this.todayTodo.push({
                    clickOn:false,
                    check : false,
                    work : this.$store.state.UserWork,
                    day: this.$store.state.UserDay,
                    // 기입이 되면 items에 넣는다
                    modalCheck : false,
                })
                this.reset()
            }
        },
        reset() {
            this.$store.state.UserWork = '';
            this.$store.state.UserDay = '';
            this.modalCheck = false;
            this.editModal = false;
        },
        //삭제
        removeTodo(item) {
            //방법 1
            //this.items = this.items.filter(i => i == item);
            //방법 2
            this.todayTodo = this.todayTodo.filter(function(i) { 
                return i !== item
            })
            console.log(this.todayTodo)
        },
        checkFun(){
            this.todayTodo.check=!this.todayTodo.check
            console.log(this.todayTodo.check)
        },
        edit(index){
            this.choice=index
            this.$store.state.UserWork = this.todayTodo[this.choice].work,
            this.$store.state.UserDay = this.todayTodo[this.choice].day,
            this.editModal = !this.editModal;
        },
        editCheck(){
            if(this.$store.state.UserWork == this.todayTodo[this.choice].work && this.$store.state.UserDay == this.todayTodo[this.choice].day){
                alert("변경사항이 없습니다.")
            }
            else{
                // this.todayTodo[this.choice].replace({
                //     work : this.$store.state.UserWork,
                //     day :  this.$store.state.UserDay,
                // })
                this.todayTodo[this.choice].work = this.$store.state.UserWork,
                this.todayTodo[this.choice].day = this.$store.state.UserDay,
                this.reset()
            }
        }
        
    }
}
</script>

<style lang="scss">
.wrap{
    text-align: center;
    .plusBtn {
    font-size:$fz34;
    background-color:rgb(173, 171, 56);
    width: 50px;
    height: 50px;
    border-radius:50%;
    box-sizing: border-box;
    color:white;
    position: fixed;
    bottom: 20px;
    right:1rem;
    }
    .title{
        display:inline-block;
        position: relative;
        &::before{
            content: '';
            position:absolute;
            width:10px;
            height: 10px;
            border-radius:50%;
            background-color:green;
            top:50%;left:-15px;
            transform: translateY(-50%);
        }
    }
    .modal{
        position:absolute;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,.8);
        top:0;
        left:0;
        z-index: 1;  
        &__text{
            position:absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 300px;
            height: 300px;
            padding:1rem;
            background-color: antiquewhite;
            z-index: 2;
            border-radius:.5rem;
        }
    }
    .user{
        text-align:left;
    }
    .input-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        justify-content: space-between;

    }
    .input-box__item{
        background-color: white;
        padding: 1rem;
        border-radius: .5rem;
        border:1px solid gray;
        display: flex;
        flex-direction: row;
        margin: 10px 0;
        width: 90%;
    }
    .input-box__item>label{
        width:60px;
    }
    .input-box__item__input{
        width:100%;
    }
    .input-box__btn{
        border-radius: .5rem;
        background: rgb(81, 124, 71);
        padding: 1rem;
        color: white;
        width: 48%;
        margin: 10px 0;
    }
    .input-box__btn:hover{
        background: white;
        color:rgb(81, 124, 71);
        transition:all .5s;
    }
    .modal__close{
        position:absolute;
        top: 10px;
        right: 10px;
    }
    .router{
        background:blanchedalmond;
        padding: .5rem;
        border-radius: .5rem;
        border:2px solid blanchedalmond;
        transition:all .5s;
        &:hover{
            background:white;
            
        }
    }
}



</style>