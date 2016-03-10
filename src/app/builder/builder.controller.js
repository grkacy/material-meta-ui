/* global ace */


(function () {

    angular.module('gkcSampleApp').controller('BuilderController', BuilderController);

    /** @ngInject */
    function BuilderController($log, $http, $timeout, toastr, sprintf) {

        var vm = this;

        var editor = null;
        var viewer = null;

        vm.templates = [
            {file: 'simple.json', name: 'Simple'},
            {file: 'simple2.json', name: 'Simple 2'},
            {file: 'datacenter.json', name: 'Datacenter Info'},
            {file: 'holiday.json', name: 'Holiday Request'},
            {file: 'all.json', name: 'All Widgets'}
        ];

        vm.uiMetaData = [];
        vm.valueObj = {};

        vm.openTemplate = openTemplate;
        vm.updateMetadata = updateMetadata;
        vm.updateFormData = getFormData;

        init();
        ////////////////////////////////////

        function init() {
            editor = ace.edit("metadataEditor");
            editor.setHighlightActiveLine(false);
            editor.setTheme("ace/theme/clouds_midnight");
            editor.getSession().setMode("ace/mode/json");
            editor.$blockScrolling = Infinity;
            editor.setValue('', -1);

            viewer = ace.edit("dataViewer");
            viewer.setTheme("ace/theme/clouds_midnight");
            viewer.getSession().setMode("ace/mode/json");
            viewer.$blockScrolling = Infinity;
            viewer.setReadOnly(true);
            viewer.renderer.setShowGutter(false);
            viewer.setHighlightActiveLine(false);
            viewer.setValue("", -1);
        }

        function openTemplate(name) {
            $log.debug("Opening " + name);
            $http.get(sprintf('assets/json/%s', name)).then(function (response) {
                $log.debug('Metadata:', response.data);
                editor.setValue(angular.toJson(response.data, 2), -1);
                vm.valueObj = {};
                editor2Metedata();
                // need to delay so that $watch in the directive can kick in and update
                // the valueObj
                $timeout(function () {
                    showFormData(vm.valueObj)
                });
            }, function (response) {
                var msg = sprintf('Error reading UI JSON metadata.%s, Status %s', response.data, response.status);
                toastr.error(msg, 'Error');
                $log.error(msg);
            })
        }

        function editor2Metedata() {
            var metadataText = editor.getValue();
            try {
                vm.uiMetaData = angular.fromJson(metadataText);
            } catch (exc) {
                $log.error('Failed to parse JSON metadata', exc);
                toastr.error(exc.message, 'Error');
            }
        }

        function updateMetadata() {
            vm.valueObj = {};
            editor2Metedata();
            $timeout(function () {
                showFormData(vm.valueObj)
            });
        }

        function showFormData(data) {
            var text = angular.toJson(data, 2);
            $log.debug(text);
            viewer.setValue(text, -1);
        }

        function getFormData() {
            showFormData(vm.valueObj);
        }
    }
})();
