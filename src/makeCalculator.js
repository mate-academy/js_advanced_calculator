'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
  let result = 0;

  // a = x;

  const calculator = {
    add: (a) => {
      result += x;
    },
    subtract: (a) => {
      result -= a;
    },
    multiply: (a) => {
      result = result * a;
    },
    divide: (a) => {
      if (a !== 0) {
        result = result / a;
      } else {
      }
    },
    reset: () => (calculator.result = 0),
    operate: (a) => operation(a),
  };

  // obj.operate = (operation, a) => {
  //   result = result.operation(a);
  // };

  // obj.add = (a) => {
  //   result += a;
  // };

  // obj.subtract = (a) => {
  //   result -= a;
  // };

  // obj.divide = (a) => {
  //   if (a !== 0) {
  //     result = result / a;
  //   } else {
  //   }
  // };

  // obj.multiply = (a) => {
  //   result = result * a;
  // };

  return calculator;
}

module.exports = makeCalculator;
