"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
//TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
var username;
username = 'Saikat';
var Test = /** @class */ (function () {
    function Test() {
        this.id = 123;
        this.username = '';
    }
    return Test;
}());
exports.Test = Test;
var testInstance = new Test();
testInstance.username = 'Hello, TypeScript!';
console.log(testInstance.username);
// composing types (union types) - a variable that can hold more than one type of value
var temprature;
temprature = 25;
temprature = "25 degrees Celsius";
var currentState;
currentState = 'open';
currentState = 'closed';
// function with typed parameters and return type
function greetUser(user) {
    return "Hello, ".concat(user.username, "!");
}
console.log(greetUser(testInstance));
