(function() {
  "use strict";

  angular.module('updatePost.component', ['ui.router'])
    .component('updatePost', {
      templateUrl: 'js/updatePost/updatePost.template.html',
      conrollerAs: 'model',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams", "$location"];

    function controller($http, $state, $stateParams) {
      const vm = this;

      vm.$onInit = onInit;
      vm.updatePost = updatePost;
      // vm.deletePost = deletePost;

    function onInit(){
      $http.get(`/api/classifieds/${stateParams.id}`)
        .then(results => {
          vm.post = results.data;
        });
    }

    function updatePost(){
      $http.patch (`/api/classifieds/${stateParams.id}`, vm.post);
    }

    }
}());
