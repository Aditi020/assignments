/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(num) {
    this.result += num;
  }
  subtract(num) {
    this.result -= num;
  }
  multiply(num) {
    this.result *= num;
  }
  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Cannot divide by zero.");
    }
  }
  clear() {
    this.result = 0;
  }
  getResult() {
    return this.result;
  }
 calculate(expression) {

     expression = expression.replaceAll(" ", "");
     const validCharacters = /^[\d\s\+\-\*\/().]+$/;

     if (!validCharacters.test(expression)) {
       throw new Error("Invalid characters in the expression");
     }

     try {
       const res = eval(expression); //eval function in JavaScript evaluates a string as code and executes it.
       if (!isFinite(res))
       {
         throw new Error(`Can not divide by zero`);
       }
       this.result = res;
        } 
     catch (error) {
       throw new Error("Invalid expression");
        }
       return this.result;
     }
  }
   // const calculator = new Calculator();
   // const result = calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
   // console.log(result); // Output: 24

   module.exports = Calculator;

     // const expressionArray = expression.replace(" ","").split(/\s+/); // Split by one or more spaces  
    // for (let i = 0; i < expressionArray.length; i++) {
    //   const token = expressionArray[i];
    //   const validCharacters = /^[\d\s\+\-\*\/().]+$/;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
    //   if (!isNaN(token)) {
    //     this.add(Number(token));
    //   } else if (token === "+") {
    //     this.add(Number(expressionArray[i + 1]));
    //   } else if (token === "-") {
    //     this.subtract(Number(expressionArray[i + 1]));
    //   } else if (token === "*") {
    //     this.multiply(Number(expressionArray[i + 1]));
    //   } else if (token === "/") {
    //     this.divide(Number(expressionArray[i + 1]));
    //   } else (!validCharacters.test(expression)) {
    //     throw new Error("Invalid characters in the expression");
    //   }
