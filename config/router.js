app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    // For any unmatched url, redirect to /index
    $urlRouterProvider.otherwise("/");
    // Now set up the states
    $stateProvider.state('app', {
        url: "",
        abstract: true,
        templateUrl: "views/layouts/master.html"

    }).state('app.index', {
        url: "/",
        templateUrl: "views/pages/index.html"
    });
});
app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$viewContentLoaded', function(event, toState) {
        document.body.scrollTop;
    });
}]);