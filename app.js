'use strict';

require('dotenv').config();

const { urlencoded, json } = require('body-parser');
const path = require('path');
const http = require('http');
const configHolder = require('./config');
const handleMessage = require('./services/handleMessage');
const handlePostback = require('./services/handlePostback');

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const server = http.createServer(app)

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/webhook', (req, res) => {
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token) {
        if (mode === 'subscribe' && token === configHolder.VERIFY_TOKEN) {
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
        } else {
            res.sendStatus(403);
        }
    }
});

app.post('/webhook', (req, res) => {
    let body = req.body;

    if (body.object === 'page') {
        body.entry.forEach(pageEntry => {
            pageEntry.messaging.forEach(messageEvent => {
                if (messageEvent.message) {
                    handleMessage(messageEvent);
                } else if (messageEvent.postback) {
                    handlePostback(messageEvent);
                }
            });
        });

        res.status(200).send('EVENT_RECEIVED');
    } else {
        res.sendStatus(404);
    }
});

server.listen(port, () => {
    console.log(`Running on ${port}`);
});