let express = require('express') ;
let bodyParser = require('body-parser') ;
let morgan = require('morgan') ;
let fs = require('fs') ;
let path = require('path') ;
let users = require('./routes/users') ;
let index = require('./routes/index'); 
let register = require('./routes/register');
let login = require('./routes/login');
let mongoose=require('mongoose');
let config=require('./config/config');
let app=express();
let cors=require('cors');
let passport=require('passport');
let passportJwt=require('passport-jwt');
let jwt=require('jsonwebtoken')
let Userschema=require('./model/modelschema');
require('./auth/passport')(passport); 
 let apiRoutes= express.Router();

app.use(cors());
mongoose.connect(config.url);
mongoose.connection.on('connected',()=>{
	console.log("connected");
})

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/',index);
app.use('/users',users);
app.use('/register',register);
app.use('/login',login);




apiRoutes.post('/register',function(req,res){
	if(!req.body.emailaddr || !req.body.password){
		res.json({ success: false, message: 'please enter correct mailId or Password'});
	}
	else{
		var newUser=new Userschema({
	Name:req.body.Name,
	username:req.body.username,
	password:req.body.password,
	password2:req.body.password2,
	emailaddr:req.body.emailaddr
		})
	newUser.save(function(err){
		if(err){
			return res.json({success:false, message:'email already exist'});
		}
		res.json({ success:true,message: 'successfully registered '});
		});
	}
});


apiRoutes.post('/authenticate', function(req, res) {  
  Userschema.findOne({
    emailaddr: req.body.emailaddr
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
        	/*var payload = {
        		id : req.body.id,
        		emailId : req.body.emailId
        	}*/
        	console.log(user);
          var token = jwt.sign({ id:req.body.id, emailaddr:req.body.emailaddr }, config.secret, {
            expiresIn: 20000
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

apiRoutes.get('/login',passport.authenticate('jwt',{session:false}),
	function(req,res){
		res.send('It worked!! Id is: '+ req.user.emailaddr);
	});

app.use('/api',apiRoutes);

app.use((req,res,next)=>{
	let err=new Error('Not Found');
	err.status(404);
	next(err);
});

app.listen(8000,()=>{});
module.exports=app;
