var express = require('express');

var app = express();

app.get('/', function(req,res) {
   res.send('hello world 123'); 
});

app.listen(8100);
console.log('http://localhost:8100/');
