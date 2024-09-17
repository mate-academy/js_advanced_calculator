"use strict";

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: (result, num) => result + num,
    subtract: (result, num) => result - num,
    multiply: (result, num) => result * num,
    divide: function (result, num) {
      if (num === 0) {
        return this.result;
      } else {
        return result / num;
      }
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, num) {
      this.result = operation(this.result, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
