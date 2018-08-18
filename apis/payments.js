var BeyonicAuth = require('./auth.js')
var request = require('request')

var payments = {}

payments.create = function(phoneNumber, amount, first_name, last_name, description, callback_url, metadata) {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'POST',
        url: 'https://app.beyonic.com/api/payments/' + id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        json: {
            'phonenumber': phoneNumber,
            'first_name': first_name,
            'last_name': last_name,
            'currency': 'BXC',
            'account': '1',
            'amount': amount,
            'description': description,
            'callback_url': callback_url,
            'payment_type': 'money'
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var payment = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )    
};

payments.get = function(id){
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/payments/' + id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var payment = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )
}

payments.getAll = function () {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/payments',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) console.log("Error: " + error)
        var payments = JSON.parse(body)
        console.log(body)
    }

    request(
        options,
        callback
    )    
}

module.exports = payments