let mongoose=require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let weather = new Schema({
	city:String,
	date:String,
	max_temp:Number,
	min_temp:Number,
	humidity: Number,
  Description:String
},{collection:'Weather',versionKey:false});

let model=mongoose.model('Weather',weather);

module.exports=model;
