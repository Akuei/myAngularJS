// 字首 ang 的 a = Akuei
var angApp = angular.module('angApp', []);

// 需要在程式中動態注入 model 時使用
angApp.requires.push('ngResource');

/*
    說明：定義共用設定
    用法：
        -- 注入 controller :
            angApp.controller({ 
                'RootCtrl': ['$scope', 'angSettings', function ($scope, angSettings) {
                    alert(angSettings.site.vpath);
                }]
            });
*/
angApp.constant('angSettings', {
    site: {
        vpath: '/'
    },
    msg: {
        timeout: '帳號已逾時登出，請重新登入!',
        prog_error: '程式發生錯誤，請聯絡專案負責人員!'
    }
});