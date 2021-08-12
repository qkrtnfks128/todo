<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="banner in banners" :key="banner">
            <img :src="banner">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' 
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default { 
    name: 'ListItem', 
    components: { 
        Swiper, 
        SwiperSlide 
    },
    methods:{
        
    },
    data() { 
        return { 
        banners: [ 
                '../../src/assets/img/cat1.jpg',
                '../../src/assets/img/cat2.jpg', 
                '../../src/assets/img/cat3.jpg',
                '../../src/assets/img/cat4.jpg'  
                ],
        swiperOption: { 
            slidesPerView: 1, 
            spaceBetween: 0, 
            loop: true, 
            pagination: { 
                el: '.swiper-pagination', 
                clickable: true 
                }, 
                navigation: { 
                    nextEl: '.swiper-button-next', 
                    prevEl: '.swiper-button-prev' 
                    }
                } 
            } 
        }, 
    
        //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper;
			}
		},

		//el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
		mounted() {
			//console.log('Current Swiper instance object', this.swiper)
			//this.swiper.slideTo(3, 1000, false)
		}

}
</script>

<style lang="scss">
.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    overflow:hidden;
  }
}


</style>