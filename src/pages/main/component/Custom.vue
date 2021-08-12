<template>
    <li class="user__item">
        <p class="user__item__index"
            :class="{'on' : check}"
            >
            <label class="label">
                <input type="checkbox" class="checkbox"
                    v-model="check"
                    @click="$emit('doneCheck')">
                <span class="checkmark"></span>
            </label>
        </p>
        <div class="user__item__box">
            <p class="user__item__name">{{work}}</p>
            <span class="user__item__num">날짜 : {{day}}</span>
        </div>
        <button class="user__item__edit" @click="$emit('edit')">수정</button>
        <i class="icon-close" 
            @click="$emit('removeTodo')">x</i>
    </li>
</template>

<script>
export default {
    props: {
        // 
        
        index : {
            type: Number
            // 타입을 지정해줘야한다
        },
        work: {
            type: String
        },
        day: {
            type: String
        },
        check:{
            type:Boolean
        }
    },
    data() {
        return {
            // index: 1,
            // name: '홍길동',
            // old: 20,
            
        }
    },
    methods: {
        // checkFun() {
        //     console.log(this.isCheck)
        // }
    }
}
</script>

<style lang="scss">

.user {
    padding: 1rem;

    &__item {
        display: flex;
        align-items: center;   
        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        border-radius: 10px;
        margin-bottom: 1rem;
        justify-content: space-between;
        overflow: hidden;
        border:1px solid transparent;
        &__box {
            flex: 1 1 auto;
        }

        &__index {
            font-size: $fz26;
            color: white;
            padding: 2rem;
            background-color: rgb(158, 158, 245);
            margin-right: 10px;
            &.on {
                background-color:rgb(233, 134, 131);
            }
            .label{ 
                position: relative;
                cursor:pointer;
                input:checked~.checkmark{
                    background-color:rgb(138, 207, 138);
                }
                input:checked~.checkmark:after{
                    display:block;
                }
                .checkbox{
                    display: none;
                }
                .checkmark{
                    position:absolute;
                    top:0;
                    left: 0;
                    height:25px;
                    width: 25px;
                    transform: translate(-50%,-50%);
                    background-color:white;
                    border-radius: 50%;
                    transition:all .5s;
                }
                .checkmark:after{
                    content:'';
                    position:absolute;
                    display:none;
                    left:9px;
                    top:5px;
                    width: 5px;
                    height: 10px;
                    border:solid white;
                    border-width:0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }

            }
            .label:hover .checkbox ~.checkmark{
                background-color:#ccc;
            }
            
        }
        &__num {
            color: #999;
        }
        &.on {
            border: 1px solid #999;
            background: #f9f9f9;
        }

        .icon-close {
            margin-right: 1rem;
            color: #999;
            cursor: pointer;
            font-weight: 600;
            font-size: 25px;
        }
        &__edit{
            background:#999;
            border-radius: 4px;
            font-size:$fz12;
            padding: 5px;
            margin-right: 10px;
        }
    }
}

</style>