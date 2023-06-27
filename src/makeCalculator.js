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
 *
 * @return {object}
 */
function makeCalculator(method, number) {
  const object = {
    result: 0,
    add: function(value) {
      this.result += value;
    },
    subtract: function(value) {
      this.result -= value;
    },
    multiply: function(value) {
      this.result *= value;
    },
    divide: function(value) {
      this.result /= value;
    },
    reset: function() {
      this.result = 0;

      return object;
    },
    operate: function(callback, num) {
      callback.call(this, num);

      return object;
    },
  };

  return object;
}

module.exports = makeCalculator;

// * Ще один калькулятор. Тепер завдання складніше.
//  * Створіть функцію makeCalculator, яка повертає об’єкт, який
//  * має такі поля:
//  * - Методи: `додати`, `відняти`, `помножити`, `поділити`, `скинути`,
// `оперувати`.
//  * - Властивість `result` спочатку дорівнює 0.
//  *
//  * Як буде працювати калькулятор:
//  * - Кожен виклик `operate` приймає зворотний виклик і номер і встановлює
//  * відповідне значення властивості `result`.
//  * - Метод `reset` скидає значення `result` до 0.
//  * - `add`, `subtract`, `multiply`, `divide` передаються як зворотні
// виклики до
//  * метод `operate`
//  * - Методи `operate` і `reset` можна викликати в ланцюжку.
//  *
//  * Приклад:
//  * const calculator = makeCalculator();
//  *
//  * calculator.operate(calculator.add, 21)
//  * calculator.result === 21

//  * calculator.reset()
//  * calculator.result === 0

//  * калькулятор
//  * .operate(calculator.add, 10)
//  * .reset()
//  * .operate(calculator.subtract, 20)
//  * .operate(calculator.divide, 5)
//  * .operate(calculator.multiply, 7)
