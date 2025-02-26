'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (value1, value2) {
      return value1 + value2;
    },
    subtract: function (value1, value2) {
      return value1 - value2;
    },
    multiply: function (value1, value2) {
      return value1 * value2;
    },
    divide: function (value1, value2) {
      return value1 / value2;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
