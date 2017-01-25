var express = require('express');
var bodyParser = require('body-parser');
var cfenv = require("cfenv");
var path = require('path');
var cors = require('cors');

//Setup Cloudant Service.
var appEnv = cfenv.getAppEnv();
//cloudantService = appEnv.getService("myMicroservicesCloudant");
var items = require('./routes/items');

//Setup middleware.
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'www')));

//REST HTTP Methods
app.get('/items', items.list);


app.listen(80, appEnv.bind);
console.log('App started on ' + appEnv.bind + ':' + 80);
