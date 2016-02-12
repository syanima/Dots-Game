var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public/html'));
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
  res.redirect('index.html');
});

app.post("/login",function(req,res){
    console.log("ghsvxytqtyqwx",req.body);
});

module.exports = app;
