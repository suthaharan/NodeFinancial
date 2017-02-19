/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,	

  attributes: {
  	name: { type: 'string', required: true},
  	title: { type: 'string'},
  	email: { type: 'string', email: true, required: true, unique: true},
  	encryptedPassword: { type: 'string'},
  	state: { type: 'string'}
  },

  toJSON: function(){
  	var userObj = this.toObject();
  	delete userObj.password;
  	delete userObj.confirmation;
  	delete userObj.passwordConfirmation;
  	delete userObj._csrf;
  	return userObj;
  }

};

