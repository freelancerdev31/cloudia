const express = require('express');
const app 	  = express();
var _         =  require('underscore');
var crawler   = require("crawler");
app.get('/', function(req, res){
	
var c = new crawler({
    rateLimit: 1000,
    callback: function(err, res1, done){
			_.each(res1.$('meta'), function(item){
					console.log('*--------------------------------------------------------------------');
			_.each(item.attribs, function(item1,index){
					console.log('* Meta Attribute : ', index);
					console.log('* Meta Value : ', item1);
			});
					console.log('*-------------------------------------------------------------------');
			});
        done();
    }
});
c.queue('http://www.amazon.com');
});


module.exports = app;