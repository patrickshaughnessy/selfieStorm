angular.module('starter.services', [])

.factory('selfieService', function($http, $q, API_URL){

  function savePhoto(photo){
    console.log('1 in service, photo received', photo);

    var deferred = $q.defer();

    $http
    .post(API_URL + '/api/photos', photo)
    .then(function(data){

      console.log('2 in service, photo saved', data);

      deferred.resolve(data);
    }, function(err){
      deferred.reject(err);
    });

    console.log('3 in service, before returning promise', deferred);

    return deferred.promise;

  }

  return {
    savePhoto: savePhoto
  }
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
