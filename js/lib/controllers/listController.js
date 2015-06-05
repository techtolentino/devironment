myApp.controller('ListController', function($scope, $firebaseObject) {

  var ref = new Firebase('https://devironment.firebaseio.com');

  $scope.data = $firebaseObject(ref);

}); //ListController