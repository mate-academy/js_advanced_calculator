'use strict';

//*
//* @return {object}
//*
function makeCalculator() {
  let result = 0;

  const obj = {
    get result() {
      return result;
    },
    add: (currentResult, number) => {
      return currentResult + number;
    },
    subtract: (currentResult, number) => {
      return currentResult - number;
    },
    multiply: (currentResult, number) => {
      return currentResult * number;
    },
    divide: (currentResult, number) => {
      return currentResult / number;
    },
    operate(cb, number) {
      const newVal = cb(result, number);

      result = newVal;

      return obj;
    },
    reset: () => {
      result = 0;

      return obj;
    },
  };

  return obj;
}

module.exports = makeCalculator;
