var app = angular.module("amandaSite");

app.directive("portfolioPost", function() {
  return {
    restrict: "EA",
    templateUrl: "partials/post.html",
    repeat: true,
  };
});
