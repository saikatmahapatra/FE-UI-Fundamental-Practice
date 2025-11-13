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

// Generics: Generics provide a variable to Type. This allows users to consume these types with their own types. It helps to create reusable components.

let stringArray: Array<string> = ['A', 'B', 'C'];
let numberArray: Array<number> = [1, 2, 3];

// We can declare own type of generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}
declare const bp: Backpack<string>;
bp.add('my bag');
console.log(bp.get()); // returns a string

declare const newBackpack:Backpack<Array<string>>;
newBackpack.add(['item1', 'item2']);
console.log(newBackpack.get()); // returns an array of strings


