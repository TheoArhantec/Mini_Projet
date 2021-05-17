const config = require('./config/index')
const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors')
const cors = require('cors');
const mongoose = require('mongoose');

const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(`${config.MONGODB_URI}/${config.MONGODB_DB}`, {
	useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(cors())
app.use(express.json())

require('./routes/product.routes.js')(app);
require('./routes/category.routes.js')(app);

module.exports = app;