'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  class Calculator {
    result = 0;

    reset() {
      this.#result = 0;

      return this;
    }

    operate(operation, value) {
      this.#result = operation(this.result, value);

      return this;
    }

    add(num1, num2) {
      return num1 + num2;
    }

    subtract(num1, num2) {
      return num1 - num2;
    }

    multiply(num1, num2) {
      return num1 * num2;
    }

    divide(num1, num2) {
      if (num2 !== 0) {
        return num1 / num2;
      }

      throw new Error('Division by zero');
    }
  }

  return new Calculator();
}

module.exports = makeCalculator;
