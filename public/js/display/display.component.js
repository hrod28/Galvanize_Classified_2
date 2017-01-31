(function(){
    "use strict";

    angular.module('app')
      .component('display', {
        templateUrl: 'js/display/display.template.html',
        controllerAs: 'model',
        controller: controller
      });

      controller.$inject = ['$http', '$state', '$stateParams']

      function controller($http, $state, $stateParams){

        const model = this;
        model.displayingAd = false;
        model.newAd = {};

        model.$onInit = function(){
          console.log('display line15');
          $http.get('/classifieds')
            .then((result)=>{
              model.posts = result.data;
            });
        };

        model.addClassified = function(){
          $http.post('/classifieds', model.newAd)
            .then((result)=>{
              $onInit();
          });
        };

        model.addForm = function(){
          if (model.displayingAd) {
            model.displayingAd = true;
          }
          else {
            model.displayingAd = false;
          }
        };

        model.newAd = function(){
          $state.go('newAd');
        };

        model.deleteAd = function(id){
          $http.delete(`/classifieds/${id}`)
            .then((result)=>{
              $onInit();
          });
        };
      }

}());
