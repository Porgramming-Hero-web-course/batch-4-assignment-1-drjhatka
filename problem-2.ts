//Create a TypeScript function removeDuplicates that accepts an array of numbers and 
//returns a new array with duplicates removed. Preserve the original order of elements.

const removeDuplicates= (numberArray:number[]):number[]=>{
    return numberArray.filter((item, index, inputArray)=>inputArray.indexOf(item)==index)
}
console.log(removeDuplicates([2,3,4,5,5,5,5,6,7,6]))