(function(){
   'use strict';

   angular.module('LunchCheck',[])
           .controller('LunchCheckController',LunchCheckController);

   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope) {
    $scope.item = "";
    var comma = ",";
    $scope.countItems = function(){
      var listofItems = $scope.item.split(comma);
      return listofItems.length;
    };

    $scope.sayMsg = function(){
      if( $scope.item == "" )
        $scope.Msg = "Please enter data first.";
      else if( $scope.countItems() < 4 ){
        $scope.Msg = "Enjoy!";
      }
      else{
        $scope.Msg = "Too Much!";
      }
    };
    
   }
})()
