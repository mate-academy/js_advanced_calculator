'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(num) {
      this.result += num;

      return this; // Чейнинг
    },

    subtract(num) {
      this.result -= num;

      return this;
    },

    multiply(num) {
      this.result *= num;

      return this;
    },

    divide(num) {
      this.result /= num;

      return this;
    },

    operate(fn, num) {
      fn.call(this, num); // Просто вызываем функцию, НЕ присваиваем результат

      return this; // Чейнинг
    },

    reset() {
      this.result = 0;

      return this; // Чейнинг
    },
  };
}

module.exports = makeCalculator;
