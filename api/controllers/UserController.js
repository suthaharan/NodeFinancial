/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash={};
	},
	'create': function(req, res, next){
		User.create( req.params.all(), function userCreated(err, user){
			//if (err) return next(err);
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}
			}

			res.json(user);
			req.session.flash={};
		});
	}
};

