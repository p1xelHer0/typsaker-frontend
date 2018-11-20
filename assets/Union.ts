type Greetings = "hello" | "hi" | "hey" | "yo";

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

type Whatever =
  | "woop"
  | 3
  | 7
  | string
  | boolean
  | Array<number>
  | { name: string; age: number };

type WhateverT<T> =
  | "something"
  | T
  | Array<T>
  | { name: string; type: T }
  | Dice
  | Array<Greetings>;

const whatevs: WhateverT<string> = ["this", "is", "text"];
