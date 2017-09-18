let express = require('express');
let router = express.Router();
let demo=require('../model/modelschema');

router.post('/',function(req, res) {

	demo.find({
	"username":req.body.username,
	"password":req.body.password
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
