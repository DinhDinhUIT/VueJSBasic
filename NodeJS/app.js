var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const mongoURI = 'mongodb://localhost:27017/nodejs';

mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(() => console.log('Connected database from mongoDB.'))
    .catch((error) => console.log(`Connect database is failed with error which is ${error}`));

var Users = require("./routes/Users");

app.use("", Users);

app.listen(port, function(){
    console.log(`Server is running on port ${port}`);
})
