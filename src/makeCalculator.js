'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (num) {
      this.result += num;

      return this;
    },
    subtract: function (num) {
      this.result -= num;

      return this;
    },
    multiply: function (num) {
      this.result *= num;

      return this;
    },
    divide: function (num) {
      this.result /= num;

      return this;
    },
    reset: function () {
      this.result = 0;

      return this;
    },
    operate: function (method, num) {
      return method.call(this, num);
    },
  };

  return calculator;
}

module.exports = makeCalculator;
