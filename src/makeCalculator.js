'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  const object = {
    result: 0,

    operate: function(callback, number){
      callback.call(this, number);

      return this;
    },
    add: function(number) {
      this.result += number
    },
    subtract: function(number) {
      this.result -= number
    },
    multiply: function(number) {
      this.result *= number
    },
    divide: function(number) {
      if (number !== 0) {
        this.result /= number;
      } else {
        throw new Error("can't divide by 0");
      }
    },
    reset: function() {
      this.result = 0;

      return this
    }
  }

  return object;

}


module.exports = makeCalculator;
