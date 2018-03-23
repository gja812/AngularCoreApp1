(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('eventAddController',
        ['$scope', '$location', '$filter', '$routeParams', 'eventService', 'eventClass', eventAddController]);



    function eventAddController($scope, $location, $filter, $routeParams, eventService, eventClass) {


        $scope.id = $routeParams.id;
        $scope.event = null;
        $scope.title = "Add a new event";
        $scope.saveEvent = function () {
            console.log('saving ' + JSON.stringify($scope.event) );
            eventService.postFoo($scope.event).then(function () {
                $location.path('/');
            });
        };

        $scope.back = function () {
            $location.path('/');
        };


        activate();

        function activate() {
            console.log("id: " + $scope.id);

            eventService.getFoo($scope.id).then(function (response) {
                $scope.event = eventClass.build(response.data);
            }, function (error) {

            })['finally'](function () {

            });
        }
    }
})();
