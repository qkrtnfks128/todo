import Vue from 'vue'
import App from './App.vue'
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts);

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)



//common.js (공통.js)
import common from './assets/js/common'
Vue.use(common)

//store
import { store } from "./store";

//router
import VueRouter from 'vue-router';
import { MainPage} from './pages';
import { SubPage} from './pages';
import { Datepicker} from './pages';
import { BetterScroll} from './pages';
import { Reservation} from './pages';
import { TestPage} from './pages';
import { Bartest} from './pages';

//components
import { Layout } from './components'
Vue.component('Layout',Layout)

Vue.use(VueRouter); // router 기능 확장 선언
Vue.config.productionTip = false

const routes = [
	{
		path: '/',
		component: MainPage,
		meta: { page: 1 },
	},
	{
		path: '/subPage',
		component: SubPage,
		meta: { page: 2 },
	},
	{
		path: '/Datepicker',
		component: Datepicker,
		meta: { page: 3 },
	},
	{
		path: '/BetterScroll',
		component: BetterScroll,
		meta: { page: 4 },
	},
	{
		path: '/Reservation',
		component: Reservation,
		meta: { page: 4 },
	},
	{
		path: '/TestPage',
		component: TestPage,
		meta: { page: 5 },
	},
	{
		path: '/Bartest',
		component: Bartest,
		meta: { page: 6 },
	},
];

// router 객체생성
const router = new VueRouter({
  	routes
});


new Vue({
	render: h => h(App),
	router, // router 추가
	store,
}).$mount('#app')