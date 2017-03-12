/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	'new': function(req, res){
		res.view();
	},
	'create': function(req, res, next){
		User.create( req.params.all(), function userCreated(err, user){

		    if (req.password !== req.cpassword) {
		      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
		    }



			//if (err) return next(err);
			if (err) {
				console.log(err);
				req.session.flash = { err: err }
				//return res.json(err.status, {err: err});
			}


			if (user) {
				// NOTE: payload is { id: user.id}
				//req.session = { user: user };
				res.json(200, {user: user, token: jwToken.issue({id: user.id})});
			}
			
			//return res.redirect('/user/login');
			//}

			//res.json(user);
		});
	},
	loginxxy: function (req, res) {
	    //console.log("hello message");
	    //process.exit(0);

	    var email = req.param('email');
	    var password = req.param('password');


	    if (!email || !password) {
	      	return res.json(401, {err: 'email and password required'});
	    }

	    User.findOne({email: email}, function (err, user) {

	      if (!user) {
	       		return res.json(401, {err: 'invalid email or password'});
	      }

	      User.comparePassword(password, user, function (err, valid) {

	        if (err) {
	          	return res.json(403, {err: 'forbidden'});
	        }

	        if (!valid) {
	          	return res.json(401, {err: 'invalid email or password'});
	        } else {
				res.json(200, {user: user, token: jwToken.issue({id: user.id})});
	        }

	      }); // end of compare password

	    }); // find user by email

	}, // end of index function
	login: function (req, res) {
	    if (req.method === 'GET' && !req.session.name) {
	        res.view('user/login', {layout: 'layout_public' });
	    }
	    else if (req.session.name) {
	        res.view('user/welcome', { username: req.session.name }, {layout: 'layout_private' });
	    } else {

			var email = req.param('email');
		    var password = req.param('password');


		    if (!email || !password) {
		      	//return res.json(401, {err: 'email and password required'});
		      	res.send("Email and password required");
		    }

		    User.findOne({email: email}, function (err, user) {

		      if (!user) {
		       		//return res.json(401, {err: 'invalid email or password'});
		       		res.send("Invalid Email and password");
		      }

		      User.comparePassword(password, user, function (err, valid) {

		        if (err) {
		          	//return res.json(403, {err: 'forbidden'});
		          	res.send("Access forbidden");
		        }

		        if (!valid) {
		          	//return res.json(401, {err: 'invalid email or password'});
		          	res.send("Invalid Email or password");
		        } else {
					//res.json(200, {user: user, token: jwToken.issue({id: user.id})});
					req.session.name = user.username;
                    res.view('user/welcome', { username: user.username}, {layout: 'layout_private' });

		        }

		      }); // end of compare password

		    }); // find user by email

	    }
	},
	'welcome': function(req, res){
		if (req.session && req.session.name) { // Check if session exists
			// expose the user to the template
        	res.locals.user = user;
			res.view();
		} else {
			req.session.reset();
		    res.redirect('/login');
	    }	
	},
	'logout': function (req, res) {
	  req.logout();
	  return res.ok('Logged out successfully.');
	},
	'register': function (req, res) {
	  User.create(req.params.all()).exec(function (err, user) {
	    if (err) return res.negotiate(err);
	    req.login(user, function (err){
	      if (err) return res.negotiate(err);
	      return res.redirect('/welcome');
	    });
	  });
	},
	forgotpassword: function (req, res) {

	    if (req.method === 'GET' && !req.session.name) {
	        res.view('user/login', {layout: 'layout_public' });
	    }


		var email = req.param('email');
	    var password = req.param('password');


	    if (!email || !password) {
	      	//return res.json(401, {err: 'email and password required'});
	      	res.send("Email and password required");
	    }

	    User.findOne({email: email}, function (err, user) {

			if (!user) {
					//return res.json(401, {err: 'invalid email or password'});
					res.send("Invalid Email");
			}

			// RANDOMIZE validation link with expiry period 

			// SEND email to user

			// REDIRECT to login


		});

	},
	'privacy': function (req, res) {
	  return res.ok('Logged out successfully.');
	},

};

