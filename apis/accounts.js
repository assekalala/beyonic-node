var BeyonicAuth = require('./auth.js')
var request = require('request')

var accounts = {}


accounts.get = function(id){
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/accounts/' + id,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) {
            throw new Error(error)
            return
        }
        var account = JSON.parse(body)
        // console.log(account.id)
        return account
    }

    request(
        options,
        callback
    ).end()

    return callback.account
}

accounts.list = function () {
    var auth = BeyonicAuth()
    if(!auth) {
        throw new Error("No Authorization was provided")
    }

    var options = {
        method: 'GET',
        url: 'https://app.beyonic.com/api/accounts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    }

    var callback = function (error, response, body) {
        if (error) {
            // console.log("Error: " + error)
            throw new Error(error)
            return
        }
        var accounts = JSON.parse(body)
        console.log(body)
        return accounts
    }
    
    request(
        options,
        callback
    )
}

module.exports = accounts