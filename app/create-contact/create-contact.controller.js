app.controller('CreateContactController', ['$state', '$stateParams', 'ContactService', function($state, $stateParams, ContactService) {
    var vm = this;
    vm.user = $stateParams.index ? ContactService.getContact($stateParams.index) : {};
    vm.addContact = function() {
        if ($stateParams.index) {
            ContactService.addContact(vm.user,$stateParams.index);
        } else {
            ContactService.addContact(vm.user);
        }
        $state.go('list');
    };
}]);
