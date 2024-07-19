'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    operate (callback, value) {
      callback.call(this, value);
      return this;
    },
    add (value)  {
      this.result += value;
    },
    subtract  (value) {
      this.result -= value;
    },
    multiply (value) {
      this.result *= value;
    },
    divide (value) {
      if (value === 0) {
        throw new Error("Not possible for this action")
      }
      this.result /= value;
    },
    reset () {
      this.result = 0;
      return this;
    }
  }
}

const calculator = makeCalculator();

calculator
.operate(calculator.add, 20)
.reset()
.operate(calculator.add, 20)
.operate(calculator.divide, 625)

console.log(calculator.result);


