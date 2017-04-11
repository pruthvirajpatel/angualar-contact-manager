app.controller('CreateContactController', ['$state', '$stateParams', 'ContactService', function($state, $stateParams, ContactService) {
    var vm = this;
    vm.user = {};
    if ($stateParams.index) {
        vm.user = ContactService.getContact($stateParams.index);
    }
    vm.addContact = function() {
        ContactService.addContact(vm.user);
        $state.go('list');
    };
}]);
