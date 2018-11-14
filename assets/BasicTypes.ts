// Boolean
const isBool: boolean = true;

// Number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String
const greeting: string = "Hello";

const firstName: string = `Pontus`;
const sentence: string = `${greeting}, how are you ${firstName}?`;
const oldSentence: string = greeting + ", how are you" + firstName + "?";

// Array
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// Tuple
let tuple: [number, boolean];
tuple = [3, true];
tuple = [3, "Yo"];
