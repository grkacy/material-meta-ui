(function(){

angular
    .module('gkcSampleApp').config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home.simple', {
                url: '/simple',
                controller: 'SimpleController',
                controllerAs: 'vm',
                templateUrl: 'app/simple/simple.html',
                data: {
                    title: 'Simple'
                }
            })
            .state('home.builder', {
                url: '/builder',
                controller: 'BuilderController',
                controllerAs: 'vm',
                templateUrl: 'app/builder/builder.html',
                data: {
                    title: 'UI Builder'
                }
            });

        $urlRouterProvider.otherwise('/');
    });

})();
