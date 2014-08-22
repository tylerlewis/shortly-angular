angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.links = {url: 'http://'};

  $scope.addLink = function() {
    console.log($scope.invalid);
    Links.addNewLink($scope.links)
      .then(function(link) {
        $location.url('/links');
      })
      .catch(function(err) {
        //
      });
  };

  $scope.checkValidity = function(input) {
    if(input === undefined) {
      $scope.invalid = true;
    } else if(input.slice(0, 7) !== "http://") {
      $scope.invalid = true;
    } else {
      $scope.invalid = false;
    }
  };
});
