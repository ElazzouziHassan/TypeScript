// Simple Types :
let bool: boolean = false;
let num: number = 7
let fullName: string = 'Elazzouzi Hassan'
let list: Array<number> = [1, 2, 3]

// Special Types :

  // type any :
  let notSure: any = "I am not sure about the type yet !";
  notSure = false;

  // type unknown : unknown is a similar, but safer alternative to any.
  let unk: unknown = 7;
  unk = "Text" // No error

  // unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
  // Casting is when we use the "as" keyword to say property or variable is of the casted type.
  unk = true as boolean;

// Type never : never effectively throws an error whenever it is defined.
// ! - let neverVar: never = true; 
// Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.

// Type undefined & null : undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let undefinedVar: undefined = undefined;
let nullVar: null = null;

// Arrays :
const colors: string[] = [];
colors.push('green') // No error
// colors.push(1) -> Error: Argument of type 'number' is not assignable to parameter of type 'string'.

  // !-Readonly:
  const names: readonly string[] = ["Hassan"];
  //names.push("Jack"); -> Error: Property 'push' does not exist on type 'readonly string[]'.


// Tuples : A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
let myTuple: [number, string, boolean];
myTuple = [1, 'Hassan', true];



