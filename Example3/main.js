let Vue      = require("vue");
let Router   = require("vue-router");
let App      = require("./app.vue");
let Enlarger = require("./enlarger.vue");
let Reducer  = require("./reducer.vue");

Vue.use(Router);

let router = new Router({
	routes:[
		{path:"/add", 	 component: Enlarger},
		{path:"/deduct", component: Reducer},
	]
});

let vm = new Vue({
	el: "#root",
	router: router,
	render: function (render) {
		return render(App);
	}
});