(function(){
    "use strict";

    angular.module('app')
      .component('display', {
        templateUrl: 'js/display/display.template.html',
        controllerAs: 'model',
        controller: controller
      });

      controller.$inject = ['$http', '$state']

      function controller($http, $state){

        const model = this;
        model.displayingAd = true;
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

          });
        };
      }

}());
