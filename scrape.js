const rp = require('request-promise');
const request = require('request');
const url = 'https://status.bigcommerce.com/';
const cheerio = require('cheerio');

// //  Expose our 'scrape' function to be imported by our server.
// exports.scrape = function() {
	
// 	//  An empty array to save the data that we'll scrape.
// 	var results = [];

// 	//  Firstly, tell the console what scrape.js is doing
// 	console.log("\n***************************************\n" +
// 							"Grabbing names and statuses\n" + 
// 							"from 'http://status.bigcommerce.com/'" +
// 							"\n***************************************\n");

// 	//  Making a request from BigCommerce's status page.  The pages HTML is passed as the callback's third argument
// 	request(url, function(error, response, html) {

// 		//  Load the HTML into cheerio and save it as a variable.
// 		//  '$' becomes shorthand for cheerio's slector commands, much like jQuery's '$'
// 		var $ = cheerio.load(html);

// 		// //  An empty array to save the data that we'll scrape.
// 		// var results = [];

// 		//  With cheerio, find each div tag with the 'component-inner-container' class.
// 		// (i: iterator, element: the current element)
// 		$("div.component-inner-container").each(function(i, element) {

// 			//  Declare our name and status variables for building our object.
// 			var name, status;
// 			//  Pull out the names from our span tags.
// 			name = $(element).children('.name').text().trim();
// 			//  Pull out the statuses from our span tags.
// 			status = $(element).children('.component-status').text().trim();
// 			//  Print results to the console (for testing)
// 			console.log("name: " + name);
// 			console.log("status: " + status  + "\n========================");
// 			//  Save results in an object that we'll push into the results array we defined earlier.
// 			results.push({
// 				name: name,
// 				status: status
// 			});
// 		});

// 	});

// 	//  return our scraped data.
// 	return results;

// };

var options = {
	uri: url,
	transform: function (body) {
		return cheerio.load(body);
	}
};

//  Expose our 'scrape' function to be imported by our server.
exports.scrape = function() { 

	//  An empty array to save the data that we'll scrape.
	var results = [];

	rp(options)
		.then(function ($) {


		//  Firstly, tell the console what scrape.js is doing
		console.log("\n***************************************\n" +
								"Grabbing names and statuses\n" + 
								"from 'http://status.bigcommerce.com/'" +
								"\n***************************************\n");
		//  With cheerio, find each div tag with the 'component-inner-container' class.
		// (i: iterator, element: the current element)
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
			results.push({
				name: name,
				status: status
			});
		});

	})
	.catch(function (err) {
		console.log("err: " + err);
	});
	//  return our scraped data.
	return results;
};


