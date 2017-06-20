/**
 * Created by rawad.elrifai on 6/19/17.
 */
var firebaseConfig = require('./Config').firebaseConfig;
var firebase = require("firebase");

function readData() {

    firebase.initializeApp(firebaseConfig);

    firebase.database().ref('triallimit').once('value').then(function (snapshot) {
        var username = snapshot.val();
        console.log(username)
    });
}

module.exports.readData = readData