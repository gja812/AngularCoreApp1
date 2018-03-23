(function() {
    'use strict';

    angular
        .module('app')
        .controller('eventController',
        ['$scope', '$location', '$filter', '$routeParams', 'eventService', 'eventClass', eventController]);



    function eventController($scope, $location, $filter, $routeParams, eventService, eventClass) {

        $scope.id = $routeParams.id;
        $scope.event = eventClass.build(); //rename selectedEvent
        $scope.events = [];

        $scope.editEvent = function (id) {
            $location.path('/event/edit/' + id);
        };

        $scope.deleteEvent = function (id) {
            $location.path('/event/delete/' + id);
        };

        $scope.killEvent = function () {
            console.log('deleting ' + $scope.id + ' - ' + $scope.event.eventName);

            eventService.deleteFoo($scope.id).then(function () {
                $location.path('/event');
            });
        };

        activate();

        function activate() {

            eventService.getFoo($scope.id).then(function (response) {
                $scope.event = eventClass.build(response.data);
            }, function (error) {

            })['finally'](function () {

            });



            eventService.getAll().then(function (response) {
                $scope.events = response.data.map(eventClass.build);
            }, function (error) {

            })['finally'](function () {

            });

        }
        
    }
})();