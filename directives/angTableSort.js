/*
    說明：設定 Table 標題點墼排序功能
    用法：
        1. controller
            $scope.order = { key: 'no', asc: true };
            $scope.sort_list = function(sortKey) {
	            if ($scope.order.key === sortKey) {
                    $scope.order.asc = !$scope.order.asc;
                } else {
                    $scope.order = { key: sortKey, asc: true };
                }
                // $filter('orderBy')($scope.list, $scope.order.key, !$scope.order.asc);
            }
        2. <table ang-table-sort="sort_list" data-order-key="order.key" data-order-asc="order.asc"> 
        3. <th data-sort-key="sortKey">
*/
angApp.directive('angTableSort', ['$timeout', function ($timeout) {
    return function (scope, element, attrs) {
        var sortFunction,
            sortKey,
            sortAsc;

        scope.$watch(attrs.angTableSort, function (value) {     // function (newValue,oldValue)
            sortFunction = value;
        });
        scope.$watch(attrs.orderKey, function (newValue, oldValue) {
            element.find('th[data-sort-key="' + oldValue + '"] i:not(.hidden)').addClass('hidden');
            element.find('th[data-sort-key="' + newValue + '"] i.icon-arrow-up.hidden').removeClass('hidden');
            sortKey = newValue;
        });
        scope.$watch(attrs.orderAsc, function (newValue, oldValue) {
            if (oldValue) {
                element.find('th[data-sort-key="' + sortKey + '"] i.icon-arrow-up:not(.hidden)').addClass('hidden');
            } else {
                element.find('th[data-sort-key="' + sortKey + '"] i.icon-arrow-down:not(.hidden)').addClass('hidden');
            }
            if (newValue) {
                element.find('th[data-sort-key="' + sortKey + '"] i.icon-arrow-up.hidden').removeClass('hidden');
            } else {
                element.find('th[data-sort-key="' + sortKey + '"] i.icon-arrow-down.hidden').removeClass('hidden');
            }
        });

        angular.forEach(element.find('th[data-sort-key]'), function (value, key) {
            var th = angular.element(value),
                key = th.attr('data-sort-key');
            th.bind('click', function () {
                $timeout(function () {
                    (sortFunction || angular.noop)(id);
                });
            });
            th.addClass('tms-cursor-hand');
            th.append('<i class="icon-arrow-up icon-white hidden"></i><i class="icon-arrow-down icon-white hidden"></i>');
        });

        
    };
}]);