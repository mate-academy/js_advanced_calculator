'use strict';

/**
 * Another calculator. Now the task is more difficult.
 * Create a `makeCalculator` function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the calculator will work:
 * - Each `operate` call takes a number and a callback and making the
 *   appropriate action with `result`.
 * - The `reset `method will reset the `result` value to 0.
 * - The `operate` and `reset` methods can be used in chained calls.
 *
 * Example:
 * const calculator = makeCalculator();
 *
 * calculator.operate(calculator.add, 21)
 * calculator.result === 21

 * calculator.reset()
 * calculator.result === 0

 * calculator
 *  .operate(calculator.add, 2)
 *  .operate(calculator.multiply, 4)
 *  .reset()
 *  .operate(calculator.subtract, 5)
 *  .operate(calculator.multiply, 4)
 *
 * calculator.result === -20
 *
 *
 * @return {object}
 */
function makeCalculator() {
  // creation of our hero
  const internalCalculator = {
    result: 0,

    operate: function(operation, number) {
      operation(number);

      return internalCalculator;
    },

    reset: function() {
      internalCalculator.result = 0;

      return internalCalculator;
    },

    add: function(addition) {
      internalCalculator.result += addition;
    },

    subtract: function(substractor) {
      internalCalculator.result -= substractor;
    },

    multiply: function(multiplier) {
      internalCalculator.result *= multiplier;
    },

    divide: function(divider) {
      internalCalculator.result /= divider;
    },
  };

  // when all done
  return internalCalculator;
}

module.exports = makeCalculator;
