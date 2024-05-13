'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const finalResult = {
    result: 0,
    add(number) {
      finalResult.result += number;

      return finalResult.result;
    },
    subtract(number) {
      finalResult.result -= number;

      return finalResult.result;
    },
    multiply(number) {
      finalResult.result *= number;

      return finalResult.result;
    },
    divide(number) {
      finalResult.result /= number;

      if (number === 0) {
        return undefined;
      } else {
        return finalResult.result;
      }
    },
    reset() {
      finalResult.result = 0;

      return this;
    },
    operate(operation, number) {
      finalResult.result = operation(number);

      return this;
    },
  };

  return finalResult;
}

module.exports = makeCalculator;
