'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    // Add method
    add: function (num) {
      this.result += num;
    },

    // Subtract method
    subtract: function (num) {
      this.result -= num;
    },

    // Multiply method
    multiply: function (num) {
      this.result *= num;
    },

    // Divide method
    divide: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        return 'Cannot divide by zero.';
      }
    },

    // Reset method
    reset: function () {
      this.result = 0;

      return this;
    },

    // Operate method
    operate: function (callback, num) {
      callback.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
