Array.prototype.even = async function(array) {
	const newArr = [], arr = this;
	
	await new Promise(function(resolve, reject) {
		for(let e of arr){
			if(e%2==0) newArr.push(e);
		}
		resolve(newArr);
	}).then(function(data) {
		console.log(data);
	});
	
	return newArr;
};
Array.prototype.odd = async function(array) {
	const newArr = [], arr = this;
	
	await new Promise(function(resolve, reject){

		for(let e of arr){
			if(e%2!=0) newArr.push(e);
		}
		resolve(newArr);

	}).then(function(data){
		console.log(data);
	});
	
	return newArr;
};

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');