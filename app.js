'use strict';

require('dotenv').config();

const { urlencoded, json } = require('body-parser');
const path = require('path');
const http = require('http');

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const server = http.createServer(app)

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(require('./routes/webhook'));

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(port, () => {
    console.log(`Running on ${port}`);
});