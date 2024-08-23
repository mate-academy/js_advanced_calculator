'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const result = {
    result: 0,
    add(digit) {
      return (result.result += digit);
    },
    subtract(digit) {
      return (result.result -= digit);
    },
    multiply(digit) {
      return (result.result *= digit);
    },
    divide(digit) {
      return (result.result /= digit);
    },
    reset() {
      result.result = 0;
      return this;
    },
    operate(callback, number) {
      result.result = callback(number);
      return this;
    },
  };
  return result;
}

module.exports = makeCalculator;
