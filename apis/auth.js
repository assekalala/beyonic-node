var _auth

module.exports = function(apiKey){
	if (apiKey){
		_auth = "Token " + apiKey;
	}

	return _auth;
};