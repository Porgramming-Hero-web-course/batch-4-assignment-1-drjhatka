/*
Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). 
It should return the number of times the word appears in the sentence, case-insensitively.
*/
const countWordOccurrences = (sentence:string, word:string):number=>{
    return (sentence.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ').filter(wrd=>wrd==word).length)
}
console.log( countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
