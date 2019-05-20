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
	for (var key in data) {
		var results = "";
		console.log("key: " + key)
		switch (key) {
			case ('shipStation'):
				console.log("case 1");
				for (var i = 0; i < data.shipStation.length; i++) {
					results = results + "<p>" + data.shipStation[i].name + ": " + data.shipStation[i].status + "</p>";
				}
				console.log("case 1 results: " + results);
				$("#ship-station").html(results);
				break;
			case ('bigCommerce'):
				console.log("case 2");
				for (var i = 0; i < data.bigCommerce.length; i++) {
					results = results + "<p>" + data.bigCommerce[i].name + ": " + data.bigCommerce[i].status + "</p>";
				}
				$("#big-commerce").html(results);
				break;
			case ('helpScout'):
			console.log("case 3");
				for (var i = 0; i < data.helpScout.length; i++) {
					results = results + "<p>" + data.helpScout[i].name + ": " + data.helpScout[i].status + "</p>";
				}
				$("#help-scout").html(results);
				break;
			case ('alvara'):
			console.log("case 4");
				for (var i = 0; i < data.alvara.length; i++) {
					results = results + "<p>" + data.alvara[i].name + ": " + data.alvara[i].status + "</p>";
				}
				$("#alvara").html(results);
				break;
			default:
				break;
		}
	}
	// switch (data) {
	// 	case data[0]
	// }
	for (var i = 0; i < data.length; i++) {
		results = results + "<p>" + data[i].name + ": " + data[i].status + "</p>";
	}
	$("#display").html(results);
	socket.emit('receivedFromClient', { my: 'data' });
});