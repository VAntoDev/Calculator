//Query selectors
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

    if(storedOperation.firstNum === "" || storedOperation.operator === "" || storedOperation.secondNum === ""){

    } else {
        execOperation()
    }

});

const clearBtn = document.querySelector("#CE");
clearBtn.addEventListener("click", function (){
    clearOperation();
    displayResults();
})

const dotBtn = document.querySelector("#dot");
dotBtn.addEventListener("click", function (){
    addDotToNumber();
})

//Execution of the operation

let storedOperation = {
    firstNum: "",
    operator: "",
    secondNum: "",
    
}

let i = 0;

let dotIsPresent = 0;

const add = function(firstNum, secondNum) {
    return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
    return firstNum - secondNum;
};

const multiply = function(firstNum, secondNum) {
    //return Math.round(firstNum * secondNum * 100) / 100;
    return firstNum * secondNum;
};

const divide = function(firstNum, secondNum) {
    //return Math.round(firstNum / secondNum * 100) / 100;
    return firstNum / secondNum;
};

function operate(firstNum, operator, secondNum){
    if(firstNum === 0 && secondNum === 0){
        return "Lmao no";
    } else {
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

}

const addNumToOperation = function(number) {  
    if(storedOperation.operator === ""){
        if(i != 0){
            storedOperation.firstNum = "";
            displayResults();
            i = 0;
        }
        storedOperation.firstNum += number;
        displayResults();
    } else {
        storedOperation.secondNum += number;
        displayResults();
    }   

}

const addOperatorToOperation = function(operator){
    if (storedOperation.operator != "" && storedOperation.secondNum != ""){
        execOperation();
        storedOperation.operator = "";
    }
    if (storedOperation.firstNum === ""){
        return
    }
    storedOperation.operator = operator;
    displayResults();
}

function execOperation(){
    storedOperation.firstNum = Math.round(operate(+storedOperation.firstNum, storedOperation.operator, +storedOperation.secondNum) * 100 ) / 100;
    storedOperation.operator = "";
    storedOperation.secondNum = "";
    i = 1;
    displayResults();
    if(storedOperation.firstNum === "Lmao no"){
        storedOperation.firstNum = "";
    }
}

function displayResults(){
    results.textContent = `${storedOperation.firstNum} ${storedOperation.operator} ${storedOperation.secondNum}`
}

function clearOperation(){
    storedOperation.firstNum = "";
    storedOperation.operator = "";
    storedOperation.secondNum = ""; 
}

function addDotToNumber(){
    
    if(storedOperation.operator === ""){

        if(!storedOperation.firstNum.includes(".")){      
            storedOperation.firstNum += ".";
            displayResults();
        }

    } else {
        
        if(!storedOperation.secondNum.includes(".")){
            storedOperation.secondNum += ".";
            displayResults();
            }
        }  
}