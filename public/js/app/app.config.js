(function(){
    "use strict";

    angular.module('app')
      .config(config)

      config.$inject = ['$stateProvider', '$urlRouteProvider', '$locationProvider'];
      function config($stateProvider $urlRouteProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
          .state({
            name: 'app',
            abstract: true,
            component: 'app'
          })
          .state({
            name: 'display',
            parent: 'app',
            component: 'display',
            url: '/',
          })
      }
}());
