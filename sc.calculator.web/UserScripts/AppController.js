angular
    .module('App')
    .controller('AppController',
        ['$scope', 'CalculatorService',
            function ($scope, CalculatorService) {
                $scope.SetOperator = function (operator) {
                    if ($scope.Result == null && $scope.Operator == null) {
                        $scope.Result = parseFloat($scope.Operand);
                        $scope.Operand = null;
                    } else if ($scope.Operand != null && $scope.Operator == null) {
                        $scope.Result = parseFloat($scope.Operand);
                        $scope.Operand = null;
                    } else if ($scope.Operand != null) {
                        $scope.Calculate();
                    }

                    $scope.Operator = operator;
                };

                $scope.Calculate = function () {
                    if ($scope.Operator == null || $scope.Operand == null) return;

                    if ($scope.Negative) {
                        $scope.Operand = 0 - parseFloat($scope.Operand);
                    }

                    $scope.Result = CalculatorService.Calculate($scope.Result, $scope.Operator, $scope.Operand);
                    $scope.Operator = null;
                    $scope.Operand = null;
                    $scope.Negative = false;
                };

                $scope.Append = function (digit) {
                    if ($scope.Operand == null) $scope.Operand = '';

                    $scope.Operand = ('' + $scope.Operand).concat(digit);
                };

                $scope.AppendDecimal = function () {
                    if ($scope.Operand == null) $scope.Operand = 0;

                    var operand = ('' + $scope.Operand);

                    if (operand.indexOf('.') > 0) return;

                    $scope.Operand = operand.concat('.');
                };

                $scope.Backspace = function () {
                    if ($scope.Operand == null) return;

                    var operand = ('' + $scope.Operand);
                    $scope.Operand = operand.substring(0, operand.length - 1);
                };

                $scope.Negate = function () {
                    $scope.Negative = !$scope.Negative;
                };

                $scope.Clear = function () {
                    $scope.Operand = null;
                    $scope.Negative = false;
                };

                $scope.ClearEverything = function () {
                    $scope.Result = null;
                    $scope.Operator = null;
                    $scope.Operand = null;
                    $scope.Negative = false;
                };

                $scope.ClearEverything();
            }
        ]
    );