'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
  let res = 0;

  // a = x;

  const calculator = {
    add: () => {
      if (calculator.result === 0) {
        calculator.result = x;
      } else {
        res += x;
      }
    },
    subtract: (a) => {
      res -= a;
    },
    multiply: (a) => {
      res = res * a;
    },
    divide: (a) => {
      if (a !== 0) {
        res = res / a;
      } else {
      }
    },
    reset: () => (calculator.result = 0),
    operate: (oper, a) => (calculator.result += oper.result(a)),
    result: 0,
  };

  return calculator;
}

module.exports = makeCalculator;
