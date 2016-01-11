//require the request module
var request = require('request');
//make an https request with json format return

var fs = require('fs');
var date = new Date();

setInterval(function(){

request('https://www.sparkfun.com/products/12060.json', function (error, response, data) {
  //if there is no error and status code is 200 (OK)
  if (!error && response.statusCode == 200) {
    //parse data into a JSON object
    var stats = JSON.parse(data);
    //console basic product information
    var logString = String(date.toTimeString() + '   '+ 'Quantity: ' + stats.quantity + '\n');
    fs.appendFile('log.txt',logString),function(err){
      if(err){
         console.log('error writing file');
      }
   }
   console.log("--Log added--");
  }
  else{
     console.log(error);
 }
});

},60000);
