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
            return add(firstNum, secondNum)                  
                                                  
        case '-':
            return subtract(firstNum, secondNum);                    
            
        case '*':
            return multiply(firstNum, secondNum);
            
        case '/':
            return divide(firstNum, secondNum);
            
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



const results = document.querySelector("#results")

//Numbers
const numberOneBtn = document.querySelector("#one");
numberOneBtn.addEventListener("click", function (){
    addNumToOperation("1");
});

const numberTwoBtn = document.querySelector("#two");
numberTwoBtn.addEventListener("click", function (){
    addNumToOperation("2");
});

const numberThreeBtn = document.querySelector("#three");
numberThreeBtn.addEventListener("click", function (){
    addNumToOperation("3");
});

const numberFourBtn = document.querySelector("#four");
numberFourBtn.addEventListener("click", function (){
    addNumToOperation("4");
});

const numberFiveBtn = document.querySelector("#five");
numberFiveBtn.addEventListener("click", function (){
    addNumToOperation("5");
});

const numberSixBtn = document.querySelector("#six");
numberSixBtn.addEventListener("click", function (){
    addNumToOperation("6");
});

const numberSevenBtn = document.querySelector("#seven");
numberSevenBtn.addEventListener("click", function (){
    addNumToOperation("7");
});

const numberEightBtn = document.querySelector("#eight");
numberEightBtn.addEventListener("click", function (){
    addNumToOperation("8");
});

const numberNineBtn = document.querySelector("#nine");
numberNineBtn.addEventListener("click", function (){
    addNumToOperation("9");
});

const numberZeroBtn = document.querySelector("#zero");
numberZeroBtn.addEventListener("click", function (){
    addNumToOperation("0");
});

//Operators

const operatorPlusBtn = document.querySelector("#plus");
operatorPlusBtn.addEventListener("click", function (){
    addOperatorToOperation("+");
});

const operatorMinusBtn = document.querySelector("#minus");
operatorMinusBtn.addEventListener("click", function (){
    addOperatorToOperation("-");
});

const operatorMultiplyBtn = document.querySelector("#multiply");
operatorMultiplyBtn.addEventListener("click", function (){
    addOperatorToOperation("*");
});

const operatorDivideBtn = document.querySelector("#divide");
operatorDivideBtn.addEventListener("click", function (){
    addOperatorToOperation("/");
});

const operatorEqualBtn = document.querySelector("#equal");
operatorEqualBtn.addEventListener("click", function (){
    results.textContent = operate(+storedOperation.firstNum, storedOperation.operator, +storedOperation.secondNum);
    storedOperation.firstNum = operate(+storedOperation.firstNum, storedOperation.operator, +storedOperation.secondNum);
    storedOperation.operator = "";
    storedOperation.secondNum = "";
});

//Execution of the operation

const addNumToOperation = function(number) {
    if(storedOperation.operator === ""){
        storedOperation.firstNum += number;
    } else {
        storedOperation.secondNum += number;
    }   
}

const addOperatorToOperation = function(operator){
    storedOperation.operator = operator;
}

let storedOperation = {
    firstNum: "",
    operator: "",
    secondNum: "",
}

