'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

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
  };

  return calculator;
}

module.exports = makeCalculator;
