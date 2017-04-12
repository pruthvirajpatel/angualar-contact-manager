var app = angular.module('contact-manager', ['ui.router']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            controller: 'ContactController as vm',
            templateUrl: 'app/contacts-list/contacts-list.html'
        })
        .state('create', {
            url: '/create?index',
            controller: 'CreateContactController as vm',
            templateUrl: 'app/create-contact/create-contact.html'
        });
    $urlRouterProvider.otherwise('/');
}]);
angular.element(document).ready(function() {
    angular.bootstrap(document, ['contact-manager']);
});
    