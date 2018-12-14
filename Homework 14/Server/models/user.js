const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	email: String,
	password: String,
	firstName: String,
	lastName: String
});

module.exports = model('user', userSchema, 'users');