'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calc = {
    result: 0,

    add: function (num) {
      this.result += num;
    },

    subtract: function (num) {
      this.result -= num;
    },

    multiply: function (num) {
      this.result *= num;
    },

    divide: function (num) {
      if (num === 0) {
        return 'Sorry, division by zero is not allowed.';
      }

      this.result /= num;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, value) {
      operation.call(this, value);

      return this;
    },
  };

  return calc;
}
module.exports = makeCalculator;
