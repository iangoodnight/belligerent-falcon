var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// var data = require('./scrape.js');
var path = require('path');
const rp = require('request-promise');
const request = require('request');
const url = 'https://status.bigcommerce.com/';
const cheerio = require('cheerio');

app.use(express.static(path.join(__dirname, 'public'))); // Dictates that root directory from which to serve static assets.

app.get('/', function(req, res) {
	res.sendFile(__dirname + './public/index.html');
});

let interval;

io.on('connection', socket => {
	console.log('New client connection received');
	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(() => getBCAndEmit(socket)
		.then(getSSAndEmit(socket))
		.then(getHSAndEmit(socket))
		.then(getAlvAndEmit(socket)), 10000);

	socket.on('disconnect', function() {
		console.log('Client disconnected');
	});

}); 

const getBCAndEmit = async socket => {
	try {
		const res =  await request(url, function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			let results = {'bigCommerce':[]};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.bigCommerce.push({
					name: name,
					status: status
				});
			});
			console.log("results: " + JSON.stringify(results));
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getSSAndEmit = async socket => {
	try {
		const res =  await request("http://status.shipstation.com", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			// let SSStatuses = [];
			let results = {'shipStation': []};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.shipStation.push({
					name: name,
					status: status
				});
			});
			console.log("results: " + JSON.stringify(results));
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getHSAndEmit = async socket => {
	try {
		const res =  await request("http://status.shipstation.com", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			// let SSStatuses = [];
			let results = {'helpScout': []};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.helpScout.push({
					name: name,
					status: status
				});
			});
			console.log("results: " + JSON.stringify(results));
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getAlvAndEmit = async socket => {
	try {
		const res =  await request("https://status.avalara.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			// let SSStatuses = [];
			let results = {'alvara': []};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.alvara.push({
					name: name,
					status: status
				});
			});
			console.log("results: " + JSON.stringify(results));
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};


http.listen(3001, function() {
	console.log('HTTP server started on port 3001');
});