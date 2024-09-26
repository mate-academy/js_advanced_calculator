'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    operate(operation, nums) {
      operation(nums);

      return this;
    },

    add(nums) {
      calculator.result += nums;

      return calculator.result;
    },

    subtract(nums) {
      calculator.result -= nums;

      return calculator.result;
    },

    multiply(nums) {
      calculator.result *= nums;

      return calculator.result;
    },

    divide(nums) {
      calculator.result /= nums;

      return calculator.result;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
