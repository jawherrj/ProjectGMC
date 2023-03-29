var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var opts = {};
const usermodel = require("../../model/User");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.jwtcode;
passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await usermodel
        .findOne({ _id: jwt_payload.userid })
        .select("-pasword");
      console.log(user);
      if (!user) {
        done(null, false);
        // or you could create a new account
      }
      done(null, user); //req.user=user
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = isauth = () =>
  passport.authenticate("jwt", { session: false });
