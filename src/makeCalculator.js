'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add: function (num) {
      result += num;

      return this;
    },
    subtract: function (num) {
      result -= num;

      return this;
    },
    multiply: function (num) {
      result *= num;

      return this;
    },
    divide: function (num) {
      if (num !== 0) {
        result /= num;

        return this;
      } else {
        throw new Error('Cannot divide by zero!');
      }
    },
    reset: function (num) {
      result = 0;

      return this;
    },
    operate: function (operation, num) {
      return operation.call(this, num);
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
