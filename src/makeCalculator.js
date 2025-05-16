'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (operand) {
      return this.result + operand;
    },

    subtract: function (operand) {
      return this.result - operand;
    },

    multiply: function (operand) {
      return this.result * operand;
    },

    divide: function (operand) {
      return this.result / operand;
    },

    operate: function (callback, value) {
      this.result = callback.call(this, value);

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
