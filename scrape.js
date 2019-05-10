const rp = require('request-promise');
const request = require('request');
const url = 'https://status.bigcommerce.com/';
const ch = require('cheerio');

exports.scrape = function() {

// 	rp(url)
// 	  .then(function(html){
// 	    //success!
// 	    // console.log(ch('.name', html).length);
// 	    console.log(ch('.name', html).text());
// 	    console.log(ch('.component-inner-container', html).text());
// 	    // // var status = JSON.stringify(ch('.component-inner-container', html).text());
// 	    // var status = (ch('.component-inner-container', html));
// 	    // console.log("status: " + status);
// 	    return status;
// 	  })
// 	  .catch(function(err){
// 	    //handle error
// 	  });

// };

let nameArr = [];

let statusArr = [];


request(url, (err, res, body) => {

	// Load HTML body into cheerio
	const $ = ch.load(body);

	console.log($);

	// // Scrape Names
	// $('span.name').forEach((el) => {
	// 	nameArr.push(el.text());
	// });

	// // Scrape Statuses
	// $('span.component-status').forEach((i) => {
	// 	statusArr.push(i.text());
	// });

	console.log(nameArr);

});

};

//