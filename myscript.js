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

function operate(firstNum, operator, secondNum){

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


let currentOperation = 0;

const storeOperation = function(number) {
    currentOperation = number + currentOperation;
    results.textContent = currentOperation;
}

const results = document.querySelector("#results")

const numberOneBtn = document.querySelector("#one");
numberOneBtn.addEventListener("click", function (){
    storeOperation(1);
});

const numberTwoBtn = document.querySelector("#two");
numberTwoBtn.addEventListener("click", function (){
    storeOperation(2);
});

const numberThreeBtn = document.querySelector("#three");
numberThreeBtn.addEventListener("click", function (){
    storeOperation(3);
});

const numberFourBtn = document.querySelector("#four");
numberFourBtn.addEventListener("click", function (){
    storeOperation(4);
});

const numberFiveBtn = document.querySelector("#five");
numberFiveBtn.addEventListener("click", function (){
    storeOperation(5);
});

const numberSixBtn = document.querySelector("#six");
numberSixBtn.addEventListener("click", function (){
    storeOperation(6);
});

const numberSevenBtn = document.querySelector("#seven");
numberSevenBtn.addEventListener("click", function (){
    storeOperation(7);
});

const numberEightBtn = document.querySelector("#eight");
numberEightBtn.addEventListener("click", function (){
    storeOperation(8);
});

const numberNineBtn = document.querySelector("#nine");
numberNineBtn.addEventListener("click", function (){
    storeOperation(9);
});

const numberZeroBtn = document.querySelector("#zero");
numberZeroBtn.addEventListener("click", function (){
    storeOperation(0);
});

