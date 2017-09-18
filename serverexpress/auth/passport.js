var JwtStrategy = require('passport-jwt').Strategy; 
 var ExtractJwt = require('passport-jwt').ExtractJwt;
let demo =require('../model/modelschema');
let config=require('../config/config');

module.exports=function(passport){
  const opts = {
  jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey :config.secret}

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    demo.findOne({emailaddr: jwt_payload.emailaddr}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
	}