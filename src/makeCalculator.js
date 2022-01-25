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
 * Ще один калькулятор. Тепер завдання складніше.
 * Створіть функцію `makeCalculator`, яка повертає об'єкт, який
 * має такі поля:
 * - Методи: `додати`, `відняти`, `множити`, `розділити`, `скинути`,
 * `оперувати`.
 * - Властивість `result` спочатку дорівнює 0.
 *
 * Як працюватиме калькулятор:
 * - Кожен виклик `operate` приймає зворотний виклик і номер і встановлює
 * значення відповідне значення властивості "результат".
 * - Метод `скидання` скидає значення `результату` до 0.
 * - `додати`, `відняти`, `множити`, `розділяти` передаються як зворотні
 * виклики до метод «оперувати».
 * - Методи `operate` та `reset` можна викликати у ланцюжку.
 *
 * Приклад:
 * const калькулятор = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * калькулятор
 * .operate(calculator.add, 10)
 * .reset()
 * .operate(calculator.subtract, 20)
 * .operate(calculator.divide, 5)
 * .operate(калькулятор.множити, 7)
 *
 * калькулятор.результат === -28
 *
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(fun, b) {
      this.result = fun(this.result, b);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
