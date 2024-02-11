'use strict';

/**
 * Створіть функцію `makeCalculator`, яка повертає об'єкт, що
 * має наступні поля:
 * - Методи: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 * - Властивість `result` початково дорівнює 0.
 *
 * Як буде працювати калькулятор:
 * - Кожен виклик `operate` приймає зворотний виклик та число і встановлює
 * відповідне значення властивості `result`.
 * - Метод `reset` скидає значення `result` до 0.
 * -Функції`add`,`subtract`,`multiply`,`divide`передаютьсяяк зворотні виклики до
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
* .operate(calculator.add, 10)
* .reset()
* .operate(calculator.subtract, 20)
* .operate(calculator.divide, 5)
* .operate(calculator.multiply, 7)
*
* calculator.result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add: function(num) {
      this.result += num;

      return this;
    },
    subtract: function(num) {
      this.result -= num;

      return this;
    },
    multiply: function(num) {
      this.result *= num;

      return this;
    },
    divide: function(num) {
      if (num !== 0) {
        this.result /= num;
      }

      return this;
    },
    reset: function() {
      this.result = 0;

      return this;
    },
    operate: function(operation, num) {
      operation.call(this, num);

      return this;
    },
  };
}

module.exports = makeCalculator;
