"use strict";
// Simple Types :
let bool = false;
let num = 7;
let fullName = 'Elazzouzi Hassan';
let list = [1, 2, 3];
// Special Types :
// type any :
let notSure = "I am not sure about the type yet !";
notSure = false;
// type unknown : unknown is a similar, but safer alternative to any.
let unk = 7;
unk = "Text"; // No error
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
unk = true;
// Type never : never effectively throws an error whenever it is defined.
// ! - let neverVar: never = true; 
// Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.
// Type undefined & null : undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let undefinedVar = undefined;
let nullVar = null;
// Arrays :
const colors = [];
colors.push('green'); // No error
// colors.push(1) -> Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// !-Readonly:
const names = ["Hassan"];
//names.push("Jack"); -> Error: Property 'push' does not exist on type 'readonly string[]'.
// Tuples : A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
let myTuple;
myTuple = [1, 'Hassan', true];
// error example :
// let anotherTupe:[number, boolean, string] = ['text', 1, false];
// the right form :
let anotherTupe = [1, false, 'text'];
// readonly tuples :
let readOnlyTuple = [1, 'text'];
// readOnlyTuple.push('1') -> error : Property 'push' does not exist on type 'readonly [number, string]'
// Object Types :
const user = {
    id: 1,
    name: 'Hassan',
    age: 26,
};
console.log(user.name);
// optional property :
const user_1 = {
    id: 1,
    name: 'Wizardy',
};
// Functions :
function getTotal(arg_1, arg_2) {
    return arg_1 + arg_2;
}
// with arrow function :
// const getTotal = (arg_1:number, arg_2:number): number => arg_1 + arg_2;
let total = getTotal(2, 6);
