angular.module('gkcSampleApp').factory("tools", tools);

/** @ngInject */
function tools($log, $mdDialog, $mdMedia, $document) {
    return {
        /**
         * Simple wrapper for dialog launching
         * @param ev
         * @param controller controller
         * @param templUrl template url
         * @returns {promise}
         */
        showDialog: function (ev, controller, templUrl) {
            $log.debug("Showing dialog " + templUrl);
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
            return $mdDialog.show({
                controller: controller,
                controllerAs: 'vm',
                templateUrl: templUrl,
                parent: angular.element($document.body),
                clickOutsideToClose: false,
                fullscreen: useFullScreen
            })
        }
    };
}
