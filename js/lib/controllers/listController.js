myApp.controller('ListController', function($scope, $firebaseObject, $location, $anchorScroll) {

  var ref = new Firebase('https://devironment.firebaseio.com/resources');

  $scope.resources = $firebaseObject(ref);

   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };

}); //ListController