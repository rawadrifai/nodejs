"use strict";


var firebaseClient = require('./FirebaseClient')

exports.handler = (event, context, callback) => {

    firebaseClient.readData(callback)
    callback(null,'completed')
}

