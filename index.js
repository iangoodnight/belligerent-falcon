var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var data = require('./scrape.js');

var newScrape = data.scrape();

console.log(data);
// // Load data for client's first connect
// // update every *N* minutes
// data.scrape().then((status) => {
// 	newScrape = status;
// })

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

http.listen(3001, function() {
	console.log('HTTP server started on port 3001');
});

io.on('connection', function(socket) {
	console.log('Client connection received');

	socket.emit('data', newScrape);

	socket.on('receivedFromClient', function (data) {
		console.log(data);
	});
}); 

setInterval(function() {
	newScrape = data.scrape();

	io.emit('data', newScrape);

	console.log('Last updated: ' + new Date());

}, 75000);