const fs = require('fs');
const util = require('util');
let count = 0;

readFileAsync = util.promisify(fs.readFile);

require('http').createServer(function(req, res) {
	
	res.writeHead('200', {'Content-Type': 'text/plain'});

	
/*	async function readFAsync(fileName) {
		try{
			const text = await readFileAsync(fileName, 'utf-8');
			res.end(text)
		}
		catch(err){
			console.log(err);
		}
	}
	readFAsync('test.txt');*/

	const src = fs.createReadStream('test.txt').pipe(res);

	console.log('User : ' + (++count));

}).listen('4000', '127.0.0.1');

console.log('End');