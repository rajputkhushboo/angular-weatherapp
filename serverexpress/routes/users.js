let express = require('express');
let router = express.Router();
let demo=require('../model/schema');

router.post('/', function(req, res) {

	demo.insertMany({
	"city":req.body.city,
	"date":req.body.date,
	"max_temp":req.body.max_temp,
  "min_temp":req.body.min_temp,
	"humidity":req.body.humidity,
  "Description":req.body.Description
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
