'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    startValue: 0,
    operate(fun, num) {
      fun(num);

      return calculator;
    },
    
    add(a) {
      calculator.startValue += a;

      return calculator;
    },
    
    subtract(a) {
      calculator.startValue -= a;

      return calculator;
    },
    
    multiply(e) {
      calculator.startValue *= e;

      return calculator;
    },
    
    divide(e) {
      calculator.startValue /= e;

      return calculator;
    },
    
    reset() {
      calculator.startValue = 0;

      return calculator;
    },
    
    get result() {
      return calculator.startValue;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
