'use strict';

/**
 * @returns {object}
 */
function makeCalculator() {
  return {
    result: 0,

    // Callbacks que serão passados para o operate
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

    // O cérebro da calculadora
    operate(callback, num) {
      // Atualiza o result usando o callback
      // O callback recebe o valor atual e o novo número
      this.result = callback(this.result, num);

      // Retorna o próprio objeto para permitir encadeamento
      return this;
    },

    reset() {
      this.result = 0;

      // Retorna o próprio objeto para permitir encadeamento
      return this;
    },
  };
}

module.exports = makeCalculator;
