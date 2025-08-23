'use strict';

/**
 * Create Calculator object
 *
 * @return {object}
 */
function makeCalculator() {
  // constants
  const DIV_BY_ZERO_ERR_MSG = 'Division by zero is not allowed.';

  // return calculator object
  return {
    // current result of calculation
    result: 0,

    // implementation of operations

    /**
     * Add operation
     *
     * @param currentResult
     * @param operand
     * @return {*}
     */
    add(currentResult, operand) {
      return currentResult + operand;
    },

    /**
     * Substract operation
     *
     * @param currentResult
     * @param operand
     * @return {number}
     */
    subtract(currentResult, operand) {
      return currentResult - operand;
    },

    /**
     * Multiply operation
     *
     * @param currentResult
     * @param operand
     * @return {number}
     */
    multiply(currentResult, operand) {
      return currentResult * operand;
    },

    /**
     * Divide operation
     *
     * @param currentResult
     * @param operand
     * @return {number}
     */
    divide(currentResult, operand) {
      if (operand === 0) {
        throw new Error(DIV_BY_ZERO_ERR_MSG);
      }

      return currentResult / operand;
    },

    /**
     * Returns 0, to reset current calculator acc
     *
     * @return {number}
     */
    reset() {
      this.result = 0;

      return this;
    },

    /**
     * Execute callback and modify internal result property
     *
     * @param operatorFunction
     * @param operand
     * @return {*}
     */
    operate(operatorFunction, operand = '') {
      this.result = operatorFunction(this.result, operand);

      return this;
    },
  };
}

module.exports = makeCalculator;
