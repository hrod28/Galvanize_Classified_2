(function(){
    "use strict";

    angular.module("app")
      .component('app', {
        templateUrl: 'js/app/app/template.html',
        contollerAs: 'model'
        controller: controller
      });

      function controller(){
        console.log('line 12 working');
      }

}());
