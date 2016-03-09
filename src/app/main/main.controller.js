(function () {
    'use strict';

    angular.module('gkcSampleApp').controller('MainController', MainController);

    /** @ngInject */
    function MainController($log, mainNavService, $mdSidenav) {
        var vm = this;

        vm.menuItems = [];

        vm.toggleSidenav = toggleSidenav;
        vm.closeSidenav = closeSidenav;

        $log.info("Initializing Main View");

        vm.menuItems = [].concat(mainNavService.getAllItems());
        $log.debug("Menu Items", vm.menuItems);

        function toggleSidenav() {
            $log.debug("Activating sidenav");
            $mdSidenav('left').toggle();
        }

        function closeSidenav() {
            $mdSidenav('left').close();
        }
    }

})();
