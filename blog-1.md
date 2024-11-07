# The significance of union and intersection types in Typescript


## Union Types
We want to write a function called getGFAge() that takes a parameter of either number or string type. 
if the parameter is string then GF doesn't like to reveal her age. Otherwise she is honest about her age.

In this scenario, we would write a function like this and call the function afterwards 

``` 
function getGFAge(age){
    if (age typeof ==='number'){
        return `She is just ${number-10} years old! and Honest!`
    }
    else if(age typeof ==='string'){
        return "I was born few weeks ago!"
    }
} 
    getGFAge(16) // returns `She is just 6 years old! and Honest!`
    getGFAge("Won't Say") // returns "I was born few weeks ago!"
```

we could simplify this function in typescript with union types. we can define a type that 
takes either a string or number input such as 

``` type Age = number| string ```
and use it in our function as such...
   ``` function getGFAge(age:Age)```

since we annotated the type of parameter our function can accept, we have limited the type of arguments that can be supplied by the user meaning our function will not accept any value other than a string or a number.

We can further simplify the function like this ...

``` 
function getGFAge(age:Age) :Age{
    return typeof age ==='number'? `She is just ${age-10} years old! and Honest!`:"I was born few weeks ago!"
} 
```

our code becomes cleaner and more efficient with type union annotation. 

## Intersection Types

lets say we are retrieving an object from the database. The object must have a minimum of two properties such as
age of type number and address of type string. In this case we can use intersection of types. For example...

```
    type hasAge = {age:number}
    type hasAddress ={address: string}

    type hasAgeAndAddress = hasAge & hasAddress

    const obj1:hasAgeAndAddress = {
        age:70,
        address:'DHK'
    }
```
Our  obj1 object must have a both age and address property otherwise the object is not valid
Thats why we have created a type called hasAgeAndAddress which intersects between hasAge and hasAddress type. This means all
the property of both hasAge and hasAddress must be present in the object instance we just created.

## The Difference:
In plain english, we could infer that union types works more like a logical OR operator where
you need to have property name or type of at least one type whereas in intersection types you need to define all the variable types of both types. 

Thanks for your time & patience.
