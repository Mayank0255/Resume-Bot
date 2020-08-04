const callSendAPI = require('./callSendAPI');

const handlePostback = (postbackEvent) => {
    const senderID = postbackEvent.sender.id;
    const postback = postbackEvent.postback;
    let response;

    let payload = postback.payload;

    if (payload === 'yes') {
        response = { 'text': 'Thanks!' }
    } else if (payload === 'no') {
        response = { 'text': 'Oops, try sending another image.' }
    }
    callSendAPI(senderID, response);
}

module.exports = handlePostback