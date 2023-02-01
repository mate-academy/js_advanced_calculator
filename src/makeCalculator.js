'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns
 * an object that has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Каждый вызов `Operate
 * Соответствующее значение для свойства `result`.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - Методы «операции» и «сброса» могут быть вызваны в цепочке.
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
  const calc = {
    result: 0,

    reset() {
      this.result = 0;

      return this;
    },

    add(result, operand) {
      return result + operand;
    },

    subtract(result, operand) {
      return result - operand;
    },

    multiply(result, operand) {
      return result * operand;
    },

    divide(result, operand) {
      return result / operand;
    },

    operate(callback, value) {
      this.result = callback(this.result, value);

      return this;
    },
  };

  return calc;
}

module.exports = makeCalculator;
