var express = require('express');
var router = express.Router();
const User = require('../models/user');
const { body, validationResult } = require('express-validator/check');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',
	body(['email', 'password', 'firstname', 'lastname']).not().isEmpty().isString(),
	function(req, res, next) {

		const errors = validationResult(req); console.log(errors.isEmpty());
		if(errors.isEmpty()){
			bcrypt.hash(req.body.password, 10).then(function(hash) {
				req.body.password = hash;
			    const newUser = new User(req.body);
				newUser.save((error, user)=>{
					res.status(201).json({status:'Success', data: newUser});
				});
			});
		}
		else{
			res.status(404);
			res.json({status:'Error'});
		}
});
router.post('/login',
	body(['email', 'password']).not().isEmpty().isString(),
	function(req, res, next) {

		const errors = validationResult(req); console.log(errors.isEmpty());
		if(errors.isEmpty()){
			User.findOne({email: req.body.email}, (error, user)=>{
				if(user){

					bcrypt.compare(req.body.password, user.password).then((hRes)=>{
						if(hRes){
							res.status(200).json({status:'Success', data: user});
						}
						else{
							res.status(401).json({status:'Error', error: 'Password is wrong!'});
						}
					});
					
				}
				else{
					res.status(401).json({status:'Error', error: 'Password is wrong!'});
				}
			});
		}
		else{
			res.status(404);
			res.json({status:'Error'});
		}
});
router.get('/protected', (req, res, next)=>{

});

module.exports = router;
