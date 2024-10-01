'use strict';

/**
 * @return {object}
 */
function makeCalculator(operation, x) {
   let res = 0;

  // a = x;

  const calculator = {
    add: (a) => {
      res += x;
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
    operate: (oper, a) => oper.result(a),
    result: 0,
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
