(function(){
    "use strict";

    angular.module('app')
      .component('display', {
        templateUrl: 'js/display/display.template.html',
        controllerAs: 'model',
        controller: controller
      });

      function controller(){
        const model = this;

        model.$onInit = function(){
          console.log('display line15');
        }
      }

}());
