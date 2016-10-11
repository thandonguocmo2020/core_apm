
var app = angular.module('switaApp',[
	'ngSanitize',
	'ngCookies',
	'ui.router',
	'ui.bootstrap'
]);
function BaseController($scope, $rootScope, $state, $cookies) {
    $rootScope.$state = $state;
};

app.controller('BaseController', BaseController);