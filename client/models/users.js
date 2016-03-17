var OAuth = require('../lib/oauth.min.js').OAuth;
var OAuthUser = require('../lib/oauth.min.js').User;


//OAuth Key Registered to Facebook, Github and Google
OAuth.initialize('z7oz8f2CWDcLaaDjlXl4gH2NbHA');

const User = module.exports;

var currentUser = null;

//Facebook complete data list
//ID    avatar    name    first name    last name    gender

User.facebook = function () {
  OAuth.popup('facebook').done(function (data) {
  data.me().done(function (me) {
  OAuthUser.signin(data)
  .then(function (info) {
  })
  .fail(function (fail) {
  });
});
});
};

//Github complete data list
//ID    alias    avatar    bio    company    email   location

User.github = function () {
  OAuth.popup('github').done(function (data) {
  data.me().done(function (me) {
  OAuthUser.signin(data)
  .then(function (info) {
	})
	.fail(function (fail) {
	});
});
});
};

//Google complete data list
//ID    name    given_name    family_name    picture

User.google = function () {
  OAuth.popup('google').done(function (data) {
  var userToken = data.access_token;
  data.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+userToken)
  .then(function (profileMe) {
  OAuthUser.signin(data)
  .then(function (info) {
  })
  .fail(function (fail) {
  });
});
});
};

