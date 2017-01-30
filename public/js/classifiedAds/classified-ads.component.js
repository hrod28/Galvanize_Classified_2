(function(){
    "use strict";

    angular.module('myApp')
      .component('classifiedAds', {
        require: {
          layout: '^myApp'
        },
        templateUrl: '/js/classifieds/classified-ads.template.html',
        controllerAs: 'model',
        controller: controller
      })

    controller.$inject = ['$http']
    function controller($http) {
      const model = this;

      model.$onInit = onInit;

      function onInit(){
        $http.get('/classifieds')
        .then(responst => model.messages = response.data);
      }

    }

}());
