'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(num) {
      return this.result + num;
    },
    subtract(num) {
      return this.result - num;
    },
    multiply(num) {
      return this.result * num;
    },
    divide(num) {
      return this.result / num;
    },
    operate(callback, num) {
      this.result = callback.call(this, num); // Usa o callback no `result`

      return this; // Permite chaining
    },
    reset() {
      this.result = 0;

      return this; // Permite chaining
    },
  };
}

module.exports = makeCalculator;
