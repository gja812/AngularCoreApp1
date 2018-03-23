(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('eventEditController',
        ['$scope', '$location', '$filter', '$routeParams', 'eventService', 'eventClass', eventEditController]);



    function eventEditController($scope, $location, $filter, $routeParams, eventService, eventClass) {
        
        $scope.id = $routeParams.id;
        $scope.event = null;
        $scope.title = "Edit event";
        $scope.saveEvent = function () {
            console.log('saving ' + $scope.id + ' - ' + JSON.stringify($scope.event) );
            eventService.putFoo($scope.id, $scope.event).then(function () {
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
