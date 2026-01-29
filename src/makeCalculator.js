'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0; // private result

  return {
    add(num) { result += num; return this; },
    subtract(num) { result -= num; return this; },
    multiply(num) { result *= num; return this; },
    divide(num) { result /= num; return this; },
    reset() { result = 0; return this; },
    operate(callback, number) { result = callback(result, number); return this; },
    getResult() { return result; } // read-only access
  };
}

module.exports = makeCalculator;
