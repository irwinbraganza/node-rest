var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	User = require('./src/models/userModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/corona-db')


app.use(bodyParser.urlencoded({exteded:true}));
app.use(bodyParser.json());

var routes = require('./src/routes/userRoutes');
routes(app);

app.listen(port);

console.log("Corona API's live and running on: "+ port);