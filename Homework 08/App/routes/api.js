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
	check(['name', 'category', 'grade']).exists(),
	check(['location']).isArray(),
	function(req, res, next) {

	req.db.collection('locations').find({}).toArray((err, data) =>{
		res.json(data);
	});
});

module.exports = router;
