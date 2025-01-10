'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    // Свойство для хранения текущего результата
    result: 0,

    // Метод сложения
    add(value) {
      this.result += value;
    },

    // Метод вычитания
    subtract(value) {
      this.result -= value;
    },

    // Метод умножения
    multiply(value) {
      this.result *= value;
    },

    // Метод деления
    divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        throw new Error('Division by zero is not allowed.');
      }
    },

    // Метод сброса результата
    reset() {
      this.result = 0;

      return this; // Для поддержки цепного вызова
    },

    // Метод для выполнения операций с передачей колбэка
    operate(callback, value) {
      callback.call(this, value); // Вызов метода с передачей контекста this

      return this;
    },
  };
}

module.exports = makeCalculator;
