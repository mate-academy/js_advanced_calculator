'use strict';

/**
* Ще один калькулятор.Зараз завдання складніше.
 * Створіть функцію `makecalculator`, яка повертає об'єкт, який
 * має такі поля:
 ]
 * - Властивість `Результат спочатку 0.
 *
 * Як працюватиме калькулятор:
 * - кожен виклик `eperate` приймає зворотний виклик і номер і встановлює
 * Відповідне значення для властивості `result`.
 * - Метод `` `скидає значення` result` до 0.
 ]
 * `eperate` метод
 * - Методи `eperate` і` Reset` можна називати в ланцюзі.
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
  // write code here
  const calculator = {
    result: 0,

    add(operand) {
      this.result += operand;
    },

    subtract(operand) {
      this.result -= operand;
    },

    multiply(operand) {
      this.result *= operand;
    },

    divide(operand) {
      this.result /= operand;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, operand) {
      callback.call(this, operand);

      return this;
    },

  };

  return calculator;
}

module.exports = makeCalculator;
