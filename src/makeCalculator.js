'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const calculator = {
    result: 0,

    add(number1, number2) {
      return (number1 + number2);
    },

    subtract(number1, number2) {
      return (number1 - number2);
    },

    multiply(number1, number2) {
      return (number1 * number2);
    },

    divide(number1, number2) {
      if (!number2) {
        throw new Error(`You can't divide by zero`);
      }

      return (number1 / number2);
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
