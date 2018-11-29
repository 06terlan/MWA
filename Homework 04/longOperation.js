const fs = require('fs');


process.on('message', (fileUrl) => {

	const readStream = fs.createReadStream(fileUrl);
	readStream.on('data', function(chunk) {
		process.send(chunk.toString());
	});
	readStream.on('end', function() {
		console.log('end stream');
	});

});