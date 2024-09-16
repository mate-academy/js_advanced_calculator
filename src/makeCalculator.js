'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(func, number) {
      func(number, this);

      return this;
    },
    add(add, func) {
      func.result += add;
    },
    subtract(subtract, func) {
      func.result -= subtract;
    },
    divide(divide, func) {
      if (divide !== 0) {
        func.result /= divide;
      }
    },
    multiply(multiply, func) {
      func.result *= multiply;
    },
    reset() {
      this.result = 0;

      return this;
    },
  }
}

module.exports = makeCalculator;
