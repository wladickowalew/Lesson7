<template>
	<div>
		<p><input type="text" v-model="message"></p>
		<par-cap v-bind:p-text="message" v-on:update="receive"></par-cap>
	</div>
</template>

<script>
	let ParCap = require("./par-cap.vue");
	module.exports = {
		components: {parCap: ParCap},
		data: function () {
				return {message: "Hello, component2!"};
			},
		methods:{
			receive: function(v){
				this.message = v;
			}
		}
	};
</script>