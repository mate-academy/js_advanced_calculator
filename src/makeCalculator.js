'use strict';

function makeCalculator() {
  const resultObj = {
    result: 0,
    add: (number) => resultObj.result + number,
    subtract: (number) => resultObj.result - number,
    multiply: (number) => resultObj.result * number,
    divide: (number) => resultObj.result / number,
    reset: () => {
      resultObj.result = 0;

      return resultObj;
    },
    operate: (callback, number) => {
      resultObj.result = callback(number);

      return resultObj;
    },
  };

  return resultObj;
}

module.exports = makeCalculator;
