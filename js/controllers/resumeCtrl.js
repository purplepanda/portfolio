var app = angular.module("amandaSite");

app.controller("resumeCtrl", function($scope) {

  //----------array of skills----------//
  $scope.skills = [{
    type: "HTML5",
    date: "June 2013"
  }, {
    type: "CSS3",
    date: "June 2013"
  }, {
    type: "SASS",
    date: "July 2016"
  }, {
    type: "JavaScript",
    date: "July 2016"
  }, {
    type: "jQuery",
    date: "July 2016"
  }, {
    type: "AngularJS",
    date: "July 2016"
  }, {
    type: "Gulp",
    date: "July 2016"
  }, {
    type: "Wordpress",
    date: "September 2015"
  }, {
    type: "PHP",
    date: "March 2016"
  }, {
    type: "Git / GitHub",
    date: "July 2016"
  }, {
    type: "Sketch",
    date: "July 2016"
  }, {
    type: "Photoshop",
    date: "September 2000"
  }, {
    type: "Illustrator",
    date: "September 2002"
  }, {
    type: "InDesign",
    date: "May 2004"
  }, {
    type: "Google Firebase",
    date: "August 2016"
  }, {
    type: "MongoDB",
    date: "August 2016"
  }];

  $scope.credentials = [{
    school: "Grand Circus Detroit",
    degree: "Front-End Web Development Bootcamp"
  }, {
    school: "University of Michigan, Ann Arbor",
    degree: "Masters of Architecture"
  }, {
    school: "University of Michigan, Ann Arbor",
    degree: "Bachelors of Science in Architecture"
  }, {
    school: "Girl Develop It",
    degree: "Intro to PHP and MySQL"
  }, {
    school: "Girl Develop It",
    degree: "Advanced Wordpress"
  }, {
    school: "Girl Develop It",
    degree: "Intro to Version Control: Git, Github, and the Terminal"
  }];


  //----------functions----------//

  (function colorSet() {

    setTimeout(function() {
      colorSet();
      $('.skills').each(function(idx, element) {
        $(element).css('backgroundColor', randomBackgroundColor());
      });
    }, 1000 * 2);

  })();

  function randomNumber() {
    return Math.floor(Math.random() * 255) + 1;
  }

  function randomBackgroundColor() {
    return "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  }

});
