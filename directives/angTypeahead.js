/*
    說明：搭配 Bootstrap Typeahead 功能，觸發項目選擇事件
    用法：
        <input ang-typeahead ong-model="xxx"
            data-provide="typeahead" data-items="10" data-source="XXXX" />
*/
angApp.directive('angTypeahead', ['$timeout', function ($timeout) {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;

            element.bind('change', function (e) {
                var val = element.val();
                scope.$apply(function () {
                    ngModel.$setViewValue(val);
                });
            });

            element.bind('$destroy', function () {
                element.unbind('change');
            });
        }
    };
}]);