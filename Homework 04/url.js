const http = require('http');
const { fork } = require('child_process');
const url = require('url');

http.createServer(function(req, res) {
	
	const fileUrl = url.parse(req.url,true).query.url;

	const childProcess = fork('longOperation.js');
	childProcess.send(fileUrl);
	childProcess.on('message', (data) => res.write(data));
	childProcess.on('exit', () => { res.end(); });

}).listen(4000, ()=>{ console.log('server started'); });