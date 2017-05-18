var express = require('express');
var app = express();
var greetedList = {};
// create a route
app.get('/', function (req, res) {
 res.send('Hello World!');
});
app.get('/greeted', function (req, res) {
  var list = ''
  for(i in greetedList){
    list+=i+'<br>';
  }
  res.send(list);
});
app.get("/greeted/:name",function (req, res) {
  var name = req.params.name;
  if(name !== undefined){
    res.send("Hello, "+name+" has been greeted "+greetedList[name]+" time(s).");
    console.log("Hello, "+name+" has been greeted "+greetedList[name]+" time(s).");
  }
});
app.get('/greet/:name', function(req, res){
  var name = req.params.name;
  res.send("Hello, "+name);
  if(name !== undefined){
    if(greetedList[name] !== undefined){
      greetedList[name]+=1;
      return;
    }
    greetedList[name]=1;
  }
});
//start the server
var server = app.listen(3000);
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://'+port);
