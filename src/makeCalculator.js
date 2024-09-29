'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {};

  calculator.result = 0;

  calculator.add = function (num) {
    this.result += num;
  };

  calculator.subtract = function (num) {
    this.result -= num;
  };

  calculator.multiply = function (num) {
    this.result *= num;
  };

  calculator.divide = function (num) {
    this.result /= num;
  };

  calculator.reset = function () {
    this.result = 0;

    return this;
  };

  calculator.operate = function (operation, num) {
    operation.call(this, num);

    return this;
  };

  return calculator;
}

module.exports = makeCalculator;
