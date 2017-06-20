exports.handler = (event, context, callback) =>
{
    var twilioSID = 'AC02922f159b411443929c103b0361e48b'
    var twilioAuthToken = 'f2295ba98737f24aedf758233b1c5cae'

    var client = require('twilio')(
        twilioSID,
        twilioAuthToken
    );

    client.messages.create({
        from: '+1 310-504-6515',
        to: '+1 310-955-6069',
        body: "You just sent an SMS from Node.js using Twilio!"
    }, function (err, message) {
        if (err) {
            console.error(err.message);
        }
    });

    callback(null, 'sms sent')
};



var firebaseClient = require('./FirebaseClient')
firebaseClient.readData()
//
// var t = require('./test');
// t.ff()

