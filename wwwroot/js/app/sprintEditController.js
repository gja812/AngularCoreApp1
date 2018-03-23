(function () {
    'use strict';

    angular
        .module('sprintBoardApp')
        .controller('sprintEditController', ['$scope', '$location', '$routeParams', 'sprintService', 'sprintClass', 'storyClass', 'taskClass', sprintEditController]);

    function sprintEditController($scope, $location, $routeParams, sprintService, sprintClass, storyClass, taskClass) {

        $scope.sprintId = $routeParams.sprintId;

        $scope.sprint = null;

        $scope.saveSprint = function () {
            sprintService.editSprint($scope.sprintId, $scope.sprint).then(function () {
                $location.path('/');
            });
        };

        $scope.back = function () {
            $location.path('/');
        };

        activate();

        function activate() {
            sprintService.getById($scope.sprintId).then(function (response) {
                $scope.sprint = sprintClass.build(response.data);
            }, function () {
                console.log('err');
                //$location.path('/Sprint/Add');
            });
        }
    }
})();
