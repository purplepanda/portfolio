var app = angular.module("amandaSite");

app.controller("portfolioCtrl", function($scope) {
  $scope.posts = [{
    title: "The Portfolio Site",
    skills: "AngularJS, JavaScript, HTML5, CSS3",
    description: "This is the site you are currently viewing. To see the code, please click on the GitHub Link.",
    image: {
      path: "images/ppdo.jpg",
      alt: "Amanda Olczak Web Development Portfolio Site"
    },
    githublink: {
      path: "https://github.com/purplepanda/portfolio_site",
      target: "_blank"
    },
    backgroundColor: "#FF5E4F",
    date: "August 2016"
  }, {
    title: "Cook Love Connect",
    skills: "AngularJS, JavaScript, Google Firebase, HTML5, CSS3, Materialize.css, Gulp",
    description: "Cook Love Connect is an app for users to store their favorite recipes. The site is fully responsive so recipes are easy to cook using any device. Cook Love Connect was built with AngularJS on the front-end and Google Firebase on the back-end. To enter the site as a guest, please use the email address of 'guest.clc.2016@gmail.com' and password of 'lovecooking.' Bon appetit!",
    image: {
      path: "images/cookloveconnect.jpg",
      alt: "www.CookLoveConnnect.com, logged in"
    },
    githublink: {
      path: "https://github.com/purplepanda/cook_love_connect",
      target: "_blank"
    },
    link: {
      path: "https://www.cookloveconnect.com",
      target: "_blank"
    },
    backgroundColor: "#F85646",
    date: "August 2016"
  }, {
    title: "The Quintessential To Do List App",
    skills: "AngularJS, HTML5, CSS3",
    description: "Built with AngularJS to capitalize on its two-way data binding capabilities, this to do list allows users to add new tasks, edit current tasks, delete tasks, and push finished tasks to a list of completed tasks.",
    image: {
      path: "images/todolistapp.jpg",
      alt: "Quintessential To Do List App"
    },
    githublink: {
      path: "https://github.com/purplepanda/quintessential_angular_todolist_app",
      target: "_blank"
    },
    backgroundColor: "#DB504A",
    date: "July 2016"
  }, {
    title: "Theatre Seating Reservation App",
    skills: "JavaScript, HTML5, CSS3",
    description: "This project asked us to create an application to reserve seats for a movie.",
    image: {
      path: "images/theatre_reservations.jpg",
      alt: "Theatre Seating Reservation Application"
    },
    githublink: {
      path: "https://github.com/purplepanda/app_theatre",
      target: "_blank"
    },
    backgroundColor: "#169999",
    date: "June 2016"
  }, {
    title: "Game of Thrones Fan Page",
    skills: "Bootstrap, HTML5, CSS3",
    description: "Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show.",
    image: {
      path: "images/gotFanPage.jpg",
      alt: "Screenshot of Amanda's Game of Thrones Fan Page"
    },
    githublink: {
      path: "https://github.com/purplepanda/Olczak_Bootstrap",
      target: "_blank"
    },
    backgroundColor: "#515151",
    date: "June 2016"
  }];
});
