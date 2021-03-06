"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello world";
console.log(message);
//JS
function addme(num1, num2) {
    return num1 + num2;
}
addme("2", "3"); //logical runtime error
//This can be checked with typescript at compile time
function addme2(num1, num2) {
    return num1 + num2;
}
/////////// 2- VARIABLE DECLARATION & VARIABLE TYPES
/*
    - In JS it does not throw an error for variable redeclarations
*/
var isOpen = true;
var total = 0;
var name = "usman";
//static type checking
// name = true
var sentence = "My name is " + name;
console.log(sentence);
var n = null;
var u = undefined;
//Note: you can assign null/undefined to other types
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 30];
//arrays of mixed types => tuple
//Note: here the number of values and thier order is fixed
var person1 = ["chris", 22];
//type => enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//type => any
var randomValueFromAPI = 10;
randomValueFromAPI = true;
randomValueFromAPI = "Usman";
// here typescript won't give any error using the "any" type variable to access properties
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
// To cater the above problem typescript introduced
//type -> unknown
var myVariable2 = 10;
//error
// myVariable2()
//error
// myVariable2.toUpperCase()
//   (myVariable2 as string)
// .toUpperCase();
//Use type assertions to resolve this
//////////User Defined type guard
//This function checks if the object has a name property or not
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable2)) {
    console.log(myVariable2.name);
}
///////////Using plain JS in TS
var a;
a = 10;
a = true;
//Type inference
var b = 20;
//error because TS do type inferenece if ONLY IF a variable is both declared and intialized
// b =true
////////////MultiTypes
//Union Types
var multiType;
multiType = 20;
multiType = true;
//But, why not use "any" type?
// IntelliSense support
// Specified restrictions on union type
var anyType;
anyType = 20;
anyType = true;
////////////3-Functions
//JS
function addJS(num1, num2) {
    return num1 + num2;
}
//TS
function addTS(num1, num2) {
    return num1 + num2;
}
addTS(5, 10);
//error
// addTS(5,'10')
///Optional Parameters in TS
//If in JS we calles a func without parameters it would infer undefined values, but TS would throw an error
//Add ? in TS if you want optional params
//NOTE: Optional params are ALWAYS at the end
function addOptionalParams(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
addOptionalParams(5, 10);
addOptionalParams(5); //other param undefined
///Default Parametes in TS
//If 2nd arg isn't passed then default value used
function addDefaultParams(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
//@@@@@@@@@@@@@@@@ 4- Interface
//Example with objects
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Usman",
    lastName: "Tq"
};
fullName(p);
function fullNameWithInterface(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: "Usman"
};
fullNameWithInterface(p2);
//@@@@@@@@@@@@5-Classes and Access Modifiers
//In JS there was no classes and there was prototypal inheritence
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
        this.employeeCode = "123456";
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning", name);
    };
    return Employee;
}());
var emp1 = new Employee("Usman");
emp1.greet();
emp1.employeeCode; //error
//inheritace now possible with TS
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks...");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bain");
console.log(m1.employeeName);
m1.greet();
m1.delegateWork();
// Access Modifiers: Private/public/protected
// By default all class properties are public
// private: only accessible inside base class
// public: accessible inside and outside class
// protected: accessible inside base and derived class but not outside the class
