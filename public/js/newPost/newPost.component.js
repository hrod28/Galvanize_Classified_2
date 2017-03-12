"use strict";
(function() {
  angular.module('newPost.component', ['ui.router'])
    .component('newPost', {
      templateUrl: 'js/newPost/newPost.template.html',
      constrollerAs: 'model',
      controller: controller
    });

    controller.$inject = ['$http'];

    function controller($http) {
      const model = this;

      model.$onInit = onInit;

      function onInit(){
        $http.get('/api/classifieds')
          .then(results => {
            model.classifieds = results.data;
          });
      }
    }


}());
