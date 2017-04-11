app.controller('ContactController', ['ContactService', function(ContactService) {
    var vm = this;
    vm.contacts = ContactService.getContacts();
    vm.delete = function(id){
    	ContactService.deleteContact(id);
    }
}]);
