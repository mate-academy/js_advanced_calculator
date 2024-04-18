'use strict';

/**
 * @return {object}
 */
function makeCalculator()  {
  return {
    result: 0,

    add: function(a, b) {
      return a + b;
    },
    
    subtract: function(a, b) {
      return a - b;
    },

    multiply: function(a, b) {
      return a * b;
    },

    divide: function(a, b) {
      return a / b;
    },

    operate: function(operation, a, b) {
      switch (operation) {
        case this.add:
          this.result = this.add(this.result, a, b);
          break;
        case this.subtract:
          this.result = this.subtract(this.result, a, b);
          break;
        case this.multiply:
          this.result = this.multiply(this.result, a, b);
          break;
        case this.divide:
          this.result = this.divide(this.result, a, b);
          break;
      }
      return this; 
    },

    reset: function() {
      this.result = 0;
      return this;
    },
  };
}

module.exports = makeCalculator;
