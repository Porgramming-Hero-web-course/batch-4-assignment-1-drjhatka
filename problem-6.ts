/*
Define an interface Profile with properties name, age, and email. Create a function updateProfile that 
accepts an object of type Profile and an object of type Partial representing the updates. 
The function should return the updated profile.
*/
{

interface Profile{
    name:string,
    age:number,
    email:string
}

const profile:Profile = {
    name:'john',
    age:20,
    email:'bla'
}
const updateProfile =(profile:Profile, partial:Partial<Profile> )=>{
     return { ...profile, ...partial };
}


console.log( updateProfile(profile,{age:70}))
}
