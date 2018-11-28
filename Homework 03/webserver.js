const fs = require('fs');
const util = require('util');
let count = 0;

readFileAsync = util.promisify(fs.readFile);

require('http').createServer(function(req, res) {
	
	res.writeHead('200', {'Content-Type': 'text/plain'});

	
	readFileAsync('test.txt', 'utf-8')
		.then(data => res.end(data))
		.catch(err => console.log(err));

	console.log('User : ' + (++count));

}).listen('4000', '127.0.0.1');

console.log('End');