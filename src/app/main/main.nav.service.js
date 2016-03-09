(function () {
    'use strict';

    angular.module('gkcSampleApp')
        .service('mainNavService', mainNavService);

    /** @ngInject */
    function mainNavService() {
        var menuItems = [
            {
                name: 'Basic Example',
                icon: 'tag_faces',
                sref: 'home.simple'
            },
            {
                name: 'UI Builder',
                icon: 'build',
                sref: 'home.builder'
            }
        ];

        this.getAllItems = function () {
            return menuItems;
        }
    }

})();
