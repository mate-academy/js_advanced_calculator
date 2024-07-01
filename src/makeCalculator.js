'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `total` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a callback and a value and sets the
 *   appropriate value to the `total` property.
 * - The `reset` method resets `total` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.total === 21

 * calculator.reset()
 * calculator.total === 0
 * calculator
 *  .operate(calculator.add, 10)
 *  .reset()
 *  .operate(calculator.subtract, 20)
 *  .operate(calculator.divide, 5)
 *  .operate(calculator.multiply, 7)
 *
 * calculator.total === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    total: 0,
    operate: function(callback, callbackValue) {
      callback(callbackValue);

      return this;
    },
    add: function(value) {
      calculator.total += value;

      return this;
    },
    subtract: function(value) {
      calculator.total = calculator.total - Math.abs(value);

      return this;
    },
    multiply: function(value) {
      calculator.total = calculator.total * value;
    },
    divide: function(value) {
      calculator.total = calculator.total / value;

      return this;
    },
    reset: function() {
      calculator.total = 0;

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
