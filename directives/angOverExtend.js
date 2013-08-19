/*
    說明：設定 ANY「MouseEnter/MouseLeave」時，「顯示/隱藏」其中的 span (span 預設為隱藏)
    用法：
        <ANY ang-over-extend ><i class="icon-star"></i><span> 要顯示/隱藏的內容</span></ANY>
*/
angApp.directive('angOverExtend', ['$timeout', function ($timeout) {
    return function (scope, element, attrs) {
        var span = element.children('span');

        span.addClass('hidden');
        element.bind('mouseenter', function (e) {
            $timeout(function () {
                span.removeClass('hidden');
            });
        });
        element.bind('mouseleave', function (e) {
            $timeout(function () {
                span.addClass('hidden');
            });
        });

        element.bind('$destroy', function () {
            element.unbind('mouseenter');
            element.unbind('mouseleave');
        });
    };
}]);