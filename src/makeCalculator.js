'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(totalValue, number) {
      return totalValue + number;
    },

    subtract(totalValue, number) {
      return totalValue - number;
    },

    multiply(totalValue, number) {
      return totalValue * number;
    },

    divide(totalValue, number) {
      if (number === 0) {
        throw new Error('U can`t divide by zero!');
      }

      return totalValue / number;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
