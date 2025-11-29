'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here

  let result = 0;

  const calculator = {
    // Getter usa a sintaxe de propriedade abreviada
    get result() {
      return result;
    },

    // Métodos de callback (usando sintaxe abreviada para consistência)
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
      if (b === 0) {
        return NaN;
      }

      return a / b;
    },

    // Métodos principais (já estavam corretos)
    operate(callback, num) {
      // 'this' aqui se refere ao objeto 'calculator'
      result = callback(result, num);

      return this;
    },

    reset() {
      // 'this' aqui se refere ao objeto 'calculator'
      result = 0;

      return this;
    }
  };

  return calculator;
}
module.exports = makeCalculator;
