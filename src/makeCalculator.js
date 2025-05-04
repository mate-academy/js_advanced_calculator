'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  const calculator = {};

  calculator.result = 0;

  calculator.operate = function (operation, num) {
    if (typeof operation === 'function') {
      operation(num);
    }

    return this;
  };

  calculator.add = function (num) {
    calculator.result += num;

    return this;
  };

  calculator.subtract = function (num) {
    calculator.result -= num;

    return this;
  };

  calculator.multiply = function (num) {
    calculator.result *= num;

    return this;
  };

  calculator.divide = function (num) {
    calculator.result /= num;

    return this;
  };

  calculator.reset = function () {
    calculator.result = 0;

    return this;
  };

  return calculator;
}

module.exports = makeCalculator;
