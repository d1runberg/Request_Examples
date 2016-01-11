//require the request module
var request = require('request');
//make an https request with json format return
request('https://www.sparkfun.com/products/12060.json', function (error, response, data) {
  //if there is no error and status code is 200 (OK)
  if (!error && response.statusCode == 200) {
    //parse data into a JSON object
    var stats = JSON.parse(data);
    //console basic product information
    console.log("===Product Name===");
    console.log(stats.name);
    console.log("===Description===");
    console.log(stats.description_markdown);
    console.log('');
    console.log("===Current Price===");
    console.log(stats.price);
    console.log('');
    console.log("===Quantity in Stock===");
    console.log(stats.quantity);
  }
})
