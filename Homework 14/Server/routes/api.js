var express = require('express');
var router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator/check');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',
	body(['email', 'password', 'firstName', 'lastName']).not().isEmpty().isString(),
	function(req, res, next) {

		const errors = validationResult(req); console.log(errors.isEmpty());
		if(errors.isEmpty()){
			const newUser = new User(req.body);
			newUser.save((error, user)=>{
				res.status(201).json({status:'Success', data: newUser});
			});
		}
		else{
			res.status(404);
			res.json({status:'Error'});
		}
});

module.exports = router;
