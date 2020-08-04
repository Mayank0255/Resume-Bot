const request = require('request');
const configHolder = require('../config');

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

module.exports = callSendAPI;