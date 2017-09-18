let express = require('express');
let router = express.Router();
let demo=require('../model/schema');

	router.get('/',(req, res)=> {
	demo.find((err,data)=>{
		if(err)
			{
			res.send(err);
			}
			else
			{
				res.json(data);
			}
	});
});

router.put('/:date/:city/:description',(req,res,next)=>{
	demo.update({'date':req.params.date,
               'city':req.params.city
			},
		{$set:{'Description':req.params.description}},(err,data)=>{
			if(err)
			{
				res.send(err);
			}
			else
			{
				res.json(data);
			}

		})
});

router.delete('/:date/:city',(req,res,next)=>{
	demo.remove({
		'date':req.params.date,
		'city':req.params.city

	},(err,data)=>{
		if(err)
		{
			res.send(err);
		}
		else
		{
				res.json(data); //({demoindex:data});
		}
		})
});
module.exports = router;
