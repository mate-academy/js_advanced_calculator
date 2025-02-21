'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result: result,

    add: function (number) {
      result += number;
      this.result = result;

      return this;
    },

    subtract: function (number) {
      result -= number;
      this.result = result;

      return this;
    },

    multiply: function (number) {
      result *= number;
      this.result = result;

      return this;
    },

    divide: function (number) {
      if (number !== 0) {
        result /= number;
      }
      this.result = result;

      return this;
    },

    operate: function (callback, number) {
      callback.call(this, number);

      return this;
    },

    reset: function () {
      result = 0;
      this.result = result;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
