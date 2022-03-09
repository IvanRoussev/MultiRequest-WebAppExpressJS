const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.get('/',function(req,res){
  res.sendFile('/index.html');
});

app.get('./about',function(req,res){
  res.sendFile('./about.html');
});



app.listen(3000);

console.log('Running at Port 3000');