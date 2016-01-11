//require the request module
var request = require('request');

//make an http request returns a response value, error code and data
request('http://marsweather.ingenology.com/v1/latest/?format=json', function (error, response, data) {
  if (!error && response.statusCode == 200) {
     //dase the raw string into JSON object
     var info = JSON.parse(data);
     //log the JSON object to the console
     console.log(info)
  }
});
