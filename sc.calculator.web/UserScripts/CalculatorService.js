angular
    .module('App')
    .factory('CalculatorService',
        function () {
            var service = {
                Calculate: function (operand1, operator, operand2) {
                    var result = 'Err';

                    operand1 = parseFloat(operand1);
                    operand2 = parseFloat(operand2);

                    if (isNaN(operand1) || isNaN(operand2)) return result;

                    switch (operator) {
                        case '+':
                            result = operand1 + operand2;
                            break;

                        case '-':
                            result = operand1 - operand2;
                            break;

                        case '*':
                            result = operand1 * operand2;
                            break;

                        case '/':
                            if (operand2 == 0) return 'Err';
                            result = operand1 / operand2;
                            break;
                    }

                    if (isNaN(result)) return 'Err';

                    return result;
                }
            };

            return service;
        }
    );