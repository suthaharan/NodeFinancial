/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,	

  attributes: {
  	username: { type: 'string', required: true},
  	yob: { type: 'string'},
  	email: { type: 'string', email: true, required: true, unique: true},
  	password: { type: 'string'},
  	state: { type: 'string'}
  },

  toJSON: function(){
  	var userObj = this.toObject();
  	delete userObj.password;
  	delete userObj.cpassword;
  	delete userObj._csrf;
  	return userObj;
  }

};

