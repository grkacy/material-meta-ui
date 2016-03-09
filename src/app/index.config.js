// Init the application configuration module for AngularJS application
(function () {
    'use strict';

    angular.module('gkcSampleApp').config(config);

    /** @ngInject */
    function config($mdThemingProvider, toastrConfig) {
        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 5000;
        toastrConfig.positionClass = 'toast-bottom-right';
        toastrConfig.newestOnTop = true;
        toastrConfig.preventDuplicates = false;
        toastrConfig.preventOpenDuplicates = true;
        toastrConfig.closeButton = true;

        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('grey')
            .warnPalette('red');
    }

})();
