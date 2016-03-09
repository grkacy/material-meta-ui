(function () {
    'use strict';

    angular.module('gkcSampleApp').run(runBlock);

    /** @ngInject */
    function runBlock($log) {
        $log.info("GkcMetaUI Directive Example");
    }
})();
