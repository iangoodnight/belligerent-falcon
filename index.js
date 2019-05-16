var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var data = require('./scrape.js');
var path = require('path');

var newScrape = data.scrape();

app.use(express.static(path.join(__dirname, 'public'))); // Dictates that root directory from which to serve static assets.

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	console.log('Client connection received');

	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	socket.emit('data', newScrape);
	console.log("new scrape: " + JSON.stringify(newScrape));

	socket.on('receivedFromClient', function(data) {
		console.log(data);
	});

	setInterval(function() {
		newScrape = data.scrape();

		socket.emit('newData', newScrape);

		console.log('Last updated: ' + new Date());
		console.log('interval scrape: ' + JSON.stringify(newScrape));

	}, 75000);

}); 

http.listen(3001, function() {
	console.log('HTTP server started on port 3001');
});


// setInterval(function() {
// 	newScrape = data.scrape();

// 	io.emit('newData', newScrape);

// 	console.log('Last updated: ' + new Date());
// 	console.log('interval scrape: ' + newScrape);

// }, 75000);