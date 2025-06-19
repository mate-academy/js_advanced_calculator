'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(operation, value) {
      this.result = operation.call(this, value);

      return this;
    },

    add(value) {
      this.result += value;

      return this.result;
    },

    subtract(value) {
      this.result -= value;

      return this.result;
    },

    multiply(value) {
      this.result *= value;

      return this.result;
    },

    divide(value) {
      this.result /= value;

      return this.result;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

// Експортуємо саму функцію, а не об'єкт калькулятора
module.exports = makeCalculator;
