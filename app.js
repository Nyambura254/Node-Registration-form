// importing both the express module and (the export value of) our routes file into the application. 
const express = require('express');
const routes = require('./routes/index');

const app = express();
app.use('/', routes);

module.exports = app;