//1. way
String.prototype.filterWords = function(fWords){
	let strReplaced = this.replace(/(\w+)/ig, function(str) {
		if(fWords.indexOf(str) !== -1){
			return "***";
		}
		return str;
	});
	return strReplaced;
};

//2. way
String.prototype.filterWords = function(fWords){
	let strReplaced = null, s = this;
	new Promise(function(done, fail){
		let strReplaced = s.replace(/(\w+)/ig, function(str) {
			if(fWords.indexOf(str) !== -1){
				return "***";
			}
			return str;
		});

		done(strReplaced);
	}).then(x=>console.log(x));
	
	return strReplaced;
};

//3. way
String.prototype.filterWords = async function(fWords){
	let strReplaced = null, s = this;
	await new Promise(function(done, fail){
		let strReplaced = s.replace(/(\w+)/ig, function(str) {
			if(fWords.indexOf(str) !== -1){
				return "***";
			}
			return str;
		});

		done(strReplaced);
	}).then(x=>console.log(x));
	
	return strReplaced;
};

//4. way
const {from} = rxjs;
const {reduce, map} = rxjs.operators;
String.prototype.filterWords = function(fWords){
	let strReplaced = null;
	from(this.split(/(\w+)/)).pipe(
			map(x => {return fWords.indexOf(x)===-1?x:'***';} ),
			reduce( (t,x) => t+x ,'')
		).subscribe(
			x => { strReplaced = x; }
		);
	
	return strReplaced;
};

console.log("This house is nice!".filterWords(['house', 'nice']));