String.prototype.filterWords = function(fWords){
	this.replace(/(\w+)/ig, function(str) {
		console.log(str);
	})
};

console.log("This house is nice!".filterWords(['house', 'nice']));