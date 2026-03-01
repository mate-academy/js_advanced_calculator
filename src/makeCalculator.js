'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    // Початкове значення результату
    result: 0,

    add(current, num) {
      return current + num; // Повертаємо суму
    },

    subtract(current, num) {
      return current - num; // Повертаємо різницю
    },

    multiply(current, num) {
      return current * num; // Повертаємо добуток
    },

    divide(current, num) {
      // Перевірка на ділення на 0
      if (num === 0) {
        return current; // Повертаємо поточний результат, якщо дільник 0
      }

      return current / num; // Повертаємо частку
    },

    // Метод для виконання операцій (chainable)
    operate(callback, num) {
      this.result = callback(this.result, num); // Оновлюємо результат

      return this; // Повертаємо об'єкт для ланцюжка
    },

    // Метод для скидання результату (chainable)
    reset() {
      this.result = 0; // Скидаємо до 0

      return this; // Повертаємо об'єкт для ланцюжка
    },
  };
}

module.exports = makeCalculator;
