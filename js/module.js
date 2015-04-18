
angular.module('HelloFirebase', ['firebase']);

angular.module('HelloFirebase')
	.controller('HelloFirebaseController', HelloFirebaseController);

HelloFirebaseController.$injector = ['$firebaseArray'];

function HelloFirebaseController ($firebaseArray) {

	var fireRef = new Firebase("https://hifirebase.firebaseio.com/user");
  	// var fireRef = $firebase(ref);

	var vm = this;
	vm.hello = "Hello Firebase!";
	vm.firebaseData = $firebaseArray(fireRef);
	vm.addUser = addUser;

	function addUser(user, birthday) {
		vm.firebaseData.$add({"name": user, "birthday": birthday});
	}
}