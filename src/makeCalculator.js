'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `result` property.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * * Ще один калькулятор. Тепер завдання складніше.
 * Створіть функцію `makeCalculator`, яка повертає об'єкт, який
 * має такі поля:
* - Методи: `додати`, `відняти`, `множити`, `розділити`, `скинути`, `оперувати`.
              `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`
 * - Властивість `result` спочатку дорівнює 0.
 *
 * Як працюватиме калькулятор:
 - Кожен виклик `operate` `callback` і номер і встановлює значення
 * відповідне значення властивості "result".
 * - Метод `reset` скидає значення `результату` до 0.
- `додати`, `відняти`, `множити`, `розділяти` передаються як зворотні виклики до
 * метод «оперувати».
 * - Методи `operate` та `reset` можна викликати у ланцюжку.
 *
 * Example:
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
  const object = {
    result: 0,

    add(key) {
      return object.result + key;
    },

    subtract(key) {
      return object.result - key;
    },

    multiply(key) {
      return object.result * key;
    },

    divide(key) {
      return object.result / key;
    },

    reset() {
      object.result = 0;

      return object;
    },

    operate(callback, number) {
      object.result = callback(number);

      return object;
    },
  };

  return object;
}

module.exports = makeCalculator;
