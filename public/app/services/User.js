app.factory('User', ['$http','API_URL', '$httpParamSerializer', function ($http, API_URL, $httpParamSerializer) {
    var self = this;

    self.getList = function (filter) {
        return $http({
            url: API_URL + '/users?' + $httpParamSerializer(filter),
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    };

    self.getDetail = function (userId) {
        return $http({
            url: API_URL + '/users/' + userId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
    };

    self.save = function (data) {
        return $http({
            url: API_URL + '/users',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: data
        });
    };

    self.edit = function (data) {
        return $http({
            url: API_URL + '/users/' + data.id,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            data: data
        });
    };

    return self;
}]);