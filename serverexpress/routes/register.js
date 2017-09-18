let express = require('express');
let router = express.Router();
let demo=require('../model/modelschema');

router.post('/', function(req, res) {

	demo.insertMany({
	"Name":req.body.Name,
	"username":req.body.username,
	"password":req.body.password,
  "password2":req.body.password2,
	"emailaddr":req.body.emailaddr
	},function(err,data){
		if(err)
		{
			console.log(err);
			res.send(err);
		}
		else{
			console.log(data);
			res.json(data);
		}
	})
  });
module.exports = router;
