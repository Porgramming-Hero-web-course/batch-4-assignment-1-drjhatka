//Create a TypeScript function removeDuplicates that accepts an array of numbers and 
//returns a new array with duplicates removed. Preserve the original order of elements.
var removeDuplicates = function (numberArray) {
    return numberArray.filter(function (item, index, inputArray) { return inputArray.indexOf(item) == index; });
};
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
