const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;

const bcrypt = require("bcrypt");

const User = require("../schemas/users");

passport.use(new JWTStrategy({
		jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
		secretOrKey   : "secret for token"
	},
	function (jwtPayload, cb) {
		return User.findById(jwtPayload.id)
			.then(user => {
				return cb(null, user);
			})
			.catch(err => {
				return cb(err);
			});
	}
));

passport.use(new LocalStrategy({ usernameField: "email" },
	function (username, password, done) {
		User.findOne({
			email: username
		}, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!user) {
				return done(null, false);
			}
			if (!bcrypt.compareSync(password, user.password)) {
				return done(null, false);
			}
			return done(null, user);
		});
	}
));

module.exports = passport;