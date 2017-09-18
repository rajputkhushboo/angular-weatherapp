let express = require('express');
let index = require('../routes/index'); 
let users = require('../routes/users'); 
let sinon = require('sinon') ;
let supertest = require('supertest');
let expect=require('chai').expect;
let assert=require('chai').assert;
let should=require('chai').should();
let model=require('../model/schema');
let app = require('../app');
let istanbul = require('istanbul');

let getstub=sinon.stub(model,'find');
let poststub=sinon.stub(model,'insertMany');
let putstub=sinon.stub(model,'update');
let deletestub=sinon.stub(model,'remove');

let url=supertest('http://localhost:8000');

describe('http methods',()=> {
	beforeEach(()=>{
		getstub.yields(null,[{city :'Mumbai',date:'2017-09-12',max_temp:'30',min_temp:'30',humidity:'75', Description:'cloudy'}]);
		poststub.yields(null,[{city :'delhi',date:'2017-09-13',max_temp:'30',min_temp:'31',humidity:'76',Description:'rainy'}]);
		putstub.yields(null,{"ok": 1,"nModified": 1,"n": 1});
		deletestub.yields(null,[{city :'Mumbai',date:'2017-09-11',max_temp:'31',min_temp:'32',humidity:'74',Description:'sunny'}]);
	})

	it('get method works',(done)=>{
		url
		.get('/')
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.equal(res.body[0].city,'Mumbai');
			res.body[0].city.should.be.a('string');
			res.body[0].humidity.should.not.equal(0);
			done();
		})
	});

	it('post method works',(done)=>{
		url
		.post('/users')
		.send([{city :'delhi',date:'2017-09-13',max_temp:'30',min_temp:'31',humidity:'76',Description:'rainy'}])
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.equal(res.body[0].city,'delhi');
			res.body[0].city.should.be.a('string');
			res.body[0].humidity.should.not.equal(0);
			done();
		})
	});

	it('put method works',(done)=>{
		url
		.put('/:date/:city/:description')
		.send([{city :'delhi',date:'2017-09-14',max_temp:'31',min_temp:'29',humidity:'71',Description:'partial sunny'}])
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.deepEqual(res.body,{ ok: 1, nModified: 1, n: 1 });
			done();
		})
	});

	it('delete method works',(done)=>{
		url
		.delete('/:date/:city')
		.send([{city :'Mumbai',date:'2017-09-11',max_temp:'31',min_temp:'32',humidity:'74',Description:'sunny'}])
		.expect('Content-Type',/json/)
		.end((err,res)=>{
			assert.equal(res.body[0].city,'Mumbai');
			done();
		})
	});
});
