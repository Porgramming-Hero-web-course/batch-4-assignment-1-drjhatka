//Write a TypeScript function sumArray that takes an array of numbers 
//and returns the sum of all elements in the array

const sumArray = (numberArray:number[]):number=>{
    return numberArray.reduce((runningTotal,currentNumber)=>runningTotal+currentNumber)
}

console.log(sumArray([3,4,5,2,3]))