<template>
	<h1 v-on:mousemove = "enlarge">{{referenced.value}}</h1>
</template>

<script>
	let globals = require("./global.js")
	module.exports = {
		data: function(){
			return {referenced: globals};
		},
		methods:{
			enlarge: function(){
				this.referenced.value += 1;
			}
		}
	};
</script>