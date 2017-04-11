app.controller('CreateContactController', ['$stateParams', 'ContactService', function($stateParams, ContactService) {
    var vm = this;
    vm.user = {};
    vm.addContact = function() {
        ContactService.addContact(vm.user);
        vm.user = {};
    };
}]);
