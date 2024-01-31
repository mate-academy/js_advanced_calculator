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
function makeCalculator() {
  const methods = {
    result: 0,

    add: (number) => {
      methods.result += number;

      return methods;
    },

    subtract: (number) => {
      methods.result -= number;

      return methods;
    },

    multiply: (number) => {
      methods.result *= number;

      return methods;
    },

    divide: (number) => {
      if (number !== 0) {
        methods.result /= number;

        return methods;
      }
    },

    reset: () => {
      methods.result = 0;

      return methods;
    },

    operate: function(callback, number) {
      switch (callback) {
        case methods.add:
          methods.add(number);
          break;
        case methods.subtract:
          methods.subtract(number);
          break;
        case methods.multiply:
          methods.multiply(number);
          break;
        case methods.divide:
          methods.divide(number);
          break;
        default:
          break;
      }

      return methods;
    },
  };

  return methods;
}

module.exports = makeCalculator;
