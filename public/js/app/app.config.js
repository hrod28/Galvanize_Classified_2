'use strict';
(function() {

  angular.module('app')
    .config(config)

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    function config($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: "app",
          abstract: true,
          component: "app"
        })
        .state({
          name: "display",
          parent: "app",
          url: "/",
          component: "display"
        })
        .state({
          name: "newPost",
          parent: "app",
          url: "/new-post",
          component: "newPost"
        })
        .state({
          name: "patchAd",
          parent: "app",
          url: "/patch-ad",
          component: "patchAd",
          params: {
            newPost: {}
          }
        });
    }
}());
