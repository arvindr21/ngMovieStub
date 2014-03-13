angular.module('movieStubService', ['ngResource'])
    .factory('movieStubFactory', function ($resource) {
        return $resource('/movies');
    });