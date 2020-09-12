require('dotenv/config');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 4000;

const mongoose = require('mongoose');

const postRoute = require('./routes/post');
//const userRoute = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('home');
});

app.use('/posts', postRoute);
//app.use('/users', userRoute);

//connect mongodb
mongoose.connect(process.env.DB_CONNECTION, function(){
  console.log('connected mongodb');
});

//listen for requests
app.listen(port, function(){
  console.log('listening on port '+port);
})