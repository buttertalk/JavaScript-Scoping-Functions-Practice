
//Create a function getFirstValue that will return the first element of an array.
const myArr = ["carmen", 1, 3]

function getFirstValue(firstIndex) {
    return firstIndex[0];
}
console.log(getFirstValue(myArr));

//Write a function convertMinsToSecs() that takes an integer minutes and converts it into seconds.
function convertMinsToSecs(minutes){
    return minutes * 60;
}
console.log(convertMinToSecs(5));

//second method to write a function that works for this.
const convertMinToSecs = (minutes)=>{
    return minutes * 60;
}
    console.log(convertMinToSecs(10));
    
//Write a function that returns true or false if less than 100.
const lessThan100 = (num1, num2) => {
    const sum = num1 + num2;
    if(sum < 100){
        return true;
    } else return false;
}
    console.log(lessThan100(45, 100))

//second way to solve this
function lessThan100(num1, num2){
    let sum = num1 + num2;
    if (sum , 100){
    } else {
        return false;
    }
}
console.log(lessThan100(40, 35));

//yet another way
function lessThan100(num1, num2){
    let sum = num1 + num2;
    return num1 + num2 < 100;
}
console.log(lessThan100 (3, 35));

//ternary example 
function lessThan100(num1, num2){
    let sum = num1 + num2;
    return sum < 100? true : false;
}
console.log(lessThan100(40, 35));