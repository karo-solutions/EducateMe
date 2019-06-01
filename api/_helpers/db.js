/*module.exports = {
    DB: 'mongodb://localhost:27017/educateme'
}*/
const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Test: require('../tests/test.model')
};