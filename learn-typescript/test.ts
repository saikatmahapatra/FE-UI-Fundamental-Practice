//TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.
let username: string;
username = 'Saikat';


export interface User {
    id: number;
    username: string;
}
export class Test implements User {
    id: number = 123;
    username: string = '';
}

let testInstance = new Test();
testInstance.username = 'Hello, TypeScript!';
console.log(testInstance.username);

// composing types (union types) - a variable that can hold more than one type of value
let temprature: number | string;
temprature = 25;
temprature = "25 degrees Celsius";

// cutom type
type windowState = 'open' | 'closed' | 'minimized';
let currentState: windowState;
currentState = 'open';
currentState = 'closed';

// function with typed parameters and return type
function greetUser(user: User): string {
    return `Hello, ${user.username}!`;
}

console.log(greetUser(testInstance));