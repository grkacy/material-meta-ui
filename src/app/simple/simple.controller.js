(function () {
    'use strict';

    angular.module('gkcSampleApp').controller('SimpleController', SimpleController);

    /** @ngInject */
    function SimpleController($log) {
        var vm = this;

        vm.sampleMetadata = [
            {
                "id": "name",
                "widget": "textfield",
                "label": "Name :",
                "label-left" : true
            },
            {
                "id": "isGeek",
                "widget": "checkbox",
                "label": "Geek :"
            }
        ];

        vm.valueObj = {};

        $log.debug("Initialized simple controller");
    }

})();
