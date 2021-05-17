const config = require('./config/index')
const express = require('express');
require('express-async-errors')
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');


// TODO connection à la base de données


app.use(cors())
app.use(express.json())

module.exports = app;