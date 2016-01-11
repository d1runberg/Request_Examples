//require the request module
var request = require('request');
//send a request to the url and listen for a response, error and body of the return
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
});
