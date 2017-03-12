/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
// encryption
var bcrypt = require('bcrypt');
var _ = require('lodash');
module.exports = {

  schema: true, 
  autoPK: true,	
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
  },

  // Here we encrypt password before creating a User
  beforeCreate : function (user, next) {

      bcrypt.genSalt(10, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
          if(err) return next(err);
          user.password = hash;
          next();
        });
      });

  },

  comparePassword : function (password, user, cb) {

    bcrypt.compare(password, user.password, function (err, match) {

      if(err) cb(err);

      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }

    });

  }



};

