(function() {
  "use strict";

  angular.module('app')
    .component('display', {
      templateUrl: 'js/display/display.template.html',
      controllerAs: 'model',
      controller: controller
    });

    controller.$inject = ["$http", "$state", "$stateParams"]
    function controller($http, $state, $stateParams) {
      const model = this;
      model.newPost = {};

      model.$onInit = function() {
        $http.get('/classifieds')
          .then((result)=>{
            model.posts = result.data;
          });
      };

      model.deleteAd = function(id) {
        $http.delete(`/classifieds/${id}`)
          .then((result) => {
          console.log(result);
          $http.get('/classifieds')
            .then((result)=>{
              model.posts = result.data;
            });
        });
      };

      model.updateAd = function(myPost) {
        $state.go("patchAd", {newPost:myPost});
      }

      model.newPost = function() {
        $state.go("newPost");
      };


    }

}());
