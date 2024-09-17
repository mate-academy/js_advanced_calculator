const makeCalculator = () => {
  const methods = {
    result: 0,

    add(n) {
      this.result += n;
      return this; // Return the methods object to enable chaining
    },

    subtract(n) {
      this.result -= n;
      return this; // Return the methods object to enable chaining
    },

    multiply(n) {
      this.result *= n;
      return this; // Return the methods object to enable chaining
    },

    divide(n) {
      this.result /= n;
      return this; // Return the methods object to enable chaining
    },

    reset(n = 0) {
      this.result = n;
      return this; // Return the methods object to enable chaining
    },

    operate: function (callback, n) {
      callback.call(this, n);
      return this; // Return the methods object to enable chaining
    },
  };

  return methods;
};

module.exports = makeCalculator;
