const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/user.controller.js'));
app.use('/tests', require('./tests/test.controller.js'));

// global error handler
app.use(errorHandler);

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});
