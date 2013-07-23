'use strict'

Application.Controllers.controller('MainCtrl', ['$scope', function($scope){
    console.log(' MainCtrl js home ')
    $scope.foo =[];
    $scope.foo = [{'id':'booyah'},{'id':'gahead'},{'id':'bakobus'}];

    $scope.selectedRow = {};
    $scope.listOfNumbers = [];

    $scope.addRows = function(numberOfRowsToAdd) {
        var startIndex = $scope.listOfNumbers.length;
        var endIndex = $scope.listOfNumbers.length + numberOfRowsToAdd;

        for(var i = startIndex; i < endIndex; i++) {
            $scope.listOfNumbers.push({
                id: i,
                name: 'name ' + i,
                street: 'street ' + i
            });
        }
    };

    $scope.handleRowSelection = function(row) {
        $scope.selectedRow = row;
    };

    $scope.addRows(50);
    //    console.log('  $scope.listOfNumbers ',  $scope.listOfNumbers)
}]);

Application.Controllers.controller('HomeCtrl', ['$scope', function($scope){
    $scope.foo =[];
    $scope.foo = [{'id':'homebooyah'},{'id':'gahead'},{'id':'bakobus'}];

    console.log(' assets js home ',  $scope.foo)
}]);

Application.Controllers.controller('navController', ['$scope', function($scope){

    console.log(' navController js home ')
}]);


Application.Controllers.controller('MainCtrl2', ['$rootScope', '$scope', 'Food', function($rootScope, $scope,Food){
    console.log(' MainCtrl2 js home ')
    $scope.food = Food.query();

    $scope.isFormActive = false;

    $scope.toggleForm = function(){
        if ($scope.isFormActive){
            $scope.isFormActive = false;
            return;
        }

        $scope.isFormActive = true;
        $scope.editableFood = new Food();
    };

    $scope.addFood = function(){
        $scope.editableFood.$save();
        $scope.food.push($scope.editableFood);
        $scope.toggleForm();
    };
    console.log('food ',$scope.food)


}]);

