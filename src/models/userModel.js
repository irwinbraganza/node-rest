'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: 'Kindly enter users name.'
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	email: {
		type: String,
		required: 'Kindly enter users email.'
	}
});

module.exports = mongoose.model('Users', UserSchema);