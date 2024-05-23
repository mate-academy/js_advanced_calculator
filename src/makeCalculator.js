'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const resultObject = {
    result: 0,
  };

  resultObject.add = function (a, b) {
    return a + b;
  };

  resultObject.subtract = function (a, b) {
    return a - b;
  };

  resultObject.multiply = function (a, b) {
    return a * b;
  };

  resultObject.divide = function (a, b) {
    if (b === 0) {
      return undefined;
    } else {
      return a / b;
    }
  };

  resultObject.reset = function () {
    this.result = 0;

    return this;
  };

  resultObject.operate = function (operator, operand) {
    this.result = operator(this.result, operand);

    return this;
  };

  return resultObject;
}

module.exports = makeCalculator;
