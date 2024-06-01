'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  return {
    add(num) {
      result += num;

      return this;
    },
    subtract(num) {
      result -= num;

      return this;
    },
    multiply(num) {
      result *= num;

      return this;
    },
    divide(num) {
      if (num !== 0) {
        result /= num;

        return this;
      } else {
        throw new Error('Cannot divide by zero!');
      }
    },
    reset(num) {
      result = 0;

      return this;
    },
    operate(operation, num) {
      return operation.call(this, num);
    },
    get result() {
      return result;
    },
  };
}

module.exports = makeCalculator;
