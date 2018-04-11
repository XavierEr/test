var express = require('express');
var bodyParser = require('body-parser');

var hotels = require('./routes/hotels');

var app = express();

app.set('port', (process.env.PORT || 80));

app.use('/api/hotels', hotels);

app.use(bodyParser.json());

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});