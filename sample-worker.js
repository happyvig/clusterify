"use strict";

var workerChores = function (workerId) {

	/* include Express */
	var express = require('express');

	/* port configuration */
	var port = 3333 || process.env.PORT;

	/* create a new Express application */
	var app = express();

	/* add a basic route */
	app.get('/', function (req, res) {

		res.send('<html><body><h1>Hello !!!  - says Mr.Worker ' + workerId + '</h1></body></html>');

		/* notify master about the incoming request */
		process.send({cmd: 'notifyRequest,' + req.hostname + ',' + req.ip});
	});

	/* listen for requests */
	app.listen(port, function () {
		console.log(' \nWorker : Mr.' + workerId + ' is running !!');
	});
};


module.exports.start = workerChores;