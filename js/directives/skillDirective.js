var app = angular.module("amandaSite");

app.directive("skillPost", function() {
  return {
    restrict: "EA",
    templateUrl: "partials/skill.html",
    repeat: true,
  };
});
