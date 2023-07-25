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
  return {
    result: 0,

    checkValue(val) {
      if (val && typeof (val) === 'number') {
        return this;
      } else {
        throw new Error('Invalid value!');
      }
    },

    add(val) {
      this.result += val;

      return this;
    },

    subtract(val) {
      this.result -= val;

      return this;
    },

    multiply(val) {
      this.result *= val;

      return this;
    },

    divide(val) {
      this.result /= val;

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },

    operate(callback, val) {
      if (typeof callback === 'function' && this.checkValue(val)) {
        const bindCallback = callback.bind(this);

        return bindCallback(val);
      }

      throw new Error(`${callback} is not an operator in this calc`);
    },
  };
}

module.exports = makeCalculator;
