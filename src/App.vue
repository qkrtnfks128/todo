<template>
  <div id="app" class="app">
    <!-- skip-nav -->
    <div class="skip-nav">
      <a href="#contents" class="skip-nav__link">본문 바로가기</a>
    </div>
    <!-- end skip-nav -->
	<transition :name="transitionName">
		<router-view></router-view>
	</transition>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
		return {
			transitionName: ""
		}
    },
	watch: { 
		//페이지 전환효과
		$route(to, from) { 
			if(to.meta.page == null || from.meta.page == null){ 
				this.transitionName = "fade"; 
			}else{ 
				this.transitionName = to.meta.page > from.meta.page ? "next" : "prev"; 
			} 
		} 
	}
}
</script>

<style lang="scss">
@import './assets/css/reset';

.skip-nav {
	&__link {
		overflow: hidden;
		position: absolute;
		width: 0;
		height: 0;
	}
}

.app { 
	min-height: 100%; 
	display: grid; 
	grid-template: "main"; 
	flex: 1; 
	background-color: white; 
	position: relative; 
	z-index: 0; 
	overflow-x: hidden; 

	& > * {
		grid-area: main; 
		background-color: white;
		position: relative;
	}

	& > &:first-child {
		z-index: 1;
	}
} 

/* 전환효과 (Slide) */ 
.next-leave-to { animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; } 
.next-enter-to { animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; } 
.prev-leave-to { animation: leaveToRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; } 
.prev-enter-to { animation: enterFromLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; } 

@keyframes leaveToLeft { 
  from { transform: translateX(0); } 
  to { transform: translateX(-25%); filter: brightness(0.5); } 
} 

@keyframes enterFromLeft { 
  from { transform: translateX(-25%); filter: brightness(0.5); } 
  to { transform: translateX(0); } 
} 

@keyframes leaveToRight { 
  from { transform: translateX(0); } 
  to { transform: translateX(100%); } 
} 

@keyframes enterFromRight { 
  from { transform: translateX(100%); } 
  to { transform: translateX(0); } 
} 

/* 전환효과 (Up) */ 
.up-leave-to { animation: leaveToLeft 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 0; } 
.up-enter-to { animation: enterFromRight 500ms both cubic-bezier(0.165, 0.84, 0.44, 1); z-index: 1; } 

@keyframes leaveToLeft { 
  from { transform: translateX(0); } 
  to { transform: translateX(-25%); filter: brightness(0.5); } 
} 

@keyframes enterFromLeft { 
  from { transform: translateX(-25%); filter: brightness(0.5); } 
  to { transform: translateX(0); } 
} 

/* 전환효과 (Fade) */ 
.fade-enter-active, .fade-leave-active { transition: opacity .8s; } 
.fade-enter, .fade-leave-to { opacity: 0; }

</style>
