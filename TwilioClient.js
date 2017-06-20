/**
 * Created by rawad.elrifai on 6/19/17.
 */

var twilioConfig = require('./Config').twilioConfig

function sendSms(to, message) {

    var client = require('twilio')(
        twilioConfig.SID,
        twilioConfig.authToken
    );

    client.messages.create({
        from: twilioConfig.phoneNumber,
        to: to,
        body: message
    }, function (err, msg) {
        if (err) {
            console.error(err.message);
            console.log(msg)
        }
    });

    callback(null, 'sms sent')
}

module.exports.sendSms = sendSms