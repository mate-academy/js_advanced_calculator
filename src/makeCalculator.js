'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {};

  obj.result = 0;

  obj.reset = function () {
    this.result = 0;

    return this;
  };

  obj.divide = function (a, b) {
    if (b === 0) {
      return a;
    }

    return a / b;
  };

  obj.add = function (a, b) {
    return a + b;
  };

  obj.subtract = function (a, b) {
    return a - b;
  };

  obj.multiply = function (a, b) {
    return a * b;
  };

  obj.operate = function (callback, number) {
    this.result = callback(this.result, number);

    return this;
  };

  return obj;
}

module.exports = makeCalculator;
