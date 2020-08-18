'use strict';

require('dotenv').config();

const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

// compressing api response
app.use(compression());

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// logger
app.use(morgan('dev'));

// security config
app.use(helmet());

// routes
app.use(require('./routes/webhook'));

app.get('/', (req, res) => {
    res.render('index');
});

// port initialized
const port = process.env.PORT || 8080;

// server setup
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Running on ${port}`);
});