import Vue from 'vue'
import App from './App.vue'
//chart.js
import 'chart.js'
import 'hchs-vue-charts'
Vue.use(window.VueCharts);

//vue-fusioncharts
import VueFusionCharts from 'vue-fusioncharts';

// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
Vue.use(VueFusionCharts, FusionCharts, Charts);

//apexcharts
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
import { Chartjs} from './pages';
import { StockChart} from './pages';
import { TradingVue} from './pages';
import { D3} from './pages';
import { D3chart} from './pages';

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
	{
		path: '/Chartjs',
		component: Chartjs,
		meta: { page: 7},
	},
	{
		path: '/StockChart',
		component: StockChart,
		meta: { page: 8},
	},
	{
		path: '/TradingVue',
		component: TradingVue,
		meta: { page: 9},
	},
	{
		path: '/D3',
		component: D3,
		meta: { page: 9},
	},
	{
		path: '/D3chart',
		component: D3chart,
		meta: { page: 9},
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