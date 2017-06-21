/**
 * Created by rawad.elrifai on 6/19/17.
 */
var firebaseConfig = require('./Config').firebaseConfig;
var firebase = require("firebase");

function readData() {

    // get today's date
    var todayDate = new Date().toLocaleDateString()

    // initialize the firebase app
    if(firebase.apps.length == 0) {   // <---Important!!! In lambda, it will cause double initialization.
        firebase.initializeApp(firebaseConfig);
    }

    // get reminders data from firebase
    firebase.database().ref('reminders/sms/' + todayDate).once('value').then(function (snapshot) {

        var reminders = snapshot.val();

        // loop through reminders
        for (var key in reminders) {

            if (reminders.hasOwnProperty(key)) {

                var val = reminders[key];

                var to = val.to
                var message = val.message

                var twilioClient = require('./TwilioClient')
                twilioClient.sendSms(to, message)

            }
        }
    });
}

module.exports.readData = readData