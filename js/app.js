var annaPortfolio = angular.module('annaPortfolio', ['ngRoute','ngResource']);

annaPortfolio.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
});

annaPortfolio.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
  when('/home', {
      controller: 'MainController',
      templateUrl: 'partials/home.html',
    }).
  when('/ABOUT', {
      controller: 'MainController',
      templateUrl: 'partials/about.html',
    }).
  when('/CONTACT', {
      controller: 'MainController',
      templateUrl: 'partials/contact.html',
    }).
  when('/PROJECTS', {
      controller: 'MainController',
      templateUrl: 'partials/projects.html',
    }).
  when('/TOKYO DIARY', {
      controller: 'MainController',
      templateUrl: 'partials/blog.html',
    }).
  otherwise('/home', {
      controller: 'MainController',
      templateUrl: 'partials/home.html',
      });
}]);


