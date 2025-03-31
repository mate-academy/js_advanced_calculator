'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculations = {
    result: 0,
    add(previousResult, n) {
      return previousResult + n;
    },
    subtract(previousResult, n) {
      return previousResult - n;
    },
    multiply(previousResult, n) {
      return previousResult * n;
    },
    divide(previousResult, n) {
      return previousResult / n;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(operation, number) {
      this.result = operation(this.result, number);

      return this;
    },
  };

  return calculations;
}

module.exports = makeCalculator;
