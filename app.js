'use strict';

require('dotenv').config();

const { urlencoded, json } = require('body-parser');
const request = require('request');
const path = require('path');
const http = require('http');
const configHolder = require('./config');
const responseOrder = require('./utils/responseOrder');
const responseStructure = require('./utils/responseStructure');

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

/**
 *  maintain pool of connected users in connectedUsers
 *  {
 *      sender_psid1: responseOrder,
 *      sender_psid2: responseOrder,
 *      ...
 *  }
 */

var connectedUsers = {}

let previousSection = '';
let previousText = '';
let previousQuickReplies = '';

// Handles messages events
const handleMessage = (messageEvent) => {
    const message = messageEvent.message;
    const senderID = messageEvent.sender.id;
    let response;

    if (!(senderID in connectedUsers)) {
        connectedUsers[senderID] = responseOrder;
        console.log('CREATED:  ', connectedUsers[senderID]);
    }

    console.log('SECTION CHECK:  ', previousSection);
    console.log('QUESTION CHECK:  ', previousText)
    console.log('QUICK REPLY CHECK:  ', previousQuickReplies)

    let currentSection = '';
    let currentText = '';
    let currentQuickReplies = '';

    // section traversal
    connectedUsers[senderID].some(section => {
        if (!section.status) {
            currentSection = responseStructure[section.type];

            // questions traversal
            currentSection.questions.some(question => {
                if (!question.asked) {
                    if (typeof question.question === 'string') {
                        currentText = question.question
                        currentQuickReplies = question.quick_replies
                        question.asked = true
                    } else {
                        // question streak traversal
                        question.question.some(question => {
                            if (!question.done) {
                                currentText = question.ask
                                currentQuickReplies = question.quick_replies
                                question.done = true
                                return true
                            }
                        });

                        if (question.question[question.question.length - 1].done) {
                            question.asked = true
                        }
                    }
                    return true
                }
            });
            if (currentSection.questions[currentSection.questions.length - 1].asked) {
                section.status = true
            }
            return true
        }
    });
    console.log('SECTION CHECK:  ', currentSection);
    console.log('QUESTION CHECK:  ', currentText)
    console.log('QUICK REPLY CHECK:  ', currentQuickReplies)

    previousSection = currentSection;
    previousText = currentText;
    previousQuickReplies = currentQuickReplies;

    if (message.text || message.quick_reply) {
        response = {
            'text': `You sent the message: '${message.text}'. Now send me an attachment!`
        }
    } else if (message.quick_reply) {
        response = {
            "text": "Pick a color:",
            "quick_replies":[
                {
                    "content_type":"text",
                    "title":"Red",
                    "payload":"red",
                    "image_url":"http://example.com/img/red.png"
                },{
                    "content_type":"text",
                    "title":"Green",
                    "payload":"green",
                    "image_url":"http://example.com/img/green.png"
                }
            ]
        }
    } else if (message.attachments) {
        let attachment_url = message.attachments[0].payload.url;
        response = {
            'attachment': {
                'type': 'template',
                'payload': {
                    'template_type': 'generic',
                    'elements': [{
                        'title': 'Is this the right picture?',
                        'subtitle': 'Tap a button to answer.',
                        'image_url': attachment_url,
                        'buttons': [
                            {
                                'type': 'postback',
                                'title': 'Yes!',
                                'payload': {
                                    'text': 'Yes!',
                                    'name': 'Mayank'
                                },
                            },
                            {
                                'type': 'postback',
                                'title': 'No!',
                                'payload': 'no',
                            }
                        ],
                    }]
                }
            }
        }
    }

    callSendAPI(senderID, response);
}

// Handles messaging_postbacks events
const handlePostback = (postbackEvent) => {
    const senderID = postbackEvent.sender.id;
    const postback = postbackEvent.postback;
    let response;

    console.log(postbackEvent.payload)

    // let payload = postback.payload;
    //
    // if (payload === 'yes') {
    response = { 'text': 'Thanks!' }
    // } else if (payload === 'no') {
    //     response = { 'text': 'Oops, try sending another image.' }
    // }
    callSendAPI(senderID, response);
}

// Sends response messages via the Send API
const callSendAPI = (senderID, response) => {
    let request_body = {
        'recipient': {
            'id': senderID
        },
        'message': response
    }

    request({
        'uri': configHolder.SEND_API,
        'qs': { 'access_token': configHolder.ACCESS_TOKEN },
        'method': 'POST',
        'json': request_body
    }, (err) => {
        if (!err) {
            console.log('message sent!')
        } else {
            console.error('Unable to send message:' + err);
        }
    });
}