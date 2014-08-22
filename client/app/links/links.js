angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = [];

  $scope.search = '';

  $scope.getLinks = function() {
    Links.getUserLinks()
      .then(function(links) {
        for(var i = 0; i < links.length; i++) {
          $scope.data.push(links[i]);
        }
      })
      .catch(function(err) {
        console.log("NAH, ERROR: ", err);
      });
  };
});
