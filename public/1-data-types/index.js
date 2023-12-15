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
