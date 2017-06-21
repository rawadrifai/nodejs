var firebaseClient = require('./FirebaseClient')


exports.handler = (event, context, callback) => {

    firebaseClient.readData()

    callback(null, 'sms sent')
}