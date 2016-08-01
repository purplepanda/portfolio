var app = angular.module("amandaSite");

app.controller("portfolioCtrl", function($scope) {
  $scope.posts = [{
    title: "Game of Thrones Fan Page",
    skills: "Bootstrap, HTML5, CSS3",
    description: "Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",
    image: {
      path: "images/gotFanPage.jpg",
      alt: "Screenshot of Amanda's Game of Thrones Fan Page"
    },
    githublink: {
      path: "https://github.com/purplepanda/Olczak_Bootstrap",
      target: "_blank"
    },
    backgroundColor: "#F85646",
    date: "June 2016"
  }, {
    title: "Game of Thrones Fan Page",
    skills: "Bootstrap, HTML5, CSS3",
    description: "Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",
    image: {
      path: "images/gotFanPage.jpg",
      alt: "Screenshot of Amanda's Game of Thrones Fan Page"
    },
    githublink: {
      path: "https://github.com/purplepanda/Olczak_Bootstrap",
      target: "_blank"
    },
    backgroundColor: "#C1CDCD",
    date: "June 2016"
  }, {
    title: "Game of Thrones Fan Page",
    skills: "Bootstrap, HTML5, CSS3",
    description: "Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",
    image: {
      path: "images/gotFanPage.jpg",
      alt: "Screenshot of Amanda's Game of Thrones Fan Page"
    },
    githublink: {
      path: "https://github.com/purplepanda/Olczak_Bootstrap",
      target: "_blank"
    },
    backgroundColor: "#FFE4E1",
    date: "June 2016"
  }]
});
