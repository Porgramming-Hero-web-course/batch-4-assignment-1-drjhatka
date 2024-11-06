//Write a TypeScript function sumArray that takes an array of numbers 
//and returns the sum of all elements in the array

const sumArray = (numberArray:number[])=>{
    return numberArray.reduce((runningTotal,currentNumber)=>runningTotal+currentNumber)
}