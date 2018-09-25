const express = require('express');
const cors = require('cors');

const hotels = require('./routes/hotels');

const app = express();

app.use(cors());

app.set('port', (process.env.PORT || 80));

app.use('/api/hotels', hotels);

app.use(express.json());

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});