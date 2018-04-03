app.directive('clickLink', ['$location', function ($location) {
    return {
        link: function (scope, element, attr) {
            element.css({'cursor': 'pointer'});
            element.on('click', function () {
                scope.$apply(function () {
                    $location.path(attr.clickLink);
                })
            })
        }
    }
}]);