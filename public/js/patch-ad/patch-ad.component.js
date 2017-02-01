"use strict";
(function() {
  angular.module('app')
    .component('updateAd', {
      templateUrl: 'js/patch/patch-ad.template.html',
      conrollerAs: 'model',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"];
    function controller($http, $state, $stateParams) {
      const model = this;
      model.newPost = $stateParams.newPost;
      model.$onInit = function() {
      };

      model.updateAd = function() {
        $http.patch(`/classifieds/${model.newPost.id}`, model.newPost)
          .then((result) => {
          $state.go("display");
        })
      };
    }
}());
