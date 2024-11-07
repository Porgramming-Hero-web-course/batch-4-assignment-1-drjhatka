
type Age = number | string

function getGFAge(age:Age) :Age{
    return typeof age ==='number'? `She is just ${age-10} years old! and Honest!`:"I was born few weeks ago!"
}

type hasAge = {age:number}
type hasAddress ={address: string}

type hasAgeAndAddress = hasAge & hasAddress

const obj:hasAgeAndAddress = {
    age:70,
    address:'DHK'
}