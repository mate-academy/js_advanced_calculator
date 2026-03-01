'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    // Арифметичні методи, які будуть передаватися як колбеки
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

    /**
     * Виконує операцію над поточним результатом
     * @param {function} callback - функція операції (add, subtract тощо)
     * @param {number} value - число для операції
     * @returns {object} - повертає цей же об'єкт для ланцюжка
     */
    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    /**
     * Скидає результат до 0
     * @returns {object} - повертає цей же об'єкт для ланцюжка
     */
    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
