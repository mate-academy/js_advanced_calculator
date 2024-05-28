'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
    result: 0,
  };

  object.add = function (number) {
    object.result += number;
  };

  object.subtract = function (number) {
    object.result -= number;
  };

  object.multiply = function (number) {
    object.result *= number;
  };

  object.divide = function (number) {
    object.result /= number;
  };

  object.reset = function () {
    object.result = 0;

    return this;
  };

  object.operate = function (callback, number) {
    callback(number);

    return this;
  };

  return object;
}

module.exports = makeCalculator;
