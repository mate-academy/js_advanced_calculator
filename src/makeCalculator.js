'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0, // result is a property of the calculator object

    // Define the basic operations
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
      if (num !== 0) {
        this.result /= num;
      } else {
        return null;
      }
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      operation.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
