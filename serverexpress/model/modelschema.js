let mongoose=require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;
let bcrypt=require("bcrypt");

let register = new Schema({
	Name:String,
	username:String,
	password:String,
	password2:String,
	emailaddr: {type:String, unique:true}
},{collection:'register',versionKey:false});


register.pre('save', function (next) {  
  var user = this;
  console.log(user);
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});


register.methods.comparePassword=function(pw,cb){
	bcrypt.compare(pw,this.password,function(err,isMatch){
		if(err){
			return cb(err);
		}
		cb(null,isMatch);
	});
};
let model=mongoose.model('register',register);

module.exports=model;
