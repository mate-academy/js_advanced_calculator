'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    // Метод для додавання
    add: function (a) {
      this.result += a;
    },

    // Метод для віднімання
    subtract: function (a) {
      this.result -= a;
    },

    // Метод для множення
    multiply: function (a) {
      this.result *= a;
    },

    // Метод для ділення
    divide: function (a) {
      if (a !== 0) {
        this.result /= a;
      } else {
        return 'Cannot divide by zero!';
      }
    },

    // Метод для скидання результату
    reset: function () {
      this.result = 0;

      return this; // Повертаємо об'єкт для можливості ланцюжкового виклику
    },

    // Метод для виконання операцій
    operate: function (callback, number) {
      callback.call(this, number);

      return this; // Повертаємо об'єкт для можливості ланцюжкового виклику
    },
  };
}

module.exports = makeCalculator;
