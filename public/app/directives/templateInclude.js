app.directive('templateInclude', function (BASE_URL) {
    return {
        restrict: 'E', // A: 속성, E: 요소, C: 클래스, M: 주석 으로만 사용가능. (default: EA)
        replace: true, // 이곳 디렉티브 DOM의 마크업을 변경할 수 있음
        scope: true,
        link: function (scope, element, attr) {
            scope.relativeSrc = BASE_URL + attr.src;
        },
        template: '<div ng-include="relativeSrc"></div>'
    }
});