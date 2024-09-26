'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const object = {
    result: 0,
    operate(callback, num) {
      this.result = callback(this.result, num);

      return this;
    },
    add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    divide(num1, num2) {
      return num1 / num2;
    },
    reset() {
      this.result = 0;

      return this;
    },
  };

  return object;
}

module.exports = makeCalculator;
