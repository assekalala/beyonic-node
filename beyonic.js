var beyonic_auth = require('./apis/auth.js')
var accounts = require('./apis/accounts.js')
var payments = require('./apis/payments.js')
var contacts = require('./apis/contacts.js')
var collections = require('./apis/collections.js')
var collection_requests = require('./apis/collection_requests.js')

var beyonic = {}

beyonic.setApiKey = function (apiKey) {
    beyonic_auth(apiKey)
}

beyonic.accounts = accounts
beyonic.payments = payments
beyonic.contacts = contacts
beyonic.collections = collections
beyonic.collection_requests = collection_requests

module.exports = beyonic