console.log("Ready!");
var socket = io();
socket.on('newData', function(data) {
	// console.log(data);
	for (var key in data) {
		var results = "";
		// console.log("key: " + key)
		switch (key) {
			case ('avalara'):
				// console.log("case 1");
				populate(key, data);
				break;
			case ('bigCommerce'):
				// console.log("case 2");
				populate(key, data);
				break;
			case ('brainTree'):
				// console.log("case 3");
				populate(key, data);
				break;
			case ('envoy'):
				// console.log("case 4");
				populate(key, data);
				break;
			case ('helpScout'):
				// console.log("case 5");
				populate(key, data);
				break;
			case ('liveChat'):
				// console.log("case 6");
				populate(key, data);
				break;
			case ('shipStation'):
				// console.log("case 7");
				populate(key, data);
				break;
			case ('stamps'):
				// console.log("case 8");
				populate(key, data);
				break;
			default:
				break;
		}
	}

	socket.emit('receivedFromClient', { my: 'big hug' });
});

function populate(key, data) {

	var results = "";
	if (key === 'avalara') {
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">Avalara</div>" +
				   "</div>";
		for (i in data.avalara) {
			if (data.avalara[i].name === "Batch Processing Service") {
				data.avalara[i].name = "Batch Processing";
			};
			if (data.avalara[i].name === "Avalara Customer Portal") {
				data.avalara[i].name = "Customer Portal";
			};
			data.avalara[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.avalara[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.avalara[i].status + "</div>" +
																	"</div>" :
																	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.avalara[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.avalara[i].status + "</div>" +
																	"</div>";
		    if (i == 9) break;
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#avalara").html(results);
	} else if (key === 'bigCommerce') {
		var status1, status2, status3, status4, status5, status6, status7, status8;

		// console.log("big commerce raw: " + JSON.stringify(data.bigCommerce));

		data.bigCommerce[0].status === "Operational" ? status1 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[0].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[0].status + "</div>" +
																 "</div>" : 
													   status1 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[0].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[0].status + "</div>" +
																 "</div>";
		data.bigCommerce[1].status === "Operational" ? status2 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[1].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[1].status + "</div>" +
																 "</div>" : 
													   status2 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[1].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[1].status + "</div>" +
																 "</div>";
		data.bigCommerce[2].status === "Operational" ? status3 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[2].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[2].status + "</div>" +
																 "</div>" : 
													   status3 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[2].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[2].status + "</div>" +
																 "</div>";
		data.bigCommerce[5].status === "Operational" ? status4 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[3].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[3].status + "</div>" +
																 "</div>" : 
													   status4 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[3].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[3].status + "</div>" +
																 "</div>";
		data.bigCommerce[9].status === "Operational" ? status5 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[5].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[5].status + "</div>" +
																 "</div>" : 
													   status5 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[5].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[5].status + "</div>" +
																 "</div>";
		data.bigCommerce[20].status === "Operational" ? status6 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[8].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[8].status + "</div>" +
																 "</div>" : 
													   status6 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[8].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[8].status + "</div>" +
																 "</div>";
		data.bigCommerce[20].status === "Operational" ? status7 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[20].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[20].status + "</div>" +
																 "</div>" : 
													   status7 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[20].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[20].status + "</div>" +
																 "</div>";
		data.bigCommerce[20].status === "Operational" ? status8 = "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[21].name + "</div>" +
																   "<div class=\"col-sm tbstyle green\">" + data.bigCommerce[21].status + "</div>" +
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
																   "<div class=\"col-sm tbstyle\">" + data.bigCommerce[21].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.bigCommerce[21].status + "</div>" +
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
														 results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.brainTree[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.brainTree[i].status + "</div>" +
																	"</div>";
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
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
			if (data.envoy[i].name === "Notification integrations") {
				data.envoy[i].name = "Notify Integrations";
			};
			data.envoy[i].status === "Operational" ? results += "<div class=\"row\">" +
																  "<div class=\"col-sm tbstyle\">" + data.envoy[i].name + "</div>" +
																  "<div class=\"col-sm tbstyle green\">" + data.envoy[i].status + "</div>" +
															    "</div>" :
													 results += "<div class=\"row\">" +
																  "<div class=\"col-sm tbstyle\">" + data.envoy[i].name + "</div>" +
																  "<div class=\"col-sm tbstyle redalert\">" + data.envoy[i].status + "</div>" +
																"</div>";
		    if (i == 5) break;
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#envoy").html(results);		
	} else if (key === 'helpScout') {
		// console.log("helpscout: " + JSON.stringify(data.helpScout));
		results += "<div class=\"row tbstyle\">" +
				     "<div class=\"col-sm tbstyle\">HelpScout</div>" +
				   "</div>";
		for (i in data.helpScout) {
			data.helpScout[i].status === "Operational" ? results += "<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.helpScout[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle green\">" + data.helpScout[i].status + "</div>" +
																	"</div>" :
														 results +=	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.helpScout[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.helpScout[i].status + "</div>" +
																	"</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
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
														results +=	"<div class=\"row\">" +
																	  "<div class=\"col-sm tbstyle\">" + data.liveChat[i].name + "</div>" +
																	  "<div class=\"col-sm tbstyle redalert\">" + data.liveChat[i].status + "</div>" +
																	"</div>";
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
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
														   results += "<div class=\"row\">" +
																	    "<div class=\"col-sm tbstyle\">" + data.shipStation[i].name + "</div>" +
																	    "<div class=\"col-sm tbstyle redalert\">" + data.shipStation[i].status + "</div>" +
																	  "</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
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
													  results += "<div class=\"row\">" +
																   "<div class=\"col-sm tbstyle\">" + data.stamps[i].name + "</div>" +
																   "<div class=\"col-sm tbstyle redalert\">" + data.stamps[i].status + "</div>" +
																 "</div>";
		    // if (i == 0) break;
		}
		var filler = 10 - i;
		// console.log("Debug: " + i);
		for (var j = 0; j < filler - 1; j++) {
			results += "<div class=\"row\">" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
						 "<div class=\"col-sm tbstyle dim\">No Service</div>" +
					   "</div>";
		}
		$("#stamps").html(results);
	}
	let updated = new Date();
	$("#update").html("Updated: " + updated);
};