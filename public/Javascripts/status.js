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
			case ('avalara'):
			console.log("case 1");
				populate(key, data);
				break;
			case ('bigCommerce'):
				console.log("case 2");
				populate(key, data);
				break;
			case ('brainTree'):
				console.log("case 3");
				populate(key, data);
				break;
			case ('envoy'):
				console.log("case 4");
				populate(key, data);
				break;
			case ('helpScout'):
				console.log("case 5");
				populate(key, data);
				break;
			case ('liveChat'):
				console.log("case 6");
				populate(key, data);
				break;
			case ('shipStation'):
				console.log("case 7");
				populate(key, data);
				break;
			case ('stamps'):
				console.log("case 8");
				populate(key, data);
				break;
			default:
				break;
		}
	}

	socket.emit('receivedFromClient', { my: 'data' });
});

function populate(key, data) {

	var results = "";
	if (key === 'avalara') {
		console.log("checking status: " + data.avalara[0].status);
		data.avalara[0].status === "Operational" ? $("#avatax").html("<div class=\"col-sm tbstyle\">Avalara AvaTax</div><div class=\"col-sm tbstyle green\">Operational</div>")
		:  $("#avatax").html("<div class=\"col-sm tbstyle\">Avalara AvaTax</div><div class=\"col-sm tbstyle redalert\">Offline</div>");
	} else if (key === 'bigCommerce') {
		var status1, status2, status3, status4, status5, status6, status7, status8;

		data.bigCommerce[0].status === "Operational" ? status1 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Storefront</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status1 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Storefront</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[1].status === "Operational" ? status2 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Control Panel</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status2 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Control Panel</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[2].status === "Operational" ? status3 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">API</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status3 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">API</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[5].status === "Operational" ? status4 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">DNS</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status4 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">DNS</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[9].status === "Operational" ? status5 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Search/Faceted Search</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status5 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Search/Faceted Search</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[18].status === "Operational" ? status6 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">3rd Party Services</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status6 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">3rd Party Services</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[19].status === "Operational" ? status7 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Avalara Integrations</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" : 
													   status7 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Avalara Integrations</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>";
		data.bigCommerce[20].status === "Operational" ? status8 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Brain Tree Integrations</div>" +
																   "<div class=\"col-sm tbstyle green\">Operational</div>" +
																 "</div>" +
																 "<div class=\"row\">" +
															       "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																	"<div class=\"col-sm tbstyle dim\">No Service</div>" +
																 "</div>" +
																 "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																   "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																 "</div>" : 
													   status8 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">Brain Tree Integrations</div>" +
																   "<div class=\"col-sm tbstyle redalert\">Offline</div>" +
																 "</div>" +
																 "<div class=\"row\">" +
															       "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																	"<div class=\"col-sm tbstyle dim\">No Service</div>" +
																 "</div>" +
																 "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																   "<div class=\"col-sm tbstyle dim\">No Service</div>" +
																 "</div>";
		results = "<div class=\"row tbstyle\">" +
				    "<div class=\"col-sm tbstyle\">BigCommerce</div>" +
				  "</div>" + status1 + status2 + status3 + status4 + status5 + status6 + status7 + status8;
		$("#bc").html(results);
	} else if (key === 'brainTree') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">BrainTree</div>" +
				   "</div>";
		for (i in data.brainTree) {
			data.brainTree[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.brainTree[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.brainTree[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.brainTree[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.brainTree[i].status + "</div>" +
																	"</div>";
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#bt").html(results);
	} else if (key === 'envoy') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">Envoy</div>" +
				   "</div>";
		for (i in data.envoy) {
			data.envoy[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.envoy[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.envoy[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.envoy[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.envoy[i].status + "</div>" +
																	"</div>";
		    if (i == 0) break;
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#envoy").html(results);		
	} else if (key === 'helpScout') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">HelpScout</div>" +
				   "</div>";
		for (i in data.helpScout) {
			data.helpScout[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.helpScout[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.helpScout[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.helpScout[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.helpScout[i].status + "</div>" +
																	"</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#helpScout").html(results);
	} else if (key === 'liveChat') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">LiveChat</div>" +
				   "</div>";
		for (i in data.liveChat) {
			data.liveChat[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.liveChat[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.liveChat[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.liveChat[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.liveChat[i].status + "</div>" +
																	"</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#liveChat").html(results);
	} else if (key === 'shipStation') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">ShipStation</div>" +
				   "</div>";
		for (i in data.shipStation) {
			data.shipStation[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.shipStation[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.shipStation[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.shipStation[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.shipStation[i].status + "</div>" +
																	"</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#shipStation").html(results);
	} else if (key === 'stamps') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">Stamps.com</div>" +
				   "</div>";
		for (i in data.stamps) {
			data.stamps[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.stamps[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.stamps[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.stamps[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.stamps[i].status + "</div>" +
																	"</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#stamps").html(results);
	}
};