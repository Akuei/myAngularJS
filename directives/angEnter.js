/*
    說明：設定 Input 中按下「Enter」時，觸發所設定的函式
    用法：
        -- <input ang-enter="functionName" />
        -- <input ang-enter="'functionName(xxx)'" />
*/
angApp.directive('angEnter', ['$timeout', function ($timeout) {
    return function (scope, element, attrs) {
        var enterCall;

        scope.$watch(attrs.angEnter, function (value) {     // function(newValue,oldValue)
            enterCall = value;
        });

        element.bind('keypress', function (e) {
            if (e.keyCode == 13) {
                $timeout(function () {
                    scope.$apply(enterCall);
                    //(enterCall || angular.noop)();
                });
            }
        });

        element.bind('$destroy', function () {
            element.unbind('keypress');
        });
    };
}]);