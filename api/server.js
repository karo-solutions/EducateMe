const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./_helpers/db.js');
const postRoute = require('./post.route');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

mongoose.Promise = global.Promise;
/*mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);*/

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// use JWT auth to secure the api
app.use(jwt());

app.use('/posts', postRoute);

// api routes
app.use('/users', require('./users/user.controller.js'));
app.use('/tests', require('./tests/test.controller.js'));

// global error handler
app.use(errorHandler);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
