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

        model.$onInit = function(){
          console.log('display line15');
          $http.get('/classifieds')
            .then((result)=>{
              model.posts = result.data;
            });
        };
      }

}());
