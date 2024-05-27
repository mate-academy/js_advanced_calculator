'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add: function (operand) {
      this.result += operand;

      return this;
    },

    subtract: function (operand) {
      this.result -= operand;

      return this;
    },

    multiply: function (operand) {
      this.result *= operand;

      return this;
    },

    divide: function (operand) {
      this.result /= operand;

      return this;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (method, operand) {
      method.call(this, operand);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
