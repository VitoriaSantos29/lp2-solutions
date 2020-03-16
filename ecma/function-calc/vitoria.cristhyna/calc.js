function calc(op1, op2, opera) {
    switch (opera) {
      case '+':
        return parseInt(op1) + parseInt(op2);
      case '-':
        return op1 - op2;
      case '*':
        return op1 * op2;
      case '/':
        return op1 / op2;
    }
  }
  
  module.exports = calc;