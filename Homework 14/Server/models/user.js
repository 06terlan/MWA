const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	email: String,
	password: String,
	firstName: String,
	lastName: String
});

userSchema.index({email: 1, unique: true});

module.exports = model('user', userSchema, 'users');