var myApp = angular.module('myApp', []);
myApp.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});