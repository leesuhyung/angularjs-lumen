var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate'
]);

app.constant('APP_NAME', 'Lumen');
app.constant('API_URL', 'http://lumen.local/api');
app.constant('BASE_URL', '/app');

app.run(function ($rootScope, APP_NAME) {
    $rootScope.APP_NAME = APP_NAME;
});
