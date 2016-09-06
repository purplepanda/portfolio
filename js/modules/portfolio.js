var app = angular.module("amandaSite", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      controller: "homeCtrl",
      templateUrl: "partials/home.html"
    })
    .when("/portfolio", {
      controller: "portfolioCtrl",
      templateUrl: "partials/portfolio.html"
    })
    .when("/resume", {
      controller: "resumeCtrl",
      templateUrl: "partials/resume.html"
    })
    .otherwise({
      redirectTo: "/home"
    });
});
