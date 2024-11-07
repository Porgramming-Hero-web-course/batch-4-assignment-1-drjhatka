/*
Write a generic function getProperty that takes an object 
and a property name as arguments and returns the property value. 
Add a constraint to ensure the property name exists on the object.
*/

const getProperty = <T,K extends keyof T>(obj:T, key:K ):T[K]=>{
    return obj[key]
}

type UserPrototype = {
    name:string,
    userId:number,
    email:string
}

const user1 :UserPrototype = {
    name:'John',
    userId:5555,
    email:'john_dev@gmail.com'
}
console.log(getProperty(user1,'name'))