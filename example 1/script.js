let $ = require("jquery");
let m = require("../example.js");

$("button").on("click", function () {
	alert("Hello, Watchify");
	alert(m.getSquare(5));
});