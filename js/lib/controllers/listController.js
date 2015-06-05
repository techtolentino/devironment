myApp.controller('ListController', function($scope, $firebaseObject) {

  var ref = new Firebase('https://devironment.firebaseio.com/resources');

  $scope.resources = $firebaseObject(ref);

}); //ListController