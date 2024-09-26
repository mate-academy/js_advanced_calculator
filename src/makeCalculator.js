'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
  };

  calculator.add = function(number, currentResult) {
    return currentResult + number;
  };

  calculator.subtract = function(number, currentResult) {
    return currentResult - number;
  };

  calculator.divide = function(number, currentResult) {
    return currentResult / number;
  };

  calculator.multiply = function(number, currentResult) {
    return currentResult * number;
  };

  calculator.reset = function() {
    calculator.result = 0;

    return this;
  };

  calculator.operate = function(callback, number) {
    calculator.result = callback(number, calculator.result);

    return this;
  };

  return calculator;
}

module.exports = makeCalculator;
