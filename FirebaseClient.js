/**
 * Created by rawad.elrifai on 6/19/17.
 */
var firebaseConfig = require('./Config').firebaseConfig;
var firebase = require("firebase");

function readData(callback) {

    // get today's date
    var todayDate = new Date().toLocaleDateString().replace(/\//g,'-');

    if(firebase.apps.length == 0) {   // <---Important!!! In lambda, it will cause double initialization.
        firebase.initializeApp(firebaseConfig);
    }

    // get reminders data from firebase
    firebase.database().ref('reminders/sms/' + todayDate).once('value').then(function (snapshot) {

        var reminders = snapshot.val();

        console.log(reminders)

        // loop through reminders
        for (var key in reminders) {

            console.log('loop')

            if (reminders.hasOwnProperty(key)) {

                var val = reminders[key];

                var to = val.to
                var message = val.message

                var twilioClient = require('./TwilioClient')
                twilioClient.sendSms(to, message)

            }
        }

        setTimeout(function() {
            console.log('about to call callback')
            callback(null,'process completed');
            console.log('called callback')
            }, 3000);

    });



}

module.exports.readData = readData