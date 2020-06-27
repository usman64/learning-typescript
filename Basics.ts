///////////// 1- Intro
/*
    - Opensource programming language by Microsoft
    - Typed superset of Javascript - builds upon javascript with added features
    - Compiles down to plain javascript
    - You cannot run typescript directly in the browser
    - Why Typescript?
        - Relation to Javascript as compared to Dart and coffeescript
        - (Optional) Static typing and type inference, Hence less error prone code
        - More advanced error checking at compile time
        - adds non-js features like interfaces or generics
        - IDE support
        - Rapid growth and use (Main programming language for Angular 2)
*/
export {};
let message = "Hello world";
console.log(message);

//JS
function addme(num1, num2) {
  return num1 + num2;
}

addme("2", "3"); //logical runtime error

//This can be checked with typescript at compile time
function addme2(num1: number, num2: number): number {
  return num1 + num2;
}

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
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

// To cater the above problem typescript introduced
//type -> unknown
let myVariable2: unknown = 10;
//error
myVariable2();

//error
myVariable2.toUpperCase();

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

// error because TS do type inferenece if ONLY IF a variable is both declared and intialized
b = true; //error

////////////MultiTypes
//Union Types
let multiType: number | boolean;
multiType = 20;
multiType = true;

/*
  But, why not use "any" type?
  IntelliSense support
  Specified restrictions on union type
*/
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

addTS(5, "10"); //error

/*
  Optional Parameters in TS
  If in JS we calles a func without parameters it would infer undefined values, but TS would throw an error
  Add ? in TS if you want optional params
  NOTE: Optional params are ALWAYS at the end
*/
function addOptionalParams(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

addOptionalParams(5, 10);
addOptionalParams(5); //other param undefined

/*
  Default Parametes in TS
  If 2nd arg isn't passed then default value used
*/
function addDefaultParams(num1: number, num2: number = 10): number {
  if (num2) return num1 + num2;
  else return num1;
}

/*
  @@@@@@@@@@@@@@@@ 4- Interface
  Example with objects
*/
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Usman",
  lastName: "Tq",
};

fullName(p);

/*
  What if you have an address object with several fields and you use that with many funcs. Hence, code would start to look clumsy
  Thus =>>> Interfaces (can be used with Forms)
*/
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

/*
  @@@@@@@@@@@@5-Classes and Access Modifiers
  
  - In JS there was no classes and there was prototypal inheritence 
  - Access Modifiers: Private/public/protected
  - By default all class properties are public
  - private: only accessible inside base class
  - public: accessible inside and outside class
  - protected: accessible inside base and derived class but not outside the class
*/

class Employee {
  public employeeName: string;
  private employeeCode: string;

  constructor(name: string) {
    this.employeeName = name;
    this.employeeCode = "123456";
  }

  greet() {
    console.log("Good Morning", name);
  }
}

let emp1 = new Employee("Usman");
emp1.greet();
emp1.employeeCode; //error

/* inheritace now possible with TS */
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName); //calling base class constructor via super
  }
  delegateWork() {
    console.log("Manager delegating tasks...");
  }
}

let m1 = new Manager("Bain");
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
