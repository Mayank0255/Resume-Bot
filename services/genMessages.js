const callSendAPI = require('./callSendAPI');

const genQuickReplies = (senderID, question, quickReplies) => {
    const response = {
        text: question,
        quick_replies: []
    };

    for (let quickReply of quickReplies) {
        response["quick_replies"].push({
            content_type: "text",
            title: quickReply,
            payload: quickReply
        });
    }

    callSendAPI(senderID, response);
}

const genQuestion = (senderID, question) => {
    const response = {
        'text': question
    };

    callSendAPI(senderID, response);
}

const genAttachment = (senderID, attachment_url) => {
    const response = {
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

    callSendAPI(senderID, response);
}

module.exports = {
    genQuestion,
    genQuickReplies,
    genAttachment
}