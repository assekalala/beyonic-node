var BeyonicAuth = require('./auth.js')
var request = require('request')

var contacts = {}

contacts.create = function(first_name, last_name, phone_number, email = null, metadata = null) {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'POST',
        url: 'https://app.beyonic.com/api/contacts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        json: {
            'first_name': first_name,
            'last_name': last_name,
            'phone_number': phone_number,
            'email': email,
            'metadata': metadata
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var contact = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )    
};

contacts.get = function(id){
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/contacts' + id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var contact = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )
}

contacts.list = function () {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/contacts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var contacts = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )    
}

module.exports = contacts