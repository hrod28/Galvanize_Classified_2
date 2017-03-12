(function(){
    "use strict";

angular.module('app', ['ui.router', 'newPost.component', 'updatePost.component'])
  .config(config);

  config.$inject = ['$stateProvider', '$urlRouteProvider'];

}());
