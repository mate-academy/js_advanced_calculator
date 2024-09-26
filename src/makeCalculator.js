'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: (result, number) => result + number,
    subtract: (result, number) => result - number,
    multiply: (result, number) => result * number,
    divide: (result, number) => {
      if (number === 0) {
        return 'cant divide on 0';
      }

      return result / number;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
