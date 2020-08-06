const responseOrder = require('../utils/responseOrder');
const responseStructure = require('../utils/responseStructure');
const callSendAPI = require('./callSendAPI');


/**
 *  maintain pool of connected users in connectedUsers
 *  {
 *      sender_psid1: {
 *          order: responseOrder,
 *          structure: responseStructure
 *      },
 *      sender_psid2: {
 *          order: responseOrder,
 *          structure: responseStructure
 *      },
 *      ...
 *  }
 */

var connectedUsers = {}

let currentSection = {};
let currentSectionName = '';
let currentQuestion = '';
let currentQuickReplies = [];

// Handles messages events
const handleMessage = (messageEvent) => {
    const message = messageEvent.message;
    const senderID = messageEvent.sender.id;

    if (!(senderID in connectedUsers)) {
        connectedUsers[senderID] = {
            order: responseOrder,
            structure: responseStructure
        };
    }

    let checkList = {
        'education': 2,
        'skills': 3,
        'work experience': 4,
        'projects': 5,
        'achievements': 6,
        'certifications': 7,
        'publications': 8
    }

    let connectedUserOrder = connectedUsers[senderID].order;
    let connectedUserStructure = connectedUsers[senderID].structure[currentSectionName];

    let toPrepareResume = false;

    if (message.quick_reply && (senderID in connectedUsers)) {
        if (currentSectionName === 'begin' && message.quick_reply.payload === currentQuickReplies[1]) {
            delete connectedUsers[senderID];
        } else if (currentSectionName in checkList) {
            if (typeof connectedUserStructure.questions[0].question === 'string' && connectedUserStructure.questions[0].question === currentQuestion && message.quick_reply.payload === currentQuickReplies[1]) {
                connectedUserStructure.questions[0].asked = true
                connectedUserStructure.questions[1].asked = true
                connectedUserOrder[checkList[currentSectionName]].status = true
            } else if (connectedUserStructure.questions[1].question[connectedUserStructure.questions[1].question.length - 1].ask === currentQuestion && message.quick_reply.payload === currentQuickReplies[0]) {
                connectedUserStructure.questions[1].asked = false;
                connectedUserOrder[checkList[currentSectionName]].status = false
                connectedUserStructure.questions[1].question.forEach(question => {
                    question.done = false
                });
            }
        } else if (currentSectionName === 'end' && message.quick_reply.payload === currentQuickReplies[0]) {
            toPrepareResume = true;
        }
    }

    // check if we have reached the end or not
    if (!toPrepareResume && (senderID in connectedUsers)) {
        // section traversal
        connectedUserOrder.some(section => {
            if (!section.status) {
                currentSection = connectedUsers[senderID].structure[section.type];
                currentSectionName = section.type;

                // questions traversal
                currentSection.questions.some(question => {
                    if (!question.asked) {
                        if (typeof question.question === 'string') {
                            currentQuestion = question.question
                            currentQuickReplies = question.quick_replies
                            question.asked = true
                        } else {
                            // question streak traversal
                            question.question.some(question => {
                                if (!question.done) {
                                    currentQuestion = question.ask
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
    }

    let response;

    if (message.text || message.quick_reply) {
        // with quick reply
        if (currentQuickReplies.length > 0) {
            // let quickReplies = []
            response = {
                text: currentQuestion,
                quick_replies: []
            };

            for (let quickReply of currentQuickReplies) {
                response["quick_replies"].push({
                    content_type: "text",
                    title: quickReply,
                    payload: quickReply
                });
            }
            // without quick reply
        } else if (currentQuickReplies.length === 0) {
            response = {
                'text': currentQuestion
            }
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
                                'payload': 'yes',
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

module.exports = handleMessage