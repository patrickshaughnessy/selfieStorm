angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCamera, selfieService) {

  $scope.newPhoto = {
    image: 'some string'
  };

  $scope.takePhoto = function(){
    console.log('take a selfie');

    document.addEventListener("deviceready", function () {

      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
  	    correctOrientation:true
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        // var image = document.getElementById('myImage');
        // image.src = "data:image/jpeg;base64," + imageData;

        $scope.newPhoto.image = "data:image/jpeg;base64," + imageData;

      }, function(err) {
        // error
      });

    }, false);

  }

  $scope.savePhoto = function(){
    console.log($scope.newPhoto);

    selfieService.savePhoto($scope.newPhoto).then(function(data){
      console.log('photo was saved', data);
      // redirect to gallery
    })
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
