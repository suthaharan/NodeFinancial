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
			//if (err) return next(err);
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/user/new');
			}

			res.json(user);
		});
	},
	login: function (req, res) {
	    if (req.method === 'GET' && !req.session.name) {
	        res.view('user/login', {layout: 'layout_public' });
	    }
	    else if (req.session.name) {
	        res.view('user/welcome', { username: req.session.name }, {layout: 'layout_private' });
	    } else {
	        User.findOne({ email: req.param('email'), password: req.param('password')})
	            .exec(function (err, user) {
	                if (err) res.send(err);
	                if (!user) res.send("User Not Found");
	                else {
	                    req.session.name = user.name;
	                    res.view('user/welcome', { username: user.name}, {layout: 'layout_private' });
	                }
	            });
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
	    else if (req.session.name) {
	        res.view('user/welcome', { username: req.session.name }, {layout: 'layout_private' });
	    } else {
	        User.findOne({ email: req.param('email'), password: req.param('password')})
	            .exec(function (err, user) {
	                if (err) res.send(err);
	                if (!user) res.send("User Not Found");
	                else {
	                    req.session.name = user.name;
	                    res.view('user/welcome', { username: user.name}, {layout: 'layout_private' });
	                }
	            });
	    }
	},
	'privacy': function (req, res) {
	  return res.ok('Logged out successfully.');
	},

};

