<template>
    <div class="wrap">
        <Layout></Layout>
        <button class="plusBtn"
            @click="modalCheck = !modalCheck"> + </button>
            <!-- <div v-html="modal" v-show="modalCheck==true"></div> -->
        <!-- <h3 class="title">오늘의 할 일</h3> -->
        <ul class="user" >
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
                >
            </Custom>
        </ul>
        <hr>
        <!-- <h3 class="title">다 해치운 일 </h3>
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
        </ul> -->
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
        <button class="router"><router-link to="/Bartest">바테스트페이지</router-link></button>
        <button class="router"><router-link to="/D3chart">D3chart페이지</router-link></button>
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
                    work:'강아지 밥 주기1',
                    day:'2020-02-05',
                },
                {
                    clickOn:false,
                    check:false,
                    work:'교회 다녀오기2',
                    day:'2020-02-08',
                },
                {
                    clickOn:false,
                    check:false,
                    work:'강아지 밥 주기5',
                    day:'2020-02-05',
                },
                {
                    clickOn:false,
                    check:false,
                    work:'교회 다녀오기6',
                    day:'2020-02-08',
                },
                {
                    clickOn:false,
                    check:true,
                    work:'화분에 물주기',
                    day:'2020-02-07',
                },
                {
                    clickOn:false,
                    check:true,
                    work:'엄마 심부름 하기',
                    day:'2020-02-09',
                },
            ],
        }
    },
    computed: {
        rows() {
            return this.todayTodo.length
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
        },
        // onChangePage(pageOfItems) {
        //     // update page of items
        //     this.pageOfItems = pageOfItems;
        // }
    },
    mounted() {
        var list= [
                {
                    work:'강아지 밥 주기1',
                    day:'2020-02-05'
                },
                {
                    work:'교회 다녀오기2',
                    day:'2020-02-08',
                },
                {
                    work:'강아지 밥 주기5',
                    day:'2020-02-05',
                },
                {
                    work:'교회 다녀오기6',
                    day:'2020-02-08',
                },
                {
                    work:'화분에 물주기',
                    day:'2020-02-07',
                },
                {
                    work:'엄마 심부름 하기',
                    day:'2020-02-09',
                },
                {
                    work:'강아지 밥 주기1',
                    day:'2020-02-05'
                },
                {
                    work:'교회 다녀오기2',
                    day:'2020-02-08',
                },
                {
                    work:'강아지 밥 주기5',
                    day:'2020-02-05',
                },
                {
                    work:'교회 다녀오기6',
                    day:'2020-02-08',
                },
                {
                    work:'화분에 물주기',
                    day:'2020-02-07',
                },
                {
                    work:'엄마 심부름 하기',
                    day:'2020-02-09',
                }
            ];
        console.log('야호');
        // //한페이지 내의 글 수
        // var pageCount=2;
        // //한 블럭에 존재할 페이지
        // var blockCount =5;
        // //총페이지 개수
        // var totalPage=Math.ceil(list.length/pageCount); //Math.ceil 소수점밑숫자있으면 올림
        // var totalBlock=Math.ceil(totalPage/blockCount);
        // var pagination = document.getElementById("pagination");
        // var testTable = document.getElementById('testTable').querySelector('tbody');

        // var renderTableAndPagination = function(page=1){
        //     renderTable(page);
        //     renderPagination(page);
        // }
        // var renderTable = function(page){
        //     var startNum  = (pageCount*(page-1));
        //     var endNum = ((pageCount*page) >= list.length)? list.length : (pageCount*page);
        //     var html ='';
        //     for(var index =startNum; index < endNum; index++){
        //         html +='<tr><td><input type="checkbox"</td><td>'+list[index].work+'</td><td>'+list[index].day+'</td></tr>';
        //     }
        //     testTable.innerHTML = html;
        // }
        // var renderPagination = function(page){
        //     var block = Math.floor((page-1)/blockCount)+1;
        //     var startPage = ((block-1)*blockCount)+1;
        //     var endPage = ((startPage+blockCount-1)>totalPage) ? totalPage : (startPage+blockCount-1);
        //     var paginationHTML ="";
        //     if(page!==1) paginationHTML += "<a style='cursor:pointer' class='first_page'>First</a>";
        //     if(block!==1) paginationHTML +="<a style='cursor:pointer' class='back_page'>Prev</a>";
        //     for(var index=startPage;index<= endPage; index++){
        //         paginationHTML += (parseInt(page) === parseInt(index)) ?
        //         "|<a style='color:#ff8400'>"+index+"</a>|":"|<a style='cursor:pointer' class='go_page' data-value='"+index+"'>"+index+"</a>|";
        //     }
        //     if(block < totalBlock) paginationHTML += "<a style ='cursor:pointer' class='next_page'>Next</a>";
        //     if(page < totalPage) paginationHTML += "<a style ='cursor:pointer' class='last_page'>Last</a>";
        //     pagination.innerHTML=paginationHTML;
        //     addEventPagination(startPage,endPage);
        // };
        // var addEventPagination = function(startPage,endPage){
        //     if(!!document.querySelector(".first_page")){
        //         document.querySelector(".first_page").addEventListener('click',()=>{
        //             renderTableAndPagination(1);
        //         });
        //     }
        //     if(!!document.querySelector(".back_page")){
        //         document.querySelector(".back_page").addEventListener('click',()=>{
        //             renderTableAndPagination(startPage-1);
        //         });
        //     }
        //     document.querySelectorAll(".go_page").forEach(goPage=>{
        //         goPage.addEventListener('click', e => {
        //             renderTableAndPagination(parseInt(e.target.getAttribute('data-value')));
        //         });
        //     });
        //     if(!!document.querySelector(".next_page")){
        //         document.querySelector(".next_page").addEventListener('click',()=>{
        //             renderTableAndPagination(endPage+1);
        //         });
        //     }
        //     if(!!document.querySelector(".last_page")){
        //         document.querySelector(".last_page").addEventListener('click',()=>{
        //             renderTableAndPagination(totalPage);
        //         });
        //     }
        // };
        // renderTableAndPagination();
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
    .rowscount{
        width: 10px;
    }
}



</style>