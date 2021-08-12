<template>
    <div class="modal">
            <div class="modal__text">
                <div class="input-box">
                    <div class="input-box__item">
                        <label for="">할일 : </label>
                        <input type="text" class="input-box__item__input" v-model="$store.state.UserWork" placeholder="할일을 입력하세요">
                    </div>
                    <div class="input-box__item">
                        <label for="">날짜 : </label>
                        <input type="date" class="input-box__item__input" v-model="$store.state.UserDay" >
                    </div>
                    <button class="input-box__btn" 
                        @click="$emit('modalCheck')"
                        >취소</button>
                    <button class="input-box__btn" 
                        @click="$emit('AddLIst'),$emit('editCheck')"
                        >
                        <slot name="commit"></slot>
                    </button>
                </div>
            </div>
            <span class="modal__close">x</span>
        </div>
</template>

<script>

export default {
    props: {
        modalCheck:{Boolean},
    },
    data() {
        return{

        }
    },
}
</script>

<style lang="scss">
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
        width: 80%;
        height: 300px;
        padding:1rem;
        background-color: antiquewhite;
        z-index: 2;
        border-radius:.5rem;
    }
}

.user.on{
    border: 1px solid #999;
    background: #f9f9f9;
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
</style>