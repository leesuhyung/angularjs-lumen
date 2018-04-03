app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise("/home");
    $stateProvider.
        state('home', {
            url: "/home",
            templateUrl: "/app/partials/home.html"
        })
        .state('users', {
            url: "/users?page",
            templateUrl: "/app/user/index.html",
            controller: 'UserController'
        })
        .state('userDetail', {
            url: "/users/:userId",
            templateUrl: "/app/user/detail.html",
            controller: 'UserDetailController',
            params: {
                page: null
            }
        })
        .state('register', {
            url: "/register",
            templateUrl: '/app/register/index.html',
            controller: 'RegisterController'
        })
});