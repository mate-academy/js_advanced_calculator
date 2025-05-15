'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    get result() {
      return result;
    },

    add(num) {
      result += num;

      return result;
    },

    subtract(num) {
      result -= num;

      return result;
    },

    multiply(num) {
      result *= num;

      return result;
    },

    divide(num) {
      if (num === 0) {
        throw new Error('Ділення на нуль заборонено');
      }
      result /= num;

      return result;
    },

    operate(callback, num) {
      
      callback.call(this, num);

      return this;
    },

    reset() {
      result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
