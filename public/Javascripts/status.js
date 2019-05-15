console.log("Ready!");
var socket = io();
socket.on('data', function(data) {
	console.log(data);
	var results = "";
	for (var i = 0; i < data.length; i++) {
		results = results + "<p>" + data[i].name + ": " + data[i].status + "</p>";
	}
	$("#display").html(results);
	socket.emit('receivedFromClient', { my: 'data' });
});
socket.on('newData', function(data) {
	console.log(data);
	var results = "";
	for (var i = 0; i < data.length; i++) {
		results = results + "<p>" + data[i].name + ": " + data[i].status + "</p>";
	}
	$("#display").html(results);
	socket.emit('receivedFromClient', { my: 'data' });
});