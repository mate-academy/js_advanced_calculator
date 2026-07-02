'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(number) {
      this.result += number;
    },
    subtract(number) {
      this.result -= number;
    },
    multiply(number) {
      this.result *= number;
    },
    divide(number) {
      if (number === 0) {
        throw new Error('Division by zero');
      }
      this.result /= number;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operator, number) {
      operator.call(this, number);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
