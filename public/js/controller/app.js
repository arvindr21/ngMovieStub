function movieStubController($scope, movieStubFactory, $location) {
    $scope.headerSrc = "tmpl/header.html";

    $scope.movies = movieStubFactory.query();

    $scope.currMovie = null;

    $scope.getMovieById = function (id) {
        var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currMovie = movie;
            }
        }
    };

    $scope.back = function () {
        window.history.back();
    };

    $scope.getCount = function (n) {
        return new Array(n);
    }

    $scope.isActive = function (route) {
        return route === $location.path();
    }

    $scope.isActivePath = function (route) {
        return ($location.path()).indexOf(route) >= 0;
    }

};

function movieDetailsController($scope, $routeParams) {
    // inheriting from parent scope - movies {} will be available
    $scope.getMovieById($routeParams.id);
};

function bookingDetailsController($scope) {};

function bookTicketsController($scope, $routeParams) {
    $scope.getMovieById($routeParams.id);
};