const fs = require('fs');

const fontPackage = require('../resources/scimisc-cv');
const responseOrder = require('../utils/responseOrder');
const responseStructure = require('../utils/responseStructure');
const {
    genQuestion,
    genQuickReplies,
    genAttachment
} = require('./genMessages');


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

let currentSectionName = '';
let currentQuestion = '';
let currentQuickReplies = [];

// Handles messages events
const handleMessage = (messageEvent) => {
    const senderID = messageEvent.sender.id;
    var folderPath = `public/${senderID}`;

    if (!(senderID in connectedUsers)) {
        connectedUsers[senderID] = {
            order: responseOrder,
            structure: responseStructure
        };
    }

    if (!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath);
    }

    let connectedUser = connectedUsers[senderID];
    const message = messageEvent.message;

    let checkList = {
        'education': 2,
        'skills': 3,
        'work experience': 4,
        'projects': 5,
        'achievements': 6,
        'certifications': 7,
        'publications': 8
    }

    let toPrepareResume = false;

    // pointer manipulation based on user reply
    if (message.quick_reply && (senderID in connectedUsers)) {
        let { questions } = connectedUser.structure[currentSectionName];
        let connectedUserOrder = connectedUser.order[checkList[currentSectionName]];

        if (currentSectionName === 'begin' && message.quick_reply.payload === currentQuickReplies[1]) {
            delete connectedUsers[senderID];
        } else if (currentSectionName in checkList) {
            if (typeof questions[0].question === 'string' && questions[0].question === currentQuestion && message.quick_reply.payload === currentQuickReplies[1]) {
                questions[0].asked = true
                questions[1].asked = true
                connectedUserOrder.status = true
            } else if (questions[1].question[questions[1].question.length - 1].ask === currentQuestion && message.quick_reply.payload === currentQuickReplies[0]) {
                questions[1].asked = false;
                connectedUserOrder.status = false
                questions[1].question.forEach(question => {
                    question.done = false
                });
            }
        } else if (currentSectionName === 'end' && message.quick_reply.payload === currentQuickReplies[0]) {
            toPrepareResume = true;
        }
    }

    // Resume file creation
    if (message.text && !message.quick_reply && currentSectionName !== '') {
        console.log('RESPONSE CHECK:', message.text);
        console.log('SECTION NAME CHECK:', currentSectionName);
        console.log('QUESTION CHECK:', currentQuestion);

        let currentSection = connectedUser.structure[currentSectionName];

        const resume = fs.createWriteStream(folderPath + '/main.tex');
        const resume_template = fs.createWriteStream(folderPath + '/scimisc-cv.sty');
        resume_template.write(fontPackage)

        fs.readFile(`${folderPath}/scimisc-cv.sty`, 'utf8', (err, data) => {
            console.log(data);
        });
        const filePath = folderPath + '/main.tex';

        if (currentSectionName === 'header') {
            switch (currentQuestion) {
                case currentSection.questions[0].question:
                    fs.appendFile(filePath, `
                    \\documentclass{article}\n
                    \\usepackage{scimisc-cv}\n
                    \\usepackage{hyperref}\n\n
                    \\title{Resume Template}\n
                    \\author{${message.text}}\n
                    \\date{May 2020}\n
                    \\cvname{${message.text}}\n`, err => {
                        if (err) throw err;
                        console.log('Saved!');
                    });

                    fs.readFile(filePath, 'utf8', (err, data) => {
                        console.log(data);
                    });
                    break
                // case currentSection.questions[1].question:
                //     break
                // case currentSection.questions[2].question:
                //     break
                // case currentSection.questions[3].question:
                //     break
                // case currentSection.questions[4].question:
                //     break
                default:
                    break
            }
        }
        resume.end();
    }

    // Response Structure Traversal
    if (!toPrepareResume && (senderID in connectedUsers)) {
        connectedUser.order.some(section => {
            if (!section.status) {
                currentSectionName = section.type;
                let currentSection = connectedUser.structure[currentSectionName];

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

    // Chat Bot Response
    if (message.text && currentQuickReplies.length > 0) {
        genQuickReplies(senderID, currentQuestion, currentQuickReplies);
    } else if (message.text && currentQuickReplies.length === 0) {
        genQuestion(senderID, currentQuestion);
    } else if (message.attachments) {
        genAttachment(senderID, message.attachments[0].payload.url)
    }
}

module.exports = handleMessage