var app=angular.module("amandaSite",["ngRoute"]);app.config(function(e){e.when("/home",{controller:"homeCtrl",templateUrl:"partials/home.html"}).when("/portfolio",{controller:"portfolioCtrl",templateUrl:"partials/portfolio.html"}).when("/resume",{controller:"resumeCtrl",templateUrl:"partials/resume.html"}).otherwise({redirectTo:"/home"})});var app=angular.module("amandaSite");app.controller("homeCtrl",function(e){});var app=angular.module("amandaSite");app.controller("portfolioCtrl",function(e){e.posts=[{title:"Game of Thrones Fan Page",skills:"Bootstrap, HTML5, CSS3",description:"Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",image:{path:"images/gotFanPage.jpg",alt:"Screenshot of Amanda's Game of Thrones Fan Page"},githublink:{path:"https://github.com/purplepanda/Olczak_Bootstrap",target:"_blank"},backgroundColor:"#F85646",date:"June 2016"},{title:"Game of Thrones Fan Page",skills:"Bootstrap, HTML5, CSS3",description:"Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",image:{path:"images/gotFanPage.jpg",alt:"Screenshot of Amanda's Game of Thrones Fan Page"},githublink:{path:"https://github.com/purplepanda/Olczak_Bootstrap",target:"_blank"},backgroundColor:"#C1CDCD",date:"June 2016"},{title:"Game of Thrones Fan Page",skills:"Bootstrap, HTML5, CSS3",description:"Assigned by Grand Circus for pre-Bootcamp homework, this exercise asked us to create a fan page of our favorite television show. This project allowed me to jump into the Bootstrap framework and test if I could throw together a basic web site quickly. The footer uses an API allowing users to shared via Facebook.",image:{path:"images/gotFanPage.jpg",alt:"Screenshot of Amanda's Game of Thrones Fan Page"},githublink:{path:"https://github.com/purplepanda/Olczak_Bootstrap",target:"_blank"},backgroundColor:"#FFE4E1",date:"June 2016"}]});var app=angular.module("amandaSite");app.directive("portfolioPost",function(){return{restrict:"EA",templateUrl:"partials/post.html",repeat:!0}});var app=angular.module("amandaSite");app.controller("resumeCtrl",function(e){});