var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
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

	getAlvAndEmit(socket)
		.then(getBCAndEmit(socket))
		.then(getBTAndEmit(socket))
		.then(getEnvoyAndEmit(socket))
		.then(getLCAndEmit(socket))
		.then(getSSAndEmit(socket))
		.then(getHSAndEmit(socket))
		.then(getStampsAndEmit(socket))

	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(() => getAlvAndEmit(socket)
		.then(getBCAndEmit(socket))
		.then(getBTAndEmit(socket))
		.then(getEnvoyAndEmit(socket))
		.then(getLCAndEmit(socket))
		.then(getSSAndEmit(socket))
		.then(getHSAndEmit(socket))
		.then(getStampsAndEmit(socket)), 10000);

	socket.on('disconnect', function() {
		console.log('Client disconnected');
	});

});

const getAlvAndEmit = async socket => {
	try {
		const res =  await request("https://status.avalara.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			let results = {'avalara': []};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("========================\nAVALARA\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.avalara.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

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
				console.log("========================\nBIG COMMERCE\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.bigCommerce.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getBTAndEmit = async socket => {
	try {
		const res =  await request("https://status.braintreepayments.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			let results = {'brainTree':[]};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				name === "United States Processing" ? name = "US Processing" : name = name;
				console.log("========================\nBRAIN TREE\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.brainTree.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getEnvoyAndEmit = async socket => {
	try {
		const res =  await request("https://status.envoy.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			let results = {'envoy':[]};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				console.log("========================\nENVOY\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.envoy.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			// results = {'envoy':[{name: 'Envoy Dashboard', status: "On Fire"}]};
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
				name === 'Marketplace Integrations' ? name = 'Mrktplace Integrations' : name = name;
				console.log("========================\nHELP SCOUT\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.helpScout.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getLCAndEmit = async socket => {
	try {
		const res =  await request("https://status.livechatinc.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			let results = {'liveChat':[]};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				name === 'Support chat on www.livechatinc.com' ? name = 'Support Chat' : name = name;
				console.log("========================\nLIVE CHAT\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.liveChat.push({
					name: name,
					status: status
				});
			});
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
				name === 'Marketplace Integrations' ? name = 'Mrktplace Integrations' : name = name;
				//  Print results to the console (for testing)
				console.log("========================\nSHIP STATION\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.shipStation.push({
					name: name,
					status: status
				});
			});
			response = results;
			// return results;
			socket.emit('newData', results);
		});

	} catch (error) {
		console.error(`Error: ${error.code}`);
	}
};

const getStampsAndEmit = async socket => {
	try {
		const res =  await request("https://status.stamps.com/", function(error, response, html) {
			var $ = cheerio.load(html);
			// (i: iterator, element: the current element)
			// let SSStatuses = [];
			let results = {'stamps': []};
			$("div.component-inner-container").each(function(i, element) {
				//  Declare our name and status variables for building our object.
				var name, status;
				//  Pull out the names from our span tags.
				name = $(element).children('.name').text().trim();
				//  Pull out the statuses from our span tags.
				status = $(element).children('.component-status').text().trim();
				//  Print results to the console (for testing)
				switch (name) {
					case 'Stamps.com Online (Printing Postage Using a Web Browser)':
						name = 'Stamps.com Online';
						break;
					case 'Stamps.com Software (Printing Postage Using our Windows Application)':
						name = 'Stamps.com Software';
						break;
					case 'Stamps.com API (SWS/Web Services)':
						name = 'Stamps.com API';
						break;
					case 'Stamps.com Reporting Tools (Postage History, Refunds & SCAN Forms)':
						name = 'Reporting Tools';
						break;
					default:
						break;	
				}
				console.log("========================\nSTAMPS.COM\n========================");
				console.log("name: " + name);
				console.log("status: " + status  + "\n========================");
				//  Save results in an object that we'll push into the results array we defined earlier.
				results.stamps.push({
					name: name,
					status: status
				});
			});
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

