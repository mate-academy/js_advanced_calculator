'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // ITEM #1: Criamos a variável com o nome correto
  const calculator = {
    result: 0,

    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
