import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  	state: {
		UserWork: '',
		UserDay: '',
		clickTime1:'',
		clickTime2:'',
		userCount:'',
		labels:["apple","banana","grapes"],
		datasets: [
			{
			data:[20,30,50],
			backgroundColor:["Red","Yellow","Purple"]
			}
		],
		option:{
			title:{
				display:true,
				position:"buttom",
				text:"custom chart"
			}
		}
	},
	mutations: {

	},
	getters: {

	},
	actions: {

	}
})