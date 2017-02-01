"use strict";
(function() {
  angular.module('app')
    .component('newPost', {
      templateUrl: 'js/new-post/new-post.template.html',
      constrollerAs: 'model',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {
      const model = this;

      model.addPost = function() {
        $http.post('/classifieds', model.newPost)
          .then((result) => {
          console.log(result);
          $state.go("display");
        });
      };
    }
}());
