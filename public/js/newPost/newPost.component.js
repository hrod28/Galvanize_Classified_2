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
      model.addNewPost = addNewPost;

      function onInit(){
        $http.get('/api/classifieds')
          .then(results => {
            model.classifieds = results.data;
          });
      }

      function addNewPost(title, description, price, item_image) {
        let post = {
          title: title,
          description: description,
          price: price,
          item_image: item_image
        };

        $http.post('/api/classifieds', post)
          .then(response =>{
            model.classifieds.push(post);
            delete model.post;
          });
      }
    }


}());
