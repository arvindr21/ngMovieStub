movieStubApp.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});