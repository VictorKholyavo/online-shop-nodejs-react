const passport = require("passport");
const jwt = require("jsonwebtoken");

const User = require("../schemas/users");

require("../helpers/passport-strategies");

function signin(req, res, next) {
	return new Promise((resolve, reject) => {
		passport.authenticate('local', {session: false},
			function(err, user) {
				if (err) {
					return reject(err);
				}
				if (!user) {
					return reject("error");
				}
				req.logIn(user, {session: false}, function(err) {
					if (err) {
						return reject(err);
					}
					const token = jwt.sign({id: user._id, username: user.username}, "secret for token")
					return resolve({
						success: true,
						err: null,
						token: token
					});
				});
			})(req, res, next);
	})
}

function signup(req, res, next) {
	return new Promise((resolve, reject) => {
		if (req.body.email && req.body.password) {
			let newUser = new User ({
				email: req.body.email,
				username: req.body.username,
				password: req.body.password
			});
			newUser.save(function (err, user) {
				const token = jwt.sign({id: user._id, username: user.username}, "secret for token")
				return resolve({
					success: true,
					err: null,
					token: token
				});
			});
		}
	})
}

module.exports = {
	signin,
	signup
};