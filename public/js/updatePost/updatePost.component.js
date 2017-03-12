"use strict";
(function() {
  angular.module('updatePost.component', ['ui.router'])
    .component('updatePost', {
      templateUrl: 'js/updatePost/updatePost.template.html',
      conrollerAs: 'model',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$state", "$location"];

    function controller($http, $state, $stateParams) {
      const model = this;

      model.$onInit = onInit;
      model.updatePost = updatePost;
      model.deletePost = deletePost;

    function onInit(){
      $http.get(`/api/classifieds/${stateParams.id}`)
        .then(results => {
          model.post = results.data;
        });
    }

    function updatePost(){
      $http.patch (`/api/classifieds/${stateParams.id}`, model.post);
    }

    }
}());
