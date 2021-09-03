<template>
    <div>
        <h3><b>무야호 게시판 니나노</b></h3>
        <div class="board">
            <ul class="board__list">
                <li>번호</li>
                <li style="text-align:center">제목</li>
                <li>작성자</li>
                <li>날짜</li>
            </ul>
            <div v-for="(item,index) in pageOfItems" 
                :key="item.i"
                :index="index+1">
                <ul class="board__list">
                    <li>{{item.index}}</li>
                    <li>{{item.name}}</li>
                    <li>{{item.writter}}</li>
                    <li>{{item.date}}</li>
                </ul>
            </div>
            <div class="pagenation_box">
                <jw-pagination 
                    :items="exampleItems" 
                    :styles="customStyles"
                    :labels="customLabels"
                    @changePage="onChangePage">
                </jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
//npm install jw-paginate
//npm install jw-vue-pagination
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: '원숭이 온돈이는 빨개 빨가믄 사과 사과는 마시써 맛있으면 바나나 바나나는 길어 길면 기차 기차는 빨라 빠르면 비행기 ' + (i+1) , writter:'곰돌이'+(i+1), date:'2021.07.07', index:(i+1)})).reverse();
// const exampleItems =[
//     {id:(i+1), name:'니나노오', writter:'망고', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오1', writter:'망고1', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오2', writter:'망고2', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오3', writter:'망고3', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오4', writter:'망고4', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오5', writter:'망고5', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오6', writter:'망고6', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오7', writter:'망고7', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오8', writter:'망고8', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오9', writter:'망고9', date:'2021.02.21'},
//     {id:(i+1), name:'니나노오0', writter:'망고0', date:'2021.02.21'},
// ].reverse();
const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};
const customStyles = {
    ul: {
        // border: '2px solid red'
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    li: {
        display: 'inline-block',
        margin:'1px'
        
    },
    a: {
        color: 'gray',
        border: '1px solid #ccc',
        borderRadius: '.2em',
        transition:'all 0.3s'
    }
}
export default {
    data() {
        return {
            exampleItems,
            pageOfItems: [],
            customStyles,
            customLabels
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
*{margin:0 auto; box-sizing: border-box;}

ul, li {display:inline-block}
.board{
    width:1000px;

    &__list{
        display:flex;
        width:100%;
        padding:10px 0;
        border-bottom:1px solid #ccc;
        li{padding:0 5px;}
        li:nth-child(1){
            width:50px;
            text-align:center;
        }
        li:nth-child(2){
            // width:calc(100% - 250px);
            width:80%;
            padding:0 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        li:nth-child(3){
            width:100px;
            text-align: center;
        }
        li:nth-child(4){
            width:100px;
            text-align: center;
        }
    }
}
.pagenation_box{
    text-align: center;
    margin-top: 20px;
    .pagination {
        .page-item.active .page-link{
            background:rgb(192, 192, 224);
        }
        .page-link:hover{
            background:rgb(192, 192, 224);
        }
    }
}
// 모바일
@media screen and (max-width: 768px){
.board{
    width:98vw;
    &__list{
        display:flex;
        width:100vw;
        padding:10px 0;
        border-bottom:1px solid #ccc;

        li{padding:0 5px; width:100%}
        li:nth-child(1){
            min-width:50px;
            text-align:center;
        }
        li:nth-child(2){
            width:70%;
            padding:0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        li:nth-child(3){
            min-width:100px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        li:nth-child(4){
            min-width:100px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
.pagenation_box{
    width:100vw;
    text-align: center;
    margin-top: 20px;
    .pagination {
        .page-link{
            padding:4px !important;
            //default값이 inline으로 되어있어서 important
        }
    }
}

}

</style>