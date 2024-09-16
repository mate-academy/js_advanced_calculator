'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    operate(action, number) {
      action(number);

      return this;
    },
    add(number) {
      obj.result += number;

      return this;
    },
    subtract(number) {
      obj.result -= number;

      return this;
    },
    divide(number) {
      obj.result /= number;

      return this;
    },
    multiply(number) {
      obj.result *= number;

      return this;
    },
    reset() {
      obj.result = 0;

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
