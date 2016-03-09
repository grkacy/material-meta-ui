(function () {
    'use strict';

    angular
        .module('gkcMetaUi')
        .directive('gkcMetaUi', gkcMetaUi);

    /** @ngInject */
    function gkcMetaUi() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/metaui/metaui.html',
            scope: {
                metadata: '=',
                model: '='
            },
            controller: MetaController,
            link: linker
        };

        function linker(scope, element, attrs, ctrl) {
            scope.$watch("metadata", function (newValue) {
                scope.uiMetadata = newValue;
                ctrl.initModel(scope.model, scope.uiMetadata);
            });
        }

        return directive;

        /** @ngInject */
        function MetaController($scope, $log, sprintf) {
            $log.debug('Executing directive controller');
            $log.debug("UI Metadata:", $scope.metadata);

            $scope.uiMetadata = $scope.metadata;
            $scope.getFieldWidthStyle = getFieldWidthStyle;

            this.initModel = initModel;

            init();

            ///////////////////////////////////

            function init() {
                initModel($scope.model, $scope.metadata);
            }

            function isDataWidget(el) {
                return (el.widget !== 'subheader' && el.widget !== 'divider');
            }

            function isBoolWidget(el) {
                return (el.widget === 'checkbox' || el.widget === 'switch');
            }

            function initModel(model, metedataList) {
                metedataList.forEach(function (el) {
                    var uiParam = el;
                    if (isDataWidget(el)) {
                        // handle 'value'
                        if (el.hasOwnProperty('value')) {
                            model[uiParam.id] = el.value;
                        } else {
                            if (isBoolWidget(el)) {
                                // assign default: false
                                model[uiParam.id] = false;
                            } else {
                                model[uiParam.id] = null;
                            }
                        }
                    }
                });
                $log.debug("Model Value is", model);
            }

            function getFieldWidthStyle(el) {
                var w = el.width;
                if (angular.isDefined(w)) {
                    return sprintf('width:%s;', el.width);
                } else {
                    return sprintf('width:300px;');
                }
            }
        }
    }
})();
