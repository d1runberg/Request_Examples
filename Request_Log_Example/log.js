//require the request module
var request = require('request');
//require the filesystem module
var fs = require('fs');
//create a new Date object for timestamp
var date = new Date();
//use setInterval to create a repeating loop
setInterval(function(){
//request data from spark.com about the SIK
request('https://www.sparkfun.com/products/12060.json', function (error, response, data) {
  //if there is no error and status code is 200 (OK)
  if (!error && response.statusCode == 200) {
    //parse data into a JSON object
    var stats = JSON.parse(data);
    //create a logstring using the current date and time plus the quanity of the SIK
    var logString = String(date.toTimeString() + '   '+ 'Quantity: ' + stats.quantity + '\n');
    //append the log.txt file with the logstring
    fs.appendFile('log.txt',logString),function(err){
      if(err){
         //if error print error message
         console.log('error writing file');
      }
   }
   //log message everytime a log is successfully appended
   console.log("--Log added--");
  }
  else{
     console.log(error);
 }
});
//repeat every minute (60,000ms)
},60000);
