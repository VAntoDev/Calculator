const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
};

const multiply = function(firstNum, secondNum) {
    return firstNum * secondNum;
};

const divide = function(firstNum, secondNum) {
    return firstNum / secondNum;
};

function operate(operator, firstNum, secondNum){

    switch(operator) {                                
        case '+':                                 
            add(firstNum, secondNum)                  
            break;                                      
        case '-':
            subtract(firstNum, secondNum);                    
            break;
        case '*':
            multiply(firstNum, secondNum);
            break;
        case '/':
            divide(firstNum, secondNum);
            break;
        default:
            break;
    }

}


//-Sum more than 2 numbers together:
const sum = function(array) {
  let totalSum = 0;
  for(i = 0; i < array.length; i++){
    totalSum = totalSum + array[i];
  };
  return totalSum;
}


const multiplyMoreNum = function(array) {
  let totalMultiply = 1;
  for(i = 0; i < array.length; i++){
    totalMultiply = totalMultiply * array[i];
  };
  return totalMultiply;
};

sum()