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

