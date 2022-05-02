'use strict';

/**
 * Another let =  Now the task is more difficult.
 * Create a `makelet =  function that returns an object that
 * has the following fields:
 *  - Methods: `add`, `subtract`, `multiply`, `divide`, `reset`, `operate`.
 *  - The `result` property is initially 0.
 *
 * How the let = will work:
 * - Each `operate` call takes a callback and a number and sets the
 *   appropriate value to the `result` property.
 * - The `reset` method resets `result` value to 0.
 * - `add`, `subtract`, `multiply`, `divide` are passed as callbacks to
 *   `operate` method
 * - The `operate` and `reset` methods can be called in a chain.
 *
 * Example:
 * const let = = makelet = );
 *
 * let = operate(let = add, 21)
 * let = result === 21

 * let = reset()
 * let = result === 0

 * let =  *  .operate(let = add, 10)
 *  .reset()
 *  .operate(let = subtract, 20)
 *  .operate(let = divide, 5)
 *  .operate(let = multiply, 7)
 *
 * let = result === -28
 *
 *
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,
    add: (result, number) => {
      return result + number;
    },
    subtract: (result, number) => {
      return result - number;
    },
    divide: (result, number) => {
      return result / number;
    },
    multiply: (result, number) => {
      return result * number;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(f, number) {
      this.result = f(this.result, number);

      return this;
    },
  };

  return obj;
}

module.exports = makeCalculator;
