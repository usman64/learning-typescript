///////////// 1- Intro
/*
    - Opensource programming language by Microsoft
    - Typed superset of Javascript
    - Compiles down to plain javascript
    - Why Typescript?
        - Relation to Javascript as compared to Dart and coffeescript
        - (Optional) Static typing and type inference, Hence less error prone code
        - IDE support
        - Rapid growth and use (Main programming language for Angular 2)
*/
export {};
let message = "Hello world";
console.log(message);

/////////// 2- VARIABLE DECLARATION & VARIABLE TYPES
/*
    - In JS it does not throw an error for variable redeclarations
*/

let isOpen: boolean = true;
let total: number = 0;
let name: string = "usman";

//static type checking
// name = true

let sentence: string = `My name is ${name}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

//Note: you can assign null/undefined to other types
let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 30];

//arrays of mixed types => tuple
//Note: here the number of values and thier order is fixed
let person1: [string, number] = ["chris", 22];

//type => enum
enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

//type => any
let randomValueFromAPI: any = 10;
randomValueFromAPI = true;
randomValueFromAPI = "Usman";

// here typescript won't give any error using the "any" type variable to access properties
let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

// To cater the above problem typescript introduced
//type -> unknown
let myVariable2: unknown = 10;
//error
// myVariable2()

//error
// myVariable2.toUpperCase()

//   (myVariable2 as string)
// .toUpperCase();

//Use type assertions to resolve this

//////////User Defined type guard
//This function checks if the object has a name property or not
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable2)) {
  console.log(myVariable2.name);
}

///////////Using plain JS in TS
let a;
a = 10;
a = true;

//Type inference
let b = 20;
//error because TS do type inferenece if ONLY IF a variable is both declared and intialized
// b =true

////////////MultiTypes
//Union Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

//But, why not use "any" type?
// IntelliSense support
// Specified restrictions on union type
let anyType: any;
anyType = 20;
anyType = true;

////////////3-Functions

//JS
function addJS(num1, num2) {
  return num1 + num2;
}

//TS
function addTS(num1: number, num2: number): number {
  return num1 + num2;
}

addTS(5, 10);
//error
// addTS(5,'10')

///Optional Parameters in TS
//If in JS we calles a func without parameters it would infer undefined values, but TS would throw an error
//Add ? in TS if you want optional params
//NOTE: Optional params are ALWAYS at the end
function addOptionalParams(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

addOptionalParams(5, 10);
addOptionalParams(5); //other param undefined

///Default Parametes in TS
//If 2nd arg isn't passed then default value used
function addDefaultParams(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

//@@@@@@@@@@@@@@@@ 4- Interface
//Example with objects
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Usman",
  lastName: "Tq",
};

fullName(p);

//What if you have an address object with several fields and you use that with many funcs. Hence, code would start to look clumsy
//Thus =>>> Interfaces (can be used with Forms)
interface Person {
  firstName: string;
  lastName?: string; //lastName optional
}

function fullNameWithInterface(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p2 = {
  firstName: "Usman",
  // lastName: "Tq",
};
fullNameWithInterface(p2);

//@@@@@@@@@@@@5-Classes and Access Modifiers
//In JS there was no classes and there was prototypal inheritence
