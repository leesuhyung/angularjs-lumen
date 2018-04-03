app.controller('UserController', function ($scope, $location, User) {
    $scope.getList = function () {
        User.getList($scope.filter).then(function (res) {
            $scope.users = res.data;
            $scope.page = res.data.current_page;
        })
    };

    $scope.$watch('users.current_page', function (new_page) {
        if (new_page && $scope.page != new_page) {
            $location.search('page', new_page);
        }
    });

    (function () {
        $scope.page = ($location.$$search.page) ? $location.$$search.page : 1;
        $scope.filter = angular.copy($location.$$search);
        $scope.getList();
    })();
});

app.controller('UserDetailController', function ($scope, $stateParams, User, $uibModal, $state) {
    $scope.getDetail = function () {
        User.getDetail($stateParams.userId).then(function (res) {
            $scope.user = res;
            $scope.page = $stateParams.page;
        })
    };
    
    $scope.open = function (size) {
        var modalInstance = $uibModal.open({
            animation: true,
            windowClass: 'show',
            backdropClass: 'show',
            templateUrl: 'userModal.html',
            controller: 'UserEditController',
            size: size,
            resolve: {
                items: function () {
                    return $scope.user;
                }
            }
        });

        modalInstance.result.then(function () {
            $state.go('userDetail', {}, { reload: true })
        }, function () {
            // console.log('Modal dismissed at : ' + new Date());
        });
    };

    (function () {
        $scope.getDetail();
    })();
});

app.controller('UserEditController', function ($scope, $uibModalInstance, items, User) {
    $scope.items = angular.copy(items.data);

    $scope.submit = function () {
        $scope.error = "";

        User.edit($scope.items).then(function () {
            $uibModalInstance.close();
        }, function (error) {
            $scope.error = error.data;
        });
    };

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});