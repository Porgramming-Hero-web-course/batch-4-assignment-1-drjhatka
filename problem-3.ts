/*
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). 
It should return the number of times the word appears in the sentence, case-insensitively.
*/
let counter:number =0;
const countWordOccurrences = (sentence:string, word:string):number=>{
    return sentence.toLowerCase().split(word).length-2
}

console.log(countWordOccurrences('This is a a repeated sentence','is'))