(function(){
    "use strict";

angular
  .module('app', ['ui.router', 'newPost.component', 'updatePost.component'])
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state({
        name: 'newPost',
        url: '/',
        component: 'newPost',
      })
      .state({
        name: 'updatePost',
        url: '/:id',
        component: 'updatePost'
      });
  }

}());
