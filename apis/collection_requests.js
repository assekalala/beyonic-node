var BeyonicAuth = require('./auth.js')
var request = require('request')

var collection_requests = {}

collection_requests.create = function(phone_number, amount, currency, metadata = null, send_instructions = true) {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'POST',
        url: 'https://app.beyonic.com/api/collectionrequests',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        json: {
            'phone_number': phone_number,
            'currency': currency,
            'amount': amount,
            'metadata': metadata,
            'send_instructions': true
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

collection_requests.get = function(id){
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/collectionsrequests' + id,
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

collection_requests.list = function () {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/collectionrequests',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) {
            console.log(error)
            // throw new Error("error")
            return
        }
        var contacts = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    ).end()
}

module.exports = collection_requests