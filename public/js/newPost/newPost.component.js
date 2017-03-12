(function() {
  "use strict";
  angular.module('newPost.component', ['ui.router'])

    .component('newPost', {
      templateUrl: 'js/newPost/newPost.template.html',
      constrollerAs: 'model',
      controller: Controller
    });

    Controller.$inject = ['$http'];

    function Controller($http) {
      const vm = this;

      vm.$onInit = onInit;
      vm.addNewPost = addNewPost;
      vm.classifieds = [];


      function onInit(){
        $http.get('/api/classifieds')
          .then(results => {
            vm.classifieds = results.data;
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
            vm.classifieds.push(post);
            delete vm.post;
          });
      }
    }


}());
