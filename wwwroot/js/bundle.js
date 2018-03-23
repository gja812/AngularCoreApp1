var app = angular.module('app', ['ngRoute']);
angular.module('app').factory('eventService', ['$http', eventService]);
angular.module('app').factory('eventClass', eventClass);

app.config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: '../content/_Home.html',
                controller: 'eventController'
            })
            .when('/hello',
            {
                templateUrl: '../content/_Hello-World.html',
                controller: 'eventController'
            })
            .when('/event',
            {
                templateUrl: '../content/_event-list.html',
                controller: 'eventController'
            })
            .when('/event/add',
            {
                templateUrl: '../content/_event-add.html',
                controller: 'eventAddController'
            })
            .when('/event/:id',
            {
                templateUrl: '../content/_event-details.html',
                controller: 'eventController'
            })

            .when('/event/edit/:id',
            {
                templateUrl: '../content/_event-add.html',
                controller: 'eventEditController'
            })
            .when('/event/delete/:id',
            {
                templateUrl: '../content/_event-delete.html',
                controller: 'eventController'
            }
            )
            .otherwise({
                redirectTo: '/'
            });

    }
]);


function eventService($http) {

    function getAllEvents() {
        return $http.get('api/event/');
    }

    function getEvent(id) {
        return $http.get('api/event/' + id);
    }

    function postEvent(eventClass) {
        return $http.post('api/event/add/', eventClass);
    }

    function putEvent(id,eventClass) {
        return $http.put('api/event/edit/' + id, eventClass);
    }

    function deleteEvent(id) {
        return $http.delete('api/event/delete/' + id);
    }

    return {
        getAll: getAllEvents,
        getFoo: getEvent,        
        postFoo: postEvent,
        putFoo: putEvent,
        deleteFoo: deleteEvent
    };
}

function eventClass() {

    function EventClass() {
        this.id = 0;
        this.eventCode = '';
        this.eventName = '';
        this.venue = '';
        this.eventStartDate = '';
        this.eventEndDate = '';
    }
    
    EventClass.build = function (dto) {
        console.log("EventClass.build : " + dto);
        var eventClass = new EventClass();
        if (!dto)
            return eventClass;

        eventClass.id = dto.id;
        eventClass.eventCode = dto.eventCode;
        eventClass.eventName = dto.eventName;
        eventClass.venue = dto.venue;
        eventClass.eventStartDate = dto.eventStartDate;
        eventClass.eventEndDate = dto.eventEndDate;

        return eventClass;
    };


    return EventClass;
}


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