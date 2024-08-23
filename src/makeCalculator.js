'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (num) {
      return this.result + num;
    },
    subtract: function (num) {
      return this.result - num;
    },
    multiply: function (num) {
      return this.result * num;
    },
    divide: function (num) {
      return this.result / num;
    },
    reset: function (num) {
      this.result = 0;

      return this;
    },
    operate: function (callback, num) {
      this.result = callback.call(this, num);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
