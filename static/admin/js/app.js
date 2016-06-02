/* app.js with site functionality */
angular.module('festu-admin', ['ngRoute', 'ngMaterial'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      redirect: '/parties'
    })
    .when('/parties', {
      templateUrl: 'views/parties.html',
      controller: 'PartiesCtrl',
      controllerAs: 'ctrl'
    })
    .when('/members', {
      templateUrl: 'views/members.html',
      controller: 'MembersCtrl',
      controllerAs: 'ctrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'ctrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      controllerAs: 'ctrl'
    })
    .when('/aspa', {
      templateUrl: 'views/aspa.html',
      controller: 'AspaCtrl',
      controllerAs: 'ctrl'
    })
    .otherwise('/');
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('purple');
  })
  .controller('PartiesCtrl', function($rootScope) {
    $rootScope.active = 'parties';
  })
  .controller('MembersCtrl', function($rootScope) {
    $rootScope.active = 'members';
  })
  .controller('AboutCtrl', function($rootScope, $http) {
    $rootScope.active = 'about';
    var vm = this;
    $http.get('/api/strings/about')
    .then(function(res) {
      vm.aboutContent = res.data['value'];
    })
  })
  .controller('ContactCtrl', function($rootScope, $routeParams) {
    $rootScope.active = 'contact';
  })
  .controller('AspaCtrl', function($rootScope) {
    $rootScope.active = 'aspa';
  });