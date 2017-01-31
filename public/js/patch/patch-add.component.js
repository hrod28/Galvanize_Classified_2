(function(){
    "use strict";

    angular.module('app')
      .component('patchAd', {
          templateUrl: 'js/patch/patch-ad.template.html',
          controllerAs: 'model',
          controller: controller
      });

      controller.$inject = ['$http', '$state', '$stateParams'];
      function controller($http, $state, $stateParams) {
        const model.this;
        
      }

}());
