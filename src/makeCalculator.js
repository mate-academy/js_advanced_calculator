'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  // write code here
  return {
    result: 0,
    add: function(value) {
       this.result += value;
    },
    subtract: function(value) {
      this.result -= value;
    },
    multiply: function(value) {
     this.result *= value;
    },
    divide: function(value) {
     this.result /= value;
    },
    reset: function() {
     this.result = 0;
     return this;
    },
    operate: function(callback, num) {
    /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
    console.log(this.result, callback, num)
     this.callback(num);
     return this;
    }
  }
}

module.exports = makeCalculator;
