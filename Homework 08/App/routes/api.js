var express = require('express');
const { check, validationResult } = require('express-validator/check');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	req.db.collection('locations').find({}).toArray((err, data) =>{
		res.json(data);
	});
});

router.post('/add', 
	check(['name', 'category']).not().isEmpty().isString(),
	check(['location']).isArray(),
	check(['location.1']).matches(/\d+.\d+/),
	check(['location.0']).matches(/\d+.\d+/),
	function(req, res, next) {

		const errors = validationResult(req);
	  	if(errors.isEmpty()){
			req.db.collection('locations').insert({name: req.body.name, category: req.body.category, location: [req.body.location[0], req.body.location[1]]});
			return res.send('Grade added');
		}
		else return next({status: 500, message: 'Sorry there is somethig wrong.'});
});

const curLat = 41.017654, curLong = -91.9665342;
router.get('/nearest',
	check(['category']).not().isEmpty().isString(),
	function(req, res, next) {

		const errors = validationResult(req);
	  	if(errors.isEmpty()){
			req.db.collection('locations')
				.find({location: {$near: [curLong, curLat]}, category: req.body.category}, {})
				.toArray((err, data) => {
					res.json(data);
				});
		}
		else return next({status: 500, message: 'Sorry there is somethig wrong.'});
});

module.exports = router;
