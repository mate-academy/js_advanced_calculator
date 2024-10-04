'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
  };

  calculator.add = function (value) {
    return this.result + value;
  }.bind(calculator);

  calculator.subtract = function (value) {
    return this.result - value;
  }.bind(calculator);

  calculator.multiply = function (value) {
    return this.result * value;
  }.bind(calculator);

  calculator.divide = function (value) {
    return this.result / value;
  }.bind(calculator);

  calculator.reset = function () {
    this.result = 0;

    return this;
  }.bind(calculator);

  calculator.operate = function (callback, value) {
    this.result = callback(value);

    return this;
  }.bind(calculator);

  return calculator;
}

module.exports = makeCalculator;
