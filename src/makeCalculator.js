'use strict';

/**
 * @return {object}
 * Create a `makeCalculator` function that returns an object that
has the following fields:
- Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
- The `result` property is initially 0.

How the calculator will work:
- Each `operate` call takes a callback
and a number and sets the appropriate value to the `result` property.
- The `reset` method resets `result` value to 0.
- `add`, `subtract`, `multiply`,
divide` are passed as callbacks to `operate` method.
- The `operate` and `reset` methods can be called in a chain.

 */

function makeCalculator() {
  const defaultValue = 0;

  return {
    result: defaultValue,

    add(current, number) {
      return current + number;
    },

    subtract(current, number) {
      return current - number;
    },

    multiply(current, number) {
      return current * number;
    },

    divide(current, number) {
      return current / number;
    },

    reset() {
      this.result = defaultValue;

      return this;
    },

    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
