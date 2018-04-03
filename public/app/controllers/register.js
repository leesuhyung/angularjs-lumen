app.controller('RegisterController', function ($scope, $http, $state, User) {
    $scope.submit = function () {
        $scope.error = "";

        User.save($scope.register).then(function () {
            $state.go('home');
        }, function (error) {
            $scope.error = error.data;
        });
    }
});