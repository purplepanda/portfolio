var app = angular.module("amandaSite");

app.controller("homeCtrl", function($scope) {
  $scope.topOfPage = topOfPage;

  function topOfPage() {
    $("body").scrollTop(0);
  }
});
