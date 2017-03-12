(function() {
'use strict';
// console.log('app.config connected!');

 angular
  .module('app', ['ui.router', 'post.component' ,'updatePost.component'])
  .config(config);

  config.$inject = ['$stateProvider' , '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state({
      name: 'postMessage',
      url: '/',
      component: 'postMessage',
    })
    .state({
      name: 'updatePost',
      url: '/:id',
      component: 'updatePost'
    });
  }
}());
