/*
    說明：設定 當「某個條件」成立時，讓 Input 取得 Focus
    用法：
        -- <input ang-focus="xxx == 1" />
*/
angApp.directive('angFocus', ['$timeout', function ($timeout) {
    return {
        link: function (scope, element, attrs) {
            scope.$watch(attrs.angFocus, function (value) {     // function(newValue,oldValue)
                if (value === true) {
                    $timeout(function () {
                        element[0].focus();
                    });
                }
            });
        }
    };
}]);