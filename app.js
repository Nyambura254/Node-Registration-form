// importing both the express module and (the export value of) our routes file into the application. 



// const express = require('express');
// const routes = require('./routes/index');

// const app = express();
// app.use('/', routes);

// module.exports = app;


const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

// configure app.js to use Pug as a layout engine and to look for templates inside the views folder

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

module.exports = app;