// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function ($scope, $ionicModal) {

// array list which will contain the items added
$scope.toDoListItems = [];

//init the modal
$ionicModal.fromTemplateUrl('modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function (modal) {
  $scope.modal = modal;
});

// function to open the modal
$scope.openModal = function () {
  $scope.modal.show();
};

// function to close the modal
$scope.closeModal = function () {
  $scope.modal.hide();
};

//Cleanup the modal when we're done with it!
$scope.$on('$destroy', function () {
  $scope.modal.remove();
});

//function to add items to the existing list
$scope.AddItem = function (data) {
  $scope.toDoListItems.push({
    task: data.newItem,
    status: 'not done'
  });
  data.newItem = '';
  $scope.closeModal();
};

});