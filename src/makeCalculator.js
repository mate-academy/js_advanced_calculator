'use strict';

/**
 * Ще один калькулятор. Тепер завдання складніше.
 * Створіть функцію `makeCalculator`, яка повертає об'єкт, що
 * має наступні поля:
 * - Методи: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 * - Властивість `result` початково дорівнює 0.
 *
 * Як буде працювати калькулятор:
 * - Кожен виклик `operate` приймає зворотний виклик та число і встановлює
 * відповідне значення властивості `result`.
 * - Метод `reset` скидає значення `result` до 0.
 * - Функції `add`, `subtract`, `multiply`, `divide`
 * передаються як зворотні виклики до
 * методу `operate`.
 * - Методи `operate` та `reset` можна викликати ланцюжком.
 *
 * Приклад:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },

    add(x, y) {
      return x + y;
    },

    subtract(x, y) {
      return x - y;
    },

    multiply(x, y) {
      return x * y;
    },

    divide(x, y) {
      return x / y;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
