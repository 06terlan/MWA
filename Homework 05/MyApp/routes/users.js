var express = require('express');
const axios = require('axios');
const rxjs = require('rxjs');
var router = express.Router();


function usingObservable(res) {
	const observable = rxjs.from( axios.get('https://randomuser.me/api/', {params: {results: 10}}) );
	
	observable.subscribe(
		data => res.json(data.data)
	);
}

async function usingAsyncAwait(res) {
	const data = await axios.get('https://randomuser.me/api/', {params: {results: 10}});

	res.json(data.data);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.set({
		'Cache-Control': 'private, max-age=86400',
		'Last-Modified': 'Sunday, 2 Dec 2018 14:16:12 GMT'
	});


	//usingObservable(res);
	usingAsyncAwait(res);
});

module.exports = router;
