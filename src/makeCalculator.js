'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    operate(action, number) {
      const pastResult = this.result;

      this.result = action(number, pastResult);

      return this;
    },
    reset() {
      this.result = 0;

      return this;
    },
    add(number, pastResult) {
      return pastResult + number;
    },
    subtract(number, pastResult) {
      return pastResult - number;
    },
    multiply(number, pastResult) {
      return pastResult * number;
    },
    divide(number, pastResult) {
      return pastResult / number;
    },
  };
}

module.exports = makeCalculator;
