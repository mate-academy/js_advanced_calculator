'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // object created
  const calculator = {
    result: 0,

    // created callback operator methods
    add(prevValue, number) {
      return prevValue + number;
    },

    subtract(prevValue, number) {
      return prevValue - number;
    },

    multiply(prevValue, number) {
      return prevValue * number;
    },

    divide(prevValue, number) {
      return prevValue / number;
    },

    // created operate method wich take above methods as callback and
    // number which will be operate.
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    // created `reset` method which resets `result` value to 0.
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
