'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    // Математичні операції у вигляді callback-функцій
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,

    // Операція, яка використовує callback
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this; // Повертаємо this для chain-виклику
    },

    // Скидання значення result
    reset() {
      this.result = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
