movieStubApp.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});
movieStubApp.factory('movieStubBookingsFactory', function ($resource) {
    return $resource('/bookings');
});