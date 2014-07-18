'use strict';

angular.module('englishTestApp')
  .controller('MainCtrl',[
    '$scope',
    '$routeParams',
    '$location',
    'testContent',
    'TEMPLATES_URL',
    function ($scope, $routeParams, $location, testContent, TEMPLATES_URL) {

        var prepareUserAnswersArray = function () {
                $scope.userAnswers = new Array($scope.taskContent.answers.length + 1).join(' ').split('');
                if ($scope.taskContent.answers[$scope.taskContent.exampleIndex]) {
                    $scope.userAnswers[$scope.taskContent.exampleIndex] = $scope.taskContent.answers[$scope.taskContent.exampleIndex];
                }
            },
            exerciseNr = $routeParams.exerciseNr,
            taskNr = $routeParams.taskNr;

        $scope.exerciseNr = exerciseNr;
        $scope.taskNr = taskNr;
        $scope.templateUrl = TEMPLATES_URL.replace('exerciseNr', exerciseNr).replace('taskNr', taskNr);
        $scope.taskContent = testContent.getTask(exerciseNr - 1, taskNr - 1);
        $scope.checkPhase = 1;
        $scope.userResults = [];
        $scope.navigation = {};
        prepareUserAnswersArray();

        $scope.checkAnswers = function () {
            $scope.checkPhase = 0;
            $scope.userResults.length = 0;
            $scope.userAnswers.forEach(function(answer, index) {
                if (answer === $scope.taskContent.answers[index]) {
                    $scope.userResults.push(1);
                } else {
                    $scope.userResults.push(0);
                }
            })
        }

        $scope.refresh = function () {
            $scope.checkPhase = 1;
            prepareUserAnswersArray();
            $scope.userResults = [];
        }

        $scope.navigation.nextTaskAvailable = (testContent.getTask(exerciseNr - 1, taskNr) !== false);
        $scope.navigation.previousTaskAvailable = (testContent.getTask(exerciseNr - 1, taskNr - 2) !== false);


        $scope.navigation.goToNextTask = function (nextTaskAvailable) {
            if (nextTaskAvailable !== false) {
                $location.path('/exercise/' + exerciseNr + '/taskNr/' + (parseInt(taskNr) + 1));
            } else {
                return false;
            }
        }

        $scope.navigation.goToPreviousTask = function (previousTaskAvailable) {
            if (previousTaskAvailable !== false) {
                $location.path('/exercise/' + exerciseNr + '/taskNr/' + (parseInt(taskNr) - 1));
            } else {
                return false;
            }
        }


    }
]
);
