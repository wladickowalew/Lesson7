let Vue = require("vue");
let App = require("./app.vue");

let vm = new Vue({
	el: "#root",
	render: function(cE) {
		return cE(App);
	}
});