var express = require('express');
var partials = express.Router();
var path = require('path');

partials.use(function(req, res, next){
	// simple logger for this router's requests
	// all requests to this router will first hit this middleware
	console.log('original url: ' + req.originalUrl);
	console.log('%s %s %s', req.method, req.url, req.path);
	console.dir(req.params);
	next();
});
partials.param('filename', function(req, res, next, filename){
	console.dir('filename: '+ filename);
	req.filename = filename;
	next();
});

partials.get('/:filename', function(req, res, next){
	console.dir(req.params);
	console.dir('filename: '+ req.params.filename);
	console.log(path.join('partials', req.params.filename));
	res.render(path.join('partials', req.params.filename), { title: 'Express' });
//	res.render('partials/list.jade');

});

module.exports.partials = partials;